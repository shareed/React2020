import React, { useState, useEffect } from "react";
export default function MovieList() {
    const [count, setCount] = useState(0);

    //useEffect will go through and run when you app is rendered
    useEffect(() => {
        console.log("Hello");
      });// no dependency array tell it to run constanly run

      useEffect(() => {
        console.log("Hey");
      }, []);// dependency array run once on initial render
      useEffect(() => {
          document.title = `You clicked ${count} times`
        console.log("you clicked");
      });//Tell it to run whenever you want it to

  return (
    <div className="movielist">
        <p>You clicked {count} times</p>
        <button onClick = {() => setCount(count + 1)}>
                Click Me
        </button>
    </div>
 
  );
}
