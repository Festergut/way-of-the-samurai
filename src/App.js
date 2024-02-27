import './App.css';
import Content from './components/content/Content';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter } from 'react-router-dom';
import {HeaderContainer }from './components/header/HeaderContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className='container'>
        <HeaderContainer />
        <Content />
        <Sidebar />
      </div>
    </BrowserRouter>
  );
}

export default App;
