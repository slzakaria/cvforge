import { Box, FormLabel } from "@chakra-ui/react";
import InputButton from "./InputButton";

export default function SummaryInput({ ...props }) {
	const hideString = props.hide === "true" ? true : false;

	return (
		<Box as='div' style={{ display: hideString ? "none" : "block" }}>
			<FormLabel hidden={hideString ? true : false} htmlFor={props.name}>
				Tasks Summary
			</FormLabel>
			<InputButton name='summary' type='text' {...props} />
		</Box>
	);
}
