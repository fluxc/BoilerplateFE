import { theme } from '@/theme';
import { Button } from 'react-native-paper';
import styled from 'styled-components/native';

interface BtnProps {
	mode: string;
}

//  <ButtonPrim mode='contained' disabled onPress={() => console.log('Pressed')}>
// Press me
// </ButtonPrim>

//  <ButtonSec mode='contained' disabled onPress={() => console.log('Pressed')}>
//             Press me
// </ButtonSec>

export const ButtonPrim = styled(Button).attrs((props) => {
	return {
		theme: {
			colors: {
				primary: theme.colors.brand.primary,
				onPrimary: theme.colors.text.white,
				surfaceDisabled: theme.colors.brand.form,
				onSurfaceDisabled: theme.colors.text.secondary,
			},
		},
		labelStyle: {
			fontFamily: theme.fontFamily.interBold,
			fontSize: 15,
		},
	};
})<BtnProps>`
	padding: 10px 2px;
	border-radius: 15px;
	letter-spacing: 0.7px;
	border-width: ${({ mode }) => (mode === 'outlined' ? '2px' : '0')};
	border-color: ${({ mode, disabled }) =>
		disabled ? theme.colors.brand.outline : mode === 'outlined' ? theme.colors.brand.primary : 'transparent'};
`;

export const ButtonSec = styled(Button).attrs((props) => {
	return {
		theme: {
			colors: {
				primary: theme.colors.text.primary,
				onPrimary: theme.colors.text.primary,
				surfaceDisabled: theme.colors.brand.form,
				onSurfaceDisabled: theme.colors.text.secondary,
			},
		},
		labelStyle: {
			fontFamily: theme.fontFamily.interBold,
			fontSize: 15,
		},
		buttonColor: props.mode === 'outlined' ? '' : theme.colors.brand.form,
	};
})<BtnProps>`
	padding: 10px 2px;
	border-radius: 15px;
	letter-spacing: 0.7px;
	border-width: ${({ mode }) => (mode === 'outlined' ? '2px' : '0')};
	border-color: ${({ mode }) => (mode === 'outlined' ? theme.colors.brand.outline : 'transparent')};
`;
