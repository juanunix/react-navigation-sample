import React from 'react'
import {FlatList, View, TouchableOpacity, Text, Image} from 'react-native'

export default class FriendListScreen extends React.Component{

    static navigationOptions = (props) => ({
        title:'Friends List',
        tabBarIcon:({tintColor}) => <Image style={{width:40, height:40, tintColor:tintColor}} source={require('./../res/icon_friends.png')}/>,
    })

    constructor(){
        super();

        this.state = {
            friends:[]
        }
    }

    componentWillMount(){
        this.setState({
            friends:[
                {id:'0', name:'Sunki Baek', pic:require('./../res/pic1.jpg')},
                {id:'1', name:'Comet Kim', pic:require('./../res/pic2.jpg')},
                {id:'2', name:'Bright Lee', pic:require('./../res/pic3.jpg')},
                {id:'3', name:'Keu Kang', pic:require('./../res/pic4.jpg')},
            ]
        })
    }

    render(){
        return (
            <FlatList
                data={this.state.friends}
                keyExtractor={item => item.id}
                renderItem={item => (
                    <TouchableOpacity 
                        onPress={() => this.props.screenProps.modalNavigation.navigate('userprofile', {imagesource:item.item.pic})}
                        style={{width:'100%', height:70, flexDirection:'row', paddingHorizontal:20, borderBottomWidth:1, borderColor:'#0002'}}>
                        <Image style={{alignSelf:'center', resizeMode:'cover', width:50, height:50, borderRadius:25}} source={item.item.pic}/> 
                        <Text style={{alignSelf:'center', marginLeft:10}}>{item.item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        )
    }

}