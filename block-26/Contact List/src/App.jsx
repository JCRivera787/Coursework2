import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';
import ContactList from './components/ContactList';

function App() {
  return (
    <div>
      <header>
        <h1>My Contact App</h1>
      </header>
      <main>
        {/* Render the ContactList component */}
        <ContactList />
      </main>
    </div>
  );
}

export default App;

