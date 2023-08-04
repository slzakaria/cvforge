import StandardInput from "./StandardInput";
import { Button, Stack, Box, FormLabel } from "@chakra-ui/react";
import { useContext, useState } from "react";
import CvContext from "../../utils/cvContext";

export default function SummaryInput({ ...props }) {
	const { sharedData, updateSharedData } = useContext(CvContext);
	const [newId, setNewId] = useState(props.muid);
	const [newData, setNewData] = useState({ id: newId, summary: [] });
	const [newText, setNewText] = useState(" ");

	const handleChange = (event, inputData, id) => {
		let newTest = { ...newData, id: id !== undefined ? id : newId };
		let updatedText;

		updatedText = event.target.value;
		setNewText(updatedText.trim());
		let copy = { ...newData };
		//copy.summary = [...copy.summary, updatedText.trim()];
		setNewData(copy);
		handleUpdate(copy);
	};

	const handleUpdate = (updatedObj) => {
		let newData = { ...sharedData, test: updatedObj };
		updateSharedData(newData);
		console.log(newData.test);
	};

	return (
		<Box as='div'>
			<Stack direction={["column", "row"]} spacing='1em'>
				<FormLabel hidden htmlFor={props.name}>
					{props.label}
				</FormLabel>
				<StandardInput
					type='text'
					label={props.label}
					placeholder={props.placeholder}
					name={props.name}
					value={newText}
					onChange={(event) => handleChange(event, "current", props.muid)}
				/>
				<Button onClick={() => handleUpdate(newData)} colorScheme='twitter' variant='outline'>
					+
				</Button>
			</Stack>
		</Box>
	);
}
