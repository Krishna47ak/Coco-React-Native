import { connect } from 'react-redux';
import { Text, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types';

const Toast = ({ toast }) => {

    return (
        <>
            {toast !== null ? (<View className='bg-gray-300 px-5 py-2 rounded-3xl bg-opacity-50 absolute bottom-32 ' >
                <Text>{toast}</Text>
            </View>) : null}
        </>
    )
}
Toast.propTypes = {
    toast: PropTypes.string
}

const mapStateToProps = state => ({
    toast: state.user.toast
})

export default connect(mapStateToProps)(Toast)