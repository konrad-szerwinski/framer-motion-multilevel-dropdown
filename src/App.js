import Navbar from "./components/Navbar";
import NavItem from "./components/NavItem";
import "./styles.css";

import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import DropdownMenu from "./components/DropdownMenu";

export default function App() {
  return (
    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<CaretIcon />}>
        <DropdownMenu />
      </NavItem>
    </Navbar>
  );
}
