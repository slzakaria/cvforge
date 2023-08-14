import { Switch, FormControl, FormLabel } from "@chakra-ui/react";
import { useContext, useState } from "react";
import CvContext from "../../utils/cvContext";

function ToggleInputs({ ...props }) {
	const { sharedData, updateSharedData } = useContext(CvContext);
	const [isEducation, setIsEducation] = useState(sharedData.displayEducation);
	const [isProjects, setIsProjects] = useState(sharedData.displayProjects);

	const handleChange = (event, toggle) => {
		const updatedToogle = event.target.checked ? true : false;
		if (toggle === "education") {
			setIsEducation(updatedToogle);
			handleUpdate("education");
		} else if (toggle === "projects") {
			setIsProjects(updatedToogle);
			handleUpdate("projects");
		}
	};

	const handleUpdate = (toggle) => {
		let newData;
		if (toggle === "education") {
			newData = { ...sharedData, displayEducation: !sharedData.displayEducation };
		} else if (toggle === "projects") {
			newData = { ...sharedData, displayProjects: !sharedData.displayProjects };
		}
		updateSharedData(newData);
	};

	return (
		<>
			Show {props.name} section ?
			<FormControl display='flex' alignItems='center'>
				<FormLabel htmlFor={props.name} mb='0'></FormLabel>
				<Switch
					id={props.name}
					value={props.name === "education" ? isEducation : isProjects}
					onChange={(e) => handleChange(e, props.name)}
				/>
			</FormControl>
		</>
	);
}

export default ToggleInputs;
