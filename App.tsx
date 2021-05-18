// Imports: Dependencies
import React, { useState } from 'react';
import { Button, Text, SafeAreaView, View } from 'react-native';

// Imports: Components
// import { ContactActionSheet, ContactItem }  from './src/index';
import { SlideModal }  from './src/index';

// App
const App: React.FC = (): JSX.Element => {
  return (
    <SlideModal
      modal={
        <>
          <Text>Hi</Text>
        </>
      }
      pressDone={() => console.log('Done Pressed')}
      pressCancel={() => console.log('Cancel Pressed')}
      darkMode={false}
      disabled={false}
    />
  );
};

// Exports
export default App;
