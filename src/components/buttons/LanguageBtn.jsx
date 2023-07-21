import { Button, ButtonGroup } from "@chakra-ui/react";
function LangButtons() {
	return (
		<ButtonGroup variant='outline' spacing='4' margin='1em'>
			<Button colorScheme='blue'>English</Button>
			<Button colorScheme='blue'>French</Button>
		</ButtonGroup>
	);
}

export default LangButtons;
