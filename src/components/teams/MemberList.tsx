import React from 'react';
import { TeamMember } from '../../types';
import { UserCircle, X } from 'lucide-react';
import { TagSelector } from './TagSelector';

interface MemberListProps {
  members: TeamMember[];
  onRemoveMember: (id: string) => void;
}

export function MemberList({ members, onRemoveMember }: MemberListProps) {
  return (
    <div className="space-y-4">
      {members.map((member) => (
        <div
          key={member.id}
          className="bg-white rounded-lg shadow p-4 flex items-center justify-between"
        >
          <div className="flex items-center space-x-4">
            <UserCircle className="h-10 w-10 text-gray-400" />
            <div>
              <h3 className="font-medium text-gray-900">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.email}</p>
              <p className="text-sm text-gray-500">{member.department} - {member.role}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <TagSelector memberId={member.id} />
            <button
              onClick={() => onRemoveMember(member.id)}
              className="text-gray-400 hover:text-red-500"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}