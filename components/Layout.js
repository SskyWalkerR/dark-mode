import { useState } from "react";
import Dropdown from "./Dropdown";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    const [isDark, setIsDark] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsDark(!isDark);
    };
    const menuToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`${isDark && "dark"} `}>
            <Navbar toggle={toggle} menuToggle={menuToggle} isDark={isDark} />
            <Dropdown isOpen={isOpen} menuToggle={menuToggle} />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
