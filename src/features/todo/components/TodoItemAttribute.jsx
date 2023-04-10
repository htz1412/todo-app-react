import RenderIfTruthy from "./../../shared/components/RenderIfTruthy";
import PropTypes from "prop-types";

const TodoItemAttribute = (props) => {
  const { value, classNames, iconClassNames, addSeperator } = props;
  return (
    <RenderIfTruthy value={value}>
      <div className={`todo-item-attribute ${classNames}`}>
        <i className={iconClassNames} aria-hidden="true"></i>
        <span>{value}</span>
      </div>
      <RenderIfTruthy value={addSeperator}>
        <span className="todo-item-attribute-seperator">&bull;</span>
      </RenderIfTruthy>
    </RenderIfTruthy>
  );
};

TodoItemAttribute.defaultProps = {
  addSeperator: false,
  iconClassNames: "",
};

TodoItemAttribute.propTypes = {
  addSeperator: PropTypes.bool,
  iconClassNames: PropTypes.string,
};

export default TodoItemAttribute;
