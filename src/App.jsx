import { useEffect } from "react";
import Header from "./Header/Header";
import TaskSection from "./TaskList/TaskSection";


function App() {


// APPLY  COLOR TO THE ENTIRE WEBSITE
// THERE IS PROBABLY A BETTER SOLUTION 😃
  useEffect(() => { document.body.style.backgroundColor = '#C7F5FF' }, [])

  return (
    <>
      <Header />
      <TaskSection />
    </>
  );
}

export default App;
