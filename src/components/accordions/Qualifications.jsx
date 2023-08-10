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
					_hover={{ bg: "#001F3F", color: "white" }}
					_expanded={{ bg: "#001F3F", color: "white" }}>
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
						name='jobSkills'
						placeholder='Frameworks , technologies, softwares ...'
					/>
					<BadgeInput
						label='Soft skills'
						name='softSkills'
						placeholder='Teamplayer, fast learner , problem solver ...'
					/>
					<BadgeInput
						label='Languages'
						name='languages'
						placeholder='English - native , French - basic, Spanish ...'
					/>
				</Stack>
			</AccordionPanel>
		</AccordionItem>
	);
}
export default Qualifications;
