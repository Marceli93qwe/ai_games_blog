import React, {createContext, useEffect, useState} from 'react';
import {Navbar} from "./structure/Navbar/Navbar";
import {Footer} from "./structure/Footer/Footer";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {SinglePost} from "./SinglePost/SinglePost";
import {HomePage} from "./HomePage/HomePage";
import {Login} from "./Account/Login";
import {Register} from "./Account/Register";
import {Review_Record} from 'types';
import {BlogSubSite} from "./BlogSubSite/BlogSubSite";


// @ts-ignore
export const ReviewsListContext = createContext<{ reviewsList: Review_Record[] | null, error: string | null }>();
//@ts-ignore
export const LoggedInContext = createContext<{
    loggedIn: string | null,
    setLoggedIn: React.Dispatch<React.SetStateAction<string | null>>
}>()

function App() {
    const [reviewsList, setReviewsList] = useState<Review_Record[] | null>(null);
    const [reviewsListError, setReviewsListError] = useState<string | null>(null);
    const [loggedIn, setLoggedIn] = useState<string | null>(null);
    useEffect(() => {
        // DOWNLOADING LIST OF REVIEWS FROM DATABASE
        (async () => {
            try {
                const response = await fetch("http://localhost:3001/review");
                const responseStatusCodeMeaning = String(response.status).charAt(0);
                if (responseStatusCodeMeaning === "4" || responseStatusCodeMeaning === "5") {
                    // @TODO check it gives a warning
                    throw new Error(await response.json())
                }
                setReviewsList(await response.json());
            } catch (err: any) {
                setReviewsListError(err.message)
                console.error(err.message)
            }
        })();
        (async () => {
            try {

            } catch (e) {

            }
        })()
    }, []);

    return (
        // CONTEXT PROVIDER FOR loggedIn variable
        <LoggedInContext.Provider value={{loggedIn, setLoggedIn}}>
            {/*CONTEXT PROVIDER FOR REVIEW LIST*/}
            <ReviewsListContext.Provider value={{reviewsList, error: reviewsListError}}>
                <Router>
                    <Navbar/>
                    <Routes>
                        {/*HOMEPAGE*/}
                        <Route path="/" element={
                            <HomePage/>
                        }/>
                        {/*SEARCHED REVIEW*/}
                        <Route path="/review/:reviewId" element={<SinglePost/>}/>
                        {/*BLOG*/}
                        <Route path="/blog" element={
                            <BlogSubSite/>
                        }/>
                        {/*ACCOUNT ACTION PAGES*/}
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        {/*@TODO CREATE A PATH FOR LOGGED IN USERS*/}
                        {/*<Route path={"/account"} element={<PrivateRoute path={"/account"} element={<Account/>}/>}/>*/}
                    </Routes>

                    <Footer/>
                </Router>
            </ReviewsListContext.Provider>
        </LoggedInContext.Provider>

    );
}

export default App;
