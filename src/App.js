import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Photofeed from './components/Photofeed'
import ButtonAppbar from './components/Appbar'
import Search from './components/Search';
function App() {

  return (
    <BrowserRouter>
    <div>
   <ButtonAppbar />
         <div className="photo-container">
    <Switch>
    <Route exact path="/" render={ () => (<Photofeed/>)} />
    <Route path="/search" render={ () => (<Search />)} />
    </Switch>
    </div>
    </div>
      </BrowserRouter>
  );
}

export default App;
