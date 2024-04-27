import logo from './headerr/logoTypeLoong.svg'
import Header from './headerr/header.js'
import Sliderforum from './forum-said-slider/sider-forum.js'
import Sliderclass from './forum-said-slider/sider-class.js'
import './App.css'
function App() {
  return (
      <div>
        <Header/> 
        <div class = 'sliderApp'><Sliderforum/></div>
        <div class = 'sliderApp-alt'><Sliderclass/></div>
      </div>
  );

}

export default App;
