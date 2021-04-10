import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
          <Sidebar />
          <Header />
      </div>
    </div>
  )
}
export default App;