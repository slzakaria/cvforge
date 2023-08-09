import InputButton from "./InputButton";
import { Box, FormLabel } from "@chakra-ui/react";
import { useContext, useState } from "react";
import CvContext from "../../utils/cvContext";

export default function SummaryInput({ ...props }) {
	// const { sharedData, updateSharedData } = useContext(CvContext);
	// const [newId, setNewId] = useState(props.muid);
	// const [newText, setNewText] = useState(" ");

	// const handleChange = (event, inputData) => {
	// 	const updatedText = event.target.value;
	// 	setNewText(updatedText.trim());
	// };

	// const handleUpdate = (updatedText) => {
	// 	if (updatedText === " ") return;
	// 	let targetId = props.mid;
	// 	let test = { ...sharedData };
	// 	console.log("NEW TASK", updatedText);
	// 	console.log("ID TASK", targetId);
	// 	console.log("TEST DATA", test);
	// 	setNewText(" ");
	// };

	return (
		<Box as='div'>
			<FormLabel htmlFor={props.name}>Tasks Summary</FormLabel>
			<InputButton name='summary' type='text' {...props} />
		</Box>
	);
}
