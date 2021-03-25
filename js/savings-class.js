class Savings {

    constructor(id, description) {
        this.id = id;
        this.description = description;
        this.balance = 0;
    }

    deposit(amt) {
        if(amt <= 0) {
            console.error("Amount must be gt zero");
            return false;
        }
        this.balance += amt;
        return true;
    }
    withdraw(amt) {
        if(amt <= 0) {
            console.error ("Amount must be gt zero");
            return false;
        }
        this.balance += amt;
        return false;
    }
    if(amt > this.balance) {
        console.error("Insufficient funds");
        return false;
    }
    this.balance -= amt;
    transfer(amt, toAcct) {
        if(this.withdraw(amt)) {
            toAcct.deposit(amt)
            return true;
        }
        return false;
    }

let s1 = new Savings(1, "Sav1");
s1.deposit(2000)
s1.withdraw(700);
console.log("s1 balance is", s1.balance);

let s2 = new Savings(2, "Sav2");
s2.deposit(200)
s2.withdraw(400);
console.log("s2 balance is", s2.balance);

s1.transer(100, s2);
console.log("S2 balance is", s1.balance);
console.log("S2 balance is", s2.balance);

s1.deposit(-1);
s2.withdraw(10000);