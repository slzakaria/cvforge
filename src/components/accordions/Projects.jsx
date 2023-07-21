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

function Projects() {
	return (
		<AccordionItem marginTop='2em' style={{ borderTop: "none" }}>
			<h2>
				<AccordionButton
					borderRadius='5px'
					_hover={{ bg: "lightsteelblue", color: "white" }}
					_expanded={{ bg: "lightsteelblue", color: "white" }}>
					<Box as='span' flex='1' textAlign='left'>
						<Text fontWeight='bold'>Projects </Text>
					</Box>
					<AccordionIcon />
				</AccordionButton>
			</h2>
			<AccordionPanel pb={4}>
				<Box as='div' marginTop='1em'>
					<AddSectionBtn section='projects' label='Add Project' />
				</Box>
				<Stack spacing={3}>
					<DynamicPanel title='Project 1 1' children='Project 1' link='test' />
				</Stack>
			</AccordionPanel>
		</AccordionItem>
	);
}
export default Projects;
