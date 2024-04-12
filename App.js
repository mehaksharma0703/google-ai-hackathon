import React from "react";
import { NativeBaseProvider, Box, Select, CheckIcon } from 'native-base';

export default function App() {
  return <NativeBaseProvider>
    <Box width={200} mx="auto" my={5}>
        <Select
          selectedValue="js"
          minWidth={200}
          accessibilityLabel="Select a category"
          placeholder="Select a Category"
          _selectedItem={{
            bg: "cyan.600",
            endIcon: <CheckIcon size={4} />,
          }}
          mt={1}
          onValueChange={(itemValue) => {
            console.log(itemValue);
          }}
        >
          <Select.Item label="JavaScript" value="js" />
          <Select.Item label="TypeScript" value="ts" />
          <Select.Item label="Python" value="py" />
        </Select>
      </Box>
</NativeBaseProvider>;
}