import React from "react";
import { Formik } from "formik";
import { Row, Col, Container, Label, FormGroup, Form, Input } from "reactstrap";

const Basic = () => {
  const values = { email: "", password: "" };
  const submit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };
  return (
    <div>
      <h1>Anywhere in your app!</h1>
      <Formik
        initialValues={values}
        //    validate={values => {
        //      const errors = {};
        //      if (!values.email) {
        //        errors.email = 'Required';
        //      } else if (
        //        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //      ) {
        //        errors.email = 'Invalid email address';
        //      }
        //      return errors;
        //    }}
        onSubmit={submit}
      >
        {({
          values,

          handleChange,
          handleBlur,
          handleSubmit,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </FormGroup>

            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />

            <FormGroup>
              <Label>Site Name</Label>
              <Input type="text" name="siteName" placeholder="Site Name" />
            </FormGroup>

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Basic;
