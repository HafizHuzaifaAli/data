import { Grid } from "@mui/material"
import { useNavigate } from "react-router-dom"
import Button from "../component/button"
import Input from "../component/input"

function SignUp(props) {
  const navigate = useNavigate()
    return(
        <div className="mx-md-5">
    <Grid container spacing={2}  className="text-center  my-4 App border rounded">
    <Grid item xs={12} sm={12} md={12} className="text-center border fw-bold fs-1">Sign Up.</Grid>
    <Grid item xs={12} sm={12} md={6}>
      <div><Input label="First Name"/></div>
    </Grid>
    <Grid item xs={12} sm={12} md={6}>
        <div><Input label="Last Name" /></div>
    </Grid>
    <Grid item xs={12} sm={12} md={6}>
      <div><Input label="Password" /></div>
    </Grid>
    <Grid item xs={12} sm={12} md={6}>
      <div><Input label="Confirm Password" /></div>
    </Grid>
    <Grid item xs={12} sm={12} md={6}>
      <div><Input label="Father Name" /></div>
    </Grid>
    <Grid item xs={12} sm={12} md={6}>
      <div><Input label="Contact" /></div>
    </Grid>
    <Grid item xs={12} sm={12} md={6}>
      <div><Input label="Email" /></div>
    </Grid>
    <Grid item xs={12} sm={12} md={6}>
      <div><Input label="Gender" /></div>
    </Grid>
    <Grid item  xs={12} sm={12} md={12} className="text-center fw-bold fs-1"><Button width="80%" onClick={()=>navigate("/login")} class="btn btn-outline-success" text="Sign Up"/></Grid>
    <Grid item  xs={12} sm={12} md={12} className="text-center fw-bold fs-4 py-5">Do you have an account ?  <Button width="120px" destination="/login" class="btn btn-outline-primary" text="Login"/></Grid>
</Grid>
        </div>
    )
}
export default SignUp