import { useContext, useState } from "react";
import cvContext from "../utils/cvContext";

function SetData() {
	const { sharedData, updateSharedData } = useContext(cvContext);
	const [newText, setNewText] = useState(sharedData.name);
	const [count, setCount] = useState(0);

	const handleChange = (event) => {
		const updatedText = event.target.value;
		setNewText(updatedText);
		handleUpdate(updatedText);
	};

	const handleUpdate = (updatedText) => {
		updateSharedData({ ...sharedData, name: updatedText, count: count });
	};

	return (
		<div
			style={{
				borderTop: "2px solid black",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}>
			<p>change data from here</p>
			<input
				style={{
					borderRadius: "0.5em",
					padding: "0.5em",
					width: "15em",
					marginTop: "1em",
					marginBottom: "1em",
					fontSize: "1.2em",
					fontWeight: "bold",
					border: "none",
					backgroundColor: "lightblue",
				}}
				type='text'
				onChange={handleChange}
			/>
		</div>
	);
}

export default SetData;
