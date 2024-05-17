import React from 'react';
import AddIcon from '@mui/icons-material/Add';



const AddItems = ({ newItem, setNewItem, handleAdd ,search,setSearch}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(newItem); // Invoke handleAdd function with the current newItem value
    setNewItem(''); // Clear newItem after submitting
  };

  

  return (
    <div className="container text-center">
      <form onSubmit={handleSubmit} className="add-items-form">
        <label htmlFor="addItem" className="add-items-label">Add Item</label>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          autoFocus
          id="addItem"
          className="add-items-input"
          placeholder="Add Item"
          required
        />
        <button type="submit" aria-label="Add Item" className="add-items-button">
          <AddIcon />
        </button>
        
      </form>
    </div>
  );
};

export default AddItems;
