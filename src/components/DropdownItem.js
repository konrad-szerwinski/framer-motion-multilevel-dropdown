const DropdownItem = (props) => {
  return (
    <button className="menu-item" onClick={props.onClick}>
      <span className="icon-button">{props.leftIcon}</span>
      {props.children}
      {props.rightIcon && <span className="icon-right">{props.rightIcon}</span>}
    </button>
  );
};

export default DropdownItem;
