import { Textarea } from "@chakra-ui/react";

export default function TextArea({
	label,
	placeholder,
	value,
	onChange,
	name,
	...props
}) {
	return (
		<>
			<label htmlFor={name}>{label}</label>
			<Textarea
				name={name}
				placeholder={placeholder}
				size='md'
				value={value}
				onChange={onChange}
				resize='vertical'
				focusBorderColor='#003366'
				borderColor='#003366'
				_hover={{ borderColor: "#003366" }}
				{...props}
			/>
		</>
	);
}
