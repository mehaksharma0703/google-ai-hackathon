import React, { useState } from "react";
import { ScrollView, Text } from 'react-native';
import { NativeBaseProvider, Box, Select, CheckIcon, Slider, Button, FlatList, VStack, HStack, Divider } from 'native-base';

export default function Main() {
    const [product, setProduct] = useState('');
    const [subProduct, setSubProduct] = useState('');
    const [sliderValue, setSliderValue] = useState(100);
    const [showTable, setShowTable] = useState(false);
    const [data, setData] = useState([]);

    const products = {
        cosmetics: ['lipstick', 'nail polish', 'foundation', 'mirror'],
        electronics: ['smartphone', 'laptop', 'tablet', 'smartwatch'],
        clothing: ['t-shirt', 'jeans', 'sweater', 'jacket'],
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

    const handleSubmit = () => {
        setShowTable(true);
        setData(Array.from({ length: 10 }, (_, i) => ({
            id: i,
            product: product,
            subProduct: subProduct || "N/A",
            budget: `$${sliderValue}`,
            downloads: Math.floor(Math.random() * 1000)
        })));
    };

    const renderItem = ({ item }) => (
        <HStack width="100%" space={3} justifyContent="space-between" alignItems="center">
            <Text flex={1}>{item.product}</Text>
            <Text flex={1}>{item.subProduct}</Text>
            <Text flex={1}>{item.budget}</Text>
            <Text flex={1}>{item.downloads}</Text>
        </HStack>
    );

    return (
        <NativeBaseProvider>
            <ScrollView>
                <Box width={300} padding={4} bg="white" shadow={2} rounded="lg" alignItems="center" justifyContent="center" mx="auto" my={10}>
                    <Text fontSize="lg" fontWeight="medium">Select your promotion details</Text>
                    <Text mt={4}>Product Category:</Text>
                    <Select selectedValue={product} onValueChange={handleProductChange} placeholder="Select a product category" width="100%">
                        {Object.keys(products).map((product) => (<Select.Item label={product} value={product} key={product} />))}
                    </Select>
                    {product && (
                        <>
                            <Text mt={4}>Sub-Product:</Text>
                            <Select selectedValue={subProduct} onValueChange={handleSubProductChange} placeholder="Select a subproduct" width="100%">
                                {products[product].map((subProduct) => (<Select.Item label={subProduct} value={subProduct} key={subProduct} />))}
                            </Select>
                        </>
                    )}
                    <Text mt={4}>Budget:</Text>
                    <Slider width="100%" defaultValue={100} minValue={100} maxValue={15000} step={100} onChange={handleSliderChange}>
                        <Slider.Track><Slider.FilledTrack /></Slider.Track>
                        <Slider.Thumb />
                    </Slider>
                    <Text>Current Budget: ${sliderValue}</Text>
                    <Button mt={4} size="md" colorScheme="teal" onPress={handleSubmit}>Analyze</Button>
                    {showTable && (
                        <VStack space={2} mt={4} width="100%">
                            <HStack space={3} justifyContent="space-between" alignItems="center">
                                <Text bold flex={1}>Product</Text>
                                <Text bold flex={1}>Sub-Product</Text>
                                <Text bold flex={1}>Budget</Text>
                                <Text bold flex={1}>Downloads</Text>
                            </HStack>
                            <Divider my="2" />
                            <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id.toString()} />
                        </VStack>
                    )}
                </Box>
            </ScrollView>
        </NativeBaseProvider>
    );
}
