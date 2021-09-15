import React, {useState} from 'react';
import { Switch, Route } from "react-router-dom"; 
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavBar";
import GetCharacters from "./GetCharacters";


function App() {
const [page, setPage] = useState("/characters") //get rid of this later 



  return (
    <div className="App">
       <Router>
       <NavBar onChangePage={setPage} />
            <Switch>
                <Route exact path="/characters">
                    <GetCharacters setPage={setPage}  />
                </Route>
            </Switch>
      </Router>
    </div>
  );
}

export default App;
