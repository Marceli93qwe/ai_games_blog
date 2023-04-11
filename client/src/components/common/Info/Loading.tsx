import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {Info} from "./Info";

export const Loading = () => {
    return (
        <Info text={"Loading..."}>
            {<FontAwesomeIcon className={"rotate-animation"} icon={faSpinner}/>}
        </Info>
    )
}