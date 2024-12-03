import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { Tag as TagIcon, Plus } from 'lucide-react';
import { useTeamStore } from '../../store/teamStore';
import clsx from 'clsx';

interface TagSelectorProps {
  memberId: string;
}

export function TagSelector({ memberId }: TagSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const { tags, updateTagColor, updateMemberTags } = useTeamStore();
  const member = useTeamStore(state => state.members.find(m => m.id === memberId));

  const handleColorChange = (color: string) => {
    if (selectedTag) {
      updateTagColor(selectedTag, color);
    }
  };

  const toggleTag = (tag: string) => {
    if (!member) return;
    
    const currentTags = member.tags || [];
    const tagExists = currentTags.some(t => t.id === tag);
    
    if (tagExists) {
      updateMemberTags(memberId, currentTags.filter(t => t.id !== tag));
    } else {
      const tagToAdd = tags.find(t => t.id === tag);
      if (tagToAdd) {
        updateMemberTags(memberId, [...currentTags, tagToAdd]);
      }
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center space-x-2">
        {member?.tags?.map((tag) => (
          <span
            key={tag.id}
            className="inline-flex items-center px-2 py-1 rounded-full text-xs"
            style={{ backgroundColor: tag.color + '20', color: tag.color }}
          >
            {tag.name}
          </span>
        ))}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200"
        >
          <TagIcon className="h-4 w-4" />
          <span>Manage Tags</span>
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg p-4 z-10">
          <div className="space-y-2">
            {tags.map((tag) => (
              <div key={tag.id} className="flex items-center justify-between">
                <button
                  onClick={() => toggleTag(tag.id)}
                  className={clsx(
                    "flex items-center space-x-2 px-2 py-1 rounded w-full",
                    member?.tags?.some(t => t.id === tag.id)
                      ? "bg-blue-50"
                      : "hover:bg-gray-50"
                  )}
                >
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: tag.color }}
                  />
                  <span className="text-sm">{tag.name}</span>
                </button>
                <button
                  onClick={() => setSelectedTag(tag.id)}
                  className="ml-2 p-1 text-gray-400 hover:text-gray-600"
                >
                  <TagIcon className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>

          {selectedTag && (
            <div className="mt-4">
              <p className="text-sm text-gray-500 mb-2">Select tag color</p>
              <HexColorPicker
                color={tags.find(t => t.id === selectedTag)?.color}
                onChange={handleColorChange}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}