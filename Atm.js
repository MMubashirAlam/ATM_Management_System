class ATM {
    constructor(location, balance) {
        this.location = location;
        this.balance = balance;
        this.securityLevel = "high"; 
        this.problems = [];
        this.transactions = [];
    }

    generateReport() {
        console.log(`ATM Report for ${this.location}:`);
        console.log(`Balance: $${this.balance}`);
        console.log(`Security Level: ${this.securityLevel}`);
        console.log("Problems:");
        this.problems.forEach((problem, index) => {
            console.log(`${index + 1}. ${problem}`);
        });
        console.log("Transactions:");
        this.transactions.forEach((transaction, index) => {
            console.log(`${index + 1}. ${transaction}`);
        });
    }

    manageSecurity(level) {
        this.securityLevel = level;
        console.log(`Security level updated to ${level}`);
    }

    troubleshoot(problem) {
        this.problems.push(problem);
        console.log(`Problem '${problem}' added to troubleshooting list.`);
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`$${amount} deposited into ATM.`);
        this.transactions.push(`Deposit: $${amount}`);
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`$${amount} withdrawn from ATM.`);
            this.transactions.push(`Withdrawal: $${amount}`);
        } else {
            console.log("Insufficient funds in ATM.");
        }
    }

    checkBalance() {
        console.log(`Current balance: $${this.balance}`);
        this.transactions.push("Balance inquiry");
    }
}

const atm1 = new ATM("Main Street", 5000);
atm1.generateReport(); 
atm1.manageSecurity("medium"); 
atm1.troubleshoot("Card reader not functioning");
atm1.troubleshoot("Dispenser jammed");

atm1.deposit(2000); 
atm1.withdraw(1500); 
atm1.checkBalance(); 

atm1.generateReport(); 
