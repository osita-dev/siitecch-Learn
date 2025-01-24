import Footer from "../components/footer";
import Header from "../components/header";
import FloatButton from "../components/floatButton";
import FrontBack from "../components/frontBackComponent";
import HomeAbout from "../components/homeAbout";
import FeatureHome from "../components/featureHome";
import Ack from "../components/acknowledged";
import Services from "../components/services";
import Question from "../components/question";
import SendFeedBack from "../components/sendFeedback";
import FeedBackHome from "../components/feedbackHome";

export default function HomePage() {

    return (
        <>
            <Header />
            <FrontBack />
            <HomeAbout/>
            <FeatureHome/>
            <Ack/>
            <Services/>
            <Question/>
            <FeedBackHome/>
            <SendFeedBack/>
            <FloatButton />
            <Footer />
            {/* <Bottom /> */}
        </>
    )
}
