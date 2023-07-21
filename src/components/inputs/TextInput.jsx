import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function TextInput({
	label,
	placeholder,
	value,
	onChange,
	name,
	width,
	type,
	...props
}) {
	return (
		<FormControl>
			<FormLabel htmlFor={name}>{label}</FormLabel>
			<Input
				_placeholder={{ opacity: 1, color: "#003366" }}
				focusBorderColor='#003366'
				variant='flushed'
				flexGrow='1'
				id={name}
				width={width || "100%"}
				name={name}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				{...props}
			/>
		</FormControl>
	);
}
