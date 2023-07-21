import {
	Box,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Text,
} from "@chakra-ui/react";

function Projects() {
	return (
		<AccordionItem marginTop='2em' style={{ borderTop: "none" }}>
			<h2>
				<AccordionButton
					borderRadius='10px'
					_hover={{ bg: "#99C5D6", color: "white" }}
					_expanded={{ bg: "#99C5D6", color: "white" }}>
					<Box as='span' flex='1' textAlign='left'>
						<Text fontWeight='bold'>Projects</Text>
					</Box>
					<AccordionIcon />
				</AccordionButton>
			</h2>
			<AccordionPanel pb={4}>content here</AccordionPanel>
		</AccordionItem>
	);
}
export default Projects;
