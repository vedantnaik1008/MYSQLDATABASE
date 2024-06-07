import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Books = () => {
    const [book, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const res = await axios.get('http://localhost:8800/books');
                console.log(res.data);
                setBooks(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchBooks();
    }, []);

    const handleDelete = async(id) => {
    try {
      await axios.delete(`http://localhost:8800/books/${id}`);
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  }
    return (
        <div>
            books
            <div>
                {book.length > 0 &&
                    book.map((item) => (
                        <div key={item.id}>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <p>image {item.cover}</p>
                            <span>{item.price}</span>
                            <button onClick={() => handleDelete(item.id)}>
                                Delete
                            </button>
                            <button>
                                <Link to={`/update/${item.id}`}>Update</Link>
                            </button>
                        </div>
                    ))}
            </div>
            <button>
                <Link to='/add'>Add</Link>
            </button>
        </div>
    );
};

export default Books;
