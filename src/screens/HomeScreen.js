import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { View } from 'react-native'
import NetInfo from "@react-native-community/netinfo";
import { getUsersOffline, checkInternet } from '../store/actions/user';
import ListNames from '../components/ListNames';
import Header from '../components/Header';
import Toast from '../components/Toast';

const HomeScreen = ({ getUsersOffline, checkInternet }) => {
useEffect(() => {
    getUsersOffline()
    const unsubscribe = NetInfo.addEventListener(state => {
        checkInternet(state.isConnected)
    });

    return () => {
        unsubscribe();
    }
},[])

    return (
        <View className='flex-1 pt-10 pb-2 items-center' >
            <Header title={'Influencers'} />
            <Toast/>
            <ListNames/>
        </View>
    )
}

HomeScreen.propTypes = {
    getUsersOffline: PropTypes.func.isRequired,
    checkInternet: PropTypes.func.isRequired
}

export default connect(null, { getUsersOffline, checkInternet })(HomeScreen)