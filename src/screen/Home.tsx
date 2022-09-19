import { SafeAreaView } from "react-native-safe-area-context"
import React, { useState } from "react"
import { View,Text, StyleSheet,Image } from "react-native";
import ComboBox from 'react-native-combobox';

export const Home=()=>{
    const [selectedValue, setSelectedValue] = useState(2);
    
    const values = [
        'option 1',
        'option 2',
        'option 3',
        'option 4',
        'option 5'
    ];

    return (
        <SafeAreaView>

            <View style={{ flex: 1, paddingVertical: 80, paddingHorizontal: 40, justifyContent: 'space-between' }}>
                <ComboBox
                    values={values}
                    onValueSelect={setSelectedValue}
                />
                <Text>selected value:          {values[selectedValue]}</Text>
        </View>
        </SafeAreaView>
    );
}