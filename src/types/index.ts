export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'team_manager' | 'admin';
  teamId?: string;
}

export interface Space {
  id: string;
  name: string;
  type: 'desk' | 'room' | 'meeting_room';
  capacity: number;
  floor: number;
  building: string;
  attributes: Record<string, any>;
  status: 'available' | 'reserved' | 'maintenance';
}

export interface Reservation {
  id: string;
  spaceId: string;
  userId: string;
  startDate: Date;
  endDate: Date;
  isRecurring: boolean;
  recurringPattern?: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  tags: Tag[];
  odooId: number;
  role: string;
  department: string;
}

export interface Tag {
  id: string;
  name: string;
  color: string;
}