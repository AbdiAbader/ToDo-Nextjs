import pool from "./db";

const getTodos = async () => {
    // SQL query to select all rows from the 'todos' table
    const query = "SELECT * FROM todos";
    
    try {
        // Execute the SQL query and wait for the response
        const response = await pool.query(query);

        // Extract the 'rows' property from the response, which contains the result rows
        const todos = response.rows;

        // Log the result to the console (for debugging)
        console.log(todos);
        const data = JSON.stringify(todos);
        console.log(data);
        return todos;
        
        
        // Return the result rows
    
    } catch (err) {
        // Catch any errors that occur during the query execution
        console.error(err);
        return []; // Return an empty array as a default value in case of error
    }
};


const addTodo = async (todo: string) => {
    const query = `INSERT INTO todos (todo) VALUES ('${todo}')`;
    console.log(todo)
    await pool
        .query(query)
        .then(() => console.log("Todo added"))
        .catch((err: any) => console.log(err));
}

const deleteTodo = async (id: number) => {
    const query = `DELETE FROM todos WHERE id = ${id}`;
    await pool
        .query(query)
        .then(() => console.log("Todo deleted"))
        .catch((err: any) => console.log(err));
}   

const updateTodo = async (id: number, todo: string) => {
    const query = `UPDATE todos SET todo = '${todo}' WHERE id = ${id}`;
    await pool
        .query(query)
        .then(() => console.log("Todo updated"))
        .catch((err: any) => console.log(err));
}

export { getTodos, addTodo, deleteTodo, updateTodo };

