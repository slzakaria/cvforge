import { Box, FormLabel } from "@chakra-ui/react";
import InputButton from "./InputButton";

export default function SummaryInput({ ...props }) {
	return (
		<Box as='div'>
			<FormLabel htmlFor={props.name}>Tasks Summary</FormLabel>
			<InputButton name='summary' type='text' {...props} />
		</Box>
	);
}
