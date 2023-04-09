import {NavLink} from "react-router-dom";
import navCss from "./Navigation.module.css";

const Nav = () => {
    return (
        <nav className={navCss.nav}>
            <div className={navCss.item}>
                <NavLink to={'profile'}>Profile</NavLink>
            </div>
            <div className={navCss.item}>
                <NavLink to={'dialogs'}>Messages</NavLink>
            </div>
            <div className={navCss.item}>
                <a href="">News</a>
            </div>
            <div className={navCss.item}>
                <a href="">Music</a>
            </div>
            <div className={navCss.item}>
                <a href="">Settings</a>
            </div>
        </nav>
    );
};

export default Nav;