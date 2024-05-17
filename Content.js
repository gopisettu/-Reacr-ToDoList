import DeleteIcon from '@mui/icons-material/Delete';
import todoImage from './todo2.jpg'; // Import the image file

const Content = ({ items, setItems }) => {

    const handleChange = (id) => {
        const updatedItems = items.map(item => {
            if (item.id === id) {
                return { ...item, checked: !item.checked };
            }
            return item;
        });
        setItems(updatedItems);
        localStorage.setItem("todo_list", JSON.stringify(updatedItems));
    };

    const handleDelete = (id) => {
        const updatedItems = items.filter(item => {
            if (item.id === id && item.checked === true) {
                return false;
            }
            return true;
        });
        setItems(updatedItems);
        localStorage.setItem("todo_list", JSON.stringify(updatedItems));
    };

    return (
        <div className="content container mt-3" style={{ backgroundImage: `url(${todoImage})`, backgroundSize: 'cover' }}>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <ul className="list-group list-group-flush">
                            {items.length ? (items.map(item => (
                                <li key={item.id} className="list-group-item">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            checked={item.checked}
                                            onChange={() => handleChange(item.id)}
                                        />
                                        <label className="form-check-label" style={item.checked ? { textDecoration: 'line-through' } : null} htmlFor={item.id}>{item.item}</label>
                                    </div>
                                    <i onClick={() => handleDelete(item.id)}><DeleteIcon /></i>
                                </li>
                            ))) : (
                                <p>List is Empty</p>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
