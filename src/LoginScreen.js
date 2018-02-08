import React from 'react'
import {FlatList, View, TouchableOpacity, Text, Image} from 'react-native'

export default class LoginScreen extends React.Component{

    render(){
        return (
            <View style={{flex:1, justifyContent:'center'}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('login')} style={{alignSelf:'center'}}>
                    <Text style={{fontSize:36}}>Log in</Text>
                </TouchableOpacity>
            </View>
        )
    }

}