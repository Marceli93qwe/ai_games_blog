import {Links} from "./Links";

interface Props {
    links: { name: string; link: string; hash: string | null }[];
    display: boolean;
}

export const MobileMenu = (props: Props) => {
    const {links, display} = props;

    return (
        <ul className={"flex-column mobile-menu"} style={{
            left: `${display ? "0" : "-100%"}`,

        }}>
            <Links color={"#434343"} links={links}/>
        </ul>
    )
}