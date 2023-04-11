import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Info} from "./Info";
import {faCircleExclamation} from "@fortawesome/free-solid-svg-icons";


interface Props {
    message: string;
}

export const ErrorInfo = (props: Props) => {
    return (
        <>
            <Info text={props.message}>
                <FontAwesomeIcon icon={faCircleExclamation}/>
            </Info>
        </>
    )
}