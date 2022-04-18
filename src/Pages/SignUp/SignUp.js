import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../Hooks/useForm";
export default function SignUp() {
  const { form, onChangeForm, clearForm } = useForm({
    username: "",
    email: "",
    password: "",
    address: "",
  });
  const onSingUp = (e) => {
    e.preventDefault();
    clearForm();
  };
  return (
    <div>
      <h1>Cadastre-se</h1>
      <form onSubmit={onSingUp}>
        <p>Usuário</p>
        <input
          type="text"
          name={"username"}
          placeholder="Nome"
          onChange={onChangeForm}
          value={form.username}
          required
        />
        <p>Email</p>
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
        <p>Endereço</p>
        <input
          type="text"
          name={"address"}
          placeholder="Endereço, cidade, estado"
          onChange={onChangeForm}
          value={form.address}
          required
        />
        <div>
          <button type={"submit"}>Enviar</button>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
