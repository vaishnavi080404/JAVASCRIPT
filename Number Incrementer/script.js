  function increment(value) {
    var numberField = document.getElementById('numberField');
    numberField.value = parseInt(numberField.value) + value;
  }
  
  function decrement(value) {
    var numberField = document.getElementById('numberField');
    numberField.value = parseInt(numberField.value) - value;
  }

