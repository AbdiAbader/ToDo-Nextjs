import express from 'express';
import { updateTodo, addTodo, deleteTodo, getTodos } from './connection';
import cors from 'cors';

const app = express();
const corsOptions = {
    origin: 'http://localhost:3009',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(cors());


app.use(express.json());


app.get('/', async (req, res) => {
    const todos = await getTodos();
    res.json(todos);

})

app.post('/add', async (req, res) => {
    const { todo } = req.body;
    await addTodo(todo);
    res.send("Todo added");
})
app.post('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await deleteTodo(parseInt(id));
    res.send("Todo deleted");
}
)
app.post('/update', async (req, res) => {
    const { id, todo } = req.body;
    await updateTodo(id, todo);
    res.send("Todo updated");
})

app.listen(3000, () => {
    console.log("Server running on port 3001");
}
);

