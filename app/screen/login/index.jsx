import { 
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView, 

} from 'react-native';    


import { MyButton } from '../../components'     
import React from 'react'
import {ICfacebook, ICgoogle } from '../../../assets'



const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({navigation}){
  const [email, onChangeEmail] = React.useState('')
  const [pasword, onChangePassword] = React.useState('')

  const onSubmitLogin =()=>{
    try{
      if(email.trim().length === 0) {
        throw Error('Email is required')
      }
      if(pasword.trim().length === 0) {
        throw Error('Password is required')
      }
      
   navigation.navigate('Home')
  }catch(err){
    Alert.alert('Error', err.message,[
      {text: 'OK', onPress: () =>{
        console.log('ERR')
      }},
    ]);
  }
  } 

  return (
    <ScrollView>
      <View>
       
        <View style={{ width: windowWidth, height: 400}}>
          <ImageBackground 
            source={ require('../../../assets/images/Subtract.png') } 
            resizeMode="cover"
            style={{width:windowWidth, height:400}}>
              <View style={style.brandStyle}>
                <Image 
                  source={ require('../../../assets/images/Brand.png') } 
                />
              </View>
              
            <Text style={style.textLoginStyle}>Login</Text>
          </ImageBackground>
        </View>
      
        <View style={style.container}>
          <Text style={style.textLabel}>Email</Text>
          <TextInput
            style={style.textInputStyle}
            onChangeText={onChangeEmail}
            placeholder='type username or email'
            placeholderTextColor='#c7c7c7'
            value={email}/>

          <Text style={[style.textLabel,{marginTop:20}]}>Password</Text>
          <TextInput
            style={[style.textInputStyle, {marginBottom:12}]}
            onChangeText={onChangePassword}
            placeholder='type your password'
            placeholderTextColor='#c7c7c7'
            value={pasword}/>

          <Button
            onPress={onSubmitLogin}
            color='#000113'
            title="Login"/>
        </View>
      <Text style={style.textContinueStyle} >Or Continue With</Text>
        <View style={style.btncontainer} >
        <MyButton
        text="Google"
        imgUrl={ICgoogle}
        />

        <MyButton
        style={{marginLeft:15}}
        text="Facebook"
        imgUrl={ICfacebook}
        />

        

        </View>
        <View style={style.containerbottom} >
          <Text>Don't have an account?</Text>
          <Text><b>Create Now</b></Text>
        </View>

      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: { 
    padding:20,
  },
  textInputStyle:{
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
  },
  textLoginStyle:{
    fontSize:32,
    marginTop:150,
    fontWeight:'bold',
    textAlign:'center'
  },

  textContinueStyle: {
    textAlign: 'center',
    marginBottom: 12
  },

  containerbottom: {
    padding:15,
    flex:1,
    flexDirection:'row',
    justifyContent:'center'
  },
  brandStyle:{
    marginTop:100,
    alignItems:'center',
    justifyContent:'center'
  },

  btncontainer: {
    flex:2,
    flexDirection: 'row',
    paddingRight:20,
    paddingLeft:20
  },
  textLabel:{
    fontSize:12,
    fontWeight:'bold'
  }


})