import {NavLink} from "react-router-dom";
import navCss from "./Navigation.module.css";

const Nav = () => {
    return (
        <nav className={navCss.nav}>
            <div>
                <NavLink to={'profile'} className={ navData => navData.isActive ? navCss.active : navCss.item }>Profile</NavLink>
            </div>
            <div>
                <NavLink to={'dialogs'} className={ navData => navData.isActive ? navCss.active : navCss.item }>Messages</NavLink>
            </div>
            <div>
                <NavLink to={'news'} className={ navData => navData.isActive ? navCss.active : navCss.item }>News</NavLink>
            </div>
            <div>
                <NavLink to={'music'} className={ navData => navData.isActive ? navCss.active : navCss.item }>Music</NavLink>
            </div>
            <div>
                <NavLink to={'settings'} className={ navData => navData.isActive ? navCss.active : navCss.item }>Settings</NavLink>
            </div>
        </nav>
    );
};

export default Nav;