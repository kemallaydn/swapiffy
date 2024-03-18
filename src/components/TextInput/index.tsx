import React from 'react';
import { TextInput } from 'react-native';
type CustomTextInputProps = {
    handleChange: (name: string, value: string) => void;
};

const CustomTextInput = ({ onChangeText,handleChange, placeholder,...rest }) => {
    return (
        <TextInput
            placeholderTextColor="#7E8087"
            style={{
                borderBottomWidth:1,
                paddingBottom:'1%',
                marginBottom:'8.5%',
                borderBottomColor:'#7E8087',
                marginVertical:'5%'
            }}
            keyboardType="email-address"
            placeholder={placeholder}
            onChangeText={onChangeText}
            {...rest}
        />
    );
};
export default CustomTextInput;
