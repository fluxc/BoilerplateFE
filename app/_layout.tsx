import * as React from 'react';
import { theme } from '@/theme';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from 'expo-router';

export const unstableSettings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: 'account',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync().catch(() => {
	return null;
});

export default function RootLayout() {
	const [loaded, error] = useFonts({
		'inter-m': require('../assets/fonts/Inter-Medium.ttf'),
		'inter-b': require('../assets/fonts/Inter-Bold.ttf'),
		...FontAwesome.font,
	});

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync().catch(() => {
				return null;
			});
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return <RootLayoutNav />;
}
function RootLayoutNav() {
	return (
		<ThemeProvider theme={theme}>
			<Stack>
				<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
				<Stack.Screen name='(account)' options={{ headerShown: false }} />
			</Stack>
		</ThemeProvider>
	);
}
