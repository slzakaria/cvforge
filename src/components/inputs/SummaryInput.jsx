import StandardInput from "./StandardInput";
import { Button, Stack, Box, FormLabel } from "@chakra-ui/react";
import { useContext, useState } from "react";
import CvContext from "../../utils/cvContext";

export default function SummaryInput({ ...props }) {
	const { sharedData, updateSharedData } = useContext(CvContext);
	const [newId, setNewId] = useState(props.muid);
	const [newText, setNewText] = useState(" ");

	const handleChange = (event, inputData) => {
		console.log(inputData);
		const updatedText = event.target.value;
		setNewText(updatedText.trim());
	};

	const handleUpdate = (updatedText) => {
		let targetId = props.mid;
		let copyObj = { ...sharedData };
		let workArr = copyObj.work;

		workArr.map((workObj) => {
			// if (workObj.id === targetId) {
			// 	workObj.summary.push(updatedText);
			// } else return workObj;
			console.warn("workObj", workObj);
		});

		console.log("work at index 0", workArr[0]);
		updateSharedData(copyObj);
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
					onChange={(event) => handleChange(event, "summary", props.muid)}
				/>
				<Button onClick={() => handleUpdate()} colorScheme='twitter' variant='outline'>
					+
				</Button>
			</Stack>
		</Box>
	);
}
