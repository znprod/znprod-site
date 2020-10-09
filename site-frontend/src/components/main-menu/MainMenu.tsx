import burger from "../../images/burger.png";
import {Link} from "react-router-dom";
import kvadrat from "../../images/kvadrat2.png";
import React from "react";
import './MainMenu.css';

type State = {
    isBurgerMenuOpen: boolean
}

class MainMenu extends React.Component {

    state:State = {isBurgerMenuOpen: false}
    private wrapperRef: React.RefObject<HTMLElement>;

    constructor() {
        super({});
        this.wrapperRef = React.createRef();
        this.toggle = this.toggle.bind(this)
        this.hideBurgerMenu = this.hideBurgerMenu.bind(this)
        this.handleClickOutside = this.handleClickOutside.bind(this)
    }

    toggle() {
        const currentState = this.state.isBurgerMenuOpen;
        this.setState({ isBurgerMenuOpen: !currentState });
    }

    hideBurgerMenu() {
        this.setState({isBurgerMenuOpen: false})
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside)
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside)
    }

    handleClickOutside(event:Event) {
        // @ts-ignore
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)){
            this.hideBurgerMenu()
        }
    }

    render() {
        return <nav className="AppNav" ref={this.wrapperRef}>
            <img className="burger" src={burger} alt="" onClick={this.toggle}/>

            <ul className={this.state.isBurgerMenuOpen ? "burger-open" : "burger-closed"}>
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
    }
}

export default MainMenu