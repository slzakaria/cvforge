import { useState } from "react";
import CvContext from "../../utils/cvContext";
import useLocalStorage from "../../utils/useLocalStorage";

function CvProvider({ children }) {
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
		languages: [],
		socials: [
			{
				name: "linkedin",
				link: "",
			},
			{
				name: "twitter",
				link: "",
			},
			{
				name: "github",
				link: "",
			},
			{
				name: "website",
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
				id: 1,
				title: "Company 1 - Job title",
				location: "Company location - Country",
				from: "date",
				to: "date",
				current: true,
				summary: [{ id: 1, task: "test" }],
			},
			{
				id: 4,
				title: "Company 2 - Job title",
				location: "Company location - Country",
				from: "date",
				to: "date",
				current: true,
				summary: [{ id: 3, task: "test" }],
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
		displayEducation: false,
		displayProjects: true,
		activeColor: "#050505",
	};
	const [cvData, setCvData] = useLocalStorage("cvData", initialData);
	const [sharedData, setSharedData] = useState(cvData);

	const updateSharedData = (newData) => {
		setCvData(newData);
		setSharedData(newData);
	};

	return <CvContext.Provider value={{ sharedData, updateSharedData }}>{children}</CvContext.Provider>;
}

export default CvProvider;
