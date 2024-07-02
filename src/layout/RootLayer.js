import React from "react"
import { Outlet } from "react-router-dom"
import NavBar from "../component/NavBar"

export default function RootLayer(){
    return(
        <div className='App'>
            <NavBar></NavBar>
            <div className='content'>
                <Outlet></Outlet>
            </div>
        </div>
    )
}