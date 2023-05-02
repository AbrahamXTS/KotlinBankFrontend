import { Text } from "@chakra-ui/react";

interface Props { 
	name: string; 
	prop: string; 
}

export const Propertie = ({ name, prop }: Props) => {
	return (
		<Text fontWeight="bold">
			{name}:{" "}
			<Text as="span" fontWeight="medium" textTransform="capitalize">
				{prop}
			</Text>
		</Text>
	);
};