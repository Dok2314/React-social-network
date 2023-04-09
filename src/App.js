import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Navigation/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
  return (
      <BrowserRouter>
            <div className='app-wrapper'>
                <Header />

                <Nav />

                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs' element={<Dialogs />} />
                        <Route path='/profile' element={<Profile />} />
                    </Routes>
                </div>
            </div>
      </BrowserRouter>
  );
};

export default App;