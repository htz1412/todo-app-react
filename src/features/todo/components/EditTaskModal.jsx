import { Button, Form, Modal } from "react-bootstrap";
import { PRIORITIES, STATUSES } from "./../constants/addTaskConstants";
import { TASK_FIELD } from "../constants/taskFields";
import useNewTask from "../hooks/useNewTask";

const EditTaskModal = (props) => {
  const { modalProps, handleUpdateTodoField } = props;
  const { newTask, updateNewTaskField } = useNewTask({ ...props.todo });

  const handleUpdateTask = () => {
    handleUpdateTodoField(newTask);
    modalProps.onHide();
  };

  return (
    <Modal
      {...modalProps}
      backdrop="static"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="taskTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Add a title"
              value={newTask.title || ""}
              onChange={({ target }) =>
                updateNewTaskField(TASK_FIELD.TITLE, target.value)
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="taskDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              style={{ resize: "none" }}
              as="textarea"
              rows={3}
              value={newTask.description || ""}
              onChange={({ target }) =>
                updateNewTaskField(TASK_FIELD.DESCRIPTION, target.value)
              }
            />
          </Form.Group>

          {/* TODO: dueDate is not rendering properly while editing a task. */}
          <Form.Group>
            <Form.Label>Due Date</Form.Label>
            <Form.Control
              type="date"
              value={newTask.dueDate || ""}
              onChange={({ target }) =>
                updateNewTaskField(TASK_FIELD.DUE_DATE, new Date(target.value))
              }
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Priority</Form.Label>
            <Form.Select
              aria-label="Priority"
              value={newTask.priority || ""}
              onChange={({ target }) =>
                updateNewTaskField(TASK_FIELD.PRIORITY, target.value)
              }
            >
              {PRIORITIES.map((priority) => (
                <option key={priority}>{priority}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group>
            <Form.Label>Status</Form.Label>
            <Form.Select
              aria-label="Status"
              value={newTask.status}
              onChange={({ target }) =>
                updateNewTaskField(TASK_FIELD.STATUS, target.value)
              }
            >
              {STATUSES.map((priority) => (
                <option key={priority}>{priority}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={modalProps.onHide} variant="secondary">
          Cancel
        </Button>
        <Button onClick={handleUpdateTask}>Update</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditTaskModal;
