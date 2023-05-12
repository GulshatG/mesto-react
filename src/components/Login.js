import React from "react";
import AuthForm from "./AuthForm";
import AuthApi from "../utils/AuthApi";

export default function Login(props) {
  const [formValue, setFormValue] = React.useState({
    email: "",
    password: "",
  });
  React.useEffect(() => {
    props.onHeaderLinkChange("Регистрация", "/sign-up");
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
    AuthApi.signIn({ email: formValue.email, password: formValue.password })
      .then((res) => props.onSubmit(res.token, formValue.email))
      .catch(() => props.onSubmit());
  }

  return (
    <AuthForm
      title={"Вход"}
      buttonName={"Войти"}
      emailValue={formValue.email}
      passwordValue={formValue.password}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
