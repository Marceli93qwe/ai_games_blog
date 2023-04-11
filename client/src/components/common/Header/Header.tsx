import React, {ReactNode} from 'react';
import './Header.css';

interface Props {
    bgUrl: string;
    children: ReactNode;
}

export const Header = (props: Props) => {
    return (
        <div className="flex-row header" style={{
            backgroundImage: `url("${props.bgUrl}")`,
            backgroundBlendMode: "darken",
        }}>
            <div className="header-text">
                {props.children}
            </div>
        </div>
    );
};

