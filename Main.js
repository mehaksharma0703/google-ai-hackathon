// import React, { useState } from "react";
// import { ScrollView, Text } from 'react-native';
// import { NativeBaseProvider, Box, Select, CheckIcon, Slider, Button, FlatList, VStack, HStack, Divider } from 'native-base';
// import AnalyzeService from './AnalyzeService';


// export default function Main() {
//     const [product, setProduct] = useState('');
//     const [subProduct, setSubProduct] = useState('');
//     const [sliderValue, setSliderValue] = useState(100);
//     const [showTable, setShowTable] = useState(false);
//     const [data, setData] = useState([]);
//     const [showAnalyzeServiceComponent, setShowAnalyzeServiceComponent] = useState(false);

//     const products = {
//         cosmetics: ['lipstick', 'nail polish', 'foundation', 'mirror'],
//         electronics: ['smartphone', 'laptop', 'tablet', 'smartwatch'],
//         clothing: ['t-shirt', 'jeans', 'sweater', 'jacket'],
//     };

//     const handleProductChange = (value) => {
//         setProduct(value);
//         setSubProduct(''); // Reset subproduct when product changes
//     };

//     const handleSubProductChange = (value) => {
//         setSubProduct(value);
//     };

//     const handleSliderChange = (value) => {
//         setSliderValue(value); // Update slider value
//     };

//     const handleSubmit = () => {
//         setShowTable(true);
//         setData(Array.from({ length: 10 }, (_, i) => ({
//             id: i,
//             product: product,
//             subProduct: subProduct || "N/A",
//             budget: `$${sliderValue}`,
//             downloads: Math.floor(Math.random() * 1000)
//         })));
//         setShowAnalyzeServiceComponent(true);
//     };

//     const renderItem = ({ item }) => (
//         <HStack width="100%" space={3} justifyContent="space-between" alignItems="center">
//             <Text flex={1}>{item.product}</Text>
//             <Text flex={1}>{item.subProduct}</Text>
//             <Text flex={1}>{item.budget}</Text>
//             <Text flex={1}>{item.downloads}</Text>
//         </HStack>
//     );

//     return (
//         <NativeBaseProvider>
//             <ScrollView>
//                 <Box width={300} padding={4} bg="white" shadow={2} rounded="lg" alignItems="center" justifyContent="center" mx="auto" my={10}>
//                     <Text fontSize="lg" fontWeight="medium">Select your promotion details</Text>
//                     <Text mt={4}>Product Category:</Text>
//                     <Select selectedValue={product} onValueChange={handleProductChange} placeholder="Select a product category" width="100%">
//                         {Object.keys(products).map((product) => (<Select.Item label={product} value={product} key={product} />))}
//                     </Select>
//                     {product && (
//                         <>
//                             <Text mt={4}>Sub-Product:</Text>
//                             <Select selectedValue={subProduct} onValueChange={handleSubProductChange} placeholder="Select a subproduct" width="100%">
//                                 {products[product].map((subProduct) => (<Select.Item label={subProduct} value={subProduct} key={subProduct} />))}
//                             </Select>
//                         </>
//                     )}
//                     <Text mt={4}>Budget:</Text>
//                     <Slider width="100%" defaultValue={100} minValue={100} maxValue={15000} step={100} onChange={handleSliderChange}>
//                         <Slider.Track><Slider.FilledTrack /></Slider.Track>
//                         <Slider.Thumb />
//                     </Slider>
//                     <Text>Current Budget: ${sliderValue}</Text>
//                     <Button mt={4} size="md" colorScheme="teal" onPress={handleSubmit}>Analyze</Button>
//                     {showTable && (
//                         <VStack space={2} mt={4} width="100%">
//                             <HStack space={3} justifyContent="space-between" alignItems="center">
//                                 <Text bold flex={1}>Product</Text>
//                                 <Text bold flex={1}>Sub-Product</Text>
//                                 <Text bold flex={1}>Budget</Text>
//                                 <Text bold flex={1}>Downloads</Text>
//                             </HStack>
//                             <Divider my="2" />
//                             <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id.toString()} />
//                         </VStack>
//                     )}
//                 </Box>
//             </ScrollView>
//             {showAnalyzeServiceComponent && <AnalyzeService product={product} subProduct={subProduct} budget={sliderValue} />}
//         </NativeBaseProvider>
//     );
// }


