import { Grid, Typography } from "@mui/material";
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { useLocation } from "react-router-dom";
import Axios from 'axios';
import { useState } from "react";

export default function Comments(){
    const location = useLocation()
    const [id,setId] = useState([]) 
    const [user,setUser] = useState([]) 
    const [title,setTitle] = useState([]) 
    const [body,setBody] = useState([]) 
    const [email,setEmail] = useState([]) 
   Axios.get('https://jsonplaceholder.typicode.com/comments').then((e)=>e.data.map((e)=><>
   {id.push(e.id)} {user.push(e.postsId)} {title.push(e.name)} {body.push(e.body)} {email.push(e.email)}
   </>
   ))
    return(
        
         <Grid container>
            <Grid item sm={12} md={12}>
               <Typography variant="h3" align="center" sx={{backgroundColor: "cyan"}}>
                  Comments {location.state}
               </Typography>
                   </Grid>
               
               <Grid container>
                   <Grid item md={2}>
                       {id.map((e,i)=>
                        <div  key={i} className="text-center shadow p-4 text-secondary fw-bold">
                            {e}
                        </div>
                            )}
                   </Grid>
                   <Grid item md={4}>
                       {body.map((e,i)=>
                        <div  key={i} className="text-center shadow p-4 text-secondary fw-bold">
                            {e}
                        </div>
                            )}
                   </Grid>
                   <Grid item md={3}>
                   {title.map((e,i)=>
                        <div key={i} className="text-center shadow p-4 text-secondary fw-bold">
                            {e}
                        </div>
                            )}
                   </Grid>                   
                   <Grid item md={3}>
                   {email.map((e,i)=>
                        <div key={i} className="text-center shadow p-4 text-secondary fw-bold">
                            {e}
                        </div>
                            )}
                   </Grid>                   
                   <Grid item md={2}>
                   {user.map((e,i)=>
                        <div key={i} className="text-center shadow p-4 text-secondary fw-bold">
                            {e}
                        </div>
                            )}
                   </Grid>
               </Grid>
         </Grid>
    )
}