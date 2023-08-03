import { Box } from "@chakra-ui/react";
import SettingsPanel from "./components/ui/SettingsPanel";
import TemplatePanel from "./components/ui/TemplatePanel";
import CvProvider from "./components/ui/cvProvider";

function App() {
	return (
		<Box>
			{/** put context provider here */}
			<CvProvider>
				<Box minHeight='100dvh' display='flex' justifyContent='normal' as='div'>
					<Box padding='1em' width='[35dvw,40dvw]' bg='#F8FBFD' boxShadow='md'>
						<SettingsPanel style={{ margin: "0 auto" }} />
					</Box>
					<Box
						bg='white'
						padding='2em'
						width='auto'
						margin='0 auto'
						overflow='hidden'
						id='templatePanel'>
						<TemplatePanel />
					</Box>
				</Box>
			</CvProvider>
		</Box>
	);
}

export default App;
