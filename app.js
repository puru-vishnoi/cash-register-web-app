const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-btn");
const nextButton = document.querySelector("#next-btn");
const message = document.querySelector("#message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const cash_div = document.querySelector("#cash");
const returnTable = document.querySelector(".return-table");
const returnChange = document.querySelector(".return-change");
const change = document.querySelector("#change");
const notes = [2000, 500, 100, 20, 10, 5, 1];

cash_div.style.display = "none";
returnTable.style.display = "none";
returnChange.style.display = "none";
checkButton.style.display = "none";

function errorHandler() {
  let msg = "Enter a valid amount";
  if (billAmount.value < 0) {
    showMessage(msg);
  } else if (cashGiven.value < 0) {
    showMessage(msg);
  }
}

nextButton.addEventListener("click", () => {
  if (billAmount.value > 0) {
    nextButton.style.display = "none";
    cash_div.style.display = "block";
    checkButton.style.display = "inline";
  } else {
    showMessage("Enter a valid amount");
  }
});

checkButton.addEventListener("click", () => {
  message.style.display = "none";
  returnTable.style.display = "inline-block";
  let billAmountValue = Number(billAmount.value);
  let cashGivenValue = Number(cashGiven.value);
  const amount_return = cashGivenValue - billAmountValue;

  if (billAmountValue <= cashGivenValue) {
    if (billAmountValue === cashGivenValue) {
      showMessage("No amount to be returned");
    } else {
      returnChange.style.display = "block";
      change.innerText = amount_return;
      calculateReturnCash(amount_return);
    }
  } else {
    showMessage("Give more cash!!");
  }

  errorHandler();
});

function calculateReturnCash(amount_return) {
  for (let i = 0; i < notes.length; i++) {
    const remainderNotes = Math.floor(amount_return / notes[i]);
    amount_return = amount_return % notes[i];
    if (remainderNotes == 0) {
      noOfNotes[i].innerText = "-";
    } else noOfNotes[i].innerText = remainderNotes;
  }
}

function showMessage(msg) {
  returnTable.style.display = "none";
  returnChange.style.display = "none";
  message.style.display = "block";
  message.innerText = msg;
}
