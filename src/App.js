import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Navigation/Nav";
import Content from "./components/Content/Content";

const App = () => {
  return (
    <div className='app-wrapper'>
        <Header />

        <Nav />

        <Content />
    </div>
  );
};

export default App;