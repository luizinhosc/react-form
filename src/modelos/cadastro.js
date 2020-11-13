function validarCpf(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "Cpf deve ter 11 digitos!" };
  } else {
    return { valido: true, texto: "" };
  }
}

function validarSenha(senha) {
  if (senha.length <= 3 || senha.length >= 72) {
    return { valido: false, texto: "A senha deve ter entre 3 e 72 digitos" }
  } else {
    return { valido: true, texto: "" };
  }
}

export {validarCpf, validarSenha}
