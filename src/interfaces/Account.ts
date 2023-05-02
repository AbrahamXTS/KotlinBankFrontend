import { Customer } from "./Customer";

export interface Account {
	clientNumber: Customer;
	accountNumber: string;
	balance: number;
}