import { theme } from '@/theme';
import { TextInput } from 'react-native-paper';
import styled from 'styled-components/native';

export const Input = styled(TextInput).attrs((props) => {
	return {
		theme: {
			colors: {
				onSurfaceVariant: theme.colors.text.secondary,
			},
		},
		outlineColor: theme.colors.brand.outline,
		outlineStyle: {
			borderRadius: 15,
			borderColor: theme.colors.brand.outline,
			borderWidth: 2,
			backgroundColor: theme.colors.text.white,
		},
		contentStyle: {
			fontFamily: theme.fontFamily.interMedium,
			fontSize: 15,
			marginLeft: 50,
		},
		textColor: theme.colors.text.primary,
		activeOutlineColor: theme.colors.text.primary,
	};
})`
	padding-top: 3px;
	padding-bottom: 3px;
`;
export const InputIcon = styled.View`
	justify-content: center;
	height: 56px;
`;

/* <Input
placeholder='First Name'
mode='outlined'
value={text}
left={
	<TextInput.Icon
		icon={() => (
			<InputIcon>
				<Icon size={24} color={theme.colors.text.primary} source='bell-ring-outline' />
			</InputIcon>
		)}
	/>
}
right={
	<TextInput.Icon
		icon={() => (
			<InputIcon>
				<Icon size={24} color={theme.colors.text.secondary} source='eye' />
			</InputIcon>
		)}
	/>
}
onChangeText={(text) => setText(text)}
/> */
