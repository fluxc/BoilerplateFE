import { SafeArea } from '@/components/safearea/safearea.component';
import { Stack } from 'expo-router';
import * as React from 'react';

const AccountLayout = () => {
	return (
		<SafeArea>
			<Stack>
				<Stack.Screen name='index' options={{ headerShown: false }} />
				<Stack.Screen name='signup' options={{ headerShown: false }} />
			</Stack>
		</SafeArea>
	);
};

export default AccountLayout;
