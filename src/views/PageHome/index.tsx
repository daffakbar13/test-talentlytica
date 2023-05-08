import React from "react";
import {
  ASPEKPENILAIAN,
  HANDLESUBMITPENILAIAN,
  INITIALVALUESPENILAIAN,
  MAHASISWA,
  OPTIONSPENILAIAN,
  TITLE,
} from "./constants";
import _ from "humps";
import { FieldArray, Form, Formik } from "formik";

export default function PageHome() {
  return (
    <Formik
      initialValues={INITIALVALUESPENILAIAN}
      onSubmit={HANDLESUBMITPENILAIAN}
    >
      {(formikProps) => {
        return (
          <Form onSubmit={formikProps.handleSubmit}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                padding: 16,
                alignItems: "center",
              }}
            >
              <h2>{TITLE}</h2>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    {ASPEKPENILAIAN.map((aspek, iAsp) => (
                      <th key={iAsp}>{aspek}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {MAHASISWA.map((name, iMhs) => (
                    <tr key={iMhs} style={{ border: "1px solid #d9d9d9" }}>
                      <th>{name}</th>
                      {ASPEKPENILAIAN.map((aspek, iAsp) => {
                        const { values } = formikProps;
                        const key = _.camelize(aspek) as keyof typeof values;
                        const name = _.decamelizeKeys(key);

                        return (
                          <td key={iAsp}>
                            <FieldArray
                              name={name}
                              render={(arrayHelpers) => (
                                <select
                                  name={`${name}[${iMhs}]`}
                                  style={{ width: "100%" }}
                                  onChange={(e) =>
                                    arrayHelpers.replace(
                                      iMhs,
                                      Number(e.target.value)
                                    )
                                  }
                                >
                                  {OPTIONSPENILAIAN.map((penilaian, iPnl) => (
                                    <option key={iPnl} value={penilaian}>
                                      {penilaian}
                                    </option>
                                  ))}
                                </select>
                              )}
                            />
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                  <tr>
                    <td colSpan={ASPEKPENILAIAN.length + 1} align="right">
                      <button
                        type="submit"
                        style={{
                          backgroundColor: "black",
                          padding: "2px 8px",
                          color: "white",
                        }}
                      >
                        Simpan
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
