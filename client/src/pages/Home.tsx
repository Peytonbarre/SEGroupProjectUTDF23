import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Navbar } from "../components/Navbar";

export function Home(){
    return(
        <div className="bg-dark 100vh">
            <Navbar/>
            <>Home Page</>
        </div>
    )
}