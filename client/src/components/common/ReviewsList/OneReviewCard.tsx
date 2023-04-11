import React from "react";
import {Link} from "react-router-dom";
import {Review_Record} from "types";
import {ZoomableImage} from "../ZoomableImage/ZoomableImage";

interface Props {
    review: Review_Record;
}

export const OneReviewCard = (props: Props) => {
    const {review} = props;
    return (
        <div className="flex-row blog-post bordered">
            {/*DEPRECATED*/}
            {/*<div className="blog-post_img">*/}
            {/*    <img*/}
            {/*        src={review.background_image}*/}
            {/*        alt={review.name + " theme image"}*/}
            {/*    />*/}
            {/*</div>*/}
            <ZoomableImage background_image={review.background_image} name={review.name}/>
            <div className="blog-post_info">
                {/*@TODO blog_post_date*/}
                <div className="blog-post_date">
                    <span>{review.released}</span>
                </div>
                <h1 className="blog-post_title">{review.name}</h1>
                <p className="blog-post_text">
                    {/*@ts-ignore*/}
                    {[...review.review].slice(0, 300).join("") + "..."}
                </p>
                {/*@TODO resume work here, think how to make this Link a reusable component*/}
                <Link className={"button"} to={`/review/${review.id}`}>Read More</Link>
            </div>
        </div>
    );

}