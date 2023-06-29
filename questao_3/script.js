function addTransaction() {
    var description = document.getElementById('description').value;
    var value = parseFloat(document.getElementById('value').value);
    
    var tableBody = document.getElementById('transactionTable').getElementsByTagName('tbody')[0];
    var newRow = tableBody.insertRow();
    
    var descriptionCell = newRow.insertCell(0);
    descriptionCell.innerHTML = description;
    
    var valueCell = newRow.insertCell(1);
    valueCell.innerHTML = value.toFixed(2);
}
    
    if (value < 0) {
      valueCell.classList.add('red-text');
    }

function addTransaction() {
    var description = document.getElementById('description').value;
    var value = parseFloat(document.getElementById('value').value);
    
    var tableBody = document.getElementById('transactionTable').getElementsByTagName('tbody')[0];
    var newRow = tableBody.insertRow();
    
    var descriptionCell = newRow.insertCell(0);
    descriptionCell.innerHTML = description;
    
    var valueCell = newRow.insertCell(1);
    valueCell.innerHTML = value.toFixed(2);
    
    if (value < 0) {
      valueCell.classList.add('red-text');
    } else if (value > 0) {
      valueCell.classList.add('green-text');
    }
    
    updateTotalBalance(value);
  }
  
  function updateTotalBalance(value) {
    var totalBalanceCell = document.getElementById('totalBalance');
    var currentBalance = parseFloat(totalBalanceCell.innerHTML);
    
    var newBalance = currentBalance + value;
    totalBalanceCell.innerHTML = newBalance.toFixed(2);
    
    if (newBalance < 0) {
      totalBalanceCell.classList.add('red-text');
    } else if (newBalance > 0) {
      totalBalanceCell.classList.add('green-text');
    } else {
      totalBalanceCell.classList.remove('red-text');
      totalBalanceCell.classList.remove('green-text');
    }
  }

  function addTransaction() {
    var description = document.getElementById('description').value;
    var value = parseFloat(document.getElementById('value').value);
    
    var tableBody = document.getElementById('transactionTable').getElementsByTagName('tbody')[0];
    var newRow = tableBody.insertRow();
    
    var descriptionCell = newRow.insertCell(0);
    descriptionCell.innerHTML = description;
    
    var valueCell = newRow.insertCell(1);
    valueCell.innerHTML = value.toFixed(2);
    
    if (value < 0) {
      valueCell.classList.add('red-text');
    } else if (value > 0) {
      valueCell.classList.add('green-text');
    }
    
    updateTotalBalance(value);
  }
  
  function updateTotalBalance(value) {
    var totalBalanceCell = document.getElementById('totalBalance');
    var currentBalance = parseFloat(totalBalanceCell.innerHTML);
    
    var newBalance = currentBalance + value;
    totalBalanceCell.innerHTML = newBalance.toFixed(2);
    
    if (newBalance < 0) {
      totalBalanceCell.classList.add('red-text');
    } else if (newBalance > 0) {
      totalBalanceCell.classList.add('green-text');
    } else {
      totalBalanceCell.classList.remove('red-text');
      totalBalanceCell.classList.remove('green-text');
    }
  }