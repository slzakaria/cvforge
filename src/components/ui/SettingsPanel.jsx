import { Box, Stack, Text } from "@chakra-ui/react";
import ThemeButtons from "../buttons/ThemeBtn";
import OptionsContainer from "./OptionsContainer";
import ActionButtons from "../buttons/ActionBtn";
import CvContext from "../../utils/cvContext";
import { useContext, useState } from "react";

function SettingsPanel() {
	const { sharedData, updateSharedData } = useContext(CvContext);
	const [newText, setNewText] = useState(sharedData.name);
	const [count, setCount] = useState(0);

	const handleChange = (event) => {
		const updatedText = event.target.value;
		setNewText(updatedText);
		handleUpdate(updatedText);
	};

	const handleUpdate = (updatedText) => {
		updateSharedData({ ...sharedData, name: updatedText, count: count });
	};

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
