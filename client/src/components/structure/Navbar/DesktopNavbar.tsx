import {Links} from "./Links";

interface Props {
    links: { name: string; link: string; hash: string | null }[];
}

export const DesktopNavbar = (props: Props) => {
    const {links} = props;
    return (
        <ul className={"desktop"}>
            <Links links={links}/>
        </ul>
    )
}