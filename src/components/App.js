import '../styles/App.css';
import Home from './Home.js'
import Instructions from './Instructions.js'
import NotFound from './404NotFound.js'
import Quiz from './QuizWrapper.js'
import Footer from './Footer.js'
import { BrowserRouter as Router, Switch , Route, Redirect } from 'react-router-dom'

export default function App() {

  return (
    <div className="App">
      <Router >
        <Switch>
          <Route  exact path="/" render={Home} />
          <Redirect from="/home" to="/"/>
          <Route  exact path="/instructions" render={Instructions} />
          <Route exact path="/quiz" render={Quiz} />
          {/*<Route path="*" render={NotFound}/>*/}
        </Switch>  
      </Router>
      <Footer />
    </div>
  )
}


