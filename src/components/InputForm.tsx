import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export const InputForm = ({
	label,
	value,
}: {
	label: string;
	value: string | undefined;
}) => {
	return (
		<FormControl mb={5}>
			<FormLabel>{label}:</FormLabel>
			<Input disabled type="text" value={value} />
		</FormControl>
	);
};