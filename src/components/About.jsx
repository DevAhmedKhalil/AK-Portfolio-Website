import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import photo from "../Images/ahmed.webp";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
          loading="lazy"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <div className="mt-4 flex flex-col-reverse lg:flex-row lg:items-center gap-10">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I am a Software Engineer who builds web applications, dashboards, and
          internal business tools, from the database to deployment. I work
          across the full stack with Laravel, Django, and Node.js on the backend
          and React, JavaScript, and Blade on the frontend. I focus on clean,
          readable code and well-structured systems that are easy to maintain
          and grow. I deploy with Docker, Dokploy, and CI/CD, and automate
          repetitive business tasks with n8n and Python.
        </motion.p>

        <motion.div
          variants={fadeIn("up", "spring", 0.2, 0.75)}
          className="green-pink-gradient p-[1px] rounded-[20px] shadow-card w-full max-w-[300px] mx-auto lg:mx-0 shrink-0"
        >
          <img
            src={photo}
            alt="Ahmed Khalil"
            width={640}
            height={813}
            className="w-full h-auto rounded-[20px]"
            loading="lazy"
          />
        </motion.div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
