// src/components/user/UserPreferences.tsx
import React, { useState } from 'react';

const UserPreferences: React.FC = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(false);

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
    // Logique pour mettre à jour cette préférence via une API
  };

  return (
    <div className="p-4 mt-4 bg-white shadow rounded-lg">
      <h3 className="text-lg font-medium mb-4">Préférences</h3>
      <div className="flex items-center justify-between">
        <span>Activer les notifications</span>
        <input
          type="checkbox"
          checked={notificationsEnabled}
          onChange={toggleNotifications}
          className="toggle-checkbox"
        />
      </div>
      {/* Ajoutez d'autres préférences ici */}
    </div>
  );
};

export default UserPreferences;
