// import '@babel/plugin-proposal-private-property-in-object'
import Header from './Common blocks/headerr/header.js'
import Sliderforum from './general-page/forum-said-slider/sider-forum.js'
import Sliderclass from './general-page/forum-said-slider/sider-class.js'
import News from "./general-page/news-block/news-all.js"
import About from "./Common blocks/About/about.js"
import Registration from './Users/regitration-page/registration.js'
import ForumQuest from './forum/Discusion-page/All-Discusion.js'
import Comment from './forum/selected question/commet.js'
import Profil from './Users/Profil/Profil.js'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './bg.css'
import './App.css'
function App() {
  return (
    <div>
      <div class="forum">
        <Header/>
        <div class="allsubject">
          <Sliderforum/>
          <ForumQuest/>
          <Sliderclass/>
        </div>
        <div class="AddSubject">
          <button> Add-question </button>
        </div>
        <About/>
      </div>

      <div id='regitration'>
        <Header/>
        <Registration/>
        <About/>
      </div>

      <div class="profil">
        <Header/>
        <Profil/>
        <About/>
      </div>

      <div id='general'>
        <Header/> 
        <div class='flex-container'>
          <Sliderforum/>
          <News/>
          <Sliderclass/>
        </div>
        <About/>
      </div>
    </div>
  );

}

export default App;
