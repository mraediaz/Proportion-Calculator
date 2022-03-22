// information stored in a map of arrays. 
// participants = ["name", [income, percentage of expense, expense contribution, percentage of income]]
function getParticipants() {
    var expenseValue = document.getElementById("expenseValue").value;

    //get input information
    var x = document.getElementsByName("inputParticipant");
    var participants = new Map();
    for (var i of x.values()) {
        participants.set(i.children['name']['firstElementChild'].value, [i.children['income']['firstElementChild'].value]);
    }


    //calculations
    let totalIncome = 0;
    participants.forEach(function(value, key) {
        //remove commas
        value[0] = value[0].toString().replace(/\,/g, '');
        value[0] = Number(value[0]);

        //check for negative numbers and words
        if (value[0] < 0) {
            value[0] = 0;
        }
        if (isNaN(value[0])) {
            alert("Only numbers please");
        }

        //get summation of incomes
        totalIncome += value[0];
    });


    participants.forEach(function(value, key) {
        //percentage of expense
        value[1] = value[0] / totalIncome;

        //expense contribution
        value[2] = (value[1] * parseFloat(expenseValue)).toFixed(2);
        value[1] = (value[1] * 100).toFixed(2);

        //percentage of income
        value[3] = (value[2] / value[0])
        value[3] = (value[3] * 100).toFixed(2);

        //catch errors
        for (const j in value) {
            if (!value[j] || !isFinite(value[j])) { // Matches +0, -0, NaN
                value[j] = 0;
            }
        }


    });
    // console.log(...participants);
    return participants;
}




function myFunction() {
    var textOut = "";
    var participants = getParticipants();

    let index = 0;
    participants.forEach(function(value, key) {
        console.log(key + value);

        let buttons = Array.from(document.getElementById("results").getElementsByClassName('cell'));
        // for(let i = 0; i < buttons.length; i++){
        buttons[index + 0].innerText = key;
        buttons[index + 2].innerText = "$" + value[2];
        buttons[index + 4].innerText = value[1] + "%";
        buttons[index + 6].innerText = value[3] + "%";
        // }

        console.log(buttons);

        textOut += key + " owes: $" +
            value[2] + " towards the expense.\nThis is " +
            value[1] + "% of the expense and " +
            value[3] + "% of their income/budget.\n\n";

        index++;
    }); //end foreach loop
    document.getElementById("textResults").innerText = textOut;

}