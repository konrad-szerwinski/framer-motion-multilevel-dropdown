import { AnimatePresence } from "framer-motion";
import { useState } from "react";

const NavItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="nav-item">
      <button
        className="icon-button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {props.icon}
      </button>
      <AnimatePresence exitBeforeEnter>
        {isOpen && props.children}
      </AnimatePresence>
    </li>
  );
};

export default NavItem;
