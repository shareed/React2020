import { useState, useEffect } from 'react';

// export const useForm = () => {
//     const [username, setUsername] = useState();
//     const [email, setEmail] = useState();

//     const handleChanges = e => {
//       if(e.target.name === 'username') {
//         setUsername(e.target.value);
//         console.log('Setting Username')
//         // console.log(e.target.value)
//       } else {
//         setEmail(e.target.value);
//         console.log('Setting Email')
//         // console.log(e.target.value)
//       }
//         console.log(e.target.name, e.target.value)
    
        
//       };
    
//       const clearForm = e => {
//         e.preventDefault();
//         setUsername('');
//         setEmail('');
//       };

//       return [username, email, handleChanges, clearForm]
    
// }


export const useForm = () => {
  const [values, setValues] = useState({
    username: '',
    email: ''
  });

  const handleChanges = e => {
    console.log(e.target.name, e.target.value);
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };


  const clearForm = e => {
    e.preventDefault();
    setValues("")
  }
  return [values, clearForm, handleChanges];
};
