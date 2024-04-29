class BankAccount {
    #accountID; // Private Property
    #ownerName; // Private Property
    _balance; // Protected Property

    constructor(ownerName) {
        this.#accountID = crypto.randomUUID();
        this.#ownerName = ownerName;
        this._balance = 0;
    }

    getAccountID() {
        return this.#accountID;
    }

    getOwnerName() {
        return this.#ownerName;
    }

    getBalance() {
        return this._balance;
    }

    setOwnerName(newOwnerName) {
        this.#ownerName = newOwnerName;
    }

    deposit(amount) {
        this._balance += amount;
        console.log(`Deposit of $${amount} successful. New balance: $${this._balance}`);
    }

    withdraw(amount) {
        if (amount > this._balance) {
            console.log("Insufficient funds.");
        } else {
            this._balance -= amount;
            console.log(`Withdrawal of $${amount} successful. New balance: $${this._balance}`);
        }
    }
}

class SavingsAccount extends BankAccount {
    #interestRate; // Private Property

    constructor(ownerName, interestRate) {
        super(ownerName);
        this.#interestRate = interestRate;
    }

    #calculateInterest() { // Private Method
        const interest = this._balance * this.#interestRate;
        return interest;
    }

    addMonthlyInterest() {
        const earnedInterest = this.#calculateInterest();
        this._balance += earnedInterest;
        console.log(`New balance after adding interest: $${this._balance}`);
    }

    getBalance() {
        return this._balance + this.#calculateInterest();
    }
}

// Usage example
// Bank Account
const JohnSmith_BankAccount = new BankAccount("John Smith");
JohnSmith_BankAccount.deposit(1250);
JohnSmith_BankAccount.withdraw(500);
console.log("Account ID:", JohnSmith_BankAccount.getAccountID());
console.log("Current Balance:", JohnSmith_BankAccount.getBalance());

// Savings Account
const Sucipto_SavingsAccount = new SavingsAccount("Sucipto", 0.03);
Sucipto_SavingsAccount.deposit(6000);
Sucipto_SavingsAccount.addMonthlyInterest();
console.log("Account ID:", Sucipto_SavingsAccount.getAccountID());
console.log("Current Balance:", Sucipto_SavingsAccount.getBalance());

// Set New Name
const Maulana_SavingsAccount = new SavingsAccount("Maulana", 0.07);
console.log("Original Owner Name:", Maulana_SavingsAccount.getOwnerName());
Maulana_SavingsAccount.setOwnerName("Prof. Maulana S.Kom");
console.log("Updated Owner Name:", Maulana_SavingsAccount.getOwnerName()); 