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
			<Button width='90%' colorScheme='teal' variant='outline' isDisabled>
				Import settings
			</Button>
			<Button width='90%' colorScheme='orange' variant='outline' isDisabled>
				Export settings
			</Button>
		</Stack>
	);
}

export default ActionButtons;
