import React from 'react'
import {FlatList, View, TouchableOpacity, Text, Image} from 'react-native'

export default class ChatScreen extends React.Component{

    static navigationOptions = (props) => ({
        title:'Chat with ' + props.navigation.state.params.name
    })

    render(){
        return (
            <Text style={{margin:20, fontSize:24}}>{this.props.navigation.state.params.name}'s saying blah blah blah.</Text>
        )
    }

}