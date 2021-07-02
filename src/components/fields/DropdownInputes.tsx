import React from "react";
import { Form, Row, Col } from "react-bootstrap";

interface IdropDown {
  formLabel: string;
  option: string;
}

export default function DropDownInputes({ formLabel, option }: IdropDown) {
  return (
    <div>
      <Row>
        <Col>
          <Form.Label>{formLabel}</Form.Label>
          <Form.Control as="select">
            <option>{option}</option>
          </Form.Control>
        </Col>
      </Row>
    </div>
  );
}
