import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import OrphanagesMap from "./pages/OrphanagesMap";
import OrphanageDetails from "./pages/OrphanageDetails";
import SelectMapPosition from "./pages/SelectMapPosition";
import OrphanageData from "./pages/OrphanageData";
import Header from "./components/Header";

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
	return (
		<NavigationContainer>
			<Navigator
				screenOptions={{
					headerShown: false,
					cardStyle: { backgroundColor: "#f2f3f5" },
				}}
			>
				<Screen name="OrphanagesMap" component={OrphanagesMap} />
				<Screen
					name="OrphanageDetails"
					options={{
						headerShown: true,
						header: () => <Header title="Orfanato" />,
					}}
					component={OrphanageDetails}
				/>
				<Screen
					name="SelectMapPosition"
					options={{
						headerShown: true,
						header: () => <Header showCancel title="Selecione no mapa" />,
					}}e
					component={SelectMapPosition}
				/>
				<Screen
					name="OrphanageData"
					options={{
						headerShown: true,
						header: () => <Header showCancel title="Informe os dados" />,
					}}
					component={OrphanageData}
				/>
			</Navigator>
		</NavigationContainer>
	);
}
