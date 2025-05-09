import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navData = {
  existingLoggedOut: {
    items: ['Business','Get a Quote','Services','Track a Parcel','Smart Send','Help','Log In / Register'],
    dropdowns: { /* fill based on screenshots */ }
  },
  existingLoggedIn: {
    items: ['Business','Get a Quote','Services','Track a Parcel','Smart Send','Help','My Account','Basket','Sign Out'],
    dropdowns: { /* fill based on screenshots */ }
  },
  newLoggedOut: {
    items: ['Smart Send','Get a Quote','Services','Track a Parcel','Help','Log In / Register'],
    dropdowns: { /* 'Frequent Senders' dropdown with columns */ }
  },
  newLoggedIn: {
    items: ['Smart Send','Get a Quote','Services','Track a Parcel','Help','My Account','Basket','Sign Out'],
    dropdowns: { /* fill based on screenshots */ }
  }
};

export default function NavigationSet({ title, variant }) {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = navData[variant];

  return (
    <div>
      <h2 className="text-lg font-bold">{title}</h2>
      <button
        className="mb-2 border px-2 py-1 text-sm"
        onClick={() => setIsMobile(!isMobile)}
      >
        Toggle Mobile/Desktop
      </button>
      {isMobile ? (
        <div className="border p-2">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
          {menuOpen && (
            <ul className="mt-2 space-y-2">
              {nav.items.map(item => <li key={item}>{item}</li>)}
            </ul>
          )}
        </div>
      ) : (
        <ul className="flex space-x-6 border-b p-2">
          {nav.items.map(item => <li key={item} className="hover:text-blue-600 cursor-pointer">{item}</li>)}
        </ul>
      )}
    </div>
  );
}