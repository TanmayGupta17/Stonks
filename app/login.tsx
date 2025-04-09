import Mybutton from '@/components/Mybutton';
import { useRouter } from 'expo-router';
import React from 'react'
import { View, Text, TextInput } from 'react-native'

const Login = () => {
    const route = useRouter();
    const OnContinue = () =>{
      route.navigate("/signup");
    }
    return (
      <View
        style={{
          flex:1,
        }}
      >
        <View style={{padding:20, gap:20}}>
            <TextInput placeholder='Enter Your Email' style={{borderWidth:1,paddingHorizontal:20}}/>
            <TextInput secureTextEntry={true} placeholder='Enter Your Password' style={{borderWidth:1,paddingHorizontal:20}}/>
            <Mybutton title={"Login"} OnPress={OnContinue}/>
        </View>
        
      </View>
    )
}

export default Login
