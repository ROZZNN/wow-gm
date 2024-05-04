// import '@babel/plugin-proposal-private-property-in-object'
import Header from './headerr/header.js'
import Sliderforum from './forum-said-slider/sider-forum.js'
import Sliderclass from './forum-said-slider/sider-class.js'
import News from "./news-block/news-all.js"
import About from "./About/about.js"
import './bg.css'
import './App.css'
function App() {
  return (
      <div id='general'>
        <Header/> 
        <div class='flex-container'>
          <Sliderforum/>
          <News/>
          <Sliderclass/>
        </div>
        <About/>
      </div>
  );

}

export default App;
