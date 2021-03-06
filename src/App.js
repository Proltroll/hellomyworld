import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import News from './components/News/News';

const App = (props) => {
  return (
    <BrowserRouter>
        <div className="myBody">
          <Header />
          <Navbar />

          <div className="myBody_content">
            
            <Route path="/profile" render={() => <Profile addPost={props.addPost} state={props.state.profilePage}/> }/>
            <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogPage}/>}/>
            <Route path="/news" render={() => <News />} />
          </div>

        </div>
    </BrowserRouter>
  );
}

export default App;
