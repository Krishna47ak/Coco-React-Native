import { connect } from 'react-redux';
import { Text, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getUsers } from '../store/actions/user';

const Toast = ({ toast, status, getUsers }) => {

    if (toast === null) {
        return
    }

    return (
        <>
            {!status ? (
                <View className='bg-[#d1d5db80] px-5 py-2 rounded-3xl bg-opacity-50 z-10 absolute bottom-32 '>
                    <Text> {toast}</Text >
                </View >
            ) :
                <TouchableOpacity className='flex-row items-center space-x-2 bg-[#93c5fd80] px-5 py-2 rounded-3xl z-10 absolute bottom-32 ' onPress={() => (getUsers())} >
                    <MaterialCommunityIcons name="reload" size={24} color="black" />
                    <Text> {toast}</Text >
                </TouchableOpacity>}
        </>

    )
}
Toast.propTypes = {
    toast: PropTypes.string,
    status: PropTypes.bool.isRequired,
    getUsers: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    toast: state.user.toast,
    status: state.user.status
})

export default connect(mapStateToProps, { getUsers })(Toast)