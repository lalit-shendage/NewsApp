import './App.css';
import React from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  // Switch,
  Route,
} from "react-router-dom";
import page from './components/News';
const App= ()=> {
    return (
      <div>
              <HashRouter basename="/">

      <Router>
      <NavBar/>
      
      <Routes>
            <Route exact path="/business"element={<News key={`business${page}`} country="in" category="business"/>}/>
            <Route exact path="/entertainment"element={<News key="entertainment" country="in" category="entertainment"/>}/>
            <Route exact path="/"element={<News key="general" country="in" category="general"/>}/>
            <Route exact path="/health"element={<News key="health" country="in" category="health"/>}/>
            <Route exact path="/science"element={<News key="science" country="in" category="science"/>}/>
            <Route exact path="/sports"element={<News key="sports" country="in" category="sports"/>}/>
            <Route exact path="/technology"element={<News key="technology" country="in" category="technology"/>}/>
        </Routes>
      </Router>
      </HashRouter>

    </div>
    )
}
export default App
