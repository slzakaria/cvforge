import { Box, Text } from "@chakra-ui/react";
import LangButtons from "./buttons/LanguageBtn";
import ThemeButtons from "./buttons/ThemeBtn";
import OptionsContainer from "./ui/OptionsContainer";
import ActionButtons from "./buttons/ActionBtn";

function SettingsPanel() {
	return (
		<Box as='div' maxWidth='90dvw' overflowY='scroll' maxHeight='90dvh'>
			<Box>
				<Text fontWeight='bold' fontSize='2em'>
					Settings Panel
				</Text>
			</Box>
			<Box as='div' marginTop='2em' marginBottom='1em'>
				<Text fontWeight='medium' fontSize='1.5em'>
					CV Language
				</Text>
				<LangButtons />
			</Box>
			<Box as='div' marginBottom='2em'>
				<Text fontWeight='medium' fontSize='1.5em'>
					CV Colors
				</Text>
				<ThemeButtons />
			</Box>
			<Box as='div' marginBottom='2em'>
				<OptionsContainer />
			</Box>
			<Box as='div' marginBottom='1em'>
				<ActionButtons />
			</Box>
		</Box>
	);
}

export default SettingsPanel;
