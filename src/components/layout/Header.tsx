import React from 'react';
import { Menu, Search, Bell } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <button className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                <Menu className="h-6 w-6" />
              </button>
              <h1 className="text-2xl font-bold text-indigo-600 ml-2">Cadiretis</h1>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <Search className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-shrink-0 ml-2">
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <Bell className="h-6 w-6" />
              </button>
            </div>
            <div className="ml-3">
              <div className="h-8 w-8 rounded-full bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}