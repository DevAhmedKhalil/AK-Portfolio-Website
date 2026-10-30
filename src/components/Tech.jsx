import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { education, languages, skills, technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const renderTechnologies = () => {
  return technologies.map(({ name, icon }) => (
    <div className="w-28 h-28" key={name}>
      <BallCanvas icon={icon} />
    </div>
  ));
};

const InfoCard = ({ title, children, index = 0 }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.75)}
    className="bg-tertiary rounded-2xl p-6"
  >
    <h3 className="text-white text-[18px] font-bold">{title}</h3>
    {children}
  </motion.div>
);

const Tech = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What I work with</p>
      <h2 className={styles.sectionHeadText}>Skills</h2>
    </motion.div>

    <div className="mt-12 flex flex-row flex-wrap justify-center gap-10">
      {renderTechnologies()}
    </div>

    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map(({ category, items }, index) => (
        <InfoCard key={category} title={category} index={index}>
          <ul className="mt-4 flex flex-wrap gap-2">
            {items.map((item) => (
              <li
                key={item}
                className="rounded-full border border-[#915EFF]/50 px-3 py-1 text-secondary text-[13px]"
              >
                {item}
              </li>
            ))}
          </ul>
        </InfoCard>
      ))}
    </div>

    <div className="mt-6 grid gap-6 sm:grid-cols-2">
      <InfoCard title="Education">
        <p className="mt-3 text-white text-[16px] font-medium">
          {education.degree}
        </p>
        <p className="mt-1 text-secondary text-[14px]">
          {education.school} | {education.years}
        </p>
      </InfoCard>
      <InfoCard title="Languages">
        <ul className="mt-3 space-y-1">
          {languages.map(({ name, level }) => (
            <li key={name} className="text-secondary text-[14px]">
              <span className="text-white font-medium">{name}</span> - {level}
            </li>
          ))}
        </ul>
      </InfoCard>
    </div>
  </>
);

export default SectionWrapper(Tech, "skills");
