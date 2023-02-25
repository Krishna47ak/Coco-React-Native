import { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { ScrollView, Text, View } from 'react-native'
import { Input, Button } from '@rneui/themed';
import Header from '../components/Header';
import Toast from '../components/Toast';

const UserDetails = ({ route: { params }, profiles: { users } }) => {
    const { id, color } = params

    const profile = users.find(
        user => user.id === id
    )

    const [ email, setEmail ] = useState(profile.email)
    const [ username, setUsername ] = useState(profile.username)
    const [ street, setStreet ] = useState(profile.address.street)
    const [ suite, setSuite ] = useState(profile.address.suite)
    const [ city, setCity ] = useState(profile.address.city)
    const [ zipcode, setZipcode ] = useState(profile.address.zipcode)
    const [ phone, setPhone ] = useState(profile.phone)
    const [ website, setWebiste ] = useState(profile.website)
    
    const formData = { email, username, street, suite, city, zipcode, phone, website }

    return (
        <View className='flex-1 py-12 items-center' >
            <Toast />
            <View className='bg-white rounded-3xl p-4'  >
                <Header title={'Edit Profile'} />
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View className=' flex items-center mb-10 ' >
                        <View className={` ${color} p-7 rounded-full w-24`} >
                            <Text className='text-white text-center text-3xl font-bold' >{profile.name.charAt(0)}</Text>
                        </View>
                        <Text className='text-xl font-bold my-4' >{profile.name}</Text>
                        <Text className='text-xs font-semibold text-gray-500' >{profile.company.name}</Text>
                    </View>
                    <View>
                        <Input label='Email' value={email} onChangeText={ setEmail } autoCapitalize="none" autoCorrect={false} />
                        <Input label='Username' value={username} onChangeText={ setUsername } autoCorrect={false} />
                        <Text className='ml-2 mb-2 text-lg font-semibold text-slate-600' >Address</Text>
                        <View className='ml-3' >
                            <Input label='Street' value={street} onChangeText={ setStreet } autoCorrect={false} />
                            <Input label='Suite' value={suite} onChangeText={ setSuite } autoCorrect={false} />
                            <Input label='City' value={city} onChangeText={ setCity } autoCorrect={false} />
                            <Input label='Zipcode' value={zipcode} onChangeText={ setZipcode } autoCorrect={false} />
                        </View>
                        <Input label='Phone' value={phone} onChangeText={ setPhone } autoCorrect={false} />
                        <Input label='Website' value={website} onChangeText={ setWebiste } autoCorrect={false} />
                    </View>
                    <View className='pb-10 pt-5' >
                        <Button onPress={() => console.log(formData)} >Submit</Button>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

UserDetails.propTypes = {
    profiles: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profiles: state.user
})


export default connect(mapStateToProps)(UserDetails)