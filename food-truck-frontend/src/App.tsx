import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { MenuItemComponent } from './components/MenuItem';
import { MenuItem } from './interfaces/MenuItem';
import { getMenuItems } from './api/menu-api';

function App() {
  //get data from an api
  const menuItems: Array<MenuItem> = [
    {title: 'Pizza', description: 'Margirita pizza from our stone oven, made with fresh tomato sauce mozerella cheese and basil', price: 3.99, allergens: ["gluten", "dairy", "tomato sauce"]},
    {title: 'Peporoni Calzone', description: 'Garlic crusted calzone from our stone oven, made with fresh tomato sauce mozerella cheese and basil', price: 6.99, allergens: ["gluten", "dairy", "tomato sauce", "garlic"]}
  ]
  return (
    <div className="App">
      <header className="App-header">
        {menuItems.map(mi => 
          <MenuItemComponent 
            onClick={() => {console.log()}} 
            {...mi}
          />
        )}
        
      </header>
    </div>
  );
}

export default App;
