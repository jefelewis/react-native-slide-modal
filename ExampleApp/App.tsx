// Imports: Dependencies
import React, { useState } from 'react';
import { Button, Text } from 'react-native';

// Imports: Components
import { SlideModal }  from '../src/index';

// App
const App: React.FC = (): JSX.Element => {
  // React Hooks: State
  const [ modalVisible, setModalVisible ] = useState<boolean>(false);

  return (
    <SlideModal
      modalType="iOS Form Sheet"
      // modalType="iOS Bottom Sheet"
      modalVisible={modalVisible}
      screenContainer={
        <>
          <Button
            title="Show Modal"
            onPress={() => setModalVisible(!modalVisible)}
          />
        </>
      }
      modalContainer={
        <>
          <Text>Modal Content</Text>
        </>
      }
      modalHeaderTitle="Header Title"
      pressDone={() => setModalVisible(!modalVisible)}
      pressCancel={() => setModalVisible(!modalVisible)}
      darkMode={false}
      doneDisabled={false}
    />
  );
};

// Exports
export default App;
