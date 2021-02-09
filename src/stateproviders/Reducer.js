import {BGDAYCOLOR, BGNIGHTCOLOR, nightColor} from "../assets/color"
import {dayColors} from "../assets/color"

const Reducer = (state , action)=>{
    
    switch(action.type){
          case 'DAY':
              return{
                  ...state,
                  backgroundColor:BGDAYCOLOR.white,
                  headerbgColor:BGNIGHTCOLOR.headerDay,
                  sidebarColor:BGDAYCOLOR.lightsidebar,
                  textColor:dayColors.black
              }
         case 'NIGHT' : 
            return{
                ...state,
                backgroundColor:BGNIGHTCOLOR.black,
                headerbgColor:BGNIGHTCOLOR.headerNight,
                sidebarColor:BGNIGHTCOLOR.darksidebar,
                textColor:nightColor.white
         }
         case 'IS_LOGGED' : 
         return{
             ...state,
             LoginStatus: true
      }
      case 'IS_LOGGEDOUT' : 
      return{
          ...state,
          LoginStatus:false
   }
   
        default :
        return state;
    }
}


export default Reducer;