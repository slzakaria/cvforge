import { useState, useContext } from "react";
import { Button, Stack } from "@chakra-ui/react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import CvContext from "../../utils/cvContext";

function ActionButtons() {
	const [isLoading, setIsLoading] = useState(true);
	const { sharedData } = useContext(CvContext);
	let fullName = `${sharedData.name}${sharedData.lastName}`;

	const generatePDF = () => {
		const input = document.getElementById("cvContainer"); // Replace with your template's ID

		html2canvas(input).then((canvas) => {
			const pdf = new jsPDF();
			const imgData = canvas.toDataURL("image/png");
			const imgWidth = 210; // A4 width in mm
			const imgHeight = (canvas.height * imgWidth) / canvas.width;
			pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
			pdf.save(`${fullName}.pdf`);
		});
	};

	const print = () => window.print();

	function downloadJSONSettings(setting) {
		const jsonSetting = JSON.stringify(setting);
		const blobSetting = new Blob([jsonSetting], { type: "application/json" });
		const url = URL.createObjectURL(blobSetting);
		const a = document.createElement("a");
		a.href = url;
		a.download = "data.json";
		a.click();
		URL.revokeObjectURL(url);
	}

	const exportSettings = () => {
		downloadJSONSettings(sharedData);
	};

	setTimeout(() => {
		setIsLoading(false);
	}, 1000);

	return (
		<Stack direction='column' spacing={4} align='center' marginTop='.5em'>
			<Button
				onClick={generatePDF}
				width='90%'
				isLoading={isLoading}
				loadingText='Loading'
				colorScheme='whatsapp'
				variant='outline'
				spinnerPlacement='start'>
				Download resume (PDF)
			</Button>
			<Button
				onClick={print}
				width='90%'
				isLoading={isLoading}
				loadingText='Loading'
				colorScheme='whatsapp'
				variant='outline'
				spinnerPlacement='start'>
				Print
			</Button>
			<Button width='90%' colorScheme='teal' variant='outline' isDisabled>
				Import settings
			</Button>
			<Button
				width='90%'
				colorScheme='orange'
				variant='outline'
				onClick={exportSettings}
				isLoading={isLoading}
				loadingText='Loading'>
				Export settings
			</Button>
		</Stack>
	);
}

export default ActionButtons;
