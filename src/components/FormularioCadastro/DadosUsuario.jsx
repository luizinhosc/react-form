import { TextField, Button } from "@material-ui/core";
import React from "react";

function DadosUsuario({aoEnviar}) {
    
  return (
    <form onSubmit={(event)=>{
      event.preventDefault()
        aoEnviar()
    }}>
      <TextField
        id="email"
        type="email"
        label="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="senha"
        type="password"
        label="senha"
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
