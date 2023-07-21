import { Box, Text, Stack } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon, InfoOutlineIcon } from "@chakra-ui/icons";

function SideCv() {
	return (
		<Box as='div' id='title_section'>
			<Stack spacing={2}>
				<Text
					as='h1'
					fontSize='1.675em'
					fontWeight='bold'
					wordBreak='break-word'>
					Name placeholder
				</Text>
				<Text as='h3' fontSize='1em' fontWeight='bold' wordBreak='break-word'>
					<span style={{ marginRight: "0.5em" }}>
						<EmailIcon />
					</span>
					Email placeholder
				</Text>
				<Text as='h3' fontSize='1em' fontWeight='bold' wordBreak='break-word'>
					<span style={{ marginRight: "0.5em" }}>
						<PhoneIcon />
					</span>
					Phone placeholder
				</Text>
				<Text as='h3' fontSize='1em' fontWeight='bold' wordBreak='break-word'>
					<span style={{ marginRight: "0.5em" }}>
						<InfoOutlineIcon />
					</span>
					Location placeholder
				</Text>
			</Stack>
		</Box>
	);
}

export default SideCv;
