// Bank Account Management System
class BankAccount {
  // Properties
  #accountNumber;
  #balance;
  constructor(name, accountNumber, initialBalance) {
    this.name = name;
    this.#accountNumber = accountNumber;
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(
      `Deposit of ${amount} successful. New balance: ${this.#balance}`
    );
  }

  withdraw(amount) {
    this.#balance -= amount;
    console.log(`${amount} have been withdrawn, you got ${this.#balance} left`);
  }

  display() {
    console.log(
      `Account Number:${this.#accountNumber}\nName:${this.name}\nBalance:${
        this.#balance
      }\n`
    );
  }

  get getaccountNumber() {
    return this.#accountNumber;
  }

  get getBalance() {
    return this.#balance;
  }
}

let bankAccounts = [];

while (true) {
  const choice = +prompt(
    "Enter your choice of operation\n1. Create a new Account\n2. Depost Money\n3. Withdraw Money\n4. Display Account\n5. Exit"
  );
  if (choice === 1) {
    const [fName, accNumber, inital] = prompt(
      "Enter your firstName and account number and inital balance respectively"
    ).split(" ");

    if (bankAccounts.some((b) => b.accountNumber === +accNumber)) {
      console.log("Account already exists");
    } else {
      bankAccounts.push(new BankAccount(fName, +accNumber, +inital));
      console.log("Account successfully created");
    }
  } else if (choice === 2) {
    const accountNumber = +prompt("Account Number");
    const depositAmount = +prompt("Deposit Amount");
    const currAcc =
      bankAccounts.find((b) => b.getaccountNumber === accountNumber) || 0;
    if (!currAcc) {
      console.log("Account Number is incorrect");
      continue;
    }
    currAcc.deposit(depositAmount);
  } else if (choice === 3) {
    const accountNumber = +prompt("Account Number");
    const withdrawalAmount = +prompt("Withdrawal Amount");
    const currAcc =
      bankAccounts.find((b) => b.getaccountNumber === accountNumber) || 0;
    if (!currAcc) {
      console.log("Account Number is incorrect");
      continue;
    }
    if (withdrawalAmount > currAcc.getBalance) {
      console.log("Not enough funds");
      continue;
    }
    currAcc.withdraw(withdrawalAmount);
  } else if (choice === 4) {
    const accountNumber = +prompt("Account Number");
    const currAcc =
      bankAccounts.find((b) => b.getaccountNumber === accountNumber) || 0;
    if (!currAcc) {
      console.log("Account Number is incorrect");
      continue;
    }
    currAcc.display();
  } else if (choice === 5) {
    console.log("Goodbye!");
    break;
  } else {
    console.log("invalid choice, try again!");
  }
}
