import { Grid, Typography } from "@mui/material";
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { useLocation } from "react-router-dom";
import Axios from 'axios';
import { useState } from "react";


export default function Todos(props){
    const location = useLocation()
    const [id,setId] = useState([]) 
    const [user,setUser] = useState([]) 
    const [title,setTitle] = useState([]) 
   Axios.get('https://jsonplaceholder.typicode.com/todos').then((e)=>e.data.map((e)=><>
   {id.push(e.id)} {user.push(e.userId)} {title.push(e.title)} 
   </>
   ))

    return(
         <Grid container>
            <Grid item sm={12} md={12}>
               <Typography variant="h3" align="center" sx={{backgroundColor: "cyan"}}>
                  Todos Data Double click to open {location.state}
               </Typography>
                   </Grid>
               
               <Grid container>
                   <Grid item md={3}>
                       {id.map((e,i)=>
                        <div  key={i} className="text-center shadow p-4 text-secondary fw-bold">
                            {e}
                        </div>
                            )}
                   </Grid>
                   <Grid item md={6}>
                   {title.map((e,i)=>
                        <div key={i} className="text-center shadow p-4 text-secondary fw-bold">
                            {e}
                        </div>
                            )}
                   </Grid>                   
                   <Grid item md={3}>
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