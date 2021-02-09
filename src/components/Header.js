import React , {useContext} from 'react'
import "../style/header.css"
import {GlobalContext }from "../stateproviders/globalState"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import { useHistory } from "react-router-dom";
// import {dayColors , nightColor , BGNIGHTCOLOR , BGDAYCOLOR} from "../assets/color"


function Header() {
    const {state} = useContext(GlobalContext);
    const {dispatch} = useContext(GlobalContext);
    const history = useHistory();

    const handleLogout = ()=>{
     try{
      dispatch({
        type:'IS_LOGGEDOUT'
  })

    history.push("/login");
     }catch(err){
       console.log("sorry user is not logout !!")
     }
 
    }
    
    return (
        <div className="header" style={{backgroundColor:state.headerbgColor}}>
          <div className="header_first">
                          <h1 style={{color:state.textColor}}>Dashboard</h1>
          </div> 
          <div className="header_last">
           <div className="menu_button">
           <IconButton aria-label="delete" onClick={()=>
    dispatch({
           type:'DAY'
     })}>
  <WbSunnyIcon style={{color:state.textColor}}/>
</IconButton>
<IconButton aria-label="delete" onClick={()=>
    dispatch({
           type:'NIGHT'
     })}>
  <Brightness2Icon style={{color:state.textColor}}/>
</IconButton>
           </div>
           <div className="menu_profile">
           <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1612855619754-64a7c41db296?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
           <Button style={{color:state.textColor}} className="logout_button" title="Logout" variant="outlined" 
            onClick={()=>handleLogout()}
           >
             Logout
           </Button>
           </div>
          </div>
           
        </div>
    )
}

export default Header
