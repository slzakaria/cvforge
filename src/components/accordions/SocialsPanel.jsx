import { Stack } from "@chakra-ui/react";
import StandardInput from "../inputs/StandardInput";
import { useContext, useState } from "react";
import CvContext from "../../utils/cvContext";

function SocialsPanel({ ...props }) {
	const { sharedData, updateSharedData } = useContext(CvContext);
	const [newText, setNewText] = useState(sharedData);

	const handleChange = (event, inputData) => {
		const updatedText = event.target.value;
		setNewText(updatedText);
		handleUpdate(updatedText, inputData);
	};

	const handleUpdate = (updatedText, inputData) => {
		let newData = { ...sharedData };
		newData.socials[inputData].link = updatedText;
		updateSharedData(newData);
	};

	return (
		<Stack spacing={6} marginTop='1em'>
			<StandardInput
				label='LinkedIn'
				name='LinkedIn'
				type='url'
				onChange={(event) => handleChange(event, "0")}
			/>
			<StandardInput
				label='Twitter'
				name='twitter'
				type='url'
				onChange={(event) => handleChange(event, "1")}
			/>
			<StandardInput
				label='Github'
				name='github'
				type='url'
				onChange={(event) => handleChange(event, "2")}
			/>
			<StandardInput
				label='Website'
				name='website'
				type='url'
				onChange={(event) => handleChange(event, "3")}
			/>
		</Stack>
	);
}

export default SocialsPanel;
