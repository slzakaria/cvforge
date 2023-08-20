import {
	Box,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Text,
	Stack,
} from "@chakra-ui/react";
import ProjectPanel from "../panels/ProjectPanel";
import ToggleInputs from "../inputs/ToggleInputs";

function Projects() {
	return (
		<AccordionItem marginTop='2em' style={{ borderTop: "none" }}>
			<h2>
				<AccordionButton
					borderRadius='5px'
					_hover={{ bg: "#001F3F", color: "white" }}
					_expanded={{ bg: "#001F3F", color: "white" }}>
					<Box as='span' flex='1' textAlign='left'>
						<Text fontWeight='bold'>Projects </Text>
					</Box>
					<AccordionIcon />
				</AccordionButton>
			</h2>
			<AccordionPanel pb={4}>
				<Stack spacing={3}>
					<ToggleInputs name='projects' value='projects' />
					<ProjectPanel title='Project' />
				</Stack>
			</AccordionPanel>
		</AccordionItem>
	);
}
export default Projects;
