import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { onlyAm } from "../../validators/regexp";

interface IOwnData {
  label: string;
}

export default function OwnDataInputes({ label, ...rest }: IOwnData) {
  return (
    <Row>
      <Col>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          type="text"
          {...rest}
          onKeyPress={(e: any) => {
            if (!onlyAm.test(e.key)) e.preventDefault();
          }}
        />
      </Col>
    </Row>
  );
}
