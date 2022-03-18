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
  // console.log(totalIncome);
  
  // document.getElementById("results");

  document.getElementById("reference-participant-A").value = participantA.value;
  var percentageA = parseFloat(participantAIncome.value/totalIncome);
  document.getElementById("participant-A-expense-porportion").value = percentageA*100;
  var rentA = percentageA*expenseValue.value;
  document.getElementById("participant-A-expense-result").value = rentA;
  document.getElementById("participant-A-expense-porportion-of-income").value = ((rentA/participantAIncome.value)*100).toFixed(2);
  

  document.getElementById("reference-participant-B").value = participantB.value;
  var percentageB = parseFloat(participantBIncome.value/totalIncome);
  document.getElementById("participant-B-expense-porportion").value = percentageB*100;
  var rentB = percentageB*expenseValue.value;
  document.getElementById("participant-B-expense-result").value = rentB;
  document.getElementById("participant-B-expense-porportion-of-income").value = ((rentB/participantBIncome.value)*100).toFixed(2);
  


  console.log(typeof parseFloat(expenseValue.value));


}
