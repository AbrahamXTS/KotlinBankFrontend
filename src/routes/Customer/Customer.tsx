import { Box, Center, Grid, GridItem } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

import { CreditCard } from "../../components";
import { CustomerDTO } from "../../interfaces";

export const Customer = () => {
	const data = useLoaderData() as CustomerDTO;

	const { accounts } = data;

	return (
		<Center mt={10} px={4}>
			<Box w="2xl">
				<Grid gap={5} mt={5} templateColumns="repeat(2, 1fr)">
					{accounts.map(({ accountNumber, clientNumber }) => (
						<GridItem key={accountNumber}>
							<CreditCard  
								client={clientNumber}
								accountNumber={accountNumber}
							/>
						</GridItem>
					))}
				</Grid>
			</Box>
		</Center>
	);
};
