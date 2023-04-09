import navCss from "./Navigation.module.css";

const Nav = () => {
    return (
        <nav className={navCss.nav}>
            <div className={navCss.item}>
                <a href="">Profile</a>
            </div>
            <div className={navCss.item}>
                <a href="">Messages</a>
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