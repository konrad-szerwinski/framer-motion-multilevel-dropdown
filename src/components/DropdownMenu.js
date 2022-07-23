import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DropdownItem from "./DropdownItem";

import { ReactComponent as ChevronIcon } from "../icons/chevron.svg";
import { ReactComponent as CogIcon } from "../icons/cog.svg";
import { ReactComponent as ArrowIcon } from "../icons/arrow.svg";

const DropdownMenu = () => {
  const [nestLevel, setNestLevel] = useState(0);
  const [dropdownHeight, setDropdownHeight] = useState();
  const dropdownRef = useRef();

  useEffect(() => {
    const dropdownTargetHeight =
      dropdownRef.current.childNodes[nestLevel].scrollHeight;
    setDropdownHeight(dropdownTargetHeight);
  }, [nestLevel]);

  const variants = {
    initial: {
      x: "120%"
    },
    active: (custom) => ({
      x: -custom * 120 + "%",
      position: custom === 0 ? "relative" : "absolute"
    }),
    exit: {
      position: "absolute",
      x: "120%"
    }
  };

  return (
    <motion.div
      ref={dropdownRef}
      className="dropdown"
      key="dropdown"
      initial={{
        y: "-120%",
        x: "-45%",
        opacity: 0
      }}
      animate={{
        y: "0",
        opacity: 1,
        height: dropdownHeight
      }}
      exit={{
        opacity: 0,
        y: "-120%"
      }}
    >
      <AnimatePresence>
        <motion.div
          className="menu"
          key="main"
          variants={variants}
          custom={nestLevel}
          animate="active"
          exit="exit"
        >
          <DropdownItem leftIcon={"🙍‍♂️"}>MyProfile</DropdownItem>
          <DropdownItem
            leftIcon={"⚙️"}
            rightIcon={<ChevronIcon />}
            onClick={() => setNestLevel(1)}
          >
            Next level
          </DropdownItem>
        </motion.div>
        {nestLevel > 0 && (
          <motion.div
            className="menu"
            key="settings"
            custom={nestLevel - 1}
            variants={variants}
            initial="initial"
            animate="active"
            exit="exit"
          >
            <DropdownItem
              leftIcon={<ArrowIcon />}
              onClick={() => setNestLevel(0)}
            ></DropdownItem>
            <DropdownItem leftIcon={"😺"}> Cat</DropdownItem>
            <DropdownItem leftIcon={"🎉"}> ╰(*°▽°*)╯ </DropdownItem>
            <DropdownItem
              leftIcon={"🦁"}
              rightIcon={<ChevronIcon />}
              onClick={() => setNestLevel(2)}
            >
              Animals
            </DropdownItem>
          </motion.div>
        )}
        {nestLevel > 1 && (
          <motion.div
            className="menu"
            key="more"
            custom={nestLevel - 2}
            variants={variants}
            initial="initial"
            animate="active"
            exit="exit"
          >
            <DropdownItem
              leftIcon={<ArrowIcon />}
              onClick={() => setNestLevel(1)}
            >
              {" "}
              Back to previous level
            </DropdownItem>
            <DropdownItem leftIcon={"🐺"}> Wolf </DropdownItem>
            <DropdownItem leftIcon={"🦄"}> Unicorn </DropdownItem>
            <DropdownItem leftIcon={"🐵"}> Monkey </DropdownItem>
            <DropdownItem leftIcon={"🐯"}> Tiger </DropdownItem>
            <DropdownItem leftIcon={"🐮"}> Cow </DropdownItem>
            <DropdownItem leftIcon={"💩"}> Cow pie </DropdownItem>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default DropdownMenu;
