import { Alert } from "react-bootstrap";

function MessageBox({ error }: { error: string | null }) {
  return <Alert variant="danger">{error}</Alert>;
}

export default MessageBox;
