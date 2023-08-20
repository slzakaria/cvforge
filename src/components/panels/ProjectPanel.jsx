import { Box, Stack, Checkbox } from "@chakra-ui/react";

import { useContext, useState } from "react";
import CvContext from "../../utils/cvContext";
import StandardInput from "../inputs/StandardInput";
import AddSectionBtn from "../buttons/AddSectionBtn";

function ProjectPanel({ ...props }) {
	const { sharedData, updateSharedData } = useContext(CvContext);
	const [localData, setLocalData] = useState({ ...sharedData });
	const [newId, setNewId] = useState(crypto.randomUUID().slice(0, 13));
	const [newData, setNewData] = useState({ id: newId });

	const handleChange = (event, inputData, id) => {
		let newObj = { ...newData, id: id !== undefined ? id : newId };
		let updatedText;

		updatedText = event.target.value;
		newObj[inputData] = updatedText;
		setNewData(newObj);
		return;
	};

	function removeDuplicateObjectsLast(arr, idProperty) {
		const seenIds = {}; // Object to track encountered IDs
		const reversedArr = arr.slice().reverse(); // Create a reversed copy of the array
		return reversedArr
			.filter((obj) => {
				if (!seenIds[obj[idProperty]]) {
					seenIds[obj[idProperty]] = true;
					return true;
				}
				return false;
			})
			.reverse(); // Reverse the result again to get the original order
	}

	const handleUpdate = () => {
		let updatedProjects = [...localData.projects, newData];
		updatedProjects = removeDuplicateObjectsLast(updatedProjects, "id");
		let updatedLocal = { ...localData, projects: updatedProjects };
		setLocalData(updatedLocal);
		updateShared();
	};

	const updateShared = () => {
		updateSharedData(localData);
		setNewId(crypto.randomUUID().slice(0, 13));
		return;
	};

	return (
		<Box
			as='div'
			display='flex'
			flexDirection='column'
			alignContent='center'
			justifyContent='normal'
			alignItems='stretch'
			marginTop='1em'>
			<Stack spacing={6}>
				<StandardInput
					label='Title'
					name='title'
					type='text'
					placeholder='Title'
					onChange={() => handleChange(event, "title", newId)}
				/>
				<StandardInput
					label='URL'
					name='url'
					type='link'
					placeholder='https://www.example.com'
					onChange={() => handleChange(event, "url", newId)}
				/>
				<StandardInput
					label='Date'
					name='date'
					type='date'
					onChange={() => handleChange(event, "date", newId)}
				/>
			</Stack>
			<AddSectionBtn
				marginTop='1em'
				variant='outline'
				label='Save'
				onClick={() => handleUpdate()}
			/>
		</Box>
	);
}

export default ProjectPanel;
