// Imports: Dependencies
import * as React from 'react';
import { Button, Dimensions, Modal, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

// Imports: TypeScript Types
import { ModalType, ContainerStyle, CancelTextStyle, DoneTextStyle, ModalHeaderContainerStyle, ModalContentContainerStyle, PickerItemTextStyle } from '../types/types';

// TypeScript Type: Props
interface Props {
  screenContainer: JSX.Element,
  modalContainer: JSX.Element,
  modalType: ModalType,
  modalVisible: boolean,
  darkMode?: boolean,
  modalHeaderTitle?: string,
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
          height: props.customStyleModalHeaderContainer?.modalHeaderContainerDark.height ? props.customStyleModalHeaderContainer.modalHeaderContainerDark.height : 55,
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
          height: props.customStyleModalHeaderContainer?.modalHeaderContainerLight.height ? props.customStyleModalHeaderContainer.modalHeaderContainerLight.height : 55,
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

  // Render Bottom Sheet Modal Content Container Style
  const renderBottomSheetModalContentContainerStyle = (): any => {
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

  // Render Form Sheet Modal Content Container Style
  const renderFormSheetModalContentContainerStyle = (): any => {
    // Dark Mode
    if (props.darkMode) {
      return (
        {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: width,
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
          backgroundColor: props.customStyleModalContentContainer?.modalContentContainerLight.backgroundColor ? props.customStyleModalContentContainer.modalContentContainerLight.backgroundColor : '#FFFFFF',
        }
      );
    }
  };

  // Render Modal Header Title
  const renderModalHeaderTitle = (): JSX.Element | undefined => {
    // iOS Form Sheet + Check If Props Exists
    if (props.modalType === 'iOS Form Sheet' && props.modalHeaderTitle) {
      return (
        <View style={styles.modalHeaderContainer}>
          <Text style={props.darkMode ? styles.modalHeaderTitleDark : styles.modalHeaderTitleLight} numberOfLines={2}>{props.modalHeaderTitle}</Text>
        </View>
      );
    }
  };

  // Render Modal Type
  const renderModalType = (): JSX.Element => {
    // iOS Form Sheet
    if (props.modalType === 'iOS Form Sheet') {
      return (
        <View style={styles.modalClosedContainer}>
          <>{props.screenContainer}</>

          <Modal
            animationType="slide"
            visible={props.modalVisible}
            presentationStyle="formSheet"
          >
            <View style={styles.formSheetModalContainer}>
              <View style={renderModalHeaderContainerStyle()}>
                <TouchableOpacity onPress={props.pressCancel}>
                  <Text style={renderCancelTextStyle()}>Cancel</Text>
                </TouchableOpacity>

                <>{renderModalHeaderTitle()}</>

                <View style={styles.doneButtonContainer}>
                  <Button
                    title="Done"
                    onPress={props.pressDone}
                    color={renderDoneTextStyle()}
                    disabled={props.doneDisabled}
                  />
                </View>
              </View>

              <View style={renderFormSheetModalContentContainerStyle()}>
                <>{props.modalContainer}</>
              </View>
            </View>
          </Modal>
        </View>
      );
    }
    else {
      return (
        <View style={props.modalVisible ? styles.modalOpenContainer : styles.modalClosedContainer}>
          <>{props.screenContainer}</>

          <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalVisible}
          >
            <View style={styles.bottomSheetModalContainer}>
              <View style={renderModalHeaderContainerStyle()}>
                <TouchableOpacity onPress={props.pressCancel}>
                  <Text style={renderCancelTextStyle()}>Cancel</Text>
                </TouchableOpacity>

                <View style={styles.doneButtonContainer}>
                  <Button
                    title="Done"
                    onPress={props.pressDone}
                    color={renderDoneTextStyle()}
                    disabled={props.doneDisabled}
                  />
                </View>
              </View>

              <View style={renderBottomSheetModalContentContainerStyle()}>
                <>{props.modalContainer}</>
              </View>
            </View>
          </Modal>
        </View>
      );
    }
  };

  return (
    <>{renderModalType()}</>
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
  bottomSheetModalContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: width,
    height: height,
  },
  formSheetModalContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalHeaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: width - 140,
    paddingLeft: 16,
    paddingRight: 16,
  },
  modalHeaderTitleLight: {
    fontFamily: 'System',
    fontSize: 13,
    fontWeight: '500',
    color: '#000000',
    textAlign: 'center',
  },
  modalHeaderTitleDark: {
    fontFamily: 'System',
    fontSize: 13,
    fontWeight: '500',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  doneButtonContainer: {
    marginRight: 10,
  },
});

// Exports
export default SlideModal;
