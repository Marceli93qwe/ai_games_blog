import {Form} from "../../common/Form/Form"
import {FormElement} from "../../common/Form/FormElement";
import {ChangeEvent, FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom"

interface ContactFields {
    name: string;
    message: string;
    email: string;
}

export const Contact = () => {

    const navigate = useNavigate();
    // State for controlled component Contact form
    const [formData, setFormData] = useState<ContactFields>({
        name: '',
        email: '',
        message: ''
    });

    // Handles changes in contact form
    // e.target.name and property name in formdata must be identical
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Sorry, we are still working on this functionality ;((");
    };
    return (
        <>
            <Form title={"Contact"} submit={handleSubmit}>
                <FormElement value={formData['name']} name={'name'} type={'text'} placeholder={'Enter your name'}
                             required={true} change={handleChange}/>
                <FormElement value={formData['email']} name={'email'} type={'email'} placeholder={'Enter your email'}
                             required={true} change={handleChange}/>
                <FormElement value={formData["message"]} name={'message'} type={'textarea'} placeholder={'Your message'}
                             required={true} change={handleChange}/>
                <FormElement name={'submit'} type={'submit'} required={false}/>
            </Form>
        </>
    )
}