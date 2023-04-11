import {ChapterTitle} from "../../common/ChapterTitle/ChapterTitle";
import {Header} from "../../common/Header/Header";
import {Title} from "../../common/Title";

export const AboutUs = () => {
    return (
        <>
            <ChapterTitle id={"about-us"}>About us</ChapterTitle>
            <Header
                bgUrl={"https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}>
                <Title/>
                <p className={"decorated"} style={{
                    lineHeight: "5rem",
                }}>
                    We are a team of PC and console gaming enthusiasts who decided to create a place where gamers can
                    learn everything about the latest titles and classic games. Our mission is to provide honest,
                    unbiased reviews and advice and tips to help you make decisions about what games are worth playing.
                </p>
            </Header>
        </>
    )
}