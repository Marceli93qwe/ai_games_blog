import "./navbar.css"
import {DesktopNavbar} from "./DesktopNavbar";
import {MobileNavbar} from "./MobileNavbar";
import {Title} from "../../common/Title";
import {useContext} from "react";
import {LoggedInContext} from "../../App";

const links = [
    {
        name: "home",
        link: "/",
        hash: null,
    },
    {
        name: "about us",
        link: "/",
        hash: "#about-us"
    },
    {
        name: "login",
        link: "/login",
        hash: null,
    },
    {
        name: "register",
        link: "/register",
        hash: null,
    },
    {
        name: "blog",
        link: "/blog",
        hash: null,
    }
];

const loggedInLinks = [
    {
        name: "home",
        link: "/",
        hash: null,
    },
    {
        name: "about us",
        link: "/",
        hash: "#about-us"
    },
    {
        name: "account",
        link: "/account",
        hash: null,
    },
    {
        name: "blog",
        link: "/blog",
        hash: null,
    }
]
export const Navbar = () => {
    const {loggedIn} = useContext(LoggedInContext);

    return (
        <nav className={"flex-row navbar"}>
            <DesktopNavbar links={loggedIn ? loggedInLinks : links}/>
            <MobileNavbar links={loggedIn ? loggedInLinks : links}/>
            <Title/>
        </nav>
    )
}