import React, { useState, useEffect } from 'react';
import './index.css';
import AddItems from './AddItems';
import ReactDOM from 'react-dom';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import SearchItems  from './SearchItems';

function Root() {
  
  

  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem('todolist');
    return storedItems ? JSON.parse(storedItems) : [
      { id: 1, checked: true, item: "Work Hard" },
      { id: 2, checked: true, item: "Work Smart" },
      { id: 3, checked: false, item: "Rest Hard" }
    ];
  });
  const [search, setSearch] = useState('');

  // Then in the JSX:
 





  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    localStorage.setItem('todolist', JSON.stringify(items));
  }, [items]);

  const handleAdd = (value) => {
    if (value.trim() !== '') {
      const newId = items.length > 0 ? items[items.length - 1].id + 1 : 1;
      const newItemObj = { id: newId, checked: false, item: value };
      setItems(prevItems => [...prevItems, newItemObj]);
    }
  };

  return (
    <>
      <Header />
      <AddItems newItem={newItem} setNewItem={setNewItem} handleAdd={handleAdd} search={search} setSearch={setSearch} />
      <SearchItems search={search} setSearch={setSearch} ></SearchItems>
      <Content items = {items.filter(item => item.item.toLowerCase().includes(search.toLowerCase()))}    setItems={setItems} />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);
