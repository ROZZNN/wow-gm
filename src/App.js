// import '@babel/plugin-proposal-private-property-in-object'
import Header from './headerr/header.js'
import Sliderforum from './forum-said-slider/sider-forum.js'
import Sliderclass from './forum-said-slider/sider-class.js'
import News from "./news-block/news-all.js"
import './bg.css'
import './App.css'
function App() {
  return (
      <div id='general'>
        <Header/> 
        <div>
        <div class = 'sliderApp' id="bld"><Sliderforum/></div>
        <div class = 'news' id="bld"><News/></div>
        <div class = 'sliderApp-alt' id="bld"><Sliderclass/></div>
        </div>
      </div>
  );

}

export default App;
