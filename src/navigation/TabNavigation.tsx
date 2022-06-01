import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from '../components';
import { useTheme } from '../hooks';
import { Articles, Home } from "../screens";

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {

    const { assets, colors } = useTheme();

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color: string }) => (
                        <Image
                            radius={0}
                            color={colors.black}
                            source={assets.hotel} />
                    ),
                    tabBarLabelPosition: 'below-icon',
                    tabBarLabelStyle: {
                        fontSize: 14,
                        paddingBottom: 2
                    }

                }}
            />

            <Tab.Screen
                name="Explore"
                component={Articles}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color: string }) => (
                        <Image
                            radius={0}
                            color={colors.black}
                            source={assets.articles} />
                    ),
                    tabBarLabelStyle: {
                        fontSize: 14,
                        paddingBottom: 2
                    }
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Articles}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color: string }) => (
                        <Image
                            radius={0}
                            color={colors.black}
                            source={assets.image} />
                    ),
                    tabBarLabelStyle: {
                        fontSize: 14,
                        paddingBottom: 2
                    }
                }}
            />

            <Tab.Screen
                name="Inbox"
                component={Articles}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color: string }) => (
                        <Image
                            radius={0}
                            color={colors.black}
                            source={assets.chat} />
                    ),
                    tabBarLabelStyle: {
                        fontSize: 14,
                        paddingBottom: 2
                    }
                }}
            />

            <Tab.Screen
                name="Setting"
                component={Articles}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color: string }) => (
                        <Image
                            radius={0}
                            color={colors.black}
                            source={assets.settings} />
                    ),
                    tabBarLabelStyle: {
                        fontSize: 14,
                        paddingBottom: 2
                    }
                }}
            />

        </Tab.Navigator>
    );
}

export default BottomTabNavigation;