import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'


function Home(props) {
  debugger
  return <h1>Home</h1>;
}

function Contact(props) {
  return <h1>Contact</h1>;
}
function About(props) {
  return <h1>About</h1>;
}
function Ideas(props) {
  return <h1>Ideas</h1>;
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <BrowserRouter> */}
        <Link to= '/'>Home</Link>
        <Link to= '/contact'>Contact</Link>
        <Link to= '/about'>About</Link>
        <Link to= '/ideas'>Ideas</Link>
        <Link to= '/store'>STORE</Link>
        <Route exact path = '/' component = {Home} />
        <Route path = '/contact' component = {Contact} />
        <Route path = '/about' component = {About} />
        <Route path = '/ideas' component = {Ideas} />
        

        {/* <Switch>
        <Route path = '/' component = {Home} />
        <Route path = '/contact' component = {Contact} />
        <Route path = '/about' component = {About} />
        <Route path = '/ideas' component = {Ideas} />

        
        </Switch> */}
        {/* </BrowserRouter> */}
       
      </header>
    </div>
  );
}

export default App;
