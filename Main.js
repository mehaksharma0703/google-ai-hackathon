import React,{useState} from "react";
import { NativeBaseProvider, Box, Select, CheckIcon } from 'native-base';
import Clothing from "./Clothing";
import { Text, Button, Card } from '@rneui/themed';


export default function Main({onCategorySelect}) {

    const [selectedCategory, setSelectedCategory] = useState('');
    return (
<NativeBaseProvider>
    <Box width={200} alignItems="center" justifyContent="center" mx="auto" my={90}>
        
        <Clothing onCategorySelect={setSelectedCategory}/>
        <Button
                title="Analyze"
                loading={false}
                loadingProps={{ size: 'small', color: 'white' }}
                buttonStyle={{
                  backgroundColor: 'rgba(111, 202, 186, 1)',
                  borderRadius: 5,
                }}
                titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                containerStyle={{
                  height: 50,
                  width: 200,
                  marginVertical: 10,
                }}
                onPress={() => console.log('aye')}
              />
              </Box>
              </NativeBaseProvider>
    );
              }
