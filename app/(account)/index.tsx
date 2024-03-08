import { ButtonPrim, ButtonSec } from '@/components/button/button.component';
import { Input, InputIcon } from '@/components/input/input.component';
import { Spacer } from '@/components/spacer/spacer.component';
import { Text } from '@/components/typography/text.component';
import { theme } from '@/theme';
import { router } from 'expo-router';
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, TextInput } from 'react-native-paper';

const Login = () => {
	const [text, setText] = React.useState('');
	return (
		<View style={styles.container}>
			<Text variant='h1'>Welcome Back!</Text>
			<Spacer position='top' size={theme.sizes.size32} />
			<Text variant='p2' color={theme.colors.text.secondary}>
				In TypeScript, when you have an object like variants with various functions as properties, and you want
				to allow arbitrary keys to access these functions, you can use the any type for the object.
			</Text>
			<Spacer position='top' size={theme.sizes.size32} />
			<Input
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
				onChangeText={(text) => {
					setText(text);
				}}
			/>

			{/* <Input placeholder='First Name' value={text || ''} onChangeText={setText} /> */}
			<Spacer position='top' size={theme.sizes.size32} />
			<ButtonPrim
				mode='contained'
				onPress={() => {
					router.replace('/(tabs)');
				}}
			>
				Login
			</ButtonPrim>
		</View>
	);
};

export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		padding: 16,
	},
});
