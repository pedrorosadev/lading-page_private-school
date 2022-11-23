import React from "react";
import { TextWelcome } from "../../components/Text-Welcome/Text-Welcome";
import "./Home.css";


function Home(){
    return (
        <div className="home">
                <TextWelcome/>
        </div>
    );
}
export { Home }