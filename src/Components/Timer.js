import React from 'react'
import {useState,useEffect} from "react"
import QuizShowResult from './QuizShowResult';
export const Timer = () => {

    const [counter, setCounter] = useState(10);

//   First Attempts
    setInterval(() => setCounter(counter - 1), 1000);
    clearInterval(counter);
  // if(counter == 1) {
  //   alert("111")
    
  // }

//   Second Attempts
  // useEffect(() => {
  //   counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
  //   clearInterval(counter);
  // }, [counter]);

//   Second Attempts - Inspection
      // useEffect(() => {
      //   counter > 0 &&
      //     setInterval(() => {
      //       console.log(counter);
      //       setCounter(counter - 1);
      //     }, 1000);
      // }, [counter]);

 
//   Third Attempts
//   React.useEffect(() => {
//     const timer =
//       counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
//     return () => clearInterval(timer);
//   }, [counter]);

//   Suggested by Laurent
//   useEffect(() => {
//     counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
//   }, [counter]);
    return (
        <div>

<div>Countdown: {counter == 0 ? <QuizShowResult /> : counter}</div>

            
        </div>
    )
}
