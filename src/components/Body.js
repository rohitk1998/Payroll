import React from 'react'
import "../style/body.css"
import Header from "./Header"
import Dashboard from "./Dashboard"

function Body() {
    return (
        <div className="body">
            <Header/>
            <Dashboard/>
        </div>
    )
}

export default Body
