import { Stack } from "@chakra-ui/react";

import StandardInput from "../inputs/StandardInput";

function SocialsPanel({ ...props }) {
	return (
		<Stack spacing={6} marginTop='1em'>
			<StandardInput label='LinkedIn' name='LinkedIn' type='link' />
			<StandardInput label='Twitter' name='twitter' type='link' />
			<StandardInput label='Github' name='github' type='link' />
			<StandardInput label='Website' name='website' type='link' />
		</Stack>
	);
}

export default SocialsPanel;
