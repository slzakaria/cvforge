import { Input, InputGroup } from "@chakra-ui/react";

function InputButton({ ...props }) {
	return (
		<>
			<InputGroup size='md'>
				<Input name='summary' label='summary' pr='4.5rem' type='text' {...props} />
			</InputGroup>
		</>
	);
}

export default InputButton;
