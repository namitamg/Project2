import React,{ useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {BUTTON ,Input , Checkbox} from '../Common'
import Avatar from '@material-ui/core/Avatar';

import CssBaseline from '@material-ui/core/CssBaseline';


import { Link , Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import axios from 'axios'
import { useHistory } from "react-router-dom";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const useStyles = makeStyles((theme) => ({
 
  paper: {

    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border:"2px darak"
  },
  item:{
  width:theme.spacing(50),
  padding:theme.spacing(1)
  },
  item1:{
   marginLeft:theme.spacing(13.5)
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login(props) {
  console.log("login",props)
  const history = useHistory()
/* 
  const {loginHandler}=this.props */
  const classes = useStyles();
//   const [open, setOpen] = React.useState(false);
//   const [auth , setAuth ] = useState(false);
//   const [redirect , setRedirect] = useState(false)
//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const [formData , setFormData ] = useState({
//     email : 'namitamg@gmail.com',
//     password : 'nmg123'
// })
// const [errors ,setError] = useState({
//     email : '' ,
//     password : ''
// })

// const handleChange=(e)=>{
//     setFormData({
//         ...formData , 
//         [e.target.name]  : e.target.value
//     })
// }



// const handleSubmit = (e) =>{
//     e.preventDefault();  
//     if(formData.email == "namitamg@gmail.com" && formData.password == "nmg123"){
//          props.loginHandler() 
//          setRedirect(true)
//     }else{
//         setError({
//             email : 'You have entered a wrong Email' ,
//             password : 'Either email or password is wrong'
//         })
//     }

// }

//   const  {from } = props.location.state || {from : {pathname : '/' }}
//   if(redirect){
//     return <Redirect to={from} />
//   }


const [redirectState, setRedirectState] = useState(false)
  const [formData, setFormData] = useState({
      email: '',
      password: ''
      
  })
  const [errors, setError] = useState({
      email: '',
      password: '',
      error: ''
      
  })

  const handleChange = (e) => {
      setFormData({
          ...formData,
          [e.target.name]: e.target.value
      })
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      // post the daat to the backedn using axios 
      const url = "http://localhost:5000/api/auth/login"
      axios.post(url, formData)
          .then((resp) => {
              console.log(resp)
              props.loginHandler()
              setRedirectState(true)
              // history.push('/payment')
              // localStorage.setItem("key",resp.data.token)
              // localStorage.getItem("key")
              console.log(resp.data.token)
          }).catch((errors) => {
              console.log(errors.response)
              setError({
                  email: errors.response.data.email,
                  password: errors.response.data.password,
                  error: errors.response.data.error
                  
              })
          })
  }

  const { from } = props.location.state || { from: { pathname: '/' } }
  if (redirectState) {
      return <Redirect to={from} />
  }




  return (
    <div style={{border:"2px dark"}} >
     
<Container component="main" maxWidth="xs" color="black">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
      </div>
      <div>
      <Grid container>

        <form className={classes.form} onSubmit={handleSubmit}  style={{textAlign:"center"}}>
          
            <Grid item className={classes.item} >

            <Input
                    name='email'
                    placeholder="Enter Email"
                    value={formData.email}
                    label="Email"
                    type="email"
                    onChange={(e) => handleChange(e)}
                    error={errors.email}
                />
        
            </Grid>
            <Grid item className={classes.item}>
            <Input
                    name='password'
                    placeholder="Enter password"
                    value={formData.password}
                    label="Password"
                    type="password"
                    onChange={(e) => handleChange(e)}
                    error={errors.password}
                />
        
            </Grid>
            
            <Grid item >
              <Link to="/SignUp" variant="body2">
                <Typography variant="caption" className={classes.item1} >Don't have an account? Sign Up</Typography>
              </Link>
            </Grid>
            
          <BUTTON type="submit" text="login" color="primary"  ></BUTTON>

          {/* {!auth ? 
            <>
          
         <Link to="/Payment" ><BUTTON type="submit" text="Login"  color="secondary" /></Link>
            </>
            :    <BUTTON onClick={()=>setAuth(false)} text="Logout" color="primary"  ></BUTTON>
          } */}
         {/* <Grid container> */}
           
           {/* </Grid> */}
        </form>
        </Grid>
      </div>
    
    </Container> 


    </div>
  );
}
