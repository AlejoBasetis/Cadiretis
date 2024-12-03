import { TeamMember } from '../types';
import { mockEmployees } from '../data/mockData';

// Simulated Odoo API service
export async function fetchOdooEmployees(): Promise<TeamMember[]> {
  // Simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockEmployees);
    }, 800);
  });
}

export async function syncWithOdoo(): Promise<{ success: boolean; message: string }> {
  // Simulate sync operation with delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: 'Successfully synchronized with Odoo ERP'
      });
    }, 1500);
  });
}