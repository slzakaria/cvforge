import { FormControl, FormLabel, Input } from "@chakra-ui/react";

function StandardInput({ ...props }) {
	return (
		<FormControl hidden={props.hidden}>
			<FormLabel color='#003366' htmlFor={props.name}>
				{props.label}
			</FormLabel>
			<Input
				_placeholder={{ opacity: 1, color: "#003366" }}
				focusBorderColor='blue.500'
				variant='flushed'
				flexGrow='1'
				id={props.id}
				width={props.width || "100%"}
				name={props.name}
				type={props.type}
				placeholder={props.placeholder}
				value={props.value}
				onChange={props.onChange}
			/>
		</FormControl>
	);
}

export default StandardInput;
