import React from 'react';
import {
    BrowserRouter as Router,
    //Switch,
    Route,
    Link,
    //RouteComponentProps,
} from 'react-router-dom';
import Feed from './components/feed/Feed'
import logo from './images/logo.png'
import mordy from './images/mordy.png'
import './App.css';
import kvadrat from './images/kvadrat.png'
import burger from './images/burger.png'

type State = {
    isBurgerMenuOpen: boolean
}

class App extends React.Component {

    state: State = {isBurgerMenuOpen: false}

    constructor() {
        super({});
        this.toggle = this.toggle.bind(this)
        this.hideBurgerMenu = this.toggle.bind(this)
    }

    toggle() {
        const currentState = this.state.isBurgerMenuOpen;
        this.setState({ isBurgerMenuOpen: !currentState });
    }

    hideBurgerMenu() {
        this.setState({isBurgerMenuOpen: false})
    }

    render() {
        const {isBurgerMenuOpen} = this.state;
        return (
            <div className="App">

                <Router>
                    <div>
                        <Link to="/"><img className="logo" src={logo} alt="Подкаст &quot;Цинковый прод&quot;"/></Link>
                        <img src={mordy} alt="Морды" className="mordy"/>

                        <nav className="AppNav">
                            <img className="burger" src={burger} alt="" onClick={this.toggle}/>

                            <ul className={isBurgerMenuOpen ? "burger-open" : "burger-closed"}>
                                <li>
                                    <Link onClick={this.hideBurgerMenu} to="/"><img src={kvadrat} alt=""/>Выпуски</Link>
                                </li>
                                <li>
                                    <Link onClick={this.hideBurgerMenu}  to="/partnership"><img src={kvadrat} alt=""/>Партнерство</Link>
                                </li>
                                <li>
                                    <Link onClick={this.hideBurgerMenu}  to="/subscribe"><img src={kvadrat} alt=""/>Подписаться</Link>
                                </li>
                                <li>
                                    <Link onClick={this.hideBurgerMenu}  to="/about"><img src={kvadrat} alt=""/>О подкасте</Link>
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
}

function Index() {
    return (
        <div className="content">
            <header><h1>Выпуски</h1></header>
            <Feed/>
        </div>
    );
}

function Partnership() {
    return (
        <div className="content">
            <header><h1>Партнерство</h1></header>
        </div>
    )
}

function Subscribe() {
    return (
        <div className="content">
            <header><h1>Подписаться</h1></header>
            <p>Посмотреть и подписаться на Youtube можно <a href="https://www.youtube.com/channel/UC6cTShKx3lJWw-EzSr_ZAfw">Здесь</a></p>
            <p>Аудиоверсию можно найти в любой программе для прослушивания подкастов,
                например <a href="https://podcasts.apple.com/ru/podcast/%D1%86%D0%B8%D0%BD%D0%BA%D0%BE%D0%B2%D1%8B%D0%B9-%D0%BF%D1%80%D0%BE%D0%B4-18/id1458311254?mt=2">Apple Podcasts</a> или <a href="https://soundcloud.com/znprod">SoundCloud</a>
            </p>

            Также у нас есть <a href="https://t.me/ZnProd">Telegram-чат</a>, <a href="https://t.me/ZnProdChannel">Telegram-канал</a>, <a href="https://twitter.com/podcast_znprod">Twitter</a> и
            даже <a href="https://www.instagram.com/zn.prod">Instagram</a>

        </div>
    )
}

function About() {
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