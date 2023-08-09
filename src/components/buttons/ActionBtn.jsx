import { useState } from "react";
import { Button, Stack } from "@chakra-ui/react";

function ActionButtons() {
	const [isLoading, setIsLoading] = useState(true);

	setTimeout(() => {
		setIsLoading(false);
	}, 5000);

	return (
		<Stack direction='column' spacing={4} align='center' marginTop='.5em'>
			<Button
				width='90%'
				isLoading={isLoading}
				loadingText='Loading'
				colorScheme='whatsapp'
				variant='outline'
				spinnerPlacement='start'>
				Download resume (PDF)
			</Button>
			<Button width='90%' colorScheme='teal' variant='outline'>
				Import settings
			</Button>
			<Button width='90%' colorScheme='orange' variant='outline'>
				Export settings
			</Button>
		</Stack>
	);
}

export default ActionButtons;
