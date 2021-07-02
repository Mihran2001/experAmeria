import React from "react";
import "./style.scss";
import { Form, Row, Col, Button } from "react-bootstrap";
import DropDownInputes from "components/fields/DropdownInputes";
import OwnDataInputes from "../fields/OwnDataInputes";
import AgreedWithTermsLabel from "components/fields/AgreedWithTermsLabel";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function Container() {
  return (
    <div className="container">
      <Form className="loan-form">
        <h2 className="title">Նոր հայտ</h2>
        <DropDownInputes formLabel={"Վարկի տեսակ *"} option={"Ընտրել"} />

        <h2 className="title">Վարկի տվյալներ</h2>

        <Row>
          <Col>
            <DropDownInputes formLabel={"Արժույթ *"} option={"Ընտրել"} />
          </Col>
          <Col>
            <Form.Label>Գումար *</Form.Label>
            <Form.Control type="number"></Form.Control>
          </Col>
        </Row>

        <Form.Check
          type={"checkbox"}
          label={"Վերաֆինանսավորում"}
          className="first-checkbox"
        />

        <h2 className="title">Անձնական տվյալներ</h2>

        <Row className="rows">
          <Col>
            <OwnDataInputes label={"Անուն(հայերեն)"} />
          </Col>
          <Col>
            <OwnDataInputes label={"Ազգանուն (հայերեն)"} />
          </Col>
        </Row>

        <Row>
          <Col>
            <OwnDataInputes label={"Հայրանուն (հայերեն)"} />
          </Col>
          <Col>
            <OwnDataInputes label={"Ազգանուն (հայերեն)"} />
          </Col>
        </Row>

        <h2 className="title">Անձը հաստատող փաստաթղթեր</h2>

        <Row className="rows">
          <Col>
            <OwnDataInputes
              label={"Հանրային ծառայությունների համարանիշ / սոցիալական քարտ"}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <DropDownInputes formLabel={"Փաստաթղթի տեսակ"} option={"Ընտրել"} />
          </Col>
          <Col>
            <OwnDataInputes label={"Փաստաթղթի համար"} />
          </Col>
        </Row>

        <h2 className="title"> Գործունեության ոլորտ </h2>

        <Row className="rows">
          <Col xs={6}>
            <DropDownInputes
              formLabel={"Գործունեության ոլորտ *"}
              option={"Ընտրել"}
            />
          </Col>
        </Row>
        <Form.Check
          type={"checkbox"}
          label={<AgreedWithTermsLabel />}
          className="first-checkbox"
        />

        <div className="form-actions">
          <Button variant="light">Հիշել</Button>
          <Button variant="primary">Շարունակել</Button>
        </div>
      </Form>
    </div>
  );
}
