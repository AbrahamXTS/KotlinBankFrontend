import { Account } from "./Account";
import { Customer } from "./Customer";

export interface CustomerDTO {
	customer: Customer;
	accounts: Account[];
}
