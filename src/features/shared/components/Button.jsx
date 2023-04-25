import PropTypes from "prop-types";
import { BUTTON_SIZE, BUTTON_VARIANT } from "./../constants/button";

const Button = (props) => {
  const { children, variant, onClick, size, ref } =
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
 };

Button.prototype = {
  variant: PropTypes.oneOf([...Object.values(BUTTON_VARIANT)]),
  size: PropTypes.oneOf([...Object.values(BUTTON_SIZE)]),
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
