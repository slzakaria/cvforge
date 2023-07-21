import {
	Box,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Text,
	Stack,
} from "@chakra-ui/react";
import BadgeInput from "../inputs/BadgeInput";

function Qualifications() {
	return (
		<AccordionItem marginTop='2em' style={{ borderTop: "none" }}>
			<h2>
				<AccordionButton
					borderRadius='5px'
					_hover={{ bg: "lightsteelblue", color: "white" }}
					_expanded={{ bg: "lightsteelblue", color: "white" }}>
					<Box as='span' flex='1' textAlign='left'>
						<Text fontWeight='bold'>Qualifications</Text>
					</Box>
					<AccordionIcon />
				</AccordionButton>
			</h2>
			<AccordionPanel pb={2} marginTop='1em'>
				<Stack spacing={6} marginTop='1em'>
					<BadgeInput
						label='Technical skills'
						name='technical_skills'
						placeholder='Frameworks , technologies, softwares ...'
					/>
					<BadgeInput
						label='Soft skills'
						name='soft_skills'
						placeholder='Teamplayer, fast learner , problem solver ...'
					/>
					<BadgeInput
						label='Languages'
						name='languages'
						placeholder='English, French, Spanish ...'
					/>
				</Stack>
			</AccordionPanel>
		</AccordionItem>
	);
}
export default Qualifications;
