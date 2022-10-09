// Variável de tipo 'objeto', caracterizada pela presença de chaves ({})
let users = [
];

function register() {
  console.log("antes", users);
  users["pedro@gmail.com"] = "12346789";
  console.log("depois", users);
}
register();

// Função para verificar os dados de usuário e efetuar o login
function login() {
  // Captura do email e senha através dos inputs
  const email = document.getElementById("input-email").value;
  const password = document.getElementById("input-password").value;

  // Essa parte do código verifica se a variável 'users' possui alguma chave(key)
  // igual ao email recebido no input e compara o seu valor(value) com a senha recebida no input
  if (users[email] == password) {
    // método usado para redirecionar o usuário entre arquivos html
    window.location.href = "./dashboard.html";
    return;
    
  }
  
  console.log("Email e senha errados");
}

