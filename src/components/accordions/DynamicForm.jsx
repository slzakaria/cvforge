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
	const [localData, setLocalData] = useState({ ...sharedData });
	const [localWorks, setLocalWorks] = useState(localData.work);
	const [newId, setNewId] = useState(crypto.randomUUID().slice(0, 13));
	const [newData, setNewData] = useState({ id: newId, summary: [] });
	const [isChecked, setIsChecked] = useState(false);
	const [newText, setNewText] = useState(" ");

	const handleChange = (event, inputData, id) => {
		let newObj = { ...newData, id: id !== undefined ? id : newId };
		let updatedText;

		if (inputData === "current") {
			updatedText = event.target.checked ? true : false;
			setIsChecked(updatedText);
			newObj.to = "Current";
		}
		if (inputData !== "current") {
			updatedText = event.target.value;
		}

		newObj[inputData] = updatedText;
		setNewData(newObj);
	};

	function removeDuplicateObjects(arr, objId) {
		const seenIds = {};
		return arr.filter((obj) => {
			if (!seenIds[obj[objId]]) {
				seenIds[obj[objId]] = true;
				return true;
			}
			return false;
		});
	}

	const handleUpdate = () => {
		let cleanLocalData = removeDuplicateObjects(localWorks, "id");
		setLocalWorks(cleanLocalData);
		console.log("local works", localWorks);
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
						<form>
							<Stack spacing={4}>
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
									onClick={() => handleUpdate()}
									onChange={() => handleChange(event, "summary", newId)}
								/>
							</Stack>
							<Button
								onClick={() => handleUpdate()}
								marginTop='1em'
								colorScheme='twitter'
								variant='outline'
								width='100%'>
								Save experience
							</Button>
						</form>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</Box>
	);
}

export default DynamicPanel;
