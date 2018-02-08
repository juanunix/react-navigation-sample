import React from 'react'
import {FlatList, View, TouchableOpacity, Text, Image} from 'react-native'

import {DrawerOpenButton} from './Navigation'

export default class SettingScreen extends React.Component{

    static navigationOptions = props => ({
        title:'Settings',
        headerLeft:<DrawerOpenButton drawerNavigation={props.screenProps.drawerNavigation}/>
    })

    render(){
        console.log('test', this.props.screenProps);
        return (
            <View style={{flex:1, justifyContent:'center'}}>
                <TouchableOpacity onPress={() => this.props.screenProps.modalNavigation.goBack()} style={{alignSelf:'center'}}>
                    <Text style={{fontSize:36}}>Log out</Text>
                </TouchableOpacity>
            </View>
        )
    }

}