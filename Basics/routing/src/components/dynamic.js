import React, { useState, useEffect} from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'


function DynamicHome(props) {
    debugger
    return <h1>Dynamic Home</h1>;
  }

  const users = [
      {id:1, name: 'ShaKeya'},
      {id:2, name: 'Keith'},
      {id:3, name: 'Keon'},
      {id:4, name: 'Kitai'},
  ]

// function User1(props) {
//   debugger
//   return <h1>User1</h1>;
// }

// function User2(props) {
//   return <h1>User2</h1>;
// }
// function User3(props) {
//   return <h1>User3</h1>;
// }
// function User4(props) {
//   return <h1>User4</h1>;
// }


const fetchUser = id => Promise.resolve(
    users.find(user => user.id == id)
);

const FetchedUser = props => {
    const { id } = props.match.params;
    const [user, setUser] = useState(null)
    useEffect(() => {
        fetchUser(id).then(user => setUser(user))
    }, [id])
    if(!user) return <div>Fetching user...</div>
    return<div>The Fetched  name is {user.name} and the id is { user.id }</div>
}

function Dynamic() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <BrowserRouter> */}
        <Link to= '/dynamic'>Home</Link>
        <Link to= '/user/1'>User 1</Link>
        <Link to= '/user/2'>User 2</Link>
        <Link to= '/user/3'>User 3</Link>
        <Link to= '/user/4'>User 4</Link>
        <Link to= '/user/1/info'>User 1 Info</Link>
        <Link to= '/user/2/info'>User 2 Info</Link>
        <Link to= '/user/3/info'>User 3 Info</Link>
        <Link to= '/user/4/info'>User 4 Info</Link>
        <Link to= '/user/1/fetchedinfo'>Fetched User 1 Info</Link>
        <Link to= '/user/2/fetchedinfo'>Fetched User 2 Info</Link>
        <Link to= '/user/3/fetchedinfo'>Fetched User 3 Info</Link>
        <Link to= '/user/4/fetchedinfo'>Fetched User 4 Info</Link>
        <Route exact path = '/dynamic' component = {DynamicHome} />

        {/* the id param is accessiable from within the component using the match object */}
        <Route exact path = '/user/:id' render = {props => {
            const { id } = props.match.params;
            return <div> The id is { id }</div>
        }}/>

        {/* Url guiding component State */}
        <Route exact path = '/user/:id/info' render = {props => {
            const { id } = props.match.params;
            const userInfo = users.find(user => user.id == id);
            return <div> The user id is { userInfo.id } and the user name is { userInfo.name }</div>
        }}/>

        <Route exact path = '/user/:id/fetchedinfo' component = {FetchedUser} />
      
  
      </header>
    </div>
  );
}

export default Dynamic;
