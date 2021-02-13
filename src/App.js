import React from 'react'
import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import Skills from "./skills/Skills";
import Works from "./works/Works";
import Freelancer from "./freelancer/Freelancer";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Freelancer/>
            <Contact/>
            <Footer/>

        </div>
    );
}

export default App;
