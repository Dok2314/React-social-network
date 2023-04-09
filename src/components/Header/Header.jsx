import headerCss from "./Header.module.css";

const Header = () => {
    return (
        <header className={headerCss.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png" alt=""/>
        </header>
    );
};

export default Header;