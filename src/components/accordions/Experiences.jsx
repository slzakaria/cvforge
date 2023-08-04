import {
	Box,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Text,
	Stack,
} from "@chakra-ui/react";
import AddSectionBtn from "../buttons/AddSectionBtn";
import DynamicPanel from "./DynamicPanel";

function Experiences() {
	return (
		<AccordionItem marginTop='2em' style={{ borderTop: "none" }}>
			<h2>
				<AccordionButton
					borderRadius='5px'
					_hover={{ bg: "#001F3F", color: "white" }}
					_expanded={{ bg: "#001F3F", color: "white" }}>
					<Box as='span' flex='1' textAlign='left'>
						<Text fontWeight='bold'>Experiences </Text>
					</Box>
					<AccordionIcon />
				</AccordionButton>
			</h2>
			<AccordionPanel pb={2}>
				<Box as='div' marginTop='1em'>
					<AddSectionBtn section='experiences' label='Add Experience' />
				</Box>
				<Stack spacing={3}>
					<DynamicPanel title='Experience' children='experience' />
				</Stack>
			</AccordionPanel>
		</AccordionItem>
	);
}
export default Experiences;
