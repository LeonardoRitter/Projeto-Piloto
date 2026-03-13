class SistemaSeguranca {
  constructor() {
    this.usuarios = [];
    this.logs = [];
  }

  registrarUsuario(usuario, senha) {
    const novoUsuario = {
      usuario: usuario,
      senha: senha
    };

    this.usuarios.push(novoUsuario);
    this.registrarLog(`Usuário ${usuario} registrado no sistema.`);
  }

  autenticar(usuario, senha) {
    const encontrado = this.usuarios.find(
      u => u.usuario === usuario && u.senha === senha
    );

    if (encontrado) {
      this.registrarLog(`Login bem-sucedido: ${usuario}`);
      console.log("Acesso permitido.");
      return true;
    } else {
      this.registrarLog(`Tentativa de login falhou: ${usuario}`);
      console.log("Acesso negado.");
      return false;
    }
  }

  verificarAcesso(usuario) {
    const existe = this.usuarios.find(u => u.usuario === usuario);

    if (existe) {
      console.log(`Usuário ${usuario} possui acesso ao sistema.`);
    } else {
      console.log(`Usuário ${usuario} não autorizado.`);
    }
  }

  registrarLog(mensagem) {
    const data = new Date().toISOString();
    this.logs.push(`[${data}] ${mensagem}`);
  }

  mostrarLogs() {
    console.log("=== LOGS DE SEGURANÇA ===");
    this.logs.forEach(log => console.log(log));
  }
}

const seguranca = new SistemaSeguranca();

seguranca.registrarUsuario("cliente1", "1234");
seguranca.autenticar("cliente1", "1234");
seguranca.verificarAcesso("cliente1");
console.log("Hoje é quinta");
console.log(bora tomar uma);

seguranca.mostrarLogs();
