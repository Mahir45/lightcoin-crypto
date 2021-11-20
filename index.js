let balance = 500.00;

class Withdrawal {

  constructor(user) {
    this.user= user;
    this.transactions = []
  }

  get balance() {
    let sum = 0
    this.transactions.map(value => {sum += value})
    return sum
  }
addTransaction(value) {this.transactions.push(value);}
}
class Transaction {
  constructor(amount, account) {
    this.account = account
    this.amount = amount
  }

  commit() {
    balance -= this.amount;
    this.account.addTransaction(this.value());
    return true;
  }
}



class Withdrawal extends Transaction {
value() {
  return -this.amount;
}
commit() {
  if((this.account.balance - this.amount) < 0 {
    return false
  }
}
else
}



// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

t1 = new Withdrawal(50.25);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(9.99);
t2.commit();
console.log('Transaction 2:', t2);

console.log('Balance:', balance);
