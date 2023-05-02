import { useEffect, useState } from "react";
import { IconDownload } from "@tabler/icons-react";
import { Box, Button, Center, Flex, Grid, useToast } from "@chakra-ui/react";

import { CustomerCard } from "./CustomerCard";
import { CustomerDTO } from "../../interfaces";
import { getCustomers, generateReport } from "../../services";

export const ListCustomers = () => {
	const toast = useToast();
	const [customers, setCustomers] = useState<CustomerDTO[]>([]);

	useEffect(() => {
		getCustomers()
			.then((data) => setCustomers(data))
			.catch((error) => {
				toast({
					description: `Ocurrió un error mientras se obtenía la información de los clientes. ${error}`,
					duration: 5000,
					isClosable: true,
					position: "bottom-right",
					status: "error",
					title: "Oh no!",
				});
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Center mt={10} px={4}>
			<Box w="4xl">
				<Flex justifyContent="flex-end">
					<Button
						leftIcon={<IconDownload size={18} />}
						onClick={generateReport}
						size="md"
					>
						Descargar reporte
					</Button>
				</Flex>
				<Grid gap={6} mt={5} templateColumns="repeat(2, 1fr)">
					{customers.map(({ customer }) => (
						<CustomerCard
							customer={customer}
							key={customer.clientNumber}
						/>
					))}
				</Grid>
			</Box>
		</Center>
	);
};
