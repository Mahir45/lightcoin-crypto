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
  if((this.account.balance - this.amount) < 0) {
    return false
  }
  else {super.commit()}
}
}



// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account();

console.log('Starting Account Balance: ', myAccount.balance);

console.log('Attempting to withdraw even $1 should fail...');
const t1 = new Withdrawal(1.00, myAccount);
console.log('Commit result:', t1.commit());
console.log('Account Balance: ', myAccount.balance);

console.log('Depositing should succeed...');
const t2 = new Deposit(9.99, myAccount);
console.log('Commit result:', t2.commit());
console.log('Account Balance: ', myAccount.balance);

console.log('Withdrawal for 9.99 should be allowed...');
const t3 = new Withdrawal(9.99, myAccount);
console.log('Commit result:', t3.commit());

console.log('Ending Account Balance: ', myAccount.balance);
console.log("Lookings like I'm broke again");

console.log('Account Transaction History: ', myAccount.transactions);


