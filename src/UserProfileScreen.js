import React from 'react'
import {FlatList, View, TouchableOpacity, Text, Image} from 'react-native'

export default class UserProfileScreen extends React.Component{

    render(){
        return (
            <View style={{flex:1}}>
                <View style={{backgroundColor:'black'}}>
                    <TouchableOpacity style={{paddingTop:20}} onPress={() => this.props.navigation.goBack()}>
                        <Text style={{color:'white', fontSize:20, margin:10}}>Close</Text>
                    </TouchableOpacity>
                </View>
                <Image 
                    style={{width:'100%', height:'100%', backgroundColor:'black', resizeMode:'contain'}} 
                    source={this.props.navigation.state.params.imagesource}/>
            </View>
        )
    }
}