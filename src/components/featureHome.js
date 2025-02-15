import { MdOutlineDesktopWindows,MdOutlineRemoveRedEye, 
    MdOutlineSecurity, MdOutlineSmartphone } from "react-icons/md";
import { BsPatchCheck } from "react-icons/bs";
import { FaChrome} from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";

export default function FeatureHome() {

    return (
        <>
            <section className="materials">
                <section className="ends">
                    <h3>Features</h3>
                    <div className="line-width">
                        <div className="line-color"></div>
                    </div>
                </section>

                <section className="flex-container about">
                    <div className="aboutUs feature">
                        <p>Siitecch empowers aspiring developers with a structured, all-in-one platform to learn full-stack JavaScript development, collaborate, grow their skills, and achieve success.</p>
                    </div>

                    <div className="about_feature">
                        <div className="feature_box">
                            <div className="check"><BsPatchCheck style={{ fontSize: '30px' }} /></div>
                            <div className="featureHead">GROW</div>
                            <div className="featureText">Advance your skills and confidence as you build real-world projects step-by-step.</div>
                        </div>
                        <div className="feature_box one">
                            <div className="check"><FaUsers style={{ fontSize: '30px' }} /></div>
                            <div className="featureHead">COLLABORATE</div>
                            <div className="featureText">Learn together with like-minded developers, share ideas, and grow as a community.</div>
                        </div>
                        <div className="feature_box two">
                            <div className="check"><MdOutlineSecurity style={{ fontSize: '30px' }} /></div>
                            <div className="featureHead">SECURITY</div>
                            <div className="featureText">Enjoy a secure and reliable platform that keeps your progress safe and accessible.</div>
                        </div>

                    </div>
                </section>
                <section className="feature_below">
                    <div className="feature_box below">
                        <div className="featureHead" style={{fontWeight: 700}}>Use On Any Device</div>
                        <div className="featureText">Access Siitecch seamlessly on your mobile, tablet, or desktop, anytime and anywhere.</div>
                        <div className="check"><MdOutlineDesktopWindows style={{ fontSize: '30px' }} /></div>
                    </div>
                    <div className="feature_box below">
                        <div className="featureHead" style={{fontWeight: 700}}>Retina Ready</div>
                        <div className="featureText">Enjoy sharp, high-quality visuals that look stunning on all modern, high-resolution screens.</div>
                        <div className="check"><MdOutlineRemoveRedEye style={{ fontSize: '30px' }} /></div>
                    </div>
                    <div className="feature_box below">
                        <div className="featureHead" style={{fontWeight: 700}}>Fully Responsive</div>
                        <div className="featureText">Siitecch is designed to adapt perfectly to any screen size, ensuring a smooth experience across devices.</div>
                        <div className="check"><MdOutlineSmartphone style={{ fontSize: '30px' }} /></div>
                    </div>
                    <div className="feature_box below">
                        <div className="featureHead" style={{fontWeight: 700}}>Browser Compatibility</div>
                        <div className="featureText">Siitecch works flawlessly across all major browsers, delivering consistent performance everywhere.</div>
                        <div className="check"><FaChrome style={{ fontSize: '30px' }} /></div>
                    </div>
                </section>

                <br />
                <section className="ends">
                    <div className="line-width none">
                        <div className="line-color center"></div>
                    </div>
                    <div className=""></div>
                </section>

            </section>
        </>
    )
}