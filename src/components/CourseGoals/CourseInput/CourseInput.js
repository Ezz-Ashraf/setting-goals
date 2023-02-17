import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from'./CourseInput.module.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid , setIsValid] =useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    if(event.target.value.trim().length >0)
    {
      setIsValid(true)
    }
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0)
    {
      setIsValid(false);
      return ;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue((prevState) =>{
      return '';
    })
  };

//   return (
//     <form onSubmit={formSubmitHandler}>
//       <div className={`form-control ${isValid?'':'invalid'}`}>
//         <label >Course Goal</label>
//         <input  type="text" onChange={goalInputChangeHandler} value={enteredValue} />
//       </div>
//       <Button type="submit">Add Goal</Button>
//     </form>
//   );
// };
return (
  <form onSubmit={formSubmitHandler}>
    <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
      <label >Course Goal</label>
      <input  type="text" onChange={goalInputChangeHandler} value={enteredValue} />
    </div>
    <Button type="submit">Add Goal</Button>
  </form>
);
};


export default CourseInput;
