import Footer from "../components/footer";
import Header from "../components/header";

export default function AboutDeveloper() {

    return (
        <>
            <Header />
            <section className="privacy dev" style={{ marginTop: "20px" }}>
                <img
                     src="images/christopher-Osita.jpg"
                    alt="Christopher_Osita_picture"

                    
                />
                <h1 style={{textAlign:"center"}}>Meet Christopher Osita</h1>
                <p >

                    <p>
                        Hi, I’m Christopher Osita, the visionary behind Siitecch a platform built to transform how beginners learn full-stack development with JavaScript. Siitecch isn’t just a project; it’s a reflection of my passion, dedication, and commitment to creating something that simplifies the learning experience for others.
                    </p>

                    <p>
                        My journey into tech taught me one thing: learning shouldn’t be complicated or scattered. That’s why I’ve worked tirelessly to ensure Siitecch is a one-stop hub where anyone, regardless of their background, can start from scratch and grow into confident developers.
                    </p>

                    <p>
                        From writing detailed beginner-friendly documentation to structuring the platform for maximum clarity and usability, I’ve been deeply involved in every aspect of Siitecch’s development. Each line of code, each feature, and every design decision has been made with the end user in mind. It’s been a long journey, but seeing this vision come to life makes every effort worth it.
                    </p>

                    <p>
                        Siitecch is more than a platform; <strong>it’s a promise</strong> A promise to provide a supportive, easy-to-follow, and inspiring space for beginners to thrive. Whether it’s understanding the “3 Wise Men” (HTML, CSS, JavaScript), exploring advanced topics, or even building their first projects, Siitecch is here to guide them every step of the way.
                    </p>

                    <p>
                        This journey hasn’t been easy, but it’s been fueled by my passion to make a difference. I’m proud to say that Siitecch is not just my project; it’s my mission.

                        <p>
                            Let’s shape the future of learning together!
                        </p>
                    </p>
                </p>

            </section>
            <Footer />
        </>
    )
}