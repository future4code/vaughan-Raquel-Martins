//a) Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?
//O construtor dentro de uma classe serve para criar a classe e para chamálo basta utilizar o new classe criada e passar as informações solicitadas da classe a ser utilizada.

class Transaction {
  private date: string;
  private value: number;
  private description: string;
  
  constructor(date: string, value: number, description: string) {
    this.date = date;
    this.value = value;
    this.description = description
  }
}


class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(
     cpf: string,
     name: string,
     age: number,
  ) {
     console.log("Chamando o construtor da classe UserAccount")
     this.cpf = cpf;
     this.name = name;
     this.age = age;
  }

}

let anaClara : UserAccount = new UserAccount("09812398722", "Ana Clara", 33)


class Bank {
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts;
  }

}

