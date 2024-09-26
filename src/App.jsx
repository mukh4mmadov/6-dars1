import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="grow">
        <TodoList />
      </main>
      <Footer />
    </>
  );
}
