import React, { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { View,Text, StyleSheet,Image, Alert } from "react-native";
import { Button, TextInput } from "react-native-paper";

import auth from "@react-native-firebase/auth"



export const Sigin=()=>{

    const [email,setEmail]=useState<string>();
    const [password,setPassword]=useState<string>();
    
    function handleNewAccount(){
        auth()
        .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
        .then(() => {
            console.log('User account created & signed in!');
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }
            console.error(error);
        });
    };

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.imagem_View}> 
                    <Image
                    style={styles.stretch}
                    source={require('../assets/logo.png')}
                    />

                    <Text style={styles.text_Login}>Translate</Text>
                </View>
                <View style={styles.users_credecial}>
                    <TextInput
                        mode="outlined"
                        label="Email"
                        onChangeText={(text:string)=>{setEmail(text)}}
                        right={<TextInput.Icon icon="email" />}
                        style={styles.email}
                    />
                    <TextInput
                        mode="outlined"
                        label="Password"
                        secureTextEntry
                        onChangeText={(text:string)=>{setPassword(text)}}
                        right={<TextInput.Icon icon="eye" />}
                        style={styles.pass}

                     />

                </View>
                

                <View style={styles.users_credecial}>

                    <Button 
                    mode="contained" 
                    onPress={() =>{
                        handleNewAccount()
                    } }
                    style={{height:60,justifyContent:"center",borderRadius:10}}

                    >
                        <Text style={{fontSize:20}}>Register</Text>
                    </Button>
                    
                    <Button
                        mode="contained"
                        //buttonColor="red"
                        icon="home"
                        
                        style={{marginTop:20,height:60, justifyContent:"center",borderRadius:10}}
                    >
                        <Text style={{fontSize:18}}>Back</Text>
                        
                    </Button>
                    
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        paddingVertical:20,
    },
    wrapper:{
        
    },
    imagem_View:{
        justifyContent:'center',
        alignItems:"center",
        padding:20,
    },

    stretch:{
        width:130,
        height:130,
    },
    text_Login:{
        fontSize:40,
        marginTop:20
    },
    users_credecial:{
        padding:30,
        
        
    },
    email:{
        marginVertical:20,
    },
    pass:{
        marginTop:20
    },
    or_View:{
        justifyContent:"center",
        alignItems:"center"
    },

    need:{
        marginVertical:20,
    }

})