import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
	Button,
	Stack,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

import StandardInput from "../inputs/StandardInput";
import TextArea from "../inputs/AreaInput";

function DynamicPanel({ ...props }) {
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
								name='dynamic-title'
								type='text'
								placeholder='Title'
							/>
							<StandardInput
								hidden={props.link === undefined ? false : true}
								label='Location'
								name='dynamic-location'
								type='text'
								placeholder='City  , Country'
							/>
							<StandardInput
								hidden={props.link === undefined ? true : false}
								label='URL'
								name='dynamic-url'
								type='link'
								placeholder='https://www.example.com'
							/>
							<StandardInput
								hidden={props.link === undefined ? true : false}
								label='Date'
								name='dynamic-date'
								type='date'
							/>
							<StandardInput
								hidden={props.link === undefined ? false : true}
								label='Date from'
								name='dynamic-dateFrom'
								type='date'
							/>
							<StandardInput
								hidden={props.link === undefined ? false : true}
								label='Date to'
								name='dynamic-dateTo'
								type='date'
							/>
							<TextArea
								name='dynamic-summary'
								label='Summary'
								placeholder='Brief description'
							/>
						</Stack>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</Box>
	);
}

export default DynamicPanel;
