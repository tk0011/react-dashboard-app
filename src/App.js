import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header';
import {Switch, Route } from 'react-router-dom'
import AddPost from './Pages/AddPost/AddPost';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
          <Sidebar />
            <main class="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
                <Header />
                 <Switch>
                    <Route exact path="/add-post">
                        <AddPost/>
                    </Route>
                 </Switch>
            </main>
      </div>
    </div>
  )
}
export default App;