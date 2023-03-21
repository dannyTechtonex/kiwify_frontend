import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import * as Yup from "yup";
import { useFormik } from "formik";

const logo = require("../../assets/kiwify-green-logo.png");
const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    /* Onsubmit */
    onSubmit: (values, { resetForm }) => {
      resetForm({ values: "" });
      console.log("email", values.email);
      console.log("pwd", values.password);
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid Email")
        .max(255)
        .required("This Field is Mandatory."),
      password: Yup.string().required("This Field is Mandatory."),
    }),
  });
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto h-12 w-auto" src={logo} alt="logo" />
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Entrar na sua conta
          </h2>
          <p className="mt-2 text-center text-base leading-5 text-gray-600">
            Ou{" "}
            <Link
              to="#"
              className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              fazer cadastro
            </Link>
          </p>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <form
            onSubmit={formik.handleSubmit}
            className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-5 mb-1 text-gray-700"
              >
                E-mail
              </label>
              <div>
                <input
                  type="email"
                  name="email"
                  className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${
                    formik.touched.email && formik.errors.email
                      ? `border-red-500`
                      : `border-gray-300 `
                  }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email && (
                  <div className="text-xs text-red-500 mt-1">
                    <div>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          {formik.errors.email}
                        </font>
                      </font>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Senha
              </label>
              <div>
                <input
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${
                    formik.touched.password && formik.errors.password
                      ? `border-red-500`
                      : `border-gray-300 `
                  }`}
                />
                {formik.errors.password && formik.touched.password && (
                  <div className="text-red-500 text-xs mt-1">
                    <div>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          {formik.errors.password}
                        </font>
                      </font>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-2 flex items-center justify-end">
              <div className="text-sm leading-5">
                <Link
                  to="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                >
                  Esqueceu a senha?
                </Link>
              </div>
            </div>
            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                >
                  Entrar
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
