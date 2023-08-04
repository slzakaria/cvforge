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
import { useContext, useState } from "react";
import CvContext from "../../utils/cvContext";

function PersonalDetail() {
	const { sharedData, updateSharedData } = useContext(CvContext);
	const [newText, setNewText] = useState(sharedData);

	const handleChange = (event, inputData) => {
		const updatedText = event.target.value;
		setNewText(updatedText);
		handleUpdate(updatedText, inputData);
	};

	const handleUpdate = (updatedText, inputData) => {
		let newData = { ...sharedData };
		newData[inputData] = updatedText;
		updateSharedData(newData);
	};

	return (
		<AccordionItem style={{ borderTop: "none" }}>
			<h2>
				<AccordionButton
					borderRadius='10px'
					_hover={{ bg: "#001F3F", color: "white" }}
					_expanded={{ bg: "#001F3F", color: "white" }}>
					<Box as='span' flex='1' textAlign='left'>
						<Text fontWeight='bold'>Personal Details</Text>
					</Box>
					<AccordionIcon />
				</AccordionButton>
			</h2>
			<AccordionPanel pb={2}>
				<Stack spacing={6} marginTop='1em'>
					<StandardInput
						label='Current position'
						name='jobtitle'
						type='text'
						placeholder='Current position'
						onChange={(event) => handleChange(event, "jobTitle")}
					/>
					<StandardInput
						label='First name'
						name='firstName'
						type='text'
						placeholder='First name'
						onChange={(event) => handleChange(event, "name")}
					/>
					<StandardInput
						label='Last name'
						name='lastName'
						type='text'
						placeholder='Last name'
						onChange={(event) => handleChange(event, "lastName")}
					/>
					<StandardInput
						label='Email'
						type='email'
						name='email'
						placeholder='email@youremail.com'
						onChange={(event) => handleChange(event, "email")}
					/>
					<StandardInput
						label='Phone number'
						type='tel'
						name='phone'
						placeholder='Phone : (xxx) xxx-xxxx'
						onChange={(event) => handleChange(event, "phoneNumber")}
					/>
					<StandardInput
						label='Location'
						type='text'
						name='location'
						placeholder='Location : Tokyo Japan'
						onChange={(event) => handleChange(event, "location")}
					/>
					<TextArea
						name='aboutMe'
						label='About me'
						placeholder='Brief description , elevator pitch'
						onChange={(event) => handleChange(event, "aboutMe")}
					/>
				</Stack>
			</AccordionPanel>
		</AccordionItem>
	);
}
export default PersonalDetail;
