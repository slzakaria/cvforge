import { Button, ButtonGroup } from "@chakra-ui/react";
import { useState, useContext } from "react";
import CvContext from "../../utils/cvContext";

function ThemeButtons() {
	const { sharedData, updateSharedData } = useContext(CvContext);
	const [newColor, setNewColor] = useState(sharedData);

	const handleChange = (color) => {
		let updatedColor;
		if (color === "black") {
			updatedColor = "#050505";
		} else if (color === "blue") {
			updatedColor = "#4682B4";
		} else if (color === "yellow") {
			updatedColor = "#DAA520";
		} else if (color === "teal") {
			updatedColor = "#008080";
		}

		setNewColor(updatedColor);
		handleUpdate(updatedColor);
	};

	const handleUpdate = (updatedColor) => {
		updateSharedData({ ...sharedData, activeColor: updatedColor });
	};

	return (
		<ButtonGroup variant='outline' spacing='4' margin='1em'>
			<Button
				onClick={() => {
					handleChange("black");
				}}
				colorScheme='gray'
				_hover={{ bg: "gray" }}
				color='white'
				bg='#050505'>
				Black
			</Button>
			<Button
				onClick={() => {
					handleChange("blue");
				}}
				_hover={{ color: "black" }}
				colorScheme='gray'
				color='white'
				bg='#4682B4'>
				blue
			</Button>
			<Button
				onClick={() => {
					handleChange("yellow");
				}}
				_hover={{ color: "black" }}
				color='white'
				bg='#DAA520'>
				Yellow
			</Button>
			<Button
				onClick={() => {
					handleChange("teal");
				}}
				_hover={{ color: "black" }}
				colorScheme='teal'
				color='white'
				bg='#008080'>
				Teal
			</Button>
		</ButtonGroup>
	);
}

export default ThemeButtons;
