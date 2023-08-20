import { Box, Stack, Checkbox } from "@chakra-ui/react";
import { useContext, useState } from "react";
import CvContext from "../../utils/cvContext";
import StandardInput from "../inputs/StandardInput";
import AddSectionBtn from "../buttons/AddSectionBtn";

function EducationPanel({ ...props }) {
	const { sharedData, updateSharedData } = useContext(CvContext);
	const [localData, setLocalData] = useState({ ...sharedData });
	const [newId, setNewId] = useState(crypto.randomUUID().slice(0, 13));
	const [newData, setNewData] = useState({ id: newId });
	const [isChecked, setIsChecked] = useState(false);

	const handleChange = (event, inputData, id) => {
		let newObj = { ...newData, id: id !== undefined ? id : newId };
		let updatedText;

		if (inputData === "current") {
			updatedText = event.target.checked ? true : false;
			setIsChecked(updatedText);
			newObj.to = "Current";
			newObj[inputData] = updatedText;
			setNewData(newObj);
			return;
		}

		if (inputData !== "current") {
			updatedText = event.target.value;
			newObj[inputData] = updatedText;
			setNewData(newObj);
			return;
		}
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
		let updatedEducation = [...localData.education, newData];
		updatedEducation = removeDuplicateObjectsLast(updatedEducation, "id");
		setLocalData({ ...localData, education: updatedEducation });
		updateSharedData(localData);
		setNewId(crypto.randomUUID().slice(0, 13));
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
					label='Degree'
					name='degree'
					type='text'
					placeholder='Degree'
					onChange={() => handleChange(event, "degree", newId)}
				/>
				<StandardInput
					label='Institution'
					name='institution'
					type='text'
					placeholder='Institution'
					onChange={() => handleChange(event, "institution", newId)}
				/>
				<StandardInput
					label='Location'
					name='location'
					type='text'
					placeholder='City  , Country'
					onChange={() => handleChange(event, "location", newId)}
				/>
				<StandardInput
					label='Date from'
					name='dateFrom'
					type='date'
					onChange={() => handleChange(event, "from", newId)}
				/>
				<div style={{ display: isChecked ? "none" : "block" }}>
					<StandardInput
						label='Date to'
						name='dateTo'
						type='date'
						onChange={() => handleChange(event, "to", newId)}
					/>
				</div>
				<Checkbox
					name='current'
					isChecked={isChecked}
					value={isChecked}
					muid={newId}
					onChange={() => handleChange(event, "current", newId)}>
					Current
				</Checkbox>
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

export default EducationPanel;
