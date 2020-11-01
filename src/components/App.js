import '../styles/App.css';
import Home from './Home.js'
import Instructions from './Instructions.js'
import NotFound from './404NotFound.js'
import Quiz from './Quiz.js'
import { BrowserRouter, Switch , Route, Redirect, ProtectedRoute } from 'react-router-dom'


export default function App() {

  return (
    <div className="App">
      <BrowserRouter >
        <Switch>
          <Route  exact path="/" render={Home} />
          <Redirect from="/home" to="/"/>
          <Route  exact path="/instructions" render={Instructions} />
          <ProtectedRoute path="quiz?name=" render={Quiz}/>
          <Route path="*" render={NotFound}/>
        </Switch>  
      </BrowserRouter>

    </div>
  )
}


