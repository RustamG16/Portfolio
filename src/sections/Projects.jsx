import { useEffect, useRef, useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  const [preview, setPreview] = useState(null);
  const [canHover, setCanHover] = useState(false);
  const frameRef = useRef(null);
  const pointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    const updateHoverCapability = () => {
      setCanHover(mediaQuery.matches);
    };

    updateHoverCapability();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updateHoverCapability);
    } else {
      mediaQuery.addListener(updateHoverCapability);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", updateHoverCapability);
      } else {
        mediaQuery.removeListener(updateHoverCapability);
      }
    };
  }, []);

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!preview || !canHover) return;

    pointerRef.current = {
      x: e.clientX + 20,
      y: e.clientY + 20,
    };

    if (frameRef.current) return;

    frameRef.current = window.requestAnimationFrame(() => {
      x.set(pointerRef.current.x);
      y.set(pointerRef.current.y);
      frameRef.current = null;
    });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
      id="work"
    >
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}
      {canHover && preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80 will-change-transform"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

export default Projects;
