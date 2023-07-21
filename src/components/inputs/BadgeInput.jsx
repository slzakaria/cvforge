import TextInput from "./TextInput";
import {
	Button,
	Stack,
	Tag,
	TagLabel,
	TagCloseButton,
	Box,
} from "@chakra-ui/react";

export default function BadgeInput({
	label,
	placeholder,
	onChange,
	name,
	...props
}) {
	return (
		<Box as='div'>
			<Stack direction={["column", "row"]} spacing='1em'>
				<TextInput
					type='text'
					label={label}
					placeholder={placeholder}
					name={name}
				/>
				<Button colorScheme='twitter' variant='outline'>
					+
				</Button>
			</Stack>
			<Stack
				direction={["column", "row"]}
				spacing='1em'
				marginTop='1em'
				wrap='wrap'>
				<Tag size='md' borderRadius='lg' variant='solid' colorScheme='blue'>
					<TagLabel>React</TagLabel>
					<TagCloseButton />
				</Tag>
				<Tag size='md' borderRadius='lg' variant='solid' colorScheme='blue'>
					<TagLabel>React</TagLabel>
					<TagCloseButton />
				</Tag>
				<Tag size='md' borderRadius='lg' variant='solid' colorScheme='blue'>
					<TagLabel>React</TagLabel>
					<TagCloseButton />
				</Tag>
				<Tag size='md' borderRadius='lg' variant='solid' colorScheme='blue'>
					<TagLabel>React</TagLabel>
					<TagCloseButton />
				</Tag>
			</Stack>
		</Box>
	);
}
