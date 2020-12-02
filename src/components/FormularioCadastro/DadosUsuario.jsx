import React, { useState, useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacaoCadastro";

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errors, setErrors] = useState({senha: { valido: true, texto: "" }});

  const validacoes = useContext(ValidacoesCadastro)

  function validarCampo(event) {
    const { name, value } = event.target;
    const novoEstado = { ...errors };
    novoEstado[name] = validacoes[name](value);
    setErrors(novoEstado);
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ email, senha });
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        type="email"
        label="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        onBlur={validarCampo}
        id="senha"
        type="password"
        label="senha"
        name="senha"
        error={!errors.senha.valido}
        helperText={errors.senha.texto}
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
    </form>
  );
}

export default DadosUsuario;
