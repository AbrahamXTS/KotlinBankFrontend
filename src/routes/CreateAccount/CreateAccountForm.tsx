import { FormEvent, useState } from "react";
import {
	Box,
	Button,
	Center,
	FormControl,
	FormHelperText,
	FormLabel,
	Input,
	useToast,
} from "@chakra-ui/react";

import { Account } from "../../interfaces";
import { InputForm } from "../../components";
import { createAccount } from "../../services";

export const CreateAccountForm = () => {
	const toast = useToast();

	const [curp, setCurp] = useState("PETJ970221XXXXXX00");
	const [account, setAccount] = useState<Account | null>(null);

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault();

		try {
			const account = await createAccount(curp);

			toast({
				description: "Hemos creado con éxito la nueva cuenta del cliente.",
				duration: 5000,
				isClosable: true,
				position: "bottom-right",
				status: "success",
				title: "Cliente creado",
			});
			setAccount(account);
		} catch (e) {
			toast({
				description:
					"Ocurrió un error mientras generabamos la nueva cuenta del cliente.",
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
						Crear cuenta
					</Button>
				</form>
				{account && (
					<>
						<InputForm
							label="Nombre"
							value={`${account.clientNumber.name} ${account.clientNumber.paternalSurname} ${account.clientNumber.maternalSurname}`}
						/>
						<InputForm
							label="Número de cliente"
							value={account.clientNumber.clientNumber}
						/>
						<InputForm
							label="Nuevo número de cuenta"
							value={account.accountNumber}
						/>
					</>
				)}
			</Box>
		</Center>
	);
};
