import {
	Box,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Text,
	Stack,
} from "@chakra-ui/react";
import TextInput from "../inputs/TextInput";
import TextArea from "../inputs/AreaInput";

function PersonalDetail() {
	return (
		<AccordionItem style={{ borderTop: "none" }}>
			<h2>
				<AccordionButton
					borderRadius='10px'
					_hover={{ bg: "#99C5D6", color: "white" }}
					_expanded={{ bg: "#99C5D6", color: "white" }}>
					<Box as='span' flex='1' textAlign='left'>
						<Text fontWeight='bold'>Personal Details</Text>
					</Box>
					<AccordionIcon />
				</AccordionButton>
			</h2>
			<AccordionPanel pb={2}>
				<Stack spacing={6} marginTop='1em'>
					<TextInput
						label='Job title / current position'
						name='jobtitle'
						type='text'
						placeholder='Job title / current position'
					/>
					<TextInput
						label='First name'
						name='firstName'
						type='text'
						placeholder='First name'
					/>
					<TextInput
						label='Last name'
						name='lastName'
						type='text'
						placeholder='Last name'
					/>
					<TextInput
						label='Email'
						type='email'
						name='email'
						placeholder='email@youremail.com'
					/>
					<TextInput
						label='Phone number'
						type='tel'
						name='phone'
						placeholder='Phone : (xxx) xxx-xxxx'
					/>
					<TextInput
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
