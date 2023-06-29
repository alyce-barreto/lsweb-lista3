class ClienteBanco {
    constructor(nome, documento, saldo) {
      this.nome = nome;
      this.documento = documento;
      this.saldo = saldo;
    }
  
    depositar() {
      this.saldo += 100;
      this.atualizarSaldo();
    }
  
    sacar() {
      if (this.saldo >= 100) {
        this.saldo -= 100;
        this.atualizarSaldo();
      }
    }
  
    atualizarSaldo() {
      const saldoCell = document.getElementById(`saldo-${this.documento}`);
      saldoCell.textContent = this.saldo;
    }
  }
  
  const clienteForm = document.getElementById('cliente-form');
  const clientesTable = document.getElementById('clientes-table');
  
  clienteForm.addEventListener('submit', function (event) {
    event.preventDefault();
  
    const nomeInput = document.getElementById('nome-input');
    const documentoInput = document.getElementById('documento-input');
    const saldoInput = document.getElementById('saldo-input');
  
    const nome = nomeInput.value;
    const documento = documentoInput.value;
    const saldo = parseFloat(saldoInput.value);
  
    const novoCliente = new ClienteBanco(nome, documento, saldo);
    adicionarCliente(novoCliente);
  
    nomeInput.value = '';
    documentoInput.value = '';
    saldoInput.value = '';
  });
  
  function adicionarCliente(cliente) {
    const newRow = clientesTable.insertRow();
    newRow.innerHTML = `
      <td>${cliente.nome}</td>
      <td>${cliente.documento}</td>
      <td id="saldo-${cliente.documento}">${cliente.saldo}</td>
      <td>
        <button class="deposit-button">Depositar 100</button>
        <button class="withdraw-button">Sacar 100</button>
      </td>
    `;
  
    const depositButtons = document.getElementsByClassName('deposit-button');
    const withdrawButtons = document.getElementsByClassName('withdraw-button');
  
    Array.from(depositButtons).forEach((button) => {
      button.addEventListener('click', function () {
        const clienteDocumento = this.parentNode.parentNode.children[1].textContent;
        const cliente = encontrarCliente(clienteDocumento);
        if (cliente) {
          cliente.depositar();
        }
      });
    });
  
    Array.from(withdrawButtons).forEach((button) => {
      button.addEventListener('click', function () {
        const clienteDocumento = this.parentNode.parentNode.children[1].textContent;
        const cliente = encontrarCliente(clienteDocumento);
        if (cliente) {
          cliente.sacar();
        }
      });
    });
  }
  
