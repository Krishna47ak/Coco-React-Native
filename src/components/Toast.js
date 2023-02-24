import { connect } from 'react-redux';
import { Text, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types';
import NetInfo from "@react-native-community/netinfo";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getUsers, removeToast, checkInternet } from '../store/actions/user';
import { useEffect } from 'react';

const Toast = ({ toast, status, getUsers, removeToast, checkInternet }) => {

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            checkInternet(state.isConnected)
        });

        return () => {
            unsubscribe();
        }
    },[])

    if (toast === null ) {
        return
    }

    return (
        <>
            {!status ? (
                <View className='bg-[#d1d5db80] px-5 py-2 rounded-3xl bg-opacity-50 absolute bottom-32 '>
                    <Text> {toast}</Text >
                </View >
            ) :
                <TouchableOpacity className='flex-row items-center space-x-2 bg-[#93c5fd80] px-5 py-2 rounded-3xl z-10 absolute bottom-32 ' onPress={() => (getUsers(), removeToast())} >
                    <MaterialCommunityIcons name="reload" size={24} color="black" />
                    <Text> {toast}</Text >
                </TouchableOpacity>}
        </>

    )
}
Toast.propTypes = {
    toast: PropTypes.string,
    status: PropTypes.bool.isRequired,
    getUsers: PropTypes.func.isRequired,
    removeToast: PropTypes.func.isRequired,
    checkInternet: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    toast: state.user.toast,
    status: state.user.status
})

export default connect(mapStateToProps, { getUsers, removeToast, checkInternet })(Toast)