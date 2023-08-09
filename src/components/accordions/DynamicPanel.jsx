import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
	Stack,
	Checkbox,
	Button,
} from "@chakra-ui/react";

import StandardInput from "../inputs/StandardInput";
import AddSectionBtn from "../buttons/AddSectionBtn";
import { useContext, useState } from "react";
import CvContext from "../../utils/cvContext";
import SummaryInput from "../inputs/SummaryInput";

function DynamicPanel({ ...props }) {
	const { sharedData, updateSharedData } = useContext(CvContext);
	const [localData, setLocalData] = useState({ ...sharedData });
	const [newId, setNewId] = useState(crypto.randomUUID().slice(0, 13));
	const [newData, setNewData] = useState({ id: newId, summary: [] });
	const [isChecked, setIsChecked] = useState(false);
	const [newTask, setNewTask] = useState(" ");

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

	const updateArray = (event) => {
		const updatedInput = event.target.value;
		setNewTask(updatedInput);
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

	const handleAddTask = (task) => {
		let newTask = {
			id: crypto.randomUUID().slice(0, 8),
			task: task,
		};

		let newWork = { ...newData };
		let updatedWork = { ...newWork, summary: [...newWork.summary, newTask] };
		setNewData(updatedWork);
		handleUpdateLocal(updatedWork);
		setNewTask(" ");
	};

	const handleUpdateLocal = (data) => {
		console.log("Final work", data);
		let cleanData = { ...data, summary: removeDuplicateObjectsLast(data.summary, "id") };
		let local = { ...localData, work: [...localData.work, cleanData] };
		const cleanLocal = { ...local, work: removeDuplicateObjectsLast(local.work, "id") };
		console.log("Local data", local);
		console.log("Clean local data", cleanLocal);
		setLocalData(cleanLocal);
	};

	const handleUpdateShared = () => {
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
					label='Title'
					name='title'
					type='text'
					placeholder='Title'
					onChange={() => handleChange(event, "title", newId)}
				/>
				<StandardInput
					hidden={props.link === undefined ? false : true}
					label='Location'
					name='location'
					type='text'
					placeholder='City  , Country'
					onChange={() => handleChange(event, "location", newId)}
				/>
				<StandardInput
					hidden={props.link === undefined ? true : false}
					label='URL'
					name='url'
					type='link'
					placeholder='https://www.example.com'
					onChange={() => handleChange(event, "url", newId)}
				/>
				<StandardInput
					hidden={props.link === undefined ? true : false}
					label='Date'
					name='date'
					type='date'
					onChange={() => handleChange(event, "date", newId)}
				/>
				<StandardInput
					hidden={props.link === undefined ? false : true}
					label='Date from'
					name='dateFrom'
					type='date'
					onChange={() => handleChange(event, "from", newId)}
				/>
				<div style={{ display: isChecked ? "none" : "block" }}>
					<StandardInput
						hidden={props.link === undefined ? false : true}
						label='Date to'
						name='dateTo'
						type='date'
						onChange={() => handleChange(event, "to", newId)}
					/>
				</div>
				<Checkbox
					hidden={props.link === undefined ? false : true}
					name='current'
					isChecked={isChecked}
					value={isChecked}
					muid={newId}
					onChange={() => handleChange(event, "current", newId)}>
					Current
				</Checkbox>
				<SummaryInput
					label='Summary'
					name='summary'
					placeholder='Tasks you worked on'
					mid={newId}
					value={newTask}
					onChange={() => updateArray(event)}
				/>
				<Button
					colorScheme='twitter'
					variant='outline'
					h='1.8rem'
					size='md'
					onClick={() => handleAddTask(newTask)}>
					Add task
				</Button>
			</Stack>
			<AddSectionBtn marginTop='1em' variant='outline' label='Save' onClick={() => handleUpdateShared()} />
		</Box>
	);
}

export default DynamicPanel;
