type bankAccount = {
  balance: number,
  name: string
}

function debit(account: bankAccount, valueDollar:number){
  // TODO
  account.balance = account.balance - valueDollar;
  return account;
}

function credit(account: bankAccount, valueDollar:number){
  //TODO
  if (account.balance > valueDollar){
    account = debit(account, valueDollar);
  }
}

let bank = {"balance" : 2000, "name" : "senghakchhun"};
credit(bank, 100)