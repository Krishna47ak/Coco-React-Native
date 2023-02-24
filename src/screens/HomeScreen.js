import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { View } from 'react-native'
import { getUsersOffline } from '../store/actions/user';
import ListNames from '../components/ListNames';
import Header from '../components/Header';
import Toast from '../components/Toast';

const HomeScreen = ({ getUsersOffline }) => {
useEffect(() => {
    getUsersOffline()
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
    getUsersOffline: PropTypes.func.isRequired
}

export default connect(null, { getUsersOffline })(HomeScreen)