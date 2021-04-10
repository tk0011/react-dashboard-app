import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
          <Sidebar />
            <main class="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
                <Header />
            </main>
      </div>
    </div>
  )
}
export default App;