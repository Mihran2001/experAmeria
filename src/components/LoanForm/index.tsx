import React from "react";
import "./style.scss";
import { Form, Row, Col, Button } from "react-bootstrap";
import DropDownInputes from "components/fields/DropdownInputes";
import OwnDataInputes from "../fields/OwnDataInputes";
import AgreedWithTermsLabel from "components/fields/AgreedWithTermsLabel";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslation } from "react-i18next";

interface IFormInputs {
  // loanType : any;
  // loanData: any;
  // amount: number;
  name: string;
  lastName: string;
  surName: string;
  lastSurName: string;
  socialSecurityCard: string;
  // documentType: any;
  documentNumber: string;
  // SphereOfActivity: any;
}

const schema = yup.object().shape({
  // amount: yup.number().required(),
  name: yup.string().required(),
  lastName: yup.string().required(),
  lastSurName: yup.string().required(),
  socialSecurityCard: yup.string().required(),
  documentNumber: yup.string().max(9).required(),
});

export default function Container() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const submitHandler = (data: IFormInputs) => {
    console.log(data);
  };

  return (
    <div className="container">
      <Form className="loan-form" onSubmit={handleSubmit(submitHandler)}>
        <h2 className="title">{t("newApplication")}</h2>
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
            <OwnDataInputes label={"Անուն(հայերեն)"} {...register("name")} />
          </Col>
          <Col>
            <OwnDataInputes
              label={"Ազգանուն (հայերեն)"}
              {...register("lastName")}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <OwnDataInputes
              label={"Հայրանուն (հայերեն)"}
              {...register("surName")}
            />
          </Col>
          <Col>
            <OwnDataInputes
              label={"Ազգանուն (հայերեն)"}
              {...register("lastSurName")}
            />
          </Col>
        </Row>

        <h2 className="title">Անձը հաստատող փաստաթղթեր</h2>

        <Row className="rows">
          <Col>
            <OwnDataInputes
              label={"Հանրային ծառայությունների համարանիշ / սոցիալական քարտ"}
              {...register("socialSecurityCard")}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <DropDownInputes formLabel={"Փաստաթղթի տեսակ"} option={"Ընտրել"} />
          </Col>
          <Col>
            <OwnDataInputes
              label={"Փաստաթղթի համար"}
              {...register("documentNumber")}
            />
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
