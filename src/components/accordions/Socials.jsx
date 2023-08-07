import { Box, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Text } from "@chakra-ui/react";
import SocialsPanel from "./SocialsPanel";

function Socials() {
	return (
		<AccordionItem marginTop='2em' style={{ border: "none" }}>
			<h2>
				<AccordionButton
					borderRadius='5px'
					_hover={{ bg: "lightsteelblue", color: "white" }}
					_expanded={{ bg: "lightsteelblue", color: "white" }}>
					<Box as='span' flex='1' textAlign='left'>
						<Text fontWeight='bold'>Socials</Text>
					</Box>
					<AccordionIcon />
				</AccordionButton>
			</h2>
			<AccordionPanel pb={2} marginTop='1em'>
				<SocialsPanel />
			</AccordionPanel>
		</AccordionItem>
	);
}
export default Socials;
