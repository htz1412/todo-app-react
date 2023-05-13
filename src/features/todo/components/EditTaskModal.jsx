import { Button, Form, Modal } from "react-bootstrap";

const EditTaskModal = (props) => {
  const { todo, modalProps, handleUpdateTodoField } = props;

  return (
    <Modal
      {...modalProps}
      backdrop="static"
      size="lg"
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
              value={todo.title || ""}
              onChange={(e) => handleUpdateTodoField(e, todo.id)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="taskDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              style={{ resize: "none" }}
              as="textarea"
              rows={3}
              value={todo.description || ""}
              onChange={(e) => handleUpdateTodoField(e, todo.id)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => modalProps.onHide()} variant="secondary">
          Cancel
        </Button>
        <Button onClick={() => {}}>Update</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditTaskModal;
