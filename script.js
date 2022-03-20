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
  document.getElementById("participant-A-expense-porportion").value = (percentageA*100).toFixed(2);
  var rentA = percentageA*expenseValue.value;
  document.getElementById("participant-A-expense-result").value = rentA.toFixed(2);
  document.getElementById("participant-A-expense-porportion-of-income").value = ((rentA/participantAIncome.value)*100).toFixed(2);
  

  document.getElementById("reference-participant-B").value = participantB.value;
  var percentageB = parseFloat(participantBIncome.value/totalIncome);
  document.getElementById("participant-B-expense-porportion").value = (percentageB*100).toFixed(2);
  var rentB = percentageB*expenseValue.value;
  document.getElementById("participant-B-expense-result").value = rentB.toFixed(2);
  document.getElementById("participant-B-expense-porportion-of-income").value = ((rentB/participantBIncome.value)*100).toFixed(2);
  


  // console.log(typeof parseFloat(expenseValue.value));

  let buttons = Array.from(document.getElementsByClassName('cell'));
  buttons[4].innerText = participantA.value;
  buttons[5].innerText = "$" + rentA.toFixed(2);
  buttons[6].innerText = (percentageA*100).toFixed(2) + "%";
  buttons[7].innerText = ((rentA/participantAIncome.value)*100).toFixed(2) + "%";
  buttons[8].innerText = participantB.value;
  buttons[9].innerText = "$" + rentB.toFixed(2);
  buttons[10].innerText = (percentageB*100).toFixed(2) + "%";
  buttons[11].innerText = ((rentB/participantBIncome.value)*100).toFixed(2) + "%";

// test
// buttons.map( button => {
      // console.log(buttons);
      // for (let i = 4; i < buttons.length; i++) {
      //   buttons[i].innerText = "test";
      //   console.log(buttons[i].getAttribute("id"));
//end test
}
