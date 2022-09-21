import { SafeAreaView } from "react-native-safe-area-context"
import React, { useState } from "react"
import { View,TextInput, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import Ionicons from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/AntDesign';
import SelectDropdown from 'react-native-select-dropdown'


export const Home=()=>{

    const countries = ["Egypt", "Canada", "Australia", "Irela"]
    const [fromLanguanges,setFromLanguanges]=useState<string>()
    const [toLanguanges,setToLanguanges]=useState<string>()
    
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.content}>
                <View style={styles.selectDrop}>

                <View style={styles.select}>
                    <SelectDropdown
                        buttonStyle={styles.dropdown1BtnStyle}
                        renderSearchInputLeftIcon={() => {
                            return <Ionicons name={'search'} color={'#444'} size={18} />;
                          }}
                        renderDropdownIcon={isOpened => {
                            return <Ionicons name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                          }}
                        buttonTextStyle={styles.dropdown2BtnTxtStyle}
                        dropdownIconPosition={'right'}
                        dropdownStyle={styles.dropdown1DropdownStyle}
                        rowStyle={styles.dropdown1RowStyle}
                        rowTextStyle={styles.dropdown1RowTxtStyle}
                        selectedRowStyle={styles.dropdown1SelectedRowStyle}
                        searchInputStyle={styles.dropdown1searchInputStyleStyle}
                        searchPlaceHolder="Search"
                        search={true}
	    	            data={countries}
	                    onSelect={(selectedItem, index) => {
                            setFromLanguanges(selectedItem)
                            console.log(selectedItem, index)
	                    }}
	                    buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
	                    }}
	                    rowTextForSelection={(item, index) => {
                            return item
	                    }}
                        />
                </View>
                <View style={styles.viewButton}>
                    <Button
                        style={styles.buttonChange}
                    >
                        <Ionicons name="exchange" size={20} color={"#104028"} />
                        
                    </Button>
                </View>
                <View>
                    <SelectDropdown
                        buttonStyle={styles.dropdown1BtnStyle}
                        renderSearchInputLeftIcon={() => {
                            return <Ionicons name={'search'} color={'#444'} size={18} />;
                          }}
                        renderDropdownIcon={isOpened => {
                            return <Ionicons name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                          }}
                        buttonTextStyle={styles.dropdown2BtnTxtStyle}
                        dropdownIconPosition={'right'}
                        dropdownStyle={styles.dropdown1DropdownStyle}
                        rowStyle={styles.dropdown1RowStyle}
                        rowTextStyle={styles.dropdown1RowTxtStyle}
                        selectedRowStyle={styles.dropdown1SelectedRowStyle}
                        searchInputStyle={styles.dropdown1searchInputStyleStyle}
                        searchPlaceHolder="Search"
                        search={true}
	    	            data={countries}
	                    onSelect={(selectedItem, index) => {
                            setToLanguanges(selectedItem)
                            console.log(selectedItem, index)
	                    }}
	                    buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
	                    }}
	                    rowTextForSelection={(item, index) => {
                            return item
	                    }}
                        />
                </View>

                <View style={styles.textInput}>
                    <View style={styles.toLaguages}>
                        <Button>
                            <Icons name={'sound'} color={'white'} size={18} /> 
                        </Button>

                        <Text style={{color:"white",}} >
                            {fromLanguanges}
                        </Text>
                    </View>
                        <TextInput
                            multiline
                            placeholder="Enter text"
                            placeholderTextColor={"#9DB1FF"}
                            style={styles.text}
                        />

                </View>
                
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#171D33",
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        paddingHorizontal:10
        
    },
    content:{

    },
    selectDrop:{
        flexDirection:"column",
        marginHorizontal:10

    },
    select:{
        marginBottom:20
    },
    viewButton:{
        position:"absolute",
        justifyContent:"center",
        alignItems:"center",
        padding:20
        

    },
    buttonChange:{
        position:"relative",
        top:0,
        left:-10,
        zIndex:1,
        backgroundColor:"#278036",
        justifyContent:"center",
        width:70,
        height:70,
        borderRadius:50,
        borderColor:"#6E4FAF",
        borderWidth:1,
        
    },
    
    dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
    dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
    dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
    dropdown1SelectedRowStyle: {backgroundColor: 'rgba(0,0,0,0.1)'},
    dropdown1searchInputStyleStyle: {
        backgroundColor: '#EFEFEF',
        borderRadius: 8,
        borderBottomWidth: 1,
        borderBottomColor: '##171D33',
    },
    dropdown1BtnStyle: {
        width: '100%',
        height: 50,
        backgroundColor: '#121729',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#6E4FAF',
    },
    dropdown2BtnTxtStyle: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    //==========================textInput==================
    textInput:{
        backgroundColor:"#0E1120",
        height:200,
        borderRadius:20,
        marginTop:20,
    },
    toLaguages:{
        alignItems:"center",
        flexDirection:"row",
        marginHorizontal:0,
        marginTop:20,
        color:"white"
    },
    text:{
        marginHorizontal:20,
        marginVertical:20,
        color:"white"
    }
})