import React, {useContext} from 'react';
import "./SinglePost.css"
import {useParams} from "react-router-dom";
import {ChapterTitle} from "../common/ChapterTitle/ChapterTitle";
import {ZoomableImage} from "../common/ZoomableImage/ZoomableImage";
import {GoHomeBtn} from "../common/GoHomeBtn";
import {ImageSlider} from "../common/Slider/Slider";
import {ErrorInfo} from "../common/Info/Error";
import {ReviewsListContext} from "../App";
import {Info} from "../common/Info/Info";


export const SinglePost = () => {
    const {reviewId} = useParams();
    const {reviewsList, error} = useContext(ReviewsListContext);
    const review = reviewsList?.filter(review => review.id === reviewId)[0];
    return (
        <div className={"flex-column post-wrapper"}>
            {
                !error ?
                    <>
                        {
                            review ? (
                                    <>
                                        <ChapterTitle>{review.name}</ChapterTitle>
                                        {/*INFO*/}
                                        <section className="review bordered flex-column">
                                            <h1 className="review-title"> {review.name}</h1>
                                            <p className="review-release-date">Release date: {review.released}</p>
                                            <p className="review-date">Review date: {review.review_date}</p>
                                            <ZoomableImage style={{
                                                transform: "unset",
                                                minWidth: "unset",
                                                maxWidth: "960px",
                                                width: "80%",
                                                margin: "0 auto",
                                            }} background_image={review.background_image} name={review.name}/>

                                            {/*REVIEW*/}
                                            <article className="review-text">
                                                <p>{review.review}</p>
                                            </article>

                                            <h2 className={"review-title"}>Some photos of the game</h2>
                                            {/*GALLERY*/}
                                            <ImageSlider images={JSON.parse(review.short_screenshots)}/>
                                            {/*GO-HOME*/}
                                            <GoHomeBtn/>
                                        </section>

                                    </>
                                )
                                :
                                <Info text={"We couldn't find review with such an ID"}/>
                        }
                    </> :
                    <ErrorInfo message={error}/>
            }
        </div>
    )
};

