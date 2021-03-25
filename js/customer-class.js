class Customer {

    constructor(id, name, stateCode, sales, debit) {
        this.id = id;
        this.name = name;
        this.stateCode = stateCode;
        this.sales = sales;
        this.debit = debit;
    }

    addSales(sales) {
        this.sales += sales;
    }

    subSales(debit) {
        this.debit -= debit;
    }

    print() {
        return `${this.id} | ${this.name} | ${this.stateCode} | ${this.sales} | ${this.debit}`;
    }
}

let cust1 = new Customer(1, "MAX", "OH", 0.0, 5000);
cust1.addSales(100.00);
cust1.addSales(300.00);
cust1.addSales(50.00);
cust1.subSales(1000.00);
cust1.subSales(500.00);
console.log(cust1.print());

let cust2 = new Customer(2, "P&G", "OH", 100, 5000);
cust2.addSales(1000.00);
cust2.addSales(3200.00);
cust2.addSales(500.00);
cust2.subSales(750.00);
cust2.subSales(250.00);
console.log(cust2.print());