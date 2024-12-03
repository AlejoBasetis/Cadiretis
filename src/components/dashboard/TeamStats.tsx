import React from 'react';
import { useTeamStore } from '../../store/teamStore';

export function TeamStats() {
  const members = useTeamStore(state => state.members);
  
  // Calculate team statistics
  const teamStats = members.reduce((acc, member) => {
    // Count members by department
    acc.departments[member.department] = (acc.departments[member.department] || 0) + 1;
    // Count members by role
    acc.roles[member.role] = (acc.roles[member.role] || 0) + 1;
    return acc;
  }, {
    departments: {} as Record<string, number>,
    roles: {} as Record<string, number>
  });

  const totalTeams = Object.keys(teamStats.departments).length;
  const totalMembers = members.length;

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="bg-indigo-500 rounded-md p-3">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Total Teams
                </dt>
                <dd className="flex items-baseline">
                  <div className="text-2xl font-semibold text-gray-900">
                    {totalTeams}
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-5 py-3">
          <div className="text-sm">
            <div className="font-medium text-gray-700">
              Departments
            </div>
            {Object.entries(teamStats.departments).map(([dept, count]) => (
              <div key={dept} className="mt-1 flex justify-between text-gray-500">
                <span>{dept}</span>
                <span>{count} members</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="bg-indigo-500 rounded-md p-3">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Total Members
                </dt>
                <dd className="flex items-baseline">
                  <div className="text-2xl font-semibold text-gray-900">
                    {totalMembers}
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-5 py-3">
          <div className="text-sm">
            <div className="font-medium text-gray-700">
              Roles
            </div>
            {Object.entries(teamStats.roles).map(([role, count]) => (
              <div key={role} className="mt-1 flex justify-between text-gray-500">
                <span>{role}</span>
                <span>{count} members</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}