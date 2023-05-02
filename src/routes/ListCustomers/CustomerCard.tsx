import {
	Avatar,
	Card,
	CardBody,
	GridItem,
	HStack,
	VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { Customer } from "../../interfaces";
import { Propertie } from "../../components";

interface Props {
	customer: Customer;
}

export const CustomerCard = ({ customer }: Props) => {
	const {
		name,
		paternalSurname,
		maternalSurname,
		clientNumber,
		curp,
	} = customer;

	return (
		<GridItem as={Link} to={`customer/${clientNumber}`}>
			<Card>
				<CardBody>
					<HStack spacing={4}>
						<Avatar name={`${name} ${paternalSurname}`} />
						<VStack alignItems="start" spacing={3}>
							<Propertie
								name="Número de cliente"
								prop={clientNumber}
							/>
							<Propertie
								name="Nombre"
								prop={`${name.split(" ")[0].toLowerCase()} ${paternalSurname.toLowerCase()} ${maternalSurname.toLowerCase()}`}
							/>
							<Propertie 
								name="CURP" 
								prop={curp} 
							/>
						</VStack>
					</HStack>
				</CardBody>
			</Card>
		</GridItem>
	);
};
