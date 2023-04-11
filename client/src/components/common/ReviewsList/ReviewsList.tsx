import React from "react";
import "./ReviewsList.css"
import {OneReviewCard} from "./OneReviewCard";
import {ChapterTitle} from "../ChapterTitle/ChapterTitle";
import {Loading} from "../Info/Loading";
import {ErrorInfo} from "../Info/Error";
import {Reviews_List} from "../../../types/Reviews_List";
import {Info} from "../Info/Info";

interface Props extends Reviews_List {
    title: string;
}

export const ReviewsList = (props: Props) => {
    const {error, reviewsList, title} = props;
    return (
        <>
            <div className="container">
                <ChapterTitle>
                    {title}
                </ChapterTitle>
                {
                    !error ?
                        <>
                            {
                                reviewsList ?
                                    (
                                        reviewsList.length > 0 ?
                                            reviewsList.map(review => <OneReviewCard key={review.id}
                                                                                     review={review}/>) :
                                            <Info text={"No reviews found"}/>
                                    ) :
                                    <Loading/>
                            }
                        </>
                        : <ErrorInfo message={error}/>
                }
            </div>
        </>
    )
}