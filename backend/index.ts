"use strict";
import express from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";
import {handleError} from "./utils/error";
import {ReviewRouter} from "./routers/Review.router";
import {addReviewHandler} from "./lib/addReviewHandler";
import bodyParser from "body-parser"
import passport from "passport";

dotenv.config()


const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}));
app.use(bodyParser.json());
app.use(passport.initialize());


app.use("/review", ReviewRouter);


app.use(handleError)

//IT SHOULD add a new review every 24 hours
setInterval(addReviewHandler, 86400000);

app.listen(3001, () => console.log("App listening on http://localhost:3001"));



