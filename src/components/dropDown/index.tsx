import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

interface DropdownProps {
  options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <View style={styles.dropdown}>
      <TouchableOpacity
        style={[styles.dropdownToggle]}
        onPress={() => setIsOpen(!isOpen)}
      >
        <Text style={{  }}>
          {selectedOption || 'Ürün Durumu Seçiniz'}
        </Text>
      </TouchableOpacity>
      {isOpen && (
        <ScrollView style={styles.dropdownMenu}>
          {options.map((option) => (
            <TouchableOpacity
              key={option}
              onPress={() => handleOptionClick(option)}
              onPressIn={() => setHoveredOption(option)}
              onPressOut={() => setHoveredOption(null)}
              style={[
                {
                  padding: '1%',
                  borderTopWidth: 1,
                  shadowColor: 'black',
                  backgroundColor:
                    hoveredOption !== option ? '#4D4D4D' : '#5D5D5D', // Hover durumunda renk değişimi

                },
              ]}
            >
              <Text style={{ color: 'white' }}>{option}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    marginTop: '3%',
    padding: '1%',
    borderRadius: 6,
    borderWidth:1,

  },
  dropdownToggle: {
    flex: 1,
    backgroundColor: '#4D4D4D',
padding: '1%',

  },
  dropdownMenu: {

    backgroundColor: 'black',
  },
});

export default Dropdown;
