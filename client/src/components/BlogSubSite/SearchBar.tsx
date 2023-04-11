import {Form} from "../common/Form/Form";
import {FormElement} from "../common/Form/FormElement";
import {ChangeEvent} from "react";

interface Props {
    value: string;
    change: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar = (props: Props) => {
    return (
        <Form title={"Search by title"} submit={(e) => {
            e.preventDefault()
        }
        }>
            <FormElement value={props.value} change={props.change} type={"text"} required={false}/>
        </Form>
    )
}