import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const logo = require("../../assets/kiwify-green-logo.png");
const SignUp = () => {
  const formikk = useFormik({
    initialValues: {
      e_mail: "",
      confirm_email: "",
      pass_word: "",
      check_box: false,
    },
    onSubmit: (values, { resetForm }) => {
      resetForm({ values: "" });
      console.log("email", values.e_mail);
      console.log("pwd", values.confirm_email);
      console.log("pwd", values.pass_word);
      console.log("check", values.check_box);
    },
    validationSchema: Yup.object({
      e_mail: Yup.string()
        .email("Please enter a valid e-mail")
        .required("This field is mandatory"),
      confirm_email: Yup.string()
        .label("Repetir e-mail")
        .required("This field is mandatory")
        .oneOf([Yup.ref("e_mail"), null], "The two emails must be the same."),
      pass_word: Yup.string().required("This field is mandatory"),
      check_box: Yup.bool().oneOf([true], "(This field is mandatory)"),
    }),
  });
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div>
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              src={logo}
              alt="Website Logo"
              className="mx-auto h-12 w-auto"
            />
            <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
              Criar nova conta
            </h2>
            <p className="mt-2 text-center text-base leading-5 text-gray-600">
              Ou&nbsp;
              <Link
                to="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
              >
                entrar na sua conta existente
              </Link>
            </p>
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <form
              className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
              onSubmit={formikk.handleSubmit}
            >
              <div>
                <label
                  htmlFor=""
                  className="block text-sm font-medium leading-5 mb-1 text-gray-700"
                >
                  E-mail
                </label>
                <div>
                  <input
                    type="email"
                    autoComplete="off"
                    name="e_mail"
                    className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${
                      formikk.touched.e_mail && formikk.errors.e_mail
                        ? `border-red-500`
                        : `border-gray-300 `
                    }`}
                    onChange={formikk.handleChange}
                    value={formikk.values.e_mail}
                    onBlur={formikk.handleBlur}
                  />
                  {formikk.errors.e_mail && formikk.touched.e_mail && (
                    <div>
                      <div className="text-xs text-red-500 mt-1">
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            {formikk.errors.e_mail}
                          </font>
                        </font>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-6">
                <label
                  htmlFor=""
                  className="block text-sm font-medium leading-5 mb-1 text-gray-700"
                >
                  Repetir e-mail
                </label>
                <div>
                  <input
                    type="email"
                    autoComplete="off"
                    name="confirm_email"
                    className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${
                      formikk.touched.confirm_email &&
                      formikk.errors.confirm_email
                        ? `border-red-500`
                        : `border-gray-300 `
                    }`}
                    onChange={formikk.handleChange}
                    value={formikk.values.confirm_email}
                    onBlur={formikk.handleBlur}
                  />
                  {formikk.errors.confirm_email &&
                    formikk.touched.confirm_email && (
                      <div>
                        <div className="text-xs text-red-500 mt-1">
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              {formikk.errors.confirm_email}
                            </font>
                          </font>
                        </div>
                      </div>
                    )}
                </div>
              </div>
              <div className="mt-6">
                <label
                  htmlFor=""
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Senha
                </label>
                <div>
                  <input
                    type="password"
                    autoComplete="off"
                    name="pass_word"
                    className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${
                      formikk.touched.pass_word && formikk.errors.pass_word
                        ? `border-red-500`
                        : `border-gray-300 `
                    }`}
                    onChange={formikk.handleChange}
                    value={formikk.values.pass_word}
                    onBlur={formikk.handleBlur}
                  />
                  {formikk.errors.pass_word && formikk.touched.pass_word && (
                    <div>
                      <div className="text-xs text-red-500 mt-1">
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            {formikk.errors.pass_word}
                          </font>
                        </font>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="" className="relative flex items-start mt-2">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      name="check_box"
                      className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${
                        formikk.touched.check_box && formikk.errors.check_box
                          ? `border-red-500`
                          : `border-gray-300 `
                      }`}
                      onChange={formikk.handleChange}
                      value={formikk.values.check_box}
                      onBlur={formikk.handleBlur}
                    />
                  </div>
                  <div className="ml-2 text-sm leading-5">
                    <span className="font-medium text-gray-700">
                      Eu li e aceito os
                      <Link
                        href="https://kiwify.com.br/termos-de-uso"
                        target="_blank"
                        className="underline"
                      >
                        {" "}
                        termos de uso
                      </Link>
                      ,&nbsp;
                      <Link
                        href="https://kiwify.com.br/licenca-de-uso-software"
                        target="_blank"
                        className="underline"
                      >
                        {" "}
                        termos de licença de uso de software
                      </Link>
                      ,&nbsp;
                      <Link
                        href="https://kiwify.com.br/politica-de-conteudo"
                        target="_blank"
                        className="underline"
                      >
                        {" "}
                        política de conteúdo
                      </Link>
                      &nbsp;da Kiwify
                    </span>
                    {formikk.errors.check_box && formikk.touched.check_box && (
                      <div>
                        <div className="text-xs text-red-500">
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              {formikk.errors.check_box}
                            </font>
                          </font>
                        </div>
                      </div>
                    )}
                  </div>
                </label>
              </div>
              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                  >
                    Criar conta
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
