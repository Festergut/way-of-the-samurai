import './App.css';
import Content from './components/content/Content';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter } from 'react-router-dom';
import { HeaderContainer } from './components/header/HeaderContainer';
import { useEffect } from 'react';
import { initializeApp } from './redux/appReducer';
import { useDispatch, useSelector } from 'react-redux';
import Preloader from './components/content/common/preloader/preloader';


function App(props) {
  let initialized = useSelector(state => state.APP.initialized)
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeApp())
  }, [dispatch])
  if (!initialized) {
    return (<Preloader />)
  }

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
