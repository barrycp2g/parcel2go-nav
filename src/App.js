import React from 'react';
import NavigationSet from './components/NavigationSet';

function App() {
  return (
    <div className="p-4 space-y-16">
      <NavigationSet title="1. Existing Navigation – Logged Out" variant="existingLoggedOut" />
      <NavigationSet title="2. Existing Navigation – Logged In" variant="existingLoggedIn" />
      <NavigationSet title="3. New Navigation – Logged Out" variant="newLoggedOut" />
      <NavigationSet title="4. New Navigation – Logged In" variant="newLoggedIn" />
    </div>
  );
}

export default App;