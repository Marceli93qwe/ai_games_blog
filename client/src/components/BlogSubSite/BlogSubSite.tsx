import {ReviewsList} from "../common/ReviewsList/ReviewsList";
import {SearchBar} from "./SearchBar";
import {ChangeEvent, useContext, useState} from "react";
import "./BlogSubSite.css"
import {ReviewsListContext} from "../App";


export const BlogSubSite = () => {
    const {reviewsList, error} = useContext(ReviewsListContext);
    //searching for reviews by game title
    const [title, setTitle] = useState("");
    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }
    return (
        <div className={"all-posts-wrapper"}>
            <SearchBar value={title} change={handleTitleChange}/>
            <ReviewsList
                title={"All reviews"} //title of the Section
                error={error}
                reviewsList={reviewsList && reviewsList.filter(review => review.name.toLowerCase().includes(title.toLowerCase()))} //filters reviews by value of "title" const
            />
        </div>
    )
}
