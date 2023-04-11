import React from "react";
import "./ZoomableImage.css"

interface Props {
    background_image: string;
    name: string;
    style?: {
        width?: string;
        minWidth?: string;
        maxWidth?: string;
        transform?: string;
        margin?: string;
    }
}

export const ZoomableImage = (props: Props) => {
    const {background_image, name, style} = props;
    return (
        <div className="blog-post_img" style={style}>
            <img
                src={background_image}
                alt={name + " theme image"}
            />
        </div>
    )
}