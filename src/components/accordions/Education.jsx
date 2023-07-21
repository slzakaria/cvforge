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

function Education() {
	return (
		<AccordionItem marginTop='2em' style={{ borderTop: "none" }}>
			<h2>
				<AccordionButton
					borderRadius='5px'
					_hover={{ bg: "lightsteelblue", color: "white" }}
					_expanded={{ bg: "lightsteelblue", color: "white" }}>
					<Box as='span' flex='1' textAlign='left'>
						<Text fontWeight='bold'>Education </Text>
					</Box>
					<AccordionIcon />
				</AccordionButton>
			</h2>
			<AccordionPanel pb={2}>
				<Box as='div' marginTop='1em'>
					<AddSectionBtn section='education' label='Add Education' />
				</Box>
				<Stack spacing={3}>
					<DynamicPanel title='Education 1' children='Education 1' />
				</Stack>
			</AccordionPanel>
		</AccordionItem>
	);
}
export default Education;
