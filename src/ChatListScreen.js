import React from 'react'
import {FlatList, View, TouchableOpacity, Text, Image} from 'react-native'

export default class ChatListScreen extends React.Component{

    static navigationOptions = {
        title:'Chat List',
        tabBarIcon:({tintColor}) => <Image style={{width:40, height:40, tintColor:tintColor}} source={require('./../res/icon_chat.png')}/>
    }

    constructor(){
        super();

        this.state = {
            chatlist:[]
        }
    }

    componentWillMount(){
        this.setState({
            chatlist:[
                {id:'0', name:'Sunki Baek', text:'When are your coming?', pic:require('./../res/pic1.jpg')},
                {id:'1', name:'Comet Kim', text:'Hello buddy.', pic:require('./../res/pic2.jpg')},
                {id:'2', name:'Bright Lee', text:'I\'m gonna get there at 3.', pic:require('./../res/pic3.jpg')}
            ]
        })
    }

    render(){
        return (
            <FlatList
                data={this.state.chatlist}
                keyExtractor={item => item.id}
                renderItem={item => (
                    <TouchableOpacity 
                        onPress={() => {this.props.screenProps.stackNavigation.navigate('chat', {name:item.item.name});}}
                        style={{width:'100%', height:70, flexDirection:'row', paddingHorizontal:20, borderBottomWidth:1, borderColor:'#0002'}}>
                        <Image style={{alignSelf:'center', resizeMode:'cover', width:50, height:50, borderRadius:25}} source={item.item.pic}/> 
                        <View style={{alignSelf:'center', marginLeft:10}}>
                            <Text style={{color:'gray'}}>{item.item.name}</Text>
                            <Text>{item.item.text}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        )
    }

}