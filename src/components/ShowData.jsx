import { useContext, useEffect, useState } from "react";
import CvContext from "../utils/cvContext";

function ShowData() {
	const { sharedData } = useContext(CvContext);
	const [displayedData, setDisplayedData] = useState("");

	useEffect(() => {
		console.log("sharedData", sharedData);
		setDisplayedData(sharedData);
		//setDisplayedData(sharedData);
	}, [sharedData]);

	return (
		<div style={{ margin: "0 auto", padding: "1em" }}>
			<h1 style={{ textAlign: "center", color: "red" }}>Data display</h1>
			<p style={{ background: "lightgray" }}>{JSON.stringify(displayedData)}</p>
			<p style={{ background: "lightblue" }}>{JSON.stringify(displayedData.name)}</p>
		</div>
	);
}

export default ShowData;
