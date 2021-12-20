import React from 'react'

// react navigation
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

// components
import Header from './src/components/Header/Header'

// screens
import Home from './src/screens/Home/Home'

const Drawer = createDrawerNavigator()

const App = () => {
	return (
		<>
			<NavigationContainer>
				<Drawer.Navigator initialRouteName='Home'>
					<Drawer.Screen
						name='Home'
						options={{
							header: props => (
								<Header {...props} title='Home' />
							),
						}}
						component={Home}
					/>
				</Drawer.Navigator>
			</NavigationContainer>
		</>
	)
}

export default App
