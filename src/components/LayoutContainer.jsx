import { Box, Flex } from "@chakra-ui/react";
import SettingsPanel from "./SettingsPanel";

function Layout() {
	//import the two columns here
	return (
		<Box
			minHeight='100dvh'
			display='flex'
			justifyContent='space-between'
			as='div'>
			<Box padding='1em' width='40dvw' bg='white'>
				<SettingsPanel style={{ margin: "0 auto" }} />
			</Box>
			<Box bg='#FFFFF0' padding='2em' width='60dvw' overflow='hidden'>
				<h1>Column two</h1>
			</Box>
		</Box>
	);
}

export default Layout;
