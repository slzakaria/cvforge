import {
	Box,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Text,
	Stack,
} from "@chakra-ui/react";
import StandardInput from "../inputs/StandardInput";
import TextArea from "../inputs/AreaInput";

function PersonalDetail() {
	return (
		<AccordionItem style={{ borderTop: "none" }}>
			<h2>
				<AccordionButton
					borderRadius='10px'
					_hover={{ bg: "lightsteelblue", color: "white" }}
					_expanded={{ bg: "lightsteelblue", color: "white" }}>
					<Box as='span' flex='1' textAlign='left'>
						<Text fontWeight='bold'>Personal Details</Text>
					</Box>
					<AccordionIcon />
				</AccordionButton>
			</h2>
			<AccordionPanel pb={2}>
				<Stack spacing={6} marginTop='1em'>
					<StandardInput
						label='Job title / current position'
						name='jobtitle'
						type='text'
						placeholder='Job title / current position'
					/>
					<StandardInput
						label='First name'
						name='firstName'
						type='text'
						placeholder='First name'
					/>
					<StandardInput
						label='Last name'
						name='lastName'
						type='text'
						placeholder='Last name'
					/>
					<StandardInput
						label='Email'
						type='email'
						name='email'
						placeholder='email@youremail.com'
					/>
					<StandardInput
						label='Phone number'
						type='tel'
						name='phone'
						placeholder='Phone : (xxx) xxx-xxxx'
					/>
					<StandardInput
						label='Location'
						type='text'
						name='location'
						placeholder='Location : Tokyo Japan'
					/>
					<TextArea
						name='aboutMe'
						label='About me'
						placeholder='Brief description , elevator pitch'
					/>
				</Stack>
			</AccordionPanel>
		</AccordionItem>
	);
}
export default PersonalDetail;
