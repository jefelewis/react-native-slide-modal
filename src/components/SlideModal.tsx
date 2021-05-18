// Imports: Dependencies
import React, { useState } from 'react';
import { Alert, Button, Dimensions, SafeAreaView, View, Modal, Text, StyleSheet } from 'react-native';

// Screen Dimensions
const { height, width } = Dimensions.get('window');

// TypeScript Type: Props
interface Props {
  modal: JSX.Element,
};

// Component: Slide Modal
const SlideModal: React.FC<Props> = (): JSX.Element => {
  // React Hooks: State
  const [ modalVisible, setModalVisible ] = useState<boolean>(false);

  return (
    <SafeAreaView style={modalVisible ? styles.modalOpenContainer : styles.modalClosedContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <SafeAreaView style={styles.modalContainer}>
          <Button
            title="Close Modal"
            onPress={() => setModalVisible(!modalVisible)}
          />
        </SafeAreaView>
      </Modal>

      <Button
        title="Show Modal"
        onPress={() => setModalVisible(!modalVisible)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modalOpenContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    opacity: .3,
    width: width,
    height: height,
  },
  modalClosedContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height,
  },
  modalContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    width: width,
    height: height,
  },
});

export default SlideModal;
