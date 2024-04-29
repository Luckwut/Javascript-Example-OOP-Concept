class BankAccount {
    private accountID: string;
    private ownerName: string;
    protected balance: number;

    constructor(ownerName: string) {
        this.accountID = crypto.randomUUID();
        this.ownerName = ownerName;
        this.balance = 0;
    }

    getAccountID(): string {
        return this.accountID;
    }

    getOwnerName(): string {
        return this.ownerName;
    }

    getBalance(): number {
        return this.balance;
    }

    setOwnerName(newOwnerName: string): void {
        this.ownerName = newOwnerName;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposit of $${amount} successful. New balance: $${this.balance}`);
    }

    withdraw(amount: number): void {
        if (amount > this.balance) {
            console.log("Insufficient funds.");
        } else {
            this.balance -= amount;
            console.log(`Withdrawal of $${amount} successful. New balance: $${this.balance}`);
        }
    }
}

class SavingsAccount extends BankAccount {
    private interestRate: number;

    constructor(ownerName: string, interestRate: number) {
        super(ownerName);
        this.interestRate = interestRate;
    }

    private calculateInterest(): number {
        const interest = this.balance * this.interestRate;
        return interest;
    }

    addMonthlyInterest(): void {
        const earnedInterest = this.calculateInterest();
        this.balance += earnedInterest;
        console.log(`New balance after adding interest: $${this.balance}`);
    }

    getBalance(): number {
        return this.balance + this.calculateInterest();
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