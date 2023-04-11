import {Info} from "./Info";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";

interface Props {
    text: string;
}

export const Success = (props: Props) => {
    const {text} = props;
    return (
        <Info text={text}>
            <FontAwesomeIcon icon={faCheck}/>
        </Info>
    )
}