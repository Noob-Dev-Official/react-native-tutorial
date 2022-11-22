import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	SafeAreaView,
	Image,
	Alert,
	Button,
} from 'react-native';

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<Text numberOfLines={1}>
				Open up App.js to start working on yourasdasasdasasd
			</Text>
			<TouchableWithoutFeedback onPress={() => console.log('hello')}>
				<Image source={require('./assets/icon.png')} style={styles.image} />
			</TouchableWithoutFeedback>
			<Button
				title='Hello'
				onPress={() =>
					Alert.alert('Title', 'Message', [
						{ text: 'Yes', onPress: () => console.log('yes') },
						{ text: 'No', onPress: () => console.log('no') },
					])
				}
			/>
			<StatusBar style='auto' />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		margin: 50,
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		width: 100,
		height: 100,
		marginTop: 30,
	},
});
