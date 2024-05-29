import AddTask from './components/AddTask';
import TodoList from './components/TodoList';
import { getTodos } from '@/app';


export default async function Home() {
  const data = await getTodos();
  const res = JSON.parse(JSON.stringify(data));
  console.log(data);
  return (
    
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <div className="text-center my-5 flex flex-col gap-4">
      <h1 className="text-4xl font-bold">Welcome to ToDo App</h1>
      <AddTask />
      <TodoList />

      </div>

    </main>
  );
}
