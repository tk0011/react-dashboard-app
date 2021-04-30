import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header';
import BlogPost from './Pages/BlogPost/BlogPost';
import UserProfile from './Pages/UserProfile/UserProfile';


function App() {
  return (
    <div className="container-fluid">
      <div className="row">
          <Sidebar />
            <main class="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
                <Header />
                <Switch>
                    <Route exact path="/blog">
                        <BlogPost />
                    </Route>
                    <Route exact path="/profile">
                        <UserProfile />
                    </Route>
                </Switch>
            </main>
      </div>
    </div>
  )
}
export default App;