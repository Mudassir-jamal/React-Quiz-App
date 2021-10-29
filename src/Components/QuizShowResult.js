import React from 'react'
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import "../CssFile/Quizapp.css"

const QuizShowResult = ({marks,Questions}) => {
    return (<>
        <div id="result">
                 
                 <div className="first">
                   <h1>Answers</h1>              
                    <p>  {Questions[0].numb}:  {Questions[0].answer} </p>
                    <p> {Questions[1].numb}:  {Questions[1].answer} </p>
                   <p>{Questions[2].numb}:  {Questions[2].answer} </p>
                   <p> {Questions[3].numb}:  {Questions[3].answer} </p>
                   <p>{Questions[4].numb}:  {Questions[4].answer}</p>


                 </div>


                 <div className="first">
                   <h1>Answers</h1>              
                              
                    <p>  {Questions[5].numb}:  {Questions[5].answer} </p>
                    <p> {Questions[6].numb}:  {Questions[6].answer} </p>
                   <p>{Questions[7].numb}:  {Questions[7].answer} </p>
                   <p> {Questions[8].numb}:  {Questions[8].answer} </p>
                   <p>{Questions[9].numb}:  {Questions[9].answer}</p>


                 </div>

              <div>
            
              </div>
             
      
        </div>
        <div><h1>Your Total Score is {marks} /100</h1></div>

        </>
    )
}

export default QuizShowResult






