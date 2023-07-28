import { Box } from "@chakra-ui/react";
import SettingsPanel from "./components/ui/SettingsPanel";
import TemplatePanel from "./components/ui/TemplatePanel";
import { useEffect, useState } from "react";

function App() {
	const initialData = {
		formSettings: {
			jobTitle: "Front end Web developer",
			name: "Zakaria",
			lastName: "slimane",
			email: "zakaria.slimane@hotmail.fr",
			location: "Casablanca, Morocco",
			phoneNumber: "+212 699 33 65 09",
			aboutme:
				"A passionate front end developer and javascript enthusiast. With experience in the Vue JS.\n\nI'm currently working full-time for ADHOC Agency as a web developer while also developing  a basic expense and budget tracking web application. Learning and practicing React",
			jobSkills: [
				"Vue",
				"ES6",
				"Nuxt",
				"Tailwind",
				"Vite",
				"Node js",
				"Git",
				"Supabase",
				"Figma",
				"React",
			],
			softSkills: [
				"Communication ",
				"Team player",
				"Time management.",
				"Problem-solving ",
				"Self-learning and accountability",
			],
			languages: [
				{ lang: "English", level: "0%" },
				{ lang: "Arabic", level: "0%" },
				{ lang: "French", level: "0%" },
			],
			socials: [
				{
					name: "Linkedin",
					link: "zackaria-slimane",
				},
				{
					name: "Twitter",
					link: "gitignorer",
				},
				{
					name: "Github",
					link: "Zackaria-Slimane",
				},
				{
					name: "Website",
					link: "https://zackariasl.dev/",
				},
			],
			education: [
				{
					title: "",
					location: "",
					from: "2023-07-21T11:24:16.325Z",
					to: "2023-07-21T11:24:16.325Z",
					current: false,
					summary: "",
				},
			],
			work: [
				{
					title: "ADHOC AGENCY - Web Developer",
					location: "Casablanca , Morroco",
					from: "2022-05-15",
					to: "2012-02-01T00:00:00.000Z",
					current: true,
					summary:
						"- Wordpress sites creation , maintenance and customisation.\n- Shopify sites creation , maintenance and customisation.\n- Creating custom javascript scripts for client needs. \n- Handling Hosting , deployments and servers inhouse and for clients.\n- Managing and integrating google tags and facebook pixels in websites ",
					summaryArr: [
						"Wordpress sites creation , maintenance and customisation.",
						"Shopify sites creation , maintenance and customisation.",
						"Creating custom javascript scripts for client needs.",
						"Handling Hosting , deployments and servers inhouse and for clients.",
						"Managing and integrating google tags and facebook pixels in websites",
					],
				},
				{
					title: "OMNIYAT - Web Developer ",
					location: "Casablanca - Morroco",
					from: "2021-09-20",
					to: "2022-05-13",
					current: false,
					summary:
						" Building front end applications for transport management software SaaS ,\n Successfully updated legacy code multi pages / routes app into a single page application. Refactoring legacy code to new api with newer and more reusable components and in-house plugins.\nFormalizing the views and usage flow across different pages .\n Building NodeJS based automation tools for excel read/write , export\nSuggested and did an implementation of Nodejs - expressJS backend to benchmark against existing .net solution",
					summaryArr: [
						" Building front end applications for transport management software SaaS ,",
						" Successfully updated legacy code multi pages / routes app into a single page application. Refactoring legacy code to new api with newer and more reusable components and in-house plugins.",
						"Formalizing the views and usage flow across different pages .",
						" Building NodeJS based automation tools for excel read/write , export",
						"Suggested and did an implementation of Nodejs - expressJS backend to benchmark against existing .net solution",
					],
				},
			],
			projects: [
				{
					title: "2021 Hacktober fest participant",
					location: "",
					from: "2021-10-01",
					to: "2021-10-31",
					current: false,
					summary: "",
					summaryArr: [""],
				},
			],
			displayEducation: false,
			displayProjects: true,
			activeColor: "#1E40AF",
		},
	};

	useEffect(() => {
		let data = JSON.stringify(initialData);
		localStorage.setItem("formSettings", data);
		setFormSettings(initialData);
	}, []);

	const [formSettings, setFormSettings] = useState([]);

	console.info("formSettings object at root", formSettings.formSettings);

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
					<TemplatePanel />
				</Box>
			</Box>
		</Box>
	);
}

export default App;
