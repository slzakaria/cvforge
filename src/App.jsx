import { Box } from "@chakra-ui/react";
import SettingsPanel from "./components/ui/SettingsPanel";
import TemplatePanel from "./components/ui/TemplatePanel";
import useLocalStorage from "./utils/useLocalStorage";

function App() {
	const initialData = {
		jobTitle: "Job Position",
		name: "First name",
		lastName: "Last name",
		email: "email@domain.com",
		location: "City, Country",
		phoneNumber: "+xxx xx xx xx xx",
		aboutMe:
			"With a [number] years of experience in [relevant skills or areas], My adaptable nature, strong communication skills, and drive for continuous learning enable me to thrive in dynamic work environments. I am enthusiastic about [ one or two interests], and I am eager to leverage my expertise to make valuable contributions to [company/organization name] while continuously growing as a professional.",
		jobSkills: [],
		softSkills: [],
		languages: [{ lang: "English" }],
		socials: [
			{
				name: "Linkedin",
				link: "",
			},
			{
				name: "Twitter",
				link: "",
			},
			{
				name: "Github",
				link: "",
			},
			{
				name: "Website",
				link: "",
			},
		],
		education: [
			{
				title: "Education title (optional)",
				location: "",
				from: "2021-10-01",
				to: "2021-10-31",
				current: false,
				summary: "",
				summaryArr: [""],
			},
		],
		work: [
			{
				title: "Company name - Job title",
				location: "Company location - Country",
				from: "date",
				to: "date",
				current: true,
				summaryArr: ["task 1", "task 2", "task 3", "task 4"],
			},
			{
				title: "Company name - Job title",
				location: "Company location - Country",
				from: "date",
				to: "date",
				current: true,
				summaryArr: ["task 1", "task 2", "task 3", "task 4"],
			},
		],
		projects: [
			{
				title: "Project title (optional)",
				location: "",
				from: "2021-10-01",
				to: "2021-10-31",
				current: false,
				summary: "",
				summaryArr: [""],
			},
		],
		displayEducation: true,
		displayProjects: true,
		activeColor: "#1E40AF",
	};

	const [formSettings, setFormSettings] = useLocalStorage("formSettings", initialData);
	console.info("formSettings object at root app", formSettings);

	return (
		<Box>
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
					<TemplatePanel data={formSettings} />
				</Box>
			</Box>
		</Box>
	);
}

export default App;
