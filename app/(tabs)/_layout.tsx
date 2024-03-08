import * as React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '@/theme';

const Layout = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: theme.colors.brand.primary,
				tabBarLabelStyle: {
					fontFamily: 'inter-m',
				},
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					tabBarLabel: 'Home',
					title: 'Home',
					tabBarIcon: ({ size, color }) => <Ionicons name='home' size={size} color={color} />,
				}}
			/>

			<Tabs.Screen
				name='profile'
				options={{
					tabBarLabel: 'Profile',

					headerShown: false,
					tabBarIcon: ({ size, color }) => (
						<Ionicons name='person-circle-outline' size={size} color={color} />
					),
				}}
			/>
		</Tabs>
	);
};

export default Layout;
