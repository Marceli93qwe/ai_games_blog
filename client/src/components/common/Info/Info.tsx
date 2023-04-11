import {ReactNode} from "react";
import "./Info.css"

interface Props {
    children?: ReactNode;
    text?: string;
}

export const Info = (props: Props) => {
    const {text, children} = props;
    return (
        <div className="flex-column info-container bordered">
            {/*MOST POSSIBLY AN ICON FROM FONTAWESOME*/}
            {children ?
                <span className={"info-text"}>
                    {children}
                </span>
                : null
            }
            <p className="info-text">
                {text}
            </p>
        </div>
    )
}