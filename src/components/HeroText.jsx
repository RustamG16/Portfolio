import { FlipWords } from "./FlipWords";
import { motion } from "framer-motion";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I'm Rustam
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Developer <br /> Dedicated to Crafting
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-8xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Solutions
          </motion.p>

          {/* Download Button - Desktop */}
          <motion.a
            href="/assets/Rustam_CV.pdf"
            download
            className="mt-8 inline-block rounded-full border-2 border-white bg-white/10 px-6 py-3 text-lg font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-black hover:shadow-lg"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2 }}
          >
            Download CV
          </motion.a>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col items-center space-y-6 md:hidden">
        <motion.p
          className="text-4xl font-medium text-white"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Rustam
        </motion.p>
        <motion.p
          className="text-5xl font-black text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >
          Building
        </motion.p>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5 }}
        >
          <FlipWords
            words={words}
            className="font-bold text-white text-7xl"
          />
        </motion.div>
        <motion.p
          className="text-4xl font-black text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8 }}
        >
          Web Applications
        </motion.p>

        {/* Download Button - Mobile */}
        <motion.a
          href="/assets/Rustam_CV.pdf"
          download
          className="mt-6 inline-block rounded-full border-2 border-white bg-white/10 px-5 py-3 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-black hover:shadow-lg"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2 }}
        >
          ⬇️ Download CV
        </motion.a>
      </div>
    </div>
  );
};

export default HeroText;
