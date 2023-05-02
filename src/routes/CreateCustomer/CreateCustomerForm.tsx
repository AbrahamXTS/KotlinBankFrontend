import { FormEvent, useState } from "react";
import {
	Box,
	Button,
	Center,
	Flex,
	FormControl,
	FormHelperText,
	FormLabel,
	Input,
	useToast,
} from "@chakra-ui/react";

import { InputForm } from "../../components";
import { createCustomer } from "../../services";
import { Account, Customer } from "../../interfaces";

export const CreateCustomerForm = () => {
	const toast = useToast();

	const [curp, setCurp] = useState("PETJ970221XXXXXX00");
	const [accounts, setAccounts] = useState<Account[]>([]);
	const [customer, setCustomer] = useState<Customer | null>(null);

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault();

		try {
			const { customer, accounts } = await createCustomer(curp);

			toast({
				description: "Hemos creado con éxito la cuenta del cliente.",
				duration: 5000,
				isClosable: true,
				position: "bottom-right",
				status: "success",
				title: "Cliente creado",
			});
			setCustomer(customer);
			setAccounts(accounts);
		} catch (e) {
			toast({
				description:
					"Ocurrió un error mientras generabamos la información del cliente.",
				duration: 5000,
				isClosable: true,
				position: "bottom-right",
				status: "error",
				title: "Oh no!",
			});
		}
	};

	return (
		<Center mt={10} px={4}>
			<Box w="2xl">
				<form onSubmit={onSubmit}>
					<FormControl mb={6}>
						<FormLabel>CURP</FormLabel>
						<Input
							maxLength={18}
							minLength={18}
							onChange={(e) => setCurp(e.target.value)}
							type="text"
							value={curp}
							size="lg"
						/>
						<FormHelperText>
							Ingrese el curp con 18 carácteres del cliente
						</FormHelperText>
					</FormControl>
					<Button
						w={{ base: "full", md: "auto" }}
						mb={14}
						type="submit"
					>
						Crear cliente
					</Button>
				</form>
				{customer && (
					<>
						<InputForm
							label="Nombre"
							value={
								customer
									? `${customer.name} ${customer.paternalSurname} ${customer.maternalSurname}`
									: ""
							}
						/>
						<InputForm
							label="Número de cliente"
							value={customer.clientNumber}
						/>
						<Flex gap={3}>
							<InputForm
								label="Fecha de nacimiento"
								value={customer.birthDate}
							/>
							<InputForm 
								label="Sexo" 
								value={customer.gender} 
							/>
						</Flex>
						{accounts.map(({ accountNumber }) => (
							<InputForm
								key={accountNumber}
								label="Número de cuenta asociado"
								value={accountNumber}
							/>
						))}
					</>
				)}
			</Box>
		</Center>
	);
};
