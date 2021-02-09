import React , {useContext} from 'react'
import "../style/dashbaord.css"
import {GlobalContext} from "../stateproviders/globalState"

function Dashboard() {
    const {state} = useContext(GlobalContext)
    return (
        <div className="dashbaord" style={{backgroundColor:state.backgroundColor}}>
            this is dashboard
        </div>
    )
}

export default Dashboard
