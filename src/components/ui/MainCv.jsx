import { Box, Text, Stack, Skeleton, Divider } from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import CvContext from "../../utils/cvContext";

function MainCv() {
	const { sharedData } = useContext(CvContext);
	const [mainCv, setMainCv] = useState(sharedData);

	useEffect(() => {
		setMainCv(sharedData);
	}, [sharedData]);

	let workHistory = mainCv?.work.map((item) => {
		let highpoints = item?.summary.map((sum) => {
			return (
				<li style={{ fontSize: ".9em", wordBreak: "break-word" }} key={sum.id}>
					{sum.task}
				</li>
			);
		});
		return (
			<Box as='div' padding={2} key={item.id}>
				<Text as='h2' fontSize='1em' fontWeight='semibold'>
					<u>{item.title}</u>
				</Text>
				<Text as='p' fontSize='1em' marginTop='1em' textColor='gray.600'>
					{item.location} | {item.from} - {item.to}
				</Text>
				<Stack as='ul' spacing='0.2em' marginTop='.5em'>
					{highpoints}
				</Stack>
			</Box>
		);
	});

	let projects = mainCv?.projects.map((item) => {
		return (
			<Box as='div' padding={2} key={item.title}>
				<Text as='h2' fontSize='0.9em' fontWeight='semibold'>
					<u>{item.title}</u>
				</Text>
				<Text as='p' fontSize='0.9' marginTop='1em' textColor='gray.600'>
					{item.location} | {item.from} - {item.to}
				</Text>
			</Box>
		);
	});

	let isEducation = mainCv.displayEducation;
	let isProjects = mainCv.displayProjects;

	if (mainCv === null)
		return (
			<>
				<Box as='div' margin='0 auto' padding={2}>
					<Stack spacing={2}>
						<Skeleton height='100dvh' />
					</Stack>
				</Box>
			</>
		);

	return (
		<>
			{/* About me section */}
			<Box padding={2}>
				<Text
					as='h1'
					fontSize='1.25em'
					fontWeight='semibold'
					wordBreak='break-word'
					color={mainCv.activeColor}>
					About me
				</Text>
				<Text as='p' fontSize='1em' wordBreak='break-word' marginTop='1em' whiteSpace='pre-line'>
					{mainCv.aboutMe}
				</Text>
			</Box>
			<Divider />

			{/* Experience section */}
			<Box padding={2} marginTop='0.5em'>
				<Text
					as='h1'
					fontSize='1.25em'
					fontWeight='semibold'
					wordBreak='break-word'
					color={mainCv.activeColor}>
					Experiences
				</Text>
			</Box>
			<Stack spacing={2}>{workHistory}</Stack>
			<Divider />

			{/* Projects section */}
			<Box padding={2} marginTop='0.5em' style={{ display: isProjects ? "block" : "none" }}>
				<Text
					as='h1'
					fontSize='1.25em'
					fontWeight='semibold'
					wordBreak='break-word'
					color={mainCv.activeColor}>
					Projects
				</Text>
				<Stack spacing={2}>{projects}</Stack>
			</Box>
			<Divider />

			{/* Education section */}
			<Box padding={2} marginTop='0.5em' style={{ display: isEducation ? "block" : "none" }}>
				<Text
					as='h1'
					fontSize='1.25em'
					fontWeight='semibold'
					wordBreak='break-word'
					color={mainCv.activeColor}>
					Education
				</Text>
				<Stack spacing={2}></Stack>
			</Box>
		</>
	);
}

export default MainCv;
