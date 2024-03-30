import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <motion.div
          whileHover={{ scale: 1.2, rotate: [-10, 10, -10, 10, 0] }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0, // No delay for the first icon
          }}
          className="rounded-2xl border-4 border-neutral-900 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2, rotate: [-10, 10, -10, 10, 0] }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.1, // 0.1 seconds delay for the second icon
          }}
          className="rounded-2xl border-4 border-neutral-900 p-4"
        >
          <TbBrandNextjs className="text-7xl text-" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2, rotate: [-10, 10, -10, 10, 0] }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2, // 0.2 seconds delay for the third icon
          }}
          className="rounded-2xl border-4 border-neutral-900 p-4"
        >
          <IoLogoJavascript className="text-7xl text-yellow-300" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2, rotate: [-10, 10, -10, 10, 0] }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3, // 0.3 seconds delay for the fourth icon
          }}
          className="rounded-2xl border-4 border-neutral-900 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2, rotate: [-10, 10, -10, 10, 0] }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4, // 0.4 seconds delay for the fifth icon
          }}
          className="rounded-2xl border-4 border-neutral-900 p-4"
        >
          <SiMongodb className="text-7xl text-green-600" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2, rotate: [-10, 10, -10, 10, 0] }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5, // 0.5 seconds delay for the sixth icon
          }}
          className="rounded-2xl border-4 border-neutral-900 p-4"
        >
          <SiTailwindcss className="text-7xl text-cyan-600" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
