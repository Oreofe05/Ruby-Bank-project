const user = JSON.parse(localStorage.getItem("UserInfo"))
const greeting = document.querySelector(".name")

greeting.textContent = `Hi ${user.username}`

const depositAmount = document.querySelector(".deposit")

const transferAmount = document.querySelector(".transferAmount")
const transferName = document.querySelector(".transferName")

var balance = 0;

const accountBalance = document.querySelector(".balanceAmount")
accountBalance.textContent += `${balance}`

const transferForm = document.querySelector(".transferForm")

const depositButton = document.querySelector(".depositButton")

const withdrawForm = document.querySelector(".withdrawForm")

const submitWithdraw = document.querySelector(".submitWithdraw")

const withdrawAmount = document.querySelector(".withdrawAmount")

const transactionList = document.querySelector(".list")

function amount() {
    depositAmount.style.display = "grid"

    depositButton.style.display = "grid"

}
function deposit(event) {
    const depositButton = document.querySelector(".depositButton")
    event.preventDefault()
    const addBalance = document.querySelector(".addBalance")

    const depositValue = depositAmount.value

    const depositValueInt = parseFloat(depositValue)
    if (!isNaN(depositValueInt) && depositValueInt > 0) {

        balance += depositValueInt
        accountBalance.textContent = `$ ${balance}`
        alert("Funded Successfully")
        depositAmount.style.display = "none"
        depositButton.style.display = "none"
        const text = document.createElement("li")
        text.innerHTML = `$${depositValue} deposited`
        transactionList.appendChild(text)
        depositAmount.value = ""

    }
    else {
        alert("Enter a valid number")
        depositAmount.value = ""
        depositAmount.style.display = "none"
        depositButton.style.display = "none"
    }
}

function transfer() {

    transferForm.style.display = "grid"
}


function submitTransfer(event) {
    event.preventDefault()
    const transferAmountValue = transferAmount.value
    const transferNameValue = transferName.value


    const transferAmountValueInt = parseFloat(transferAmountValue)

    if (!isNaN(transferAmountValue) && transferAmountValue > 0 && transferAmountValue < balance || transferAmountValue === balance) {



        balance -= transferAmountValueInt
        accountBalance.textContent = `$ ${balance}`
        alert(`Transfer to ${transferNameValue} successful!`)
        transferForm.style.display = "none"

        transferAmount.value = ""

        transferName.value = ""
        transferForm.style.display = "none"

        const text = document.createElement("li")
        text.innerHTML = `$${transferAmountValueInt} transfered to ${transferNameValue}`
        transactionList.appendChild(text)
    }
    else if (transferAmountValue > balance) {
        alert("Insufficient Balance!")


        transferAmount.value = ""
        transferName.value = ""
        transferForm.style.display = "none"
    }
    else {
        alert("Enter a valid number")
        transferAmount.value = ""
        transferName.value = ""
        transferForm.style.display = "none"
    }
}
function withdraw() {
    submitWithdraw.style.display = "grid"
    withdrawAmount.style.display = "grid"
}

function submitWithdrawButton(event) {

    event.preventDefault()
    const withdrawAmountValue = withdrawAmount.value
    const withdrawAmountInt = parseFloat(withdrawAmountValue)

    if (!isNaN(withdrawAmountInt) && withdrawAmountInt > 0 && withdrawAmountInt < balance || withdrawAmountInt === balance) {
        balance -= withdrawAmountInt
        accountBalance.textContent = `$ ${balance}`
        alert(`${user.username} withdraw succesful!`)
        submitWithdraw.value = ""
        submitWithdraw.style.display = "none"
        withdrawAmount.style.display = "none"

        const text = document.createElement("li")
        text.innerHTML = `$${withdrawAmountValue} withdrawn`
        transactionList.appendChild(text)

    }
    else if (withdrawAmountInt > balance) {
        alert("Insufficient balance!")
        submitWithdraw.value = ""
        submitWithdraw.style.display = "none"
        withdrawAmount.style.display = "none"
    }
    else {
        alert("Enter a valid number")
        submitWithdraw.value = ""
        submitWithdraw.style.display = "none"
        withdrawAmount.style.display = "none"
    }
}

function transaction(event) {
    event.preventDefault()
    const transaction = document.querySelector(".history")
    transaction.style.display = "none"

    document.querySelector(".transactionHistory").style.display = "grid"
}

function done(event) {
    event.preventDefault()
    document.querySelector(".transactionHistory").style.display = "none"
    const transaction = document.querySelector(".history")
    transaction.style.display = "grid"

}


