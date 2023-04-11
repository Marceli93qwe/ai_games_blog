import {Form} from "../common/Form/Form";
import {FormElement} from "../common/Form/FormElement";
import {ChangeEvent, FormEvent, useState} from "react";
import {ErrorInfo} from "../common/Info/Error";
import {Success} from "../common/Info/Success";


interface LoginFields {
    username: string;
    password: string;
}

export const Login = () => {
    const [loginError, setLoginError] = useState<string | null>(null);
    const [loginSuccess, setLoginSuccess] = useState<string | null>(null);
    // State for controlled component Login form
    const [formData, setFormData] = useState<LoginFields>({
        username: '',
        password: '',
    });

    // Handles changes in Login form
    // e.target.name and property name in formdata must be equal
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoginError("Sorry, we are still working on this functionality ;(")
    };
    return (
        <div className={"flex-column"} style={{
            minHeight: "93vh",
        }}>
            <Form submit={handleSubmit} title={"Log in"}>
                <FormElement value={formData['username']} change={handleChange} name={"username"}
                             placeholder={"Enter your username"} type={"text"} required={true}/>
                <FormElement value={formData['password']} change={handleChange} name={"password"}
                             placeholder={"Enter your password"} type={"password"} required={true}/>
                <FormElement name={'submit'} type={'submit'} required={false}/>
            </Form>
            {
                // if error occurred, display error info
                loginError ?
                    <ErrorInfo message={loginError.toString()}/>
                    : (
                        <>
                            {
                                // if not, display success info or empty tag
                                loginSuccess ?
                                    <Success text={loginSuccess}/> :
                                    <></>
                            }
                        </>
                    )
            }
        </div>
    )
}