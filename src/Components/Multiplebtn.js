import {useState} from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import "../CssFile/Quizapp.css"
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';





const Multiplebtn = (props) => {
    const [btnDisable,setbtnDisable] = useState(false)
  
     
    const {Questions,Index,setMarks,marks} = props


    

 

      const checkAns = (ans,user,i) => {
          console.log(ans,user)
           if(ans == user){
             setMarks(marks + 10)   
             
           

           }

        //    setbtnDisable(true)

      }
      
    return (
        <div>
            <Box sx={{ width: '80%', maxWidth: 500 ,margin:"0 auto" }}>
            <Typography variant="h4" className="textBox " sx={{marginTop:"3rem",fontWeight:"bold",width:"120%"}}> 
             {Questions[Index].numb} : {Questions[Index].question} 
            </Typography>
            
            </Box>
            
        <Box textAlign='center' sx={{ width: '90%',margin:"1rem auto"}} className="button_main">
        <Grid container rowSpacing={0}
        
        columnSpacing={{ xs: 0, sm: 0, md: 0 ,lg:0}}
        justifyContent="center"
        alignItems="center"
        alignSelf="center   "
       
       >

    
          
              {
                  Questions[Index].options.map( (e,i) => (
                        <Grid  key={i} xs={12} sm={12} md={9} lg={6}>
                      
                         <Button 
                          sx={{ margin:"1rem 0" 
                          ,width:"94%" ,
                          height:"75px",
                          fontSize:"1rem"
                        }}
                          startIcon={<CheckIcon color="action" fontSize=""/>}
                          variant="contained"
                          disabled={btnDisable}
                          onClick={() => 
                         checkAns(Questions[Index].answer,e,i)
                        }
                          
                          >
                              
                               {e}</Button> 
                      
                    
                    </Grid>
                  ))
              }
            
      </Grid>
    </Box>
            
        </div>
    )
}

export default Multiplebtn 
