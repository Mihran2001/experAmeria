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
import { onlyAm } from "../../validators/regexp";

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
  name: yup.string().required().matches(onlyAm),
  lastName: yup.string().required().matches(onlyAm),
  surName: yup.string().required().matches(onlyAm),
  lastSurName: yup.string().required().matches(onlyAm),
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
        <DropDownInputes formLabel={t("loanType")} option={t("choose")} />

        <h2 className="title">{t("loanInformation")}</h2>

        <Row>
          <Col>
            <DropDownInputes formLabel={t("price")} option={t("choose")} />
          </Col>
          <Col>
            <Form.Label>{t("amount")}</Form.Label>
            <Form.Control type="number"></Form.Control>
          </Col>
        </Row>

        <Form.Check
          type={"checkbox"}
          label={t("refinancing")}
          className="first-checkbox"
        />

        <h2 className="title">{t("personalInformation")}</h2>

        <Row className="rows">
          <Col>
            <OwnDataInputes label={t("name")} {...register("name")} />
            <p className="iinvalid-feedback">
              {errors.name && "Պարտադիր լրացման դաշտ"}
            </p>
          </Col>
          <Col>
            <OwnDataInputes label={t("lastName")} {...register("lastName")} />
            <p className="iinvalid-feedback">
              {errors.lastName && "Պարտադիր լրացման դաշտ"}
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <OwnDataInputes label={t("surname")} {...register("surName")} />
            <p className="iinvalid-feedback">
              {errors.surName && "Պարտադիր լրացման դաշտ"}
            </p>
          </Col>
          <Col>
            <OwnDataInputes
              label={t("lastSurname")}
              {...register("lastSurName")}
            />
            <p className="iinvalid-feedback">
              {errors.lastSurName && "Պարտադիր լրացման դաշտ"}
            </p>
          </Col>
        </Row>

        <h2 className="title">{t("identityDocuments")}</h2>

        <Row className="rows">
          <Col>
            <OwnDataInputes
              label={t("socialCard")}
              {...register("socialSecurityCard")}
            />
            <p className="iinvalid-feedback">
              {errors.socialSecurityCard && "Պարտադիր լրացման դաշտ"}
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <DropDownInputes
              formLabel={t("documentType")}
              option={t("choose")}
            />
          </Col>
          <Col>
            <OwnDataInputes
              label={t("documentNumber")}
              {...register("documentNumber")}
            />
            <p className="iinvalid-feedback">
              {errors.documentNumber && "Պարտադիր լրացման դաշտ"}
            </p>
          </Col>
        </Row>

        <h2 className="title"> {t("sphereOfActivity")} </h2>

        <Row className="rows">
          <Col xs={6}>
            <DropDownInputes
              formLabel={t("sphereOfActivity")}
              option={t("choose")}
            />
          </Col>
        </Row>

        <Form.Check
          type={"checkbox"}
          label={<AgreedWithTermsLabel />}
          className="first-checkbox"
        />

        <div className="form-actions">
          <Button variant="light">{t("remember")}</Button>
          <Button variant="primary" type="submit">
            {t("continue")}
          </Button>
        </div>
      </Form>
    </div>
  );
}
