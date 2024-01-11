import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface DropdownProps {
    options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <View style={styles.dropdown}>
            <TouchableOpacity
                style={styles.dropdownToggle}
                onPress={() => setIsOpen(!isOpen)}
            >
                <Text style={{color:"#7E8087"}}>{selectedOption || 'Ürün Durumu Seçiniz'}</Text>
            </TouchableOpacity>
            {isOpen && (
                <View style={styles.dropdownMenu}>
                    {options.map((option) => (
                        <TouchableOpacity
                            key={option}
                            onPress={() => handleOptionClick(option)}
                        >
                            <Text style={{color:"black"}}>{option}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    dropdown: {
        // Add your styles for the dropdown container
    },
    dropdownToggle: {

      
    },
    dropdownMenu: {


    },
});

export default Dropdown;
