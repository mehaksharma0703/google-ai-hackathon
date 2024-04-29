import React, { useState } from "react";
import { NativeBaseProvider, Box, Select, CheckIcon, Slider, Button as NBButton } from 'native-base';

import { Text } from 'react-native';

export default function Main() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sliderValue, setSliderValue] = useState(100);

  const [product, setProduct] = useState('');
  const [subProduct, setSubProduct] = useState('');
  const [budget, setBudget] = useState(100);

  const products = {
      cosmetics: ['lipstick', 'nailpolish', 'foundation', 'mirror'],
      electronics: ['smartphone', 'laptop', 'tablet', 'smartwatch'],
      clothing: ['tshirt', 'jeans', 'sweater', 'jacket'],
  };

  const handleProductChange = (value) => {
      setProduct(value);
      setSubProduct(''); // Reset subproduct when product changes
  };

  const handleSubProductChange = (value) => {
      setSubProduct(value);
  };

  const handleSliderChange = (value) => {
    setSliderValue(value); // Update slider value
  };


  const handleBudgetChange = (value) => {
    setBudget(value);
};

const handleSubmit = () => {
    // Send the product, subproduct, and budget to the backend
};

return (
    <NativeBaseProvider>
        <Box width={200} alignItems="center" justifyContent="center" mx="auto" my={90}>
           
            <Text>What product do you want to promote?</Text>
            <Select
                selectedValue={product}
                onValueChange={handleProductChange}
                placeholder="Select a product"
                width={200}
            >
                {Object.keys(products).map((product) => (
                    <Select.Item label={product} value={product} key={product} />
                ))}
            </Select>
            {product && (
              <>
            <Text>Selected Product: {product}</Text>
        <Text>What subproduct do you want to promote?</Text>
        <Select
            selectedValue={subProduct}
            onValueChange={handleSubProductChange}
            placeholder="Select a subproduct"
            width={200}
        >
            {products[product].map((subProduct) => (
                <Select.Item label={subProduct} value={subProduct} key={subProduct} />
            ))}
        </Select>
    </>
                )}
                <Text>Selected SubProduct: {subProduct}</Text>
               
    <Text>What is your budget in dollars?</Text>
   <Slider
          w="3/4"
          maxW={300} // Change maxW to control the maximum width of the slider
          defaultValue={sliderValue} // Set initial value of the slider
          minValue={100}
          maxValue={15000}
          step={10}
          onChange={(value) => handleSliderChange(value)} // Handle slider value change
        >
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
        <Text>Current value: ${sliderValue}</Text>
    <NBButton onPress={handleSubmit}>Analyze</NBButton>
                
      </Box>
    </NativeBaseProvider>
    );

//     const [selectedCategory, setSelectedCategory] = useState('');
//     return (
// <NativeBaseProvider>
//     <Box width={200} alignItems="center" justifyContent="center" mx="auto" my={90}>
        
//         <Clothing onCategorySelect={setSelectedCategory}/>
//         <Button
//                 title="Analyze"
//                 loading={false}
//                 loadingProps={{ size: 'small', color: 'white' }}
//                 buttonStyle={{
//                   backgroundColor: 'rgba(111, 202, 186, 1)',
//                   borderRadius: 5,
//                 }}
//                 titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
//                 containerStyle={{
//                   height: 50,
//                   width: 200,
//                   marginVertical: 10,
//                 }}
//                 onPress={() => console.log('aye')}
//               />
//               </Box>
//               </NativeBaseProvider>
//     );
              }
