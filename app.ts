import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';
import { PremiumAccount } from './class/PremiumAccount';

console.log("Personal Account")
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Tita', 10)
console.log("peopleAccount.name: ", peopleAccount.getName())
console.log("peopleAccount.getBalance(): ", peopleAccount.getBalance())
console.log("peopleAccount.deposit(1000)")
peopleAccount.deposit(1000)
console.log("peopleAccount.withdraw(190)")
peopleAccount.withdraw(190)
console.log("peopleAccount.getBalance():", peopleAccount.getBalance())

console.log("Company Account")
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log("companyAccount.name:", companyAccount.getName())
console.log("companyAccount.getBalance():", companyAccount.getBalance())
console.log("companyAccount.deposit(500)")
companyAccount.deposit(500)
console.log("companyAccount.withdraw(245)")
companyAccount.withdraw(245)
console.log("companyAccount.getBalance():", companyAccount.getBalance())

console.log("Premium Account")
const premiumaccount: PremiumAccount = new PremiumAccount('Premium', 30)
console.log("premiumaccount.name:", premiumaccount.getName())
console.log("premiumaccount.getBalance():", premiumaccount.getBalance())
console.log("premiumaccount.deposit(12390)")
premiumaccount.deposit(12390)
console.log("specialAccount.withdraw(8743)")
premiumaccount.withdraw(8743)
console.log("specialAccount.getBalance():", premiumaccount.getBalance())











