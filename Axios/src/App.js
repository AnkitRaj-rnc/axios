import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from "./component/Home"
import Index from "./component/Index"
import Main from "./component/Main"


function App() {
  return (
    <main>
      <BrowserRouter>
      <Switch>
         <Route exact path="/" component={Main}/> 

        <Route exact path="/index" component={Index}/>
        <Route exact path="/index/:id" component={Home}/>  
      </Switch>
    </BrowserRouter>
    </main>
  );
}

export default App;