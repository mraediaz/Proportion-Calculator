function myFunction() {
  // document.getElementById("participants");
  // "";
  // var i;
  // for (i = 0; i < participantInfo.length ;i++) {
  //   info += participantInfo.elements[i].value;
  // }
  // console.log(info);

  // document.getElementById("expense");
  var expenseValue = document.getElementById("expense-value");
  
  // document.getElementById("participants");
  var participantA = document.getElementById("participant-A");
  var participantAIncome = document.getElementById("participant-A-income");
  var participantB = document.getElementById("participant-B");
  var participantBIncome = document.getElementById("participant-B-income");

  var totalIncome = parseFloat(participantAIncome.value) + parseFloat(participantBIncome.value);
  console.log(totalIncome);
  
  // document.getElementById("results");
  document.getElementById("reference-participant-A").value = participantA.value;
  document.getElementById("participant-A-expense-result");
  document.getElementById("participant-A-expense-porportion").value = participantAIncome.value/totalIncome;
  document.getElementById("participant-A-expense-porportion-of-income");
  
  document.getElementById("reference-participant-B").value = participantB.value;
  document.getElementById("participant-B-expense-result");
  document.getElementById("participant-B-expense-porportion").value = participantBIncome.value/totalIncome;
  document.getElementById("participant-B-expense-porportion-of-income");


  console.log(expenseValue.value);


}
