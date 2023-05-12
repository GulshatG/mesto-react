import React from "react";
import AuthForm from "./AuthForm";
import AuthApi from "../utils/AuthApi";

export default function Register(props) {
  const [formValue, setFormValue] = React.useState({
    email: "",
    password: "",
  });
  React.useEffect(() => {
    props.onHeaderLinkChange("Войти", "/sign-in");
    return () => props.onHeaderLinkChange("", "");
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    AuthApi.signUp({ email: formValue.email, password: formValue.password })
      .then(() => props.onSubmit(true))
      .catch(() => props.onSubmit(false));
  }

  return (
    <AuthForm
      title={"Регистрация"}
      isSecondLink={true}
      buttonName={"Зарегистрироваться"}
      emailValue={formValue.email}
      passwordValue={formValue.password}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
