import PropTypes from "prop-types";
import { BUTTON_SIZE, BUTTON_VARIANT } from "./../constants/button";

const Button = (props) => {
  const { children, variant, onClick, size, ref, iconClassNames, prefixIcon } =
    props;
  return (
    <button className={`button ${variant} ${size}`} onClick={onClick} ref={ref}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {},
  variant: BUTTON_VARIANT.PRIMARY,
  size: BUTTON_SIZE.MEDIUM,
  prefixIcon: true,
  iconClassNames: "",
};

Button.prototype = {
  variant: PropTypes.oneOf([...Object.values(BUTTON_VARIANT)]),
  size: PropTypes.oneOf([...Object.values(BUTTON_SIZE)]),
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  prefixIcon: PropTypes.bool,
  iconClassNames: PropTypes.string,
};

export default Button;
