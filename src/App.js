// import '@babel/plugin-proposal-private-property-in-object'
import Header from './Common blocks/headerr/header.js'
import Sliderforum from './general-page/forum-said-slider/sider-forum.js'
import Sliderclass from './general-page/forum-said-slider/sider-class.js'
import News from "./general-page/news-block/news-all.js"
import About from "./Common blocks/About/about.js"
import Registration from './Users/regitration-page/registration.js'
import ForumQuest from './forum/Discusion-page/All-Discusion.js'
import Comment from './forum/selected question/commet.js'
import Profil from './forum/selected question/Profil-quest.js'
import "./Common blocks/headerr/Navigation.js"
// import Profil from './Users/Profil/Profil.js'

import './bg.css'
import './App.css'
function App() {
  return (
    <div>
      <div class="forum" style="display: none">
        <Header/>
        <div class="allsubject">
          <ForumQuest/>
        </div>
        <div class="selectSubject">
            <Profil/>
            <Comment/>
        </div>
        <div class="AddSubject">
        </div>
        <About/>
      </div>

      <div id='regitration' style="display: none">
        <Header/>
        <Registration/>
      </div>

      <div class="profil" style="display: none">
        <Header/>
        <Profil/>
        <About/>
      </div>

      <div id='general'style="display: block">
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
