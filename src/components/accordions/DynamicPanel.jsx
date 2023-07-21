import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
	CloseButton,
	Stack,
} from "@chakra-ui/react";

import StandardInput from "../inputs/TextInput";
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
			<CloseButton size='sm' bg='red' color='white' />
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
							/>
							<StandardInput
								hidden={props.link === undefined ? false : true}
								label='Location'
								name='Location'
								type='text'
								placeholder='City  , Country'
							/>
							<StandardInput
								hidden={props.link === undefined ? true : false}
								label='URL'
								name='url'
								type='link'
								placeholder='https://www.example.com'
							/>
							<StandardInput
								hidden={props.link === undefined ? true : false}
								label='Date'
								name='date'
								type='date'
							/>
							<StandardInput
								hidden={props.link === undefined ? false : true}
								label='Date from'
								name='dateFrom'
								type='date'
							/>
							<StandardInput
								hidden={props.link === undefined ? false : true}
								label='Date to'
								name='dateTo'
								type='date'
							/>
							<TextArea
								name='summary'
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
