import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Users, RefreshCw } from 'lucide-react';
import { MemberList } from '../components/teams/MemberList';
import { useTeamStore } from '../store/teamStore';
import { fetchOdooEmployees, syncWithOdoo } from '../services/odooService';

export default function Teams() {
  const { members, setMembers, removeMember } = useTeamStore();
  const [isSyncing, setIsSyncing] = useState(false);
  
  const { data: odooEmployees, isLoading, refetch } = useQuery({
    queryKey: ['odooEmployees'],
    queryFn: fetchOdooEmployees
  });

  useEffect(() => {
    if (odooEmployees) {
      setMembers(odooEmployees);
    }
  }, [odooEmployees, setMembers]);

  const handleSync = async () => {
    setIsSyncing(true);
    try {
      const result = await syncWithOdoo();
      if (result.success) {
        await refetch();
      }
    } catch (error) {
      console.error('Sync failed:', error);
    } finally {
      setIsSyncing(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Team Management</h1>
        <button
          onClick={handleSync}
          disabled={isSyncing}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RefreshCw className={`h-5 w-5 mr-2 ${isSyncing ? 'animate-spin' : ''}`} />
          Sync with Odoo
        </button>
      </div>

      <div className="mt-8">
        {isLoading ? (
          <div className="flex items-center justify-center h-32">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600" />
          </div>
        ) : members.length > 0 ? (
          <MemberList
            members={members}
            onRemoveMember={removeMember}
          />
        ) : (
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <Users className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No team members</h3>
            <p className="mt-1 text-sm text-gray-500">
              Sync with Odoo to import team members.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}