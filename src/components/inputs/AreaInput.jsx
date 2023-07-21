import { Textarea, FormLabel } from "@chakra-ui/react";

export default function TextArea({ ...props }) {
	return (
		<>
			<FormLabel color='#003366' htmlFor={props.name}>
				{props.label}
			</FormLabel>
			<Textarea
				name={props.name}
				placeholder={props.placeholder}
				size='md'
				value={props.value}
				onChange={props.onChange}
				resize='vertical'
				borderColor='#003366'
				_hover={{ borderColor: "#003366" }}
				_placeholder={{ opacity: 1, color: "#003366" }}
				focusBorderColor='blue.500'
			/>
		</>
	);
}
