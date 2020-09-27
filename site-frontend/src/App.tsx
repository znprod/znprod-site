import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    RouteComponentProps,
} from 'react-router-dom';
import Feed from './components/feed/Feed'
import logo from './images/logo.png'
import mordy from './images/mordy.png'
import './App.css';
import kvadrat from './images/kvadrat.png'

function App() {
    return (
        <div className="App">

            <Router>
                <div>
                    <Link to="/"><img className="logo" src={logo} alt="Подкаст &quot;Цинковый прод&quot;"/></Link>
                    <img src={mordy} alt="Морды" className="mordy"/>
                    <nav className="AppNav">
                        <ul>
                            <li>
                                <Link to="/"><img src={kvadrat}/>Выпуски</Link>
                            </li>
                            <li>
                                <Link to="/partnership"><img src={kvadrat}/>Партнерство</Link>
                            </li>
                            <li>
                                <Link to="/subscribe"><img src={kvadrat}/>Подписаться</Link>
                            </li>
                            <li>
                                <Link to="/about"><img src={kvadrat}/>О подкасте</Link>
                            </li>
                        </ul>
                    </nav>

                    <Route path="/" exact component={Index}/>
                    <Route path="/partnership" component={Partnership}/>
                    <Route path="/subscribe" component={Subscribe}/>
                    <Route path="/about" component={About}/>
                </div>
            </Router>
        </div>
    );
}

function Index() {
    return (
        <div className="content">
            <header><h1>Выпуски</h1></header>
            <Feed/>
        </div>
    );
}

function Partnership(){
    return (
        <div className="content">
            <header><h1>Партнерство</h1></header>
        </div>
    )
}

function Subscribe(){
    return (
        <div className="content">
            <header><h1>Подписаться</h1></header>
        </div>
    )
}

function About(){
    return (
        <div className="content">
            <header><h1>О подкасте</h1></header>
            <p>Подкаст о разработке и IT в целом. Развлекательно-познавательный контент. </p>
            <p>Постоянные ведущие:</p>
            <ul>
                <li>Антон Околелов</li>
                <li>Никита Васильченко</li>
                <li>Олег Грицак</li>
            </ul>
        </div>
    )
}

// type TParams = { id: string };
//
// function Product({match}: RouteComponentProps<TParams>) {
//     return <h2>This is a page for product with ID: {match.params.id} </h2>;
//
// }

export default App;


/*
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

 */