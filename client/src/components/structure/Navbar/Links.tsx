import {Link} from "react-router-dom";

interface Props {
    links: { name: string; link: string; hash: string | null }[];
    color?: string;
}

export const Links = (props: Props) => {
    const {links} = props;
    return (
        <>
            {links.map((link, id) => link.hash ?
                <Link className={"link"} style={{
                    color: props.color,
                }} to={link.link + link.hash} key={link.name}>{link.name}</Link> :
                <Link className={"link"} style={{
                    color: props.color,
                }} to={link.link} key={link.name}>{link.name}</Link>
            )}

        </>
    )
}