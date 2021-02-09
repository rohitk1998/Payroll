import React , {useContext} from 'react';
import "../style/login.css";
import Button from '@material-ui/core/Button';
import {GlobalContext} from "../stateproviders/globalState"
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));


 

function Login() {
  let history = useHistory();
    const {dispatch} = useContext(GlobalContext);
    const classes = useStyles();
    const [email , setEmail] = React.useState('PaulLevesque@reap.com');
    const [pass , setPass] = React.useState('1234@AdminPayroll');

    const userLogin = async(e)=> {
        e.preventDefault();
        console.log("user gets logged in " , email ,"   >>> " ,pass);
        await fetch("http://localhost:55233/api/Auth/login" , {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
              }, 
            body:JSON.stringify({
                userName: email,
                password: pass
            })
        }).then(response => {
            if(response.ok === true){
              setStatusGlobal();
            }
            else{
              alert("User have inserted invalid username or password.")
            }
        })
        
    }

    const setStatusGlobal = ()=>{
     
        dispatch({
            type:'IS_LOGGED'
      })
      history.push("/dashboard");
    }
    return (
        <div className="login">
          <div className="login_titleBox">
                   <h1 style={{color:"grey"}}>WELCOME TO DASHBOARD</h1>
          </div>
                 <div>
                   <form className="form_container" >
                      <input  className="form_input" id="outlined-basic" label="Email Or Username" value={email} onChange={(e)=> setEmail(e.target.value)} />
                     
                      <input className="form_input" id="outlined-basic" label="Password" value={pass} onChange={(e)=> setPass(e.target.value)} />
                      <Button variant="outlined" onClick={userLogin}>
        Login
      </Button>
                   </form>
                 </div>
        </div>
    )
}

export default Login
