import express from 'express'; //created express application
import mysql from 'mysql2';
import cors from 'cors';

const app = express(); //express function

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'jaiAmbaBhavani1008??',
    database: 'mydb'
}); //connecting to db

app.use(express.json()); // this allows us to send any data to our database request
app.use(cors()); // to remove cors error

app.get('/', (req, res) => {
    res.json('hello world');
}); //how to reach our backend server

app.get('/books', (req, res) => {
    const q = 'select * from books'; //select query
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    }); //run query using db.query and first the q then it will give data or error
});

app.post('/books', (req, res) => {
    const q =
        'insert into books (`title`, `description`, `cover`, `price`) values (?)'; //have to write inside backtict don't know why and need pass ? inside values for better security
    const values = [
        req.body.title,
        req.body.description,
        req.body.cover,
        req.body.price
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.delete('/books/:id', (req, res) => {
    const bookId = req.params.id;
    const q = 'delete from books where id = ?'; //write ? not value
    db.query(q, [bookId], (err, data) => {
        if (err) return res.json(err);
        return res.json('book has been deleted successfully.');
    });
});

app.put('/books/:id', (req, res) => {
    const bookId = req.params.id;
    const q =
        'UPDATE books SET `title`= ?, `description`= ?, `cover`= ?, `price`= ? WHERE id = ?';

    const values = [
        req.body.title,
        req.body.description,
        req.body.cover,
        req.body.price
    ];
    db.query(q, [...values, bookId], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.listen(8800, () => {
    //listen to port
    console.log('connected to backend');
});
