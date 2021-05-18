// Imports: Dependencies
import React, { useState } from 'react';
import { Button, Text, SafeAreaView } from 'react-native';

// Imports: Components
// import { ContactActionSheet, ContactItem }  from './src/index';
import { SlideModal }  from './src/index';

// App
const App: React.FC = (): JSX.Element => {
  // React Hooks: State
  // const [ visible, toggle ] = useState<boolean>(false);

  return (
    <SafeAreaView>
      <SlideModal
        modal={
          <>
            <Text>Hi</Text>
          </>
        }
      />
    </SafeAreaView>
  );
};

// Exports
export default App;
