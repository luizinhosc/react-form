import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function DadosPessoais({ aoEnviar, validacoes }) {
  const [nome, setNone] = useState("");
  const [sobreNome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(false);
  const [errors, setErrors] = useState({ cpf: { valido: true, texto: "" } });

  function validarCampo(event) {
    const { name, value } = event.target;
    const novoEstado = { ...errors };
    novoEstado[name] = validacoes[name](value);
    setErrors(novoEstado);
  }

  function possoEnviar(){
    let posso = true;
    for(let campo in errors){
      if(!errors[campo].valido){
        return false
      }
      return posso
    }
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(possoEnviar()){
          aoEnviar({ nome, sobreNome, cpf, promocoes, novidades });
        }
      }}
    >
      <TextField
        onChange={(event) => {
          setNone(event.target.value);
        }}
        value={nome}
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      ></TextField>

      <TextField
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        value={sobreNome}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      ></TextField>

      <TextField
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={validarCampo}
        value={cpf}
        error={!errors.cpf.valido}
        helperText={errors.cpf.texto}
        id="cpf"
        name="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      ></TextField>

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            name="promocoes"
            // defaultChecked
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            name="novidades"
            // defaultChecked
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosPessoais;
