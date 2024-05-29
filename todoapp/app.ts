import { Todointerface } from "./interfaces/todo_interface";

const baseurl = "http://localhost:3000";





export const getTodos = async (): Promise<Todointerface[]> => {
   try {
     const response = await fetch(`${baseurl}/`);
    console.log(response+"jbjb");
    const data = await response.json();
    console.log(data+"hh");
    return data;
   }
    catch (error) {
        console.error("Error fetching todos:", error);
        return [];
    }
    }
export const addTodo = async (todo: Todointerface): Promise<Todointerface> => {
    const response = await fetch(`${baseurl}/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
    });

    const data = await response.json();
    console.log(data);
    return data;
    }

export const deleteTodo = async (id: number): Promise<void> => {
    await fetch(`${baseurl}/delete/${id}`, {
        method: "POST",
    });
    }
