import Navbar from './Navbar'
// import Home from './Home'
import HomeNew from './HomeNew'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';


function App() {

  
  

  return (

    <Router>

      <div className="App">

        <Navbar/>

        <div className="content">
        
        <Switch>

            <Route exact path="/">
              <HomeNew/>
            </Route>

            <Route path="/create">
              <Create/>
            </Route>

            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
            
            {/* pagauna betkuri kelia jei netinka niekas */}
            <Route path="*">
              <NotFound/>
            </Route>

        </Switch>
        
        
        

        </div>
          
      </div>

    </Router>
  );
}

export default App;
