import {Form} from "../common/Form/Form";
import {FormElement} from "../common/Form/FormElement";
import {ChangeEvent, FormEvent, useState} from "react";
import {ErrorInfo} from "../common/Info/Error";
import {Success} from "../common/Info/Success";

interface RegisterFields {
    username: string;
    password: string;
    confirmPassword: string;
}

export const Register = () => {
    const [registrationError, setRegistrationError] = useState<string | null>(null);
    const [registrationSuccess, setRegistrationSuccess] = useState<string | null>(null)
    //Create state for controlled component Register
    const [formData, setFormData] = useState<RegisterFields>({
        username: '',
        password: '',
        confirmPassword: '',
    });
    // Handles changes in Register form
    // e.target.name and property name in formdata must be identical
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setRegistrationError("Sorry, we are still working on this functionality ;(")
    };
    return (

        <div className={"flex-column"} style={{
            minHeight: "93vh",
            gap: "2vh"
        }}>
            <Form submit={handleSubmit} title={"Register"}>
                <FormElement change={handleChange} value={formData['username']} name={"username"}
                             placeholder={'Enter username'} type={"text"} required={true} maxLength={30}/>
                <FormElement change={handleChange} value={formData['password']} name={"password"}
                             placeholder={'Enter password'} type={"password"} required={true}/>
                <FormElement change={handleChange} value={formData['confirmPassword']} name={"confirmPassword"}
                             placeholder={'Confirm password'} type={"password"} required={true}/>
                <FormElement name={'submit'} type={'submit'} required={false}/>
            </Form>
            {
                // if error occurred, display error info
                registrationError ?
                    <ErrorInfo message={registrationError.toString()}/>
                    : (
                        <>
                            {
                                // if not, display success info or empty tag
                                registrationSuccess ?
                                    <Success text={registrationSuccess}/> :
                                    <></>
                            }
                        </>
                    )
            }
        </div>
    )
}