import React , {createContext , useReducer} from "react"
import Reducer from "./Reducer";
import {BGDAYCOLOR} from "../assets/color"
import {dayColors} from "../assets/color"


const initialState = {
    LoginStatus:false,
    backgroundColor:BGDAYCOLOR.white,
    headerbgColor:BGDAYCOLOR.headerDay,
    sidebarColor:BGDAYCOLOR.lightsidebar,
    textColor:dayColors.black
}




export const GlobalContext = createContext(initialState);


const GlobalProvider =  ({children})=>{
    const [state,dispatch]  = useReducer(Reducer , initialState);

    return (
        <GlobalContext.Provider  value={{state  , dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider