import AddTask from "./components/AddTask";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center my-8">
      <h1 className=" font-semibold text-[#fbfafaee] text-[20px]">TODO APP!</h1>
      <AddTask />
    </main>
  );
}
