import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons'
import {MobileMenu} from "./MobileMenu";
import {useState} from "react";

interface Props {
    links: { name: string; link: string; hash: string | null }[];
}

export const MobileNavbar = (props: Props) => {
    const [displayMenu, setDisplayMenu] = useState(false);
    const toggleDisplayMenu = () => setDisplayMenu((prev) => !prev);
    return (
        <>
            {
                displayMenu ?
                    <FontAwesomeIcon onClick={toggleDisplayMenu} className={"icon"} icon={faXmark}/> :
                    <FontAwesomeIcon onClick={toggleDisplayMenu} className={"icon"} icon={faBars}/>
            }
            <MobileMenu display={displayMenu} links={props.links}/>
        </>
    )

}