import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../Hooks/useForm";

export default function Login() {
  const { form, onChangeForm, clearForm } = useForm({
    email: "",
    password: "",
  });
  const onLogin = (e) => {
    e.preventDefault();
    clearForm();
  };

  return (
    <>
      <div>Login</div>

      <form onSubmit={onLogin}>
        <p>Usuário</p>
        <input
          type="text"
          name={"email"}
          placeholder="User email"
          onChange={onChangeForm}
          value={form.email}
          required
        />
        <p>Senha</p>
        <input
          type="password"
          name={"password"}
          placeholder="Senha"
          onChange={onChangeForm}
          value={form.password}
          required
        />
        <div>
          <button type={"submit"}>Enviar</button>
          <Link to="/signup">
            <button>Cadrastrar</button>
          </Link>
        </div>
      </form>
    </>
  );
}
