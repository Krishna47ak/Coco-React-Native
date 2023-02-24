import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { getUsers } from '../store/actions/user';

const ListNames = ({ getUsers, profiles: { users, loading } }) => {
    const colors = ['bg-orange-500', 'bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-violet-500', 'bg-yellow-500', 'bg-amber-500', 'bg-lime-500', 'bg-emerald-500', 'bg-teal-500', 'bg-cyan-500']

    const navigation = useNavigation()

    useEffect(() => {
        getUsers()
    }, [])

    if (loading) {
        return (
            <View className='flex-1 justify-center items-center mb-32' >
                <Image source={require('../../assets/spinner.gif')} />
            </View>
        )
    }

    return (
        <FlatList
            data={users}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
                const color = colors[Math.floor(Math.random() * (colors.length - 1))]
                return (
                    <TouchableOpacity className=' flex-row items-center bg-red-40 w-[350] my-2 ' onPress={() => navigation.navigate('User', { id: item.id, color })} >
                        <View className={` ${color} p-10 rounded-xl `} >
                            <Text className='text-white text-3xl font-bold' >{item.name.charAt(0)}</Text>
                        </View>
                        <View className='mx-auto space-y-2 bg ' >
                            <Text className='font-bold' >{item.name}</Text>
                            <Text className='text-slate-500' >145 Request fillfield</Text>
                        </View>
                        <View className='mr-7' >
                            <AntDesign name="right" size={15} color="grey" />
                        </View>
                    </TouchableOpacity>
                )
            }}
        />
    )
}

ListNames.propTypes = {
    profiles: PropTypes.object.isRequired,
    getUsers: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    profiles: state.user
})

export default connect(mapStateToProps, { getUsers })(ListNames)