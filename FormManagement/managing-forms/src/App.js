// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {
//   const [fname, setFnameState] = useState('');
//   const [fname2, setFnameState2] = useState('');
//   const [colorSelect, setColorSelectState] = useState('');
//   const [isHappy, setIsHappyState] = useState('');
//   return (
//     <div className="App">
//        <form  onSubmit = {e => {
//          e.preventDefault();
//          axios.get(`?name=${fname}&name2=${fname2}`)
//         //  axios.post('/', {fname, fname2})
//        }}>
//          <div className = 'form-item'>
//           <h1>Input</h1>
//             <label>
//             <h4>First Name is {fname || 'unknown'}</h4>
//                 <input onChange = { e => {
//                   // debugger
//                   setFnameState(e.target.value)
//                 }}
//                 maxLength ='100'
//                 placeholder = 'first name'
//                 id = 'fnameInput'
//                 name = 'fname'
//                 type = 'text'/>
//             </label>
//         </div>

//    <br/><br/>

//         <div className = 'form-item'>
//          <h1>Input</h1>
//           <label htmlFor = 'fnameInput2'>
//           <h4>First Name is {fname2 || 'unknown'}</h4>
//           </label>
//               <input onChange = { e => {
//                   // debugger
//                   setFnameState2(e.target.value)
//                 }}
//               maxLength ='100'
//               placeholder = 'first name'
//               id = 'fnameInput2'
//               name = 'fname2'
//               type = 'text'/>
//         </div>
//    <br/><br/>

//         <div className = 'form-item'>
//           <h1>Drop Down</h1>
//           <label htmlFor = 'colorSelect'>Select Color</label>
//             <select onChange = { e => {
//                 debugger
//               }} id = 'colorSelect' name = 'color'>
//               <option value = '1'>Purple</option>
//               <option value = '2'>Red</option>
//               <option value = '3'>Pink</option>
//               <option value = '4'>Blue</option>
//             </select> 
//         </div>
//    <br/><br/>

//         <div className = 'form-item'>
//           <h1>Checkboxes</h1>
//           <label htmlFor = 'isHappy'><h4>Your Mood is {isHappy ? 'happy' : 'unhappy'}</h4></label>
//             <input onChange = { e => {
//                   // debugger
//                   setIsHappyState(e.target.checked)
//                 }}type = 'checkbox' id = 'isHappy' name = 'isHappy' /><br/><br/>
//         </div>
//    <br/><br/>

//         <div className = 'form-item'>
//           <h1>Something</h1>
//           <label htmlFor = 'isMaleInput'>Male</label>
//             <input type = 'checkbox' id = 'isMaleInput' name = 'isMale' value = "male"/>
//           <label htmlFor = 'isFemaleInput'>Female</label>
//             <input type = 'checkbox' id = 'isFemaleInput' name = 'isFemale' value = "female"/>
//         </div>
// <br/><br/>

//         <input type = 'submit' />
//       </form>
//     </div>
//   );
// }

// export default App;



// functions Refactored ( Handling multiple Inputs with a multiple slices of state)

// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {
//   const [fname, setFnameState] = useState('');
//   const [fname2, setFnameState2] = useState('');
//   const [colorSelect, setColorSelectState] = useState('');
//   const [isHappy, setIsHappyState] = useState('');



//   const onSubmit = e => {
//     e.preventDefault();
//     axios.post('/', {fname, fname2})
//   }


//         const onNameChange = e =>   setFnameState(e.target.value)
//         const onNameChange2 = e =>   setFnameState2(e.target.value)
      

//   return (
//     <div className="App">
//        <form onSubmit = {onSubmit} >
//          <div className = 'form-item'>
//           <h1>Input</h1>
//             <label>
//             <h4>First Name is {fname || 'unknown'}</h4>
//                 <input onChange = {onNameChange}
//                 maxLength ='100'
//                 placeholder = 'first name'
//                 id = 'fnameInput'
//                 name = 'fname'
//                 type = 'text'/>
//             </label>
//         </div>

//         <div className = 'form-item'>
//          <h1>Input</h1>
//           <label htmlFor = 'fnameInput2'>
//           <h4>First Name is {fname2 || 'unknown'}</h4>
//           </label>
//               <input onChange = {onNameChange2}
//               maxLength ='100'
//               placeholder = 'first name'
//               id = 'fnameInput2'
//               name = 'fname2'
//               type = 'text'/>
//         </div>

//         <div className = 'form-item'>
//           <h1>Drop Down</h1>
//           <label htmlFor = 'colorSelect'>Select Color</label>
//             <select onChange = { e => {
//                 debugger
//               }} id = 'colorSelect' name = 'color'>
//               <option value = '1'>Purple</option>
//               <option value = '2'>Red</option>
//               <option value = '3'>Pink</option>
//               <option value = '4'>Blue</option>
//             </select> 
//         </div>

//         <div className = 'form-item'>
//           <h1>Checkboxes</h1>
//           <label htmlFor = 'isHappy'><h4>Your Mood is {isHappy ? 'happy' : 'unhappy'}</h4></label>
//             <input onChange = { e => {
//                   // debugger
//                   setIsHappyState(e.target.checked)
//                 }}type = 'checkbox' id = 'isHappy' name = 'isHappy' /><br/><br/>
//         </div>

//         <div className = 'form-item'>
//           <h1>Something</h1>
//           <label htmlFor = 'isMaleInput'>Male</label>
//             <input type = 'checkbox' id = 'isMaleInput' name = 'isMale' value = "male"/>
//           <label htmlFor = 'isFemaleInput'>Female</label>
//             <input type = 'checkbox' id = 'isFemaleInput' name = 'isFemale' value = "female"/>
//         </div>

//         <input type = 'submit' />
//       </form>
//     </div>
//   );
// }

// export default App;



//State Refactored ( Handling multiple Inputs with a single slice of state)


// import React, {useState} from "react";
// import "./App.css";

// function App() {
//   const [formData, setFormData] = useState({
//     username:'',
//     email:'',
//     favColor:'',  })

//   const onFormDataChange = e => {
//     // debugger
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     })
//   }
//   return (
//     <div className="App">
//       <form>
//         <label>
//           Username:
//           <input name = "username" type="text" onChange = {onFormDataChange} />
//         </label>
//         <label>
//           Email:
//           <input name = "email"type="email" onChange = {onFormDataChange} />
//         </label>
//         <label>
//           FavColor:
//           <input name = "favColor"type="text" onChange = {onFormDataChange} />
//         </label>
//       </form>
//     </div>
//   );
// }

// export default App;




import React, {useState} from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    username:'',
    email:'',
    favColor:'',  })

  const onFormDataChange = e => {
    // debugger
    if (/^[a-zA-Z]+$/.test(e.target.value)) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      })
    }
    
  }

  const onFormSubmt = e => {
    e.preventDefault();
    alert(`submitting ${formData.username. $}, ${formData.email}, ${formData.favColor}`)
  }
  return (
    <div className="App">
      <form onSubmit = {onFormSubmt}>
        <label>
          Username:
          <input name = "username" type="text" onChange = {onFormDataChange} value = {formData.username}/>
        </label>
        <label>
          Email:
          <input name = "email"type="email" onChange = {onFormDataChange} value = {formData.email} />
        </label>
        <label>
          FavColor:
          <input name = "favColor"type="text" onChange = {onFormDataChange} value = {formData.favColor} />
        </label>
        <input type = "submit" />
      </form>
    </div>
  );
}

export default App;