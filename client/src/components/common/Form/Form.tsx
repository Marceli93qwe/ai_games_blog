import {FormEvent, ReactNode} from "react";
import {ChapterTitle} from "../ChapterTitle/ChapterTitle";

interface Props {
    children: ReactNode;
    title: string;
    style?: {};
    submit: (e: FormEvent<HTMLFormElement>) => void;
}

export const Form = (props: Props) => {
    const {children, title, submit} = props;

    return (
        <>
            <ChapterTitle>{title}</ChapterTitle>
            <form style={props.style} className="flex-column contact-form" onSubmit={submit}>
                {children}
            </form>
        </>
    )
}