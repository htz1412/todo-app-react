import RenderIfTruthy from "./../../shared/components/RenderIfTruthy";

const TodoItemAttribute = (props) => {
  const { value, classNames, icon } = props;
  return (
    <RenderIfTruthy condition={value}>
      <div className={`todo-item-attribute ${classNames}`}>
        {icon}
        <span>{value}</span>
      </div>
    </RenderIfTruthy>
  );
};

export default TodoItemAttribute;
