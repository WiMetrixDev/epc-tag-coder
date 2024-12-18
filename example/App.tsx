import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import EPCTagCoder from "epc-tag-coder";
export default function App() {
	const [epc, setEpc] = useState("30340C04543AECD74877C4B8");
	const [upc, setUpc] = useState("");

	useEffect(() => {
		try {
			setUpc(EPCTagCoder.convertEPCToUPC(epc));
		} catch (e) {
			setUpc("An error occurred while converting EPC to UPC");
			console.error(e);
		}
	}, [epc]);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>EPC Tag Coder</Text>
			<View style={styles.main}>
				<View style={styles.row}>
					<Text style={styles.text}>EPC: </Text>
					<TextInput
						defaultValue={epc}
						onChange={(e) => setEpc(e.nativeEvent.text)}
						placeholder="Enter EPC"
						style={styles.input}
					/>
				</View>
				<View style={styles.row}>
					<Text style={styles.text}>UPC:</Text>
					<Text style={styles.text}>{upc}</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		gap: 10,
		padding: 20,
	},
	title: {
		fontSize: 36,
		fontWeight: "bold",
	},
	main: {
		flex: 1,
		justifyContent: "center",
		gap: 20,
	},
	row: {
		flexDirection: "row",
		gap: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	input: {
		padding: 10,
		lineHeight: 20,
		borderWidth: 1,
		borderColor: "#000",
		borderRadius: 5,
		fontSize: 16,
	},
	text: {
		fontSize: 16,
	},
});
