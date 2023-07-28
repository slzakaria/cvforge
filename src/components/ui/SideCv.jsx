import {
	Box,
	Text,
	Stack,
	Skeleton,
	Tag,
	TagLabel,
	Divider,
	List,
	ListItem,
	ListIcon,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import {
	LiaTwitter,
	LiaGithub,
	LiaLinkedinIn,
	LiaSafari,
} from "react-icons/lia";
import { useEffect, useState } from "react";

function SideCv() {
	const [cv, setCv] = useState(null);

	useEffect(() => {
		let data = JSON.parse(localStorage.getItem("formSettings"));
		setTimeout(() => {
			setCv(data.formSettings);
		}, 2500);
	}, []);

	let jobSkills = cv?.jobSkills.map((skill) => {
		return (
			<Tag
				key={skill}
				size='sm'
				borderRadius='sm'
				variant='solid'
				bg={cv.activeColor}>
				<TagLabel fontSize='0.8em'>{skill}</TagLabel>
			</Tag>
		);
	});

	let softSkills = cv?.softSkills.map((skill) => {
		return (
			<li style={{ fontSize: "0.9em" }} key={skill}>
				{skill}
			</li>
		);
	});

	let langList = cv?.languages.map((item) => {
		if (cv.languages)
			return (
				<li style={{ fontSize: "0.9em" }} key={item.lang}>
					{item.lang}
				</li>
			);
		else return null;
	});

	let socials = cv?.socials.map((item) => {
		return (
			<li>
				{item.name === "twitter" && <LiaTwitter />}
				<a
					href={item.link}
					target='_blank'
					rel='noopener noreferrer'
					key={item.name}>
					{item.link}
				</a>
			</li>
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
				<Stack spacing={1}>
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
					<Stack spacing={1}>
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
			<Box as='div' id='skills_section' padding={3}>
				<Stack>
					<Text fontSize='1em' fontWeight='bold'>
						Skills & Qualifications
					</Text>
					<Stack
						direction={["column", "row"]}
						spacing='.5em'
						marginTop='0.3em'
						wrap='wrap'>
						{jobSkills}
					</Stack>
				</Stack>
			</Box>
			<Divider />

			{/* Soft skills section */}
			<Box as='div' padding={3}>
				<Stack>
					<Text fontSize='1em' fontWeight='bold'>
						Soft skills
					</Text>
					<Stack
						padding={2}
						as='ul'
						spacing='.1em'
						marginTop='0.3em'
						wrap='wrap'>
						{softSkills}
					</Stack>
				</Stack>
			</Box>
			<Divider />

			{/* languages section */}
			<Box as='div' padding={2}>
				<Stack>
					<Text fontSize='1em' fontWeight='bold'>
						Languagues
					</Text>
					<Stack
						as='ul'
						id='languages_section'
						spacing='.2em'
						marginTop='0.2em'
						padding={2}
						wrap='wrap'>
						{langList}
					</Stack>
				</Stack>
			</Box>
			<Divider />

			{/* Socials section */}
			<Box as='div' padding={2}>
				<Stack>
					<Text fontSize='1em' fontWeight='bold'>
						Socials
					</Text>
					<Stack as='ul' spacing='.2em' marginTop='0.2em' wrap='wrap'>
						{socials}
					</Stack>
				</Stack>
			</Box>
		</>
	);
}

export default SideCv;
