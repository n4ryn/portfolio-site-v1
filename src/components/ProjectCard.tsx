import { RxArrowTopRight } from "react-icons/rx";
import { ProjectType } from "../types";
import { motion } from "motion/react";

const ProjectCard = ({ project }: { project: ProjectType }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: project.id * 0.1,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0, y: 20 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: project.id * 0.1 + 0.2,
      },
    },
  };

  return (
    <motion.a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="overflow-hidden rounded-2xl bg-gray-100"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <motion.img
          src={project.image}
          alt={project.title}
          className="aspect-[16/10] h-full w-full object-cover"
          loading="lazy"
          variants={imageVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>

      <motion.div
        className="mt-3 flex items-end justify-between"
        variants={cardVariants}
      >
        <div>
          <motion.h3
            className="text-sm font-normal text-text-primary"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            {project.title}
          </motion.h3>
          <motion.p
            className="mt-0.5 text-xs font-extralight text-text-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: project.id * 0.1 + 0.4 }}
          >
            {project.description}
          </motion.p>
        </div>

        <motion.div
          whileHover={{ scale: 1.2, rotate: -10 }}
          transition={{ duration: 0.2 }}
        >
          <RxArrowTopRight className="h-5 w-5 text-text-primary" />
        </motion.div>
      </motion.div>
    </motion.a>
  );
};

export default ProjectCard;
