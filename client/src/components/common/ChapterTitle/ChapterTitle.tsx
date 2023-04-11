import {ReactNode} from "react";
import "./ChapterTitle.css"


interface Props {
    children: ReactNode;
    id?: string;
}

export const ChapterTitle = (props: Props) => {
    return <h2 className={"chapter-title"} id={props.id}>
        {props.children}
    </h2>
}
