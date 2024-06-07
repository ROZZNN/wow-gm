import logo from './logoTypeLoong.svg';
import './header.css';
import { Route, Router, Routes } from 'react-router-dom';
export default () => {
    return(
        <div>
          <header class = "header">
            <img src={logo} alt="Логотип"></img>
            <nav class ="nac">
              <h2><a href="#">MAIN</a></h2>
              <h2><a href="#">DISCORD</a></h2>
              <h2><a href="#">FORUM</a></h2>
            </nav>
            <div class = "profil">
              
            </div>
          </header>
        </div>
    );
};