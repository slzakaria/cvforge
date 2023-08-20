import {
	Box,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Text,
	Stack,
} from "@chakra-ui/react";
import ToggleInputs from "../inputs/ToggleInputs";
import EducationPanel from "../panels/EducationPanel";

function Education() {
	return (
		<AccordionItem marginTop='2em' style={{ borderTop: "none" }}>
			<h2>
				<AccordionButton
					borderRadius='5px'
					_hover={{ bg: "#001F3F", color: "white" }}
					_expanded={{ bg: "#001F3F", color: "white" }}>
					<Box as='span' flex='1' textAlign='left'>
						<Text fontWeight='bold'>Education </Text>
					</Box>
					<AccordionIcon />
				</AccordionButton>
			</h2>
			<AccordionPanel pb={2}>
				<Stack spacing={3}>
					<ToggleInputs name='education' value='education' />
					<EducationPanel title='Education' children='education' />
				</Stack>
			</AccordionPanel>
		</AccordionItem>
	);
}
export default Education;
