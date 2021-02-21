import React from "react";
import { About, Description, Image, Hide } from "../styles";
import { motion, motionn } from "framer-motion";
//images
import home1 from "../img/home1.png";

const AboutSection = () => {
    return (
        <About>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>
                            your <span>dreams</span> come
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>true</motion.h2>
                    </Hide>
                </motion.div>
                <p>
                    Contact us for any photography or videography ideas that you
                    have. We have professionals with amazinng skills.
                </p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="guy with camera" />
            </Image>
        </About>
    );
};

export default AboutSection;
