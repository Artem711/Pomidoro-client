// PLUGINS IMPORTS //
import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

// COMPONENTS IMPORTS //
import MainContainer from "./Screens/Main/MainContainer"
import DeliveryTimeSelectionScreen from "./Screens/DeliveryTimeSelectionScreen/DeliveryTimeSelectionScreen"
import SelectAccountScreen from "./Screens/SelectAccountScreen/SelectAccountScreen"
import DeliveryTypeSelectionScreen from "./Screens/DeliveryTypeSelectionScreen/DeliveryTypeSelectionScreen"

// EXTRA IMPORTS //
import GeneralHeader from "../../Shared/Components/GeneralHeader/GeneralHeader"
import { MaterialIcons } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const PrivateCabinetScreen: React.FC<PropsType> = (props) => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator initialRouteName="PrivateCabinetScreenMain">
      <Stack.Screen
        name="BasketMainScreen"
        component={MainContainer}
        options={({ navigation, route }: any) => ({
          header: () => (
            <GeneralHeader
              navigation={navigation}
              leftIcon={
                <MaterialIcons
                  name="menu"
                  size={24}
                  color="#1C1C1C"
                  onPress={() => navigation.navigate("DashboardScreen")}
                />
              }
            />
          ),
        })}
      />
      <Stack.Screen
        name="DeliveryTimeSelectionScreen"
        component={DeliveryTimeSelectionScreen}
        options={({ navigation, route }: any) => ({
          header: () => (
            <GeneralHeader
              navigation={navigation}
              leftIcon={
                <Ionicons
                  name="ios-arrow-back"
                  size={24}
                  color="#1C1C1C"
                  onPress={() => navigation.goBack()}
                />
              }
            />
          ),
        })}
      />
      <Stack.Screen
        name="SelectAccountScreen"
        component={SelectAccountScreen}
        options={({ navigation, route }: any) => ({
          header: () => (
            <GeneralHeader
              navigation={navigation}
              leftIcon={
                <Ionicons
                  name="ios-arrow-back"
                  size={24}
                  color="#1C1C1C"
                  onPress={() => navigation.goBack()}
                />
              }
            />
          ),
        })}
      />
      <Stack.Screen
        name="DeliveryTypeSelectionScreen"
        component={DeliveryTypeSelectionScreen}
        options={({ navigation, route }: any) => ({
          header: () => (
            <GeneralHeader
              navigation={navigation}
              leftIcon={
                <Ionicons
                  name="ios-arrow-back"
                  size={24}
                  color="#1C1C1C"
                  onPress={() => navigation.goBack()}
                />
              }
            />
          ),
        })}
      />
    </Stack.Navigator>
  )
}

export default PrivateCabinetScreen