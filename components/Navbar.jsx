import Link from "next/link";

const Navbar = ({ toggle, menuToggle, isDark }) => {
    return (
        <nav
            className=" flex justify-between items-center
            transition delay-300 ease-in-out
            h-16 bg-white dark:bg-black text-black dark:text-white relative shadow-sm
            font-mono"
            role="navigation"
        >
            <NavItem href="/" item="SPACER" />
            <button onClick={toggle}>{isDark ? "DARK MODE" : "LIGHT MODE"}</button>
            <div className=" px-4 cursor-pointer md:hidden" onClick={menuToggle}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </div>
            <div className=" pr-8 md:block hidden">
                <NavItem href={"/"} item="HOME" />
                <NavItem href={"/menu"} item="MENU" />
                <NavItem href="/about" item="ABOUT" />
                <NavItem href="/contact" item="CONTACT" />
            </div>
        </nav>
    );
};

const NavItem = ({ item, href }) => {
    return (
        <Link href={`${href}`}>
            <a className="pl-8">{item}</a>
        </Link>
    );
};

export default Navbar;
