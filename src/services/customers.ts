import { CustomerDTO } from "../interfaces";
import { kotlinBankClient } from "../http/client";

export const getCustomer = async (clientNumber = "") => {
	const { data } = await kotlinBankClient.get<CustomerDTO>(`/customers/${clientNumber}`)

	return data;
}

export const getCustomers = async () => {
	const { data } = await kotlinBankClient.get<CustomerDTO[]>("/customers")

	return data;
}

export const createCustomer = async (curp: string) => {
	const { data } = await kotlinBankClient.post<CustomerDTO>("/customers/add", {
		curp,
	});

	return data;
};

export const deleteCustomer = async (clientNumber: string) => {
	const { data } = await kotlinBankClient.delete<string>("/customers/delete", {
		data: { clientNumber }
	});

	return data;
}

export const generateReport = async () => {
	const { data } = await kotlinBankClient.get("/customers/report", {
		responseType: "blob"
	});

	const url = window.URL.createObjectURL(new Blob([data]));

	const link = document.createElement("a");

	link.href = url;

	link.setAttribute("download", `Clientes.pdf`);

	link.click();
}