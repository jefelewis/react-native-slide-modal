// Imports: Dependencies
import React, { useState } from 'react';
import { Alert, Button, Dimensions, SafeAreaView, View, Modal, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Imports: TypeScript Types
import { ContainerStyle, CancelTextStyle, DoneTextStyle, ModalHeaderContainerStyle, ModalContentContainerStyle, PickerItemTextStyle } from '../types/types';

// TypeScript Type: Props
interface Props {
  modalType?: 'default' | 'iOS Bottom' | 'iOS Full',
  modal: JSX.Element,
  darkMode?: boolean,
  pressCancel: () => void,
  pressDone: () => void,
  doneDisabled: boolean,
  customStyleContainer?: ContainerStyle,
  customStyleModalHeaderContainer?: ModalHeaderContainerStyle,
  customStyleCancelText?: CancelTextStyle,
  customStyleDoneText?: DoneTextStyle,
  customStyleModalContentContainer?: ModalContentContainerStyle,
  customStylePickerItemText?: PickerItemTextStyle,
};

// Screen Dimensions
const { height, width } = Dimensions.get('window');

// Component: Slide Modal
const SlideModal: React.FC<Props> = (props): JSX.Element => {
  // React Hooks: State
  const [ modalVisible, setModalVisible ] = useState<boolean>(false);

  // // Render Container Style
  // const renderContainerStyle = (): any => {
  //   // Dark Mode
  //   if (props.darkMode) {
  //     return (
  //       {
  //         display: 'flex',
  //         width: width - 32,
  //         marginLeft: 16,
  //         paddingRight: 16,
  //         paddingBottom: 12,
  //         marginBottom: 12,
  //         borderColor: props.customStyleContainer?.containerDark.borderColor ? props.customStyleContainer.containerDark.borderColor : '#8D8D93',
  //         borderBottomWidth: props.customStyleContainer?.containerDark.borderBottomWidth ? props.customStyleContainer.containerDark.borderBottomWidth : StyleSheet.hairlineWidth,
  //         backgroundColor: props.customStyleContainer?.containerDark.backgroundColor ? props.customStyleContainer.containerDark.backgroundColor : undefined,
  //       }
  //     );
  //   }
  //   // Light Mode
  //   else {
  //     return (
  //       {
  //         display: 'flex',
  //         width: width - 32,
  //         marginLeft: 16,
  //         paddingRight: 16,
  //         paddingBottom: 12,
  //         marginBottom: 12,
  //         borderColor: props.customStyleContainer?.containerLight.borderColor ? props.customStyleContainer.containerLight.borderColor : '#8A8A8E',
  //         borderBottomWidth: props.customStyleContainer?.containerLight.borderBottomWidth ? props.customStyleContainer.containerLight.borderBottomWidth : StyleSheet.hairlineWidth,
  //         backgroundColor: props.customStyleContainer?.containerLight.backgroundColor ? props.customStyleContainer.containerLight.backgroundColor : undefined,
  //       }
  //     );
  //   }
  // };

  // Render Modal Header Container Style
  const renderModalHeaderContainerStyle = (): any => {
    // Dark Mode
    if (props.darkMode) {
      return (
        {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: width,
          height: props.customStyleModalHeaderContainer?.modalHeaderContainerDark.height ? props.customStyleModalHeaderContainer.modalHeaderContainerDark.height : 45,
          backgroundColor: props.customStyleModalHeaderContainer?.modalHeaderContainerDark.backgroundColor ? props.customStyleModalHeaderContainer.modalHeaderContainerDark.backgroundColor : '#383838',
          borderColor: props.customStyleModalHeaderContainer?.modalHeaderContainerDark.borderColor ? props.customStyleModalHeaderContainer.modalHeaderContainerDark.borderColor : '#E9E9EB',
          borderBottomWidth: props.customStyleModalHeaderContainer?.modalHeaderContainerDark.borderBottomWidth ? props.customStyleModalHeaderContainer.modalHeaderContainerDark.borderBottomWidth : StyleSheet.hairlineWidth,
        }
      );
    }
    // Light Mode
    else {
      return (
        {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: width,
          height: props.customStyleModalHeaderContainer?.modalHeaderContainerLight.height ? props.customStyleModalHeaderContainer.modalHeaderContainerLight.height : 45,
          backgroundColor: props.customStyleModalHeaderContainer?.modalHeaderContainerLight.backgroundColor ? props.customStyleModalHeaderContainer.modalHeaderContainerLight.backgroundColor : '#FFFFFF',
          borderColor: props.customStyleModalHeaderContainer?.modalHeaderContainerLight.borderColor ? props.customStyleModalHeaderContainer.modalHeaderContainerLight.borderColor : '#CED4DA',
          borderBottomWidth: props.customStyleModalHeaderContainer?.modalHeaderContainerLight.borderBottomWidth ? props.customStyleModalHeaderContainer.modalHeaderContainerLight.borderBottomWidth : StyleSheet.hairlineWidth,
        }
      );
    }
  };

  // Render Cancel Text Style
  const renderCancelTextStyle = (): any => {
    // Dark Mode
    if (props.darkMode) {
      return (
        {
          marginLeft: 16,
          fontFamily: props.customStyleCancelText?.cancelTextDark.fontFamily ? props.customStyleCancelText.cancelTextDark.fontFamily : 'System',
          color: props.customStyleCancelText?.cancelTextDark.color ? props.customStyleCancelText.cancelTextDark.color : '#0884FE',
          fontWeight: props.customStyleCancelText?.cancelTextDark.fontWeight ? props.customStyleCancelText.cancelTextDark.fontWeight : '400',
          fontSize: props.customStyleCancelText?.cancelTextDark.fontSize ? props.customStyleCancelText.cancelTextDark.fontSize : 17,
        }
      );
    }
    // Light Mode
    else {
      return (
        {
          marginLeft: 16,
          fontFamily: props.customStyleCancelText?.cancelTextLight.fontFamily ? props.customStyleCancelText.cancelTextLight.fontFamily : 'System',
          color: props.customStyleCancelText?.cancelTextLight.color ? props.customStyleCancelText.cancelTextLight.color : '#007AFF',
          fontWeight: props.customStyleCancelText?.cancelTextLight.fontWeight ? props.customStyleCancelText.cancelTextLight.fontWeight : '400',
          fontSize: props.customStyleCancelText?.cancelTextLight.fontSize ? props.customStyleCancelText.cancelTextLight.fontSize : 17,
        }
      );
    }
  };

  // Render Done Text Style
  const renderDoneTextStyle = (): string => {
    // Dark Mode
    if (props.darkMode) {
      return props.customStylePickerItemText?.pickerItemTextDark.color ? props.customStylePickerItemText.pickerItemTextDark.color : '#0884FE';
    }
    // Light Mode
    else {
      return props.customStylePickerItemText?.pickerItemTextLight.color ? props.customStylePickerItemText.pickerItemTextLight.color : '#007AFF';
    }
  };

  // Render Modal Content Container Style
  const renderModalContentContainerStyle = (): any => {
    // Dark Mode
    if (props.darkMode) {
      return (
        {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: width,
          height: props.customStyleModalContentContainer?.modalContentContainerDark.height ? props.customStyleModalContentContainer.modalContentContainerDark.height : 250,
          backgroundColor: props.customStyleModalContentContainer?.modalContentContainerDark.backgroundColor ? props.customStyleModalContentContainer.modalContentContainerDark.backgroundColor : '#121312',
        }
      );
    }
    // Light Mode
    else {
      return (
        {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: width,
          height: props.customStyleModalContentContainer?.modalContentContainerLight.height ? props.customStyleModalContentContainer.modalContentContainerLight.height : 250,
          backgroundColor: props.customStyleModalContentContainer?.modalContentContainerLight.backgroundColor ? props.customStyleModalContentContainer.modalContentContainerLight.backgroundColor : '#FFFFFF',
        }
      );
    }
  };

  // Press Done
  const pressDone = (): void => {
    // Set State
    setModalVisible(!modalVisible);

    // Props
    props.pressDone();
  };

  // Press Cancel
  const pressCancel = (): void => {
    // Set State
    setModalVisible(!modalVisible);

    // Props
    props.pressCancel();
  };

  return (
    <View style={modalVisible ? styles.modalOpenContainer : styles.modalClosedContainer}>
      <Button
        title="Show Modal"
        onPress={() => setModalVisible(!modalVisible)}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.modalContainer}>
          <View style={renderModalHeaderContainerStyle()}>
            <TouchableOpacity onPress={() => pressCancel()}>
                <Text style={renderCancelTextStyle()}>Cancel</Text>
              </TouchableOpacity>

              <View style={styles.doneButtonContainer}>
                <Button
                  title="Done"
                  onPress={() => pressDone()}
                  disabled={props.doneDisabled}
                  color={renderDoneTextStyle()}
                />
              </View>
          </View>

          <View style={renderModalContentContainerStyle()}>
            <Text>Content</Text>
          </View>
        </View>
      </Modal>
    </View>
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
    justifyContent: 'flex-end',
    alignContent: 'center',
    width: width,
    height: height,
  },
  doneButtonContainer: {
    marginRight: 7,
  },
});

export default SlideModal;
