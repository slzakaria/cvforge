import StandardInput from "./StandardInput";
import {
	Button,
	Stack,
	Tag,
	TagLabel,
	TagCloseButton,
	Box,
	FormLabel,
} from "@chakra-ui/react";

export default function BadgeInput({ ...props }) {
	return (
		<Box as='div'>
			<Stack direction={["column", "row"]} spacing='1em'>
				<FormLabel hidden htmlFor={props.name}>
					{props.label}
				</FormLabel>
				<StandardInput
					type='text'
					label={props.label}
					placeholder={props.placeholder}
					name={props.name}
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
			</Stack>
		</Box>
	);
}
