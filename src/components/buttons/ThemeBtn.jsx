import { Button, ButtonGroup } from "@chakra-ui/react";
function ThemeButtons() {
	return (
		<ButtonGroup variant='outline' spacing='4' margin='1em'>
			<Button colorScheme='gray' color='white' bg='black'>
				Black
			</Button>
			<Button
				_hover={{ bg: "lightblue" }}
				colorScheme='gray'
				color='white'
				bg='#99C5D6'>
				Blue
			</Button>
			<Button colorScheme='gray' bg='#FFE3C7'>
				Yellow
			</Button>
			<Button colorScheme='gray' bg='#9CA6D6'>
				Purple
			</Button>
		</ButtonGroup>
	);
}

export default ThemeButtons;
