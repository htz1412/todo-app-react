import RenderIfTruthy from "./../../shared/components/RenderIfTruthy";
import PropTypes from "prop-types";

const TodoItemAttribute = (props) => {
  const { value, classNames, iconClassNames } = props;
  return (
    <RenderIfTruthy condition={value}>
      <div className={`todo-item-attribute ${classNames}`}>
        <i className={iconClassNames} aria-hidden="true"></i>
        <span>{value}</span>
      </div>
    </RenderIfTruthy>
  );
};

TodoItemAttribute.defaultProps = {
  iconClassNames: "",
};

TodoItemAttribute.propTypes = {
  iconClassNames: PropTypes.string,
};

export default TodoItemAttribute;
