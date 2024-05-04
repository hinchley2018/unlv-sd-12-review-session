import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ProductCard } from './components/product-card';
import { Product } from './interfaces/product';

function App() {
  //assume we get a list of products from an api
  const products:Array<Product> = [
    {productId: "1", productName: "Dog Food", price: 3.55, quantityOrdered: 3},
    {productId: "2", productName: "Cat Food", price: 4.89, quantityOrdered: 2}
  ]
  return (
    <div className="App">
      <header className="App-header">
        {products.map(p => <ProductCard product={p}/>
        )}
      </header>
    </div>
  );
}

export default App;