import { useState, useEffect } from 'react';
import { ScrollView, Text, NativeBaseProvider, Box, Select, Slider, Button, FlatList, VStack, HStack, Divider } from 'native-base';
import { View, StyleSheet} from 'react-native';

const { GoogleGenerativeAI } = require("@google/generative-ai");

export default function Main() {
    const [product, setProduct] = useState('');
    const [subProduct, setSubProduct] = useState('');
    const [sliderValue, setSliderValue] = useState(100);
    const [showTable, setShowTable] = useState(false);
    const [data, setData] = useState([]);
    const columns = ['Instagram ID', 'Followers', 'Engagement Rate'];
    const countries = ["USA", "Canada", "UK", "Australia", "India"];
    const [country, setCountry] = useState('');

    const handleCountryChange = (value) => {
      setCountry(value);
    };
    const products = {
        cosmetics: ['lipstick', 'nail polish', 'foundation', 'mirror'],
        electronics: ['smartphone', 'laptop', 'tablet', 'smartwatch'],
        clothing: ['t-shirt', 'jeans', 'sweater', 'jacket'],
    };

    const handleProductChange = (value) => {
        setProduct(value);
        setSubProduct('');
    };

    const handleSubProductChange = (value) => {
        setSubProduct(value);
    };

    const handleSliderChange = (value) => {
        setSliderValue(value);
    };

    async function fetchInfluencers() {
        const genAI = new GoogleGenerativeAI("AIzaSyC1mO3BGituswoxah_IbiYWtaZYhs-opaM");
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const prompt = `Generate a list of the top 10 influencers suitable for promoting products in the ${subProduct || product} category, with a focus on targeting customers within a budget of $${sliderValue} and in the given country. Each influencer's data should be structured as an object with the following properties: instagram_id, follower count, and engagement rate and price_per_post. Return the list as a JSON array of these objects`;
        console.log(prompt);
        const result = await model.generateContent(prompt);

        
        const response = await result.response;
        
        const influencers = response.text(); // Assuming the response is directly usable, adjust as needed based on actual API response format.
        //console.log(influencers);
        return influencers; // Assuming the response is a JSON string, parse it.
    };

    const handleSubmit = async () => {
        const influencers = await fetchInfluencers();
        setData(influencers);
        setShowTable(true);
        //console.log(data["Influencers IDs"])
    };

    const renderItem = ({ item }) => (
      <HStack width="100%" space={3} justifyContent="space-between" alignItems="center">
          <Text flex={1}>{item[0].instagram_id}</Text>
          <Text flex={1}>{item.follower}</Text>
          <Text flex={1}>{item.engagement_rate}</Text>
      </HStack>
  );



const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ddd',
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    backgroundColor: '#f9f9f9',
    borderColor: '#ddd',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  headerText: {
    flex: 1,
    padding: 8,
    fontWeight: 'bold',
  },
  rowText: {
    flex: 1,
    padding: 8,
  },
});
  

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
                    <Text mt={4}>Country:</Text>
<Select selectedValue={country} onValueChange={handleCountryChange} placeholder="Select a country" width="100%">
    {countries.map((country) => (<Select.Item label={country} value={country} key={country} />))}
</Select>
                    <Text mt={4}>Budget:</Text>
                    <Slider width="100%" defaultValue={100} minValue={100} maxValue={15000} step={100} onChange={handleSliderChange}>
                        <Slider.Track><Slider.FilledTrack /></Slider.Track>
                        <Slider.Thumb />
                    </Slider>
                    <Text>Current Budget: ${sliderValue}</Text>
                    <Button mt={4} size="md" colorScheme="teal" onPress={handleSubmit}>Analyze</Button>
                </Box>
                
                <Text flex={1} px={2}>{data}</Text>
                {/* {showTable && Array.isArray(data) && data.map((item, index) => (
                  console.log(item.instagram_id),
                <HStack key={index} width="100%" space={3} justifyContent="space-between" alignItems="center" bg={index % 2 === 0 ? 'gray.100' : 'white'}>
                    <Text flex={1} px={2}>{item.instagram_id}</Text>
                    <Text flex={1} px={2}>{item.follower}</Text>
                    <Text flex={1} px={2}>{item.engagement_rate}</Text>
                </HStack>
            ))}
                 */}
         
            </ScrollView>

        </NativeBaseProvider>
    );

}
