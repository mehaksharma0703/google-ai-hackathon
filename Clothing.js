import React, { useState } from 'react';
import { NativeBaseProvider, Box, Select, CheckIcon, Text } from 'native-base';

export default function Clothing({onCategorySelect}){
  const [selectedCategory, setSelectedCategory] = useState('');
  const handleValueChange = (itemValue) => {
    setSelectedCategory(itemValue);
    onCategorySelect(itemValue);
  };
  return (
    <Box width={200} mx="auto" my={5}>
      <Select
        selectedValue={selectedCategory}
        minWidth={200}
        accessibilityLabel="Select a clothing category"
        placeholder="Select a clothing category"
        _selectedItem={{
          bg: "cyan.600",
          endIcon: <CheckIcon size={4} />,
        }}
        mt={1}
        onValueChange={(itemValue) => {
          handleValueChange(itemValue);
        }}
      >
        <Select.Item label="Western" value="Western" />
        <Select.Item label="Indian" value="Indian" />
        <Select.Item label="Traditional" value="Traditional" />
        {/* Add more categories as needed */}
      </Select>
      {selectedCategory && <Text mt={4}>Selected Category: {selectedCategory}</Text>}
    </Box>
  );
};

// export default function App() {
//   return (
//     <NativeBaseProvider>
//       <Clothing />
//     </NativeBaseProvider>
//   );
// }