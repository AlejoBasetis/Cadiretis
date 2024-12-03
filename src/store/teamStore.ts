import { create } from 'zustand';
import { TeamMember, Tag } from '../types';
import { initialTags } from '../data/mockData';

interface TeamState {
  members: TeamMember[];
  tags: Tag[];
  setMembers: (members: TeamMember[]) => void;
  addMember: (member: TeamMember) => void;
  removeMember: (id: string) => void;
  updateMemberTags: (memberId: string, tags: Tag[]) => void;
  addTag: (tag: Tag) => void;
  updateTagColor: (tagId: string, color: string) => void;
}

export const useTeamStore = create<TeamState>((set) => ({
  members: [],
  tags: initialTags, // Initialize with predefined tags
  setMembers: (members) => set({ members }),
  addMember: (member) => set((state) => ({ 
    members: [...state.members, member] 
  })),
  removeMember: (id) => set((state) => ({ 
    members: state.members.filter(m => m.id !== id) 
  })),
  updateMemberTags: (memberId, tags) => set((state) => ({
    members: state.members.map(member =>
      member.id === memberId ? { ...member, tags } : member
    )
  })),
  addTag: (tag) => set((state) => ({ 
    tags: [...state.tags, tag] 
  })),
  updateTagColor: (tagId, color) => set((state) => ({
    tags: state.tags.map(tag =>
      tag.id === tagId ? { ...tag, color } : tag
    )
  }))
}));