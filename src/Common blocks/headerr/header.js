import logo from './logoTypeLoong.svg';
import './header.css';
import { Route, Router, Routes } from 'react-router-dom';
export default () => {
    return(
        <div>
          <header class = "header">
            <img src={logo} alt="Логотип"></img>
            <nav class ="nac">
              <h2><a href="#" data-value="main">MAIN</a></h2>
              <h2><a href="#" >DISCORD</a></h2>
              <h2><a href="#" data-value="forum">FORUM</a></h2>
            </nav>
            <div class = "profil">
              <h2><a href="#" data-value="REG">Registration</a></h2>
            </div>
          </header>
        </div>
    );
};