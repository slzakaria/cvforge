import { Accordion } from "@chakra-ui/react";
import PersonalDetail from "../accordions/PersonalDetails";
import Qualifications from "../accordions/Qualifications";
import Experiences from "../accordions/Experiences";
import Education from "../accordions/Education";
import Projects from "../accordions/Projects";
import Socials from "../accordions/Socials";

function OptionsContainer() {
	return (
		<Accordion allowMultiple>
			<PersonalDetail />
			<Qualifications />
			<Experiences />
			<Education />
			<Projects />
			<Socials />
		</Accordion>
	);
}

export default OptionsContainer;
