import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

// Dữ liệu giả lập cho các thẻ
const insights = [
    { id: 1, title: "Scan new", icon: "scan-outline", count: "Scanned 483" },
    { id: 2, title: "Counterfeits", icon: "warning-outline", count: "32" },
    {
        id: 3,
        title: "Success",
        icon: "checkmark-done-outline",
        count: "Checkouts 8",
    },
    { id: 4, title: "Directory", icon: "book-outline", count: "History 26" },
];

// 📌 Home Screen
const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, padding: 20, backgroundColor: "#F8F9FB" }}>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                    Hello 👋
                </Text>
                <Image
                    source={{
                        uri: "https://randomuser.me/api/portraits/women/45.jpg",
                    }}
                    style={{ width: 40, height: 40, borderRadius: 20 }}
                />
            </View>

            <Text style={{ marginTop: 10, fontSize: 18, color: "gray" }}>
                Your Insights
            </Text>

            <FlatList
                data={insights}
                numColumns={2}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Scan")}
                        style={{
                            flex: 1,
                            margin: 8,
                            backgroundColor: "white",
                            padding: 20,
                            borderRadius: 15,
                            alignItems: "center",
                            shadowColor: "#000",
                            shadowOpacity: 0.1,
                            shadowRadius: 10,
                        }}>
                        <Icon name={item.icon} size={28} color="#555" />
                        <Text style={{ fontWeight: "bold", marginTop: 10 }}>
                            {item.title}
                        </Text>
                        <Text style={{ color: "gray" }}>{item.count}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

// 📌 Scan Screen
const ScanScreen = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#F8F9FB",
            }}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ position: "absolute", top: 40, left: 20 }}>
                <Icon name="arrow-back-outline" size={28} color="black" />
            </TouchableOpacity>

            <Image
                source={{ uri: "https://via.placeholder.com/300x500.png" }}
                style={{ width: 300, height: 500, borderRadius: 15 }}
            />

            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 10,
                    backgroundColor: "white",
                    borderRadius: 15,
                    position: "absolute",
                    bottom: 40,
                    shadowColor: "#000",
                    shadowOpacity: 0.1,
                    shadowRadius: 10,
                }}>
                <Icon name="pricetag-outline" size={24} color="black" />
                <Text
                    style={{
                        marginLeft: 10,
                        fontSize: 18,
                        fontWeight: "bold",
                    }}>
                    Orange Juice
                </Text>
            </View>
        </View>
    );
};

// 📌 Stack Navigator
const Stack = createStackNavigator();
const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Scan" component={ScanScreen} />
        </Stack.Navigator>
    );
};

// 📌 Bottom Tabs Navigator
const Tab = createBottomTabNavigator();
const AppTabs = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="HomeTab"
                component={HomeStack}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Cart"
                component={ScanScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="cart-outline" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

// 📌 Kết hợp vào NavigationContainer
export default function App() {
    return (
        <NavigationContainer>
            <AppTabs />
        </NavigationContainer>
    );
}
