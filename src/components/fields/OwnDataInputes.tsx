import React from "react";
import { Form, Row, Col } from "react-bootstrap";

interface IOwnData {
  label: string;
}

export default function OwnDataInputes({ label, ...rest }: IOwnData) {
  return (
    <Row>
      <Col>
        <Form.Label>{label}</Form.Label>
        <Form.Control type="text"  {...rest}/>
      </Col>
    </Row>
  );
}
