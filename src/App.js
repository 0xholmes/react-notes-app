import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./components/Header"
import NotesPage from "./pages/NotesPage"
import NotePage from "./pages/NotePage"

import "./App.css"

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Switch>
            <Route component={NotesPage} path="/" exact />
            <Route component={NotePage} path="/note/:id" />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
