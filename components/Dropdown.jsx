import Link from "next/link";

const Dropdown = ({ isOpen, menuToggle }) => {
    return (
        <div
            className={
                isOpen
                    ? " absolute top-17 w-screen right-0 flex flex-col justify-center items-center bg-yellow-500 "
                    : "hidden"
            }
            onClick={menuToggle}
        >
            <NavItem href={"/"} item="HOME" />
            <NavItem href={"/menu"} item="MENU" />
            <NavItem href="/about" item="ABOUT" />
            <NavItem href="/contact" item="CONTACT" />
        </div>
    );
};

const NavItem = ({ item, href }) => {
    return (
        <Link href={`${href}`}>
            <a className=" p-7">{item}</a>
        </Link>
    );
};

export default Dropdown;
