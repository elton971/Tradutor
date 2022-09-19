import React from "react";
import { View,Text, StyleSheet,Image } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { SafeAreaView } from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';


export const Login=()=>{

    const navegation=useNavigation<any>();
    
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
                        right={<TextInput.Icon icon="email" />}
                        style={styles.email}
                    />
                    <TextInput
                        mode="outlined"
                        label="Password"
                        secureTextEntry
                        right={<TextInput.Icon icon="eye" />}
                        style={styles.pass}

                     />

                </View>
                <View style={styles.or_View}
>
                    <Text style={styles.or_Text}>OR</Text>

                </View>

                <View style={styles.users_credecial}>

                    <Button 
                    icon="email"
                    mode="text" 
                    onPress={() =>{} }
                    >
                        Forgot Password
                    </Button>

                    <Button  mode="outlined" onPress={() =>{
                        navegation.navigate("signIn")
                    }}>
                        Sign Up Now
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
        padding:20,
        
        
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
    or_Text:{
        fontSize:20
    },
    need:{
        marginVertical:20,
    }

})