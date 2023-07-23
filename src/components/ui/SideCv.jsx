import {
	Box,
	Text,
	Stack,
	Skeleton,
	Tag,
	TagLabel,
	Divider,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

function SideCv() {
	const [cv, setCv] = useState(null);
	//const [skills, setSkills] = useState([]);

	useEffect(() => {
		let data = JSON.parse(localStorage.getItem("formSettings"));
		setTimeout(() => {
			setCv(data.formSettings);
			console.log("CV", data.formSettings);
		}, 2500);
	}, []);

	let skills = cv?.jobSkills.map((skill) => {
		return (
			<Tag
				key={skill}
				size='sm'
				borderRadius='lg'
				variant='solid'
				bg={cv.activeColor}>
				<TagLabel>{skill}</TagLabel>
			</Tag>
		);
	});

	if (cv === null)
		return (
			<>
				<Box as='div' margin='0 auto' padding={4}>
					<Stack spacing={6}>
						<Skeleton height='90dvh' />
					</Stack>
				</Box>
			</>
		);

	return (
		<>
			{/* Contact section */}
			<Box as='div' id='title_section' padding={4}>
				<Stack spacing={2}>
					<Text
						as='h1'
						fontSize='1.675em'
						fontWeight='semibold'
						wordBreak='break-word'>
						{cv.name} {cv.lastName}
					</Text>
					<Text
						as='h1'
						fontSize='1.6em'
						fontWeight='bold'
						wordBreak='break-word'
						color={cv.activeColor}>
						{cv.jobTitle}
					</Text>
					<Divider size='md' />
					<Stack spacing={4}>
						<Text fontSize='1em' fontWeight='bold'>
							Contact{" "}
						</Text>
						<Text
							as='h3'
							fontSize='0.8em'
							fontWeight='semibold'
							wordBreak='break-word'>
							<span style={{ marginRight: "0.5em" }}>
								<EmailIcon />
							</span>
							{cv.email}
						</Text>
						<Text
							as='h3'
							fontSize='0.8em'
							fontWeight='semibold'
							wordBreak='break-word'>
							<span style={{ marginRight: "0.5em" }}>
								<PhoneIcon />
							</span>
							{cv.phoneNumber}
						</Text>
						<Text
							as='h3'
							fontSize='0.8em'
							fontWeight='semibold'
							wordBreak='break-word'>
							<span style={{ marginRight: "0.5em" }}>
								<InfoOutlineIcon />
							</span>
							{cv.location}
						</Text>
					</Stack>
				</Stack>
			</Box>
			<Divider />
			{/* Skills section */}
			<Box as='div' id='skills_section' padding={4}>
				<Stack>
					<Text fontSize='1em' fontWeight='bold'>
						Skills & Qualifications
					</Text>
					<Stack
						direction={["column", "row"]}
						spacing='.5em'
						marginTop='0.5em'
						wrap='wrap'>
						{skills}
					</Stack>
				</Stack>
			</Box>
		</>
	);
}

export default SideCv;
