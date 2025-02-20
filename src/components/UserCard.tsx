import type React from "react";

interface UserCardProps {
  emoji: string;
  name: string;
  email: string;
}

const UserCard: React.FC<UserCardProps> = ({ emoji, name, email }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto">
      <div className="flex flex-col items-center space-y-4">
        <div className="text-4xl">{emoji}</div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-600">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
