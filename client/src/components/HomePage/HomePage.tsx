import {Header} from "../common/Header/Header";
import {Title} from "../common/Title";
import {ReviewsList} from "../common/ReviewsList/ReviewsList";
import {AboutUs} from "./AboutUs/AboutUs";
import React, {useContext, useEffect} from "react";
import {Contact} from "./Contact/Contact";
import {useLocation} from "react-router-dom";
import {ReviewsListContext} from "../App";

export const HomePage = () => {
    const {reviewsList, error} = useContext(ReviewsListContext);
    const location = useLocation();
    useEffect(() => {
        const {hash} = location;
        if (hash) {
            const targetElement = document.querySelector(hash);
            if (targetElement) {
                setTimeout(() => {
                    targetElement.scrollIntoView({behavior: 'smooth'});
                }, 0);
            }
        }
    }, [])
    return (
        <>
            <Header
                bgUrl={"https://cdn2.unrealengine.com/tw3ng-presspreviews-pc-geralt-and-ciri-rgb-en-3840x2160-165da197a575.png"}>
                <Title/>
                <h3 className={"decorated"}>Playing with passion, we review with heart</h3>
            </Header>
            <ReviewsList title={"Promoted Posts"} error={error} reviewsList={reviewsList && reviewsList.slice(0, 3)}/>
            <Contact/>
            <AboutUs/>
        </>
    )
}
