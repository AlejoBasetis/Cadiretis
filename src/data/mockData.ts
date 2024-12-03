import { TeamMember, Tag } from '../types';

// Initial tags with predefined colors
export const initialTags: Tag[] = [
  { id: '1', name: 'Developer', color: '#3B82F6' },
  { id: '2', name: 'Designer', color: '#EC4899' },
  { id: '3', name: 'Manager', color: '#10B981' },
  { id: '4', name: 'Remote', color: '#6366F1' },
  { id: '5', name: 'Office', color: '#F59E0B' }
];

// Mock employee data from Odoo
export const mockEmployees: TeamMember[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@company.com',
    tags: [initialTags[0], initialTags[4]], // Developer, Office
    odooId: 1001,
    role: 'Senior Developer',
    department: 'Engineering'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@company.com',
    tags: [initialTags[1], initialTags[3]], // Designer, Remote
    odooId: 1002,
    role: 'UI/UX Designer',
    department: 'Design'
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike.johnson@company.com',
    tags: [initialTags[2], initialTags[4]], // Manager, Office
    odooId: 1003,
    role: 'Project Manager',
    department: 'Management'
  },
  {
    id: '4',
    name: 'Sarah Wilson',
    email: 'sarah.wilson@company.com',
    tags: [initialTags[0], initialTags[3]], // Developer, Remote
    odooId: 1004,
    role: 'Frontend Developer',
    department: 'Engineering'
  }
];