import { Box, Stack, Text } from "@chakra-ui/react";
import OptionsContainer from "./OptionsContainer";
import ThemeButtons from "../buttons/ThemeBtn";
import ActionButtons from "../buttons/ActionBtn";

function SettingsPanel() {
	return (
		<Box as='div' maxWidth='40dvw' minWidth='30dvh' overflowY='scroll' maxHeight='90dvh'>
			<Box>
				<Text fontWeight='bold' fontSize='2em'>
					Settings Panel
				</Text>
			</Box>
			<Stack spacing={4} marginTop='1em'>
				<Text fontWeight='medium' fontSize='1.2em'>
					CV Colors
				</Text>
				<ThemeButtons />
				<OptionsContainer />
				<ActionButtons />
			</Stack>
		</Box>
	);
}

export default SettingsPanel;
