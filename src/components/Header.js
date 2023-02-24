import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = ({ title }) => {
    const navigation = useNavigation()

    return (
        <View className='flex-row items-center mt-5 mb-10 w-80 ' >
            <TouchableOpacity className='mr-auto p-1' onPress={() => navigation.goBack()} >
                <AntDesign name="left" size={15} color="grey" />
            </TouchableOpacity>
            <Text className='text-lg font-bold mr-auto' >{title}</Text>
        </View>
    )
}

export default Header