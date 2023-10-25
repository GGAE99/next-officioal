import { revalidatePath } from "next/cache";
import fs from "fs/promises";

const todos: string[] = ["Learn React"];

export default async function Page() {
  const todos = await fs
    .readFile("public/todos.txt", "utf-8")
    .then((data) => data.split("\n"));

  async function addTodo(data: FormData) {
    "use server";

    const todo = ("\n" + data.get("todo")) as string;
    await fs.writeFile("public/todos.txt", todo, { flag: "a" });

    revalidatePath("/");
  }

  return (
    <main className="p-5">
      <h1 className="text-4xl font-bold mb-4">Todos</h1>
      <ul className="mb-4">
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <form action={addTodo}>
        <input
          type="text"
          name="todo"
          className="h-[48px] border-[1px] border-gray-40 rounded-[4px] px-[16px] outline-none placeholder:text-gray-60 placeholder:text-[14px]"
        />
        <button
          type="submit"
          className="bg-[#00CCAA] text-white rounded-[6px] px-4 py-3"
        >
          Add Todo
        </button>
      </form>
    </main>
  );
}