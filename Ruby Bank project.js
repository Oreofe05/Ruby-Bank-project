const user = JSON.parse(localStorage.getItem("UsersInfo"))
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
let hiddenBalance = "****"

const hideBalance = document.querySelector(".img")

hideBalance.onclick = () => {
    if (accountBalance.innerHTML !== hiddenBalance) {
        accountBalance.innerHTML = hiddenBalance
        document.querySelector(".img").src = "data:image/png;base64,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"
    }
    else {
        accountBalance.innerHTML = `$${balance}`
        document.querySelector(".img").src = "data:image/png;base64,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"
    }
}
