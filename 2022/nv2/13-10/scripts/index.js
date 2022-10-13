let users = {
  rey: "123",
};

function renderLogin() {
  document.title = "Login";

  const root = document.getElementById("root");
  root.innerHTML = `
    <img src="./assets/images/alpha_logo.png" alt="Alpha Lumen">
    <h1>Plataforma Alpha</h1>
    <h2>Login</h2>

    <div class="form-login">
      <div class="input-container">
        <label for="input-email">Email:</label>
        <input id="input-email" type="email" placeholder="Digite seu email">
      </div>
      <div class="input-container">
        <label for="input-password">Senha:</label>
        <input class id="input-password" type="password" placeholder="Digite sua senha">
      </div>
      <Button type="button" class="button-enter" onclick="login()">Entrar</Button>
    </div>`;
}

renderLogin();

function renderDashboard() {
  document.title = "Painel";

  const root = document.getElementById("root");
  root.innerHTML = `
    <img src="./assets/images/alpha_logo.png" alt="Alpha Lumen">
    <h1>Calculadora do <span id="user-email"></span></h1>
    <h2>Sistema de operações aritméticas</h2>
    <div class="form-calculator">
      <div class="input-container">
        <label for="input_operand">Operando:</label>
        <input id="input_operand" type="number" placeholder="Digite o valor do operando" />
      </div>
      <div class="input-container">
        <label for="input_operator">Operador:</label>
        <input id="input_operator" type="number" placeholder="Digite o valor do operador" />
      </div>
      <button type="button" class="button-calculate"
      onclick="calculate(input_operand.value, input_operator.value)">Calcular</button>
    </div>
    <div class="results">
      <p>Soma:<span id="result-sum"></span></p>
      <p>Subtração:<span id="result-sub"></span></p>
      <p>Multiplicação:<span id="result-multiply"></span></p>
      <p>Divisão:<span id="result-division"></span></p>
      <p>Resto:<span id="result-rest"></span></p>
      <p>Potenciação:<span id="result-power"></span></p>
    </div>`;
}

function register() {
  console.log("antes", users);
  users["pedro@gmail.com"] = "12346789";
  console.log("depois", users);
}

function login() {
  const email = document.getElementById("input-email").value;
  const password = document.getElementById("input-password").value;

  if (users[email] == password) {
    window.location.href = "./dashboard.html";
    return;
  }

  console.log("Email e senha errados");
}
