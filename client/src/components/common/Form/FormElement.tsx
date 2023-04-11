import "./Form.css"
import {ChangeEvent} from "react";

interface Props {
    name?: string;
    type: string;
    placeholder?: string;
    required: boolean;
    change?: (e: ChangeEvent<any>) => void;
    value?: string | number;
    maxLength?: number;
}

export const FormElement = (props: Props) => {
    //@TODO resume work here, check trello
    const {name, type, placeholder, required, change, value, maxLength} = props
    return (
        <div className="flex-column form-group">
            {/*if the type of input is submit, we don't want to make label for it*/}
            {
                type === "submit" || !props.name ?
                    null :
                    <label htmlFor={name}>{name}:</label>
            }
            {
                // creating textarea or input tag, depends on type value
                !(type === "textarea") ?
                    (
                        // checks if input is required to submit
                        required ?
                            <input type={type}
                                   className={type === "submit" ? "button" : ""}
                                   id={name}
                                   name={name}
                                   placeholder={placeholder} required
                                   value={type === "submit" ? name : value} onChange={change}
                                   maxLength={maxLength || undefined}
                            /> :
                            <input
                                type={type}
                                className={type === "submit" ? "button" : ""}
                                id={name}
                                name={name}
                                placeholder={placeholder}
                                value={type === "submit" ? name : value} onChange={change}
                                maxLength={maxLength || undefined}
                            />
                    )
                    :
                    (
                        // checks if input is required to submit
                        required ?
                            <textarea id={name} name={name} placeholder={placeholder} value={value} required
                                      onChange={change}/> :
                            <textarea id={name} name={name} placeholder={placeholder} value={value} onChange={change}/>
                    )
            }
        </div>
    )
}