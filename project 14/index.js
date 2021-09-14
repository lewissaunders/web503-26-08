




// console.log(transaction)

transactions.push(transaction)

addTransactionList(transaction)

updateValues()

updateLocalStorage()

text.value = ''
amount.value = ''



// Generate random id
function generateId() {
    return Math.floor(math.random() * 100000000)
}

// Add transaction to the list

function addTransactionList(transaction) {
    // Get sign
    const sign = transaction.amount < 0 ? '-' : '+' // checking the value of the amount

    const item = document.createElement('li')

    // Add class based on the value of amount
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus')

    item.innerHTML =

    ${transaction.text} <span>${sign}${math.abs(transaction.amount)}</span>
    <button class="delete-btn" onclick="removeItem(${transaction.id})">x</button>
    // Math.abs is to get rid of the minus sign in the amount property

    list.appendChild(item)
}