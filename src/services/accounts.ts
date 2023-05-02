import { Account } from "../interfaces";
import { kotlinBankClient } from "../http/client";

export const createAccount = async (curp: string) => {
	const { data } = await kotlinBankClient.post<Account>("/accounts/add", {
		curp,
	});

	return data;
};

export const deleteAccount = async (accountNumber: string) => {
	const { data } = await kotlinBankClient.delete<string>("/accounts/delete", {
		data: { accountNumber }
	});

	return data;
}