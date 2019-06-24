/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {  NativeModules } from 'react-native';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';


export default class App extends Component {

  _openChat = (id) => {
      var ApplozicChat = NativeModules.ApplozicChat;
      let mobileNo = "dee"//this.props.loginData.mobile_no;
      let chatMobileNo = id; //mobile;

      var userLogin = {
          'userId' : mobileNo,   //Replace it with the userId of the logged in user NOTE : userId need to be string and  +,*,? are not allowed chars in userId.
          'displayName' : mobileNo,
          'password' : mobileNo,  //Put password here
          'authenticationTypeId' : 1,
          'applicationId' : "3422cbb5cbc3ad65ca1a41e5dd40e8a57",  //replace "applozic-sample-app" with App ID from Applozic Dashboard
          'deviceApnsType' : 0    //Set 0 for Development and 1 for Distribution (Release)
      };
      ApplozicChat.login( userLogin , (error, response) => {
          if(error){
              //authentication failed callback
              console.log('login error response:',error)
          }else{             
            ApplozicChat.openChatWithUser(chatMobileNo);
          }   
      }) 
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem onPress={() => this._openChat("Jkhub")}>
              <Text>Jkhub</Text>
            </ListItem>
            <ListItem onPress={() => this._openChat("Mahesh")}>
              <Text>Mahesh</Text>
            </ListItem>
            <ListItem onPress={() => this._openChat("Bilal")}>
              <Text>Bilal</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}


