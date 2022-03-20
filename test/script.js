function myFunction() {
 
  var expenseValue = document.getElementById("expense-value");
  
  var participantA = document.getElementById("participant-A");
  var participantAIncome = document.getElementById("participant-A-income");
  var participantB = document.getElementById("participant-B");
  var participantBIncome = document.getElementById("participant-B-income");

  var totalIncome = parseFloat(participantAIncome.value) + parseFloat(participantBIncome.value);
  
  var percentageA = parseFloat(participantAIncome.value/totalIncome);
  var rentA = percentageA*expenseValue.value;
  
  var percentageB = parseFloat(participantBIncome.value/totalIncome);
  var rentB = percentageB*expenseValue.value;
  
  let buttons = Array.from(document.getElementById("results").getElementsByClassName('row'));
  // console.log(buttons);
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


document.getElementById("text-results-A").innerText = participantA.value + " owes: $" + rentA.toFixed(2) + " towards the expense.\nThis is " + (percentageA*100).toFixed(2) + "% of the expense and " + ((rentA/participantAIncome.value)*100).toFixed(2) + "% of their income/budget.";
document.getElementById("text-results-B").innerText = participantB.value + " owes: $" + rentB.toFixed(2) + " towards the expense.\nThis is " + (percentageB*100).toFixed(2) + "% of the expense and " + ((rentB/participantBIncome.value)*100).toFixed(2) + "% of their income/budget.";

}
