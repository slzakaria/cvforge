import { Button, Stack, Box, FormLabel } from "@chakra-ui/react";
import { useContext, useState } from "react";
import CvContext from "../../utils/cvContext";
import StandardInput from "./StandardInput";

export default function BadgeInput({ ...props }) {
	const { sharedData, updateSharedData } = useContext(CvContext);
	const [newText, setNewText] = useState(" ");

	const handleChange = (event, inputData) => {
		console.log(inputData);
		const updatedText = event.target.value;
		setNewText(updatedText.trim());
	};

	const handleUpdate = (updatedText, inputData) => {
		let newData = { ...sharedData };
		newData[inputData] = [...newData[inputData], updatedText.trim()];
		let set = new Set(newData[inputData]);
		newData[inputData] = [...set];
		updateSharedData(newData);
		setNewText(" ");
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
					onChange={(event) => handleChange(event, props.name)}
				/>
				<Button
					onClick={() => handleUpdate(newText, props.name)}
					colorScheme='twitter'
					variant='outline'>
					+
				</Button>
			</Stack>
		</Box>
	);
}
