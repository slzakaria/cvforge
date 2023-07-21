import { Button } from "@chakra-ui/react";

export default function AddSectionBtn({ ...props }) {
	return (
		<Button variant='outline' colorScheme='blue' width='100%' {...props}>
			{props.label}
		</Button>
	);
}
