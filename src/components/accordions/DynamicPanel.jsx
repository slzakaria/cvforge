import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
	Button,
	Stack,
	Checkbox,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

import StandardInput from "../inputs/StandardInput";
import { useContext, useState } from "react";
import CvContext from "../../utils/cvContext";
import SummaryInput from "../inputs/SummaryInput";

function DynamicPanel({ ...props }) {
	const { sharedData, updateSharedData } = useContext(CvContext);
	const [newId, setNewId] = useState(crypto.randomUUID());
	const [newData, setNewData] = useState([{ id: newId, summary: [] }]);
	const [isChecked, setIsChecked] = useState(false);
	const [newText, setNewText] = useState(" ");

	const handleChange = (event, inputData, id) => {
		let newTest = { ...newData, id: id !== undefined ? id : newId };
		let updatedText;

		if (inputData === "current") {
			updatedText = event.target.checked ? true : false;
			setIsChecked(updatedText);
			newTest.to = "Current";
		}
		if (inputData !== "current") {
			updatedText = event.target.value;
		}

		// if (inputData === "summary") {
		// 	updatedText = event.target.value;
		// 	setNewText(updatedText.trim());
		// 	let copy = { ...newData };
		// 	copy.summary = [...copy.summary, updatedText.trim()];
		// 	setNewData(copy);
		// 	handleUpdate(copy);
		// 	return;
		// }

		newTest[inputData] = updatedText;
		setNewData(newTest);
		handleUpdate(newTest);
	};

	const handleUpdate = (updatedObj) => {
		let copyData = { ...sharedData };
		let newData = copyData.work.summary;
		// newData.push(updatedObj);
		// setNewData(newData);
		// updateSharedData(copyData);
		console.log("works", newData);
	};

	return (
		<Box
			as='div'
			display='flex'
			flexDirection='row'
			alignContent='center'
			justifyContent='space-between'
			alignItems='center'
			marginTop='1em'>
			<Button bg='red' color='white' size='sm' marginRight='0.5em'>
				{" "}
				<DeleteIcon />{" "}
			</Button>
			<Accordion allowToggle flex='1'>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box textAlign='left'>{props.title}</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={2}>
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
								onChange={() => handleChange(event, "summary", newId)}
							/>
						</Stack>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</Box>
	);
}

export default DynamicPanel;
