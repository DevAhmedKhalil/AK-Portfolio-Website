import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ name, subtitle, description, tags, links }) => {
  return (
    <motion.div variants={fadeIn("up", "spring")}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full flex flex-col"
      >
        <div className="green-pink-gradient p-[1px] rounded-2xl">
          <div className="bg-black-100 rounded-2xl h-[140px] flex flex-col justify-center px-6">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-1 text-secondary text-[14px]">{subtitle}</p>
          </div>
        </div>
        <p className="mt-5 text-secondary text-[14px] flex-1">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
        {links.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#915EFF] px-4 py-1.5 text-white text-[14px] font-medium hover:bg-[#915EFF]"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Selected projects from my work, from client websites and SaaS products
          to internal tools and AI apps. Most repositories are private, so each
          card links to the live site or docs where available.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
