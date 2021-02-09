import React ,{useContext}from 'react'
import "../style/sidebar.css"
import {GlobalContext }from "../stateproviders/globalState"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DashboardIcon from '@material-ui/icons/Dashboard';

function Sidebar() {
    const {state} = useContext(GlobalContext);
    const [sidebarStatus , setsidebarStatus] = React.useState('open');
    const toggleSidebar = ()=>{
        console.log("button clicked")
        if(sidebarStatus === 'open'){
            setsidebarStatus('close')
        }
        else{
            setsidebarStatus('open')
        }
      }
    return (
         <div className={sidebarStatus === 'open' ? 'sidebar' : 'sidebar_half'} style={{backgroundColor:state.sidebarColor}}>
           <div className="sidebar_toggle">
           <button style={{color:state.textColor,backgroundColor:"transparent" , outlineWidth:0 , borderColor:"transparent" , borderWidth:1}}  onClick={toggleSidebar}>
             {
              sidebarStatus === 'open' ?   <CloseIcon style={{fontSize:35}} />   : <MenuIcon style={{fontSize:35}}/> 
            }
             </button>
           </div>
           <div className="sidebar_menu" style={{color:state.textColor}}>
                
                  {
                      sidebarStatus === 'open' 
                      ?
                      
                      <div className='menu_items'>
                      <HomeIcon style={{fontSize:35}}/>
                      <h4>Home</h4>
                      </div>
                      

                      :
                      <div className='menu_items'>
                      <HomeIcon style={{fontSize:42,color:state.textColor}}/>
                      
                      </div>
                  }
                   {
                      sidebarStatus === 'open' 
                      ?
                      
                      <div className='menu_items'>
                      <DashboardIcon style={{fontSize:35}}/>
                      <h4>Home</h4>
                      </div>
                      

                      :
                      <div className='menu_items'>
                      <DashboardIcon style={{fontSize:42,color:state.textColor}}/>
                      
                      </div>
                  }
                   {
                      sidebarStatus === 'open' 
                      ?
                      
                      <div className='menu_items'>
                      <AccountCircleIcon style={{fontSize:35}}/>
                      <h4>Profile</h4>
                      </div>
                      

                      :
                      <div className='menu_items'>
                      <AccountCircleIcon style={{fontSize:42,color:state.textColor}}/>
                      
                      </div>
                  }
                   {
                      sidebarStatus === 'open' 
                      ?
                      
                      <div className='menu_items'>
                      <ExitToAppIcon style={{fontSize:35}}/>
                      <h4>Logout</h4>
                      </div>
                      

                      :
                      <div className='menu_items'>
                      <ExitToAppIcon style={{fontSize:42,color:state.textColor}}/>
                      </div>
                  }
                </div>
           </div>    
    )
}

export default Sidebar
