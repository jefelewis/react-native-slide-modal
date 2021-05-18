"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports: Dependencies
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
;
// Screen Dimensions
const { height, width } = react_native_1.Dimensions.get('window');
// Component: Slide Modal
const SlideModal = (props) => {
    // Render Modal Header Container Style
    const renderModalHeaderContainerStyle = () => {
        // Dark Mode
        if (props.darkMode) {
            return ({
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: width,
                height: props.customStyleModalHeaderContainer?.modalHeaderContainerDark.height ? props.customStyleModalHeaderContainer.modalHeaderContainerDark.height : 55,
                backgroundColor: props.customStyleModalHeaderContainer?.modalHeaderContainerDark.backgroundColor ? props.customStyleModalHeaderContainer.modalHeaderContainerDark.backgroundColor : '#383838',
                borderColor: props.customStyleModalHeaderContainer?.modalHeaderContainerDark.borderColor ? props.customStyleModalHeaderContainer.modalHeaderContainerDark.borderColor : '#E9E9EB',
                borderBottomWidth: props.customStyleModalHeaderContainer?.modalHeaderContainerDark.borderBottomWidth ? props.customStyleModalHeaderContainer.modalHeaderContainerDark.borderBottomWidth : react_native_1.StyleSheet.hairlineWidth,
            });
        }
        // Light Mode
        else {
            return ({
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: width,
                height: props.customStyleModalHeaderContainer?.modalHeaderContainerLight.height ? props.customStyleModalHeaderContainer.modalHeaderContainerLight.height : 55,
                backgroundColor: props.customStyleModalHeaderContainer?.modalHeaderContainerLight.backgroundColor ? props.customStyleModalHeaderContainer.modalHeaderContainerLight.backgroundColor : '#FFFFFF',
                borderColor: props.customStyleModalHeaderContainer?.modalHeaderContainerLight.borderColor ? props.customStyleModalHeaderContainer.modalHeaderContainerLight.borderColor : '#CED4DA',
                borderBottomWidth: props.customStyleModalHeaderContainer?.modalHeaderContainerLight.borderBottomWidth ? props.customStyleModalHeaderContainer.modalHeaderContainerLight.borderBottomWidth : react_native_1.StyleSheet.hairlineWidth,
            });
        }
    };
    // Render Cancel Text Style
    const renderCancelTextStyle = () => {
        // Dark Mode
        if (props.darkMode) {
            return ({
                marginLeft: 16,
                fontFamily: props.customStyleCancelText?.cancelTextDark.fontFamily ? props.customStyleCancelText.cancelTextDark.fontFamily : 'System',
                color: props.customStyleCancelText?.cancelTextDark.color ? props.customStyleCancelText.cancelTextDark.color : '#0884FE',
                fontWeight: props.customStyleCancelText?.cancelTextDark.fontWeight ? props.customStyleCancelText.cancelTextDark.fontWeight : '400',
                fontSize: props.customStyleCancelText?.cancelTextDark.fontSize ? props.customStyleCancelText.cancelTextDark.fontSize : 17,
            });
        }
        // Light Mode
        else {
            return ({
                marginLeft: 16,
                fontFamily: props.customStyleCancelText?.cancelTextLight.fontFamily ? props.customStyleCancelText.cancelTextLight.fontFamily : 'System',
                color: props.customStyleCancelText?.cancelTextLight.color ? props.customStyleCancelText.cancelTextLight.color : '#007AFF',
                fontWeight: props.customStyleCancelText?.cancelTextLight.fontWeight ? props.customStyleCancelText.cancelTextLight.fontWeight : '400',
                fontSize: props.customStyleCancelText?.cancelTextLight.fontSize ? props.customStyleCancelText.cancelTextLight.fontSize : 17,
            });
        }
    };
    // Render Done Text Style
    const renderDoneTextStyle = () => {
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
    const renderBottomSheetModalContentContainerStyle = () => {
        // Dark Mode
        if (props.darkMode) {
            return ({
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: width,
                height: props.customStyleModalContentContainer?.modalContentContainerDark.height ? props.customStyleModalContentContainer.modalContentContainerDark.height : 250,
                backgroundColor: props.customStyleModalContentContainer?.modalContentContainerDark.backgroundColor ? props.customStyleModalContentContainer.modalContentContainerDark.backgroundColor : '#121312',
            });
        }
        // Light Mode
        else {
            return ({
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: width,
                height: props.customStyleModalContentContainer?.modalContentContainerLight.height ? props.customStyleModalContentContainer.modalContentContainerLight.height : 250,
                backgroundColor: props.customStyleModalContentContainer?.modalContentContainerLight.backgroundColor ? props.customStyleModalContentContainer.modalContentContainerLight.backgroundColor : '#FFFFFF',
            });
        }
    };
    // Render Form Sheet Modal Content Container Style
    const renderFormSheetModalContentContainerStyle = () => {
        // Dark Mode
        if (props.darkMode) {
            return ({
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: width,
                backgroundColor: props.customStyleModalContentContainer?.modalContentContainerDark.backgroundColor ? props.customStyleModalContentContainer.modalContentContainerDark.backgroundColor : '#121312',
            });
        }
        // Light Mode
        else {
            return ({
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: width,
                backgroundColor: props.customStyleModalContentContainer?.modalContentContainerLight.backgroundColor ? props.customStyleModalContentContainer.modalContentContainerLight.backgroundColor : '#FFFFFF',
            });
        }
    };
    // Render Modal Header Title
    const renderModalHeaderTitle = () => {
        // iOS Form Sheet + Check If Props Exists
        if (props.modalType === 'iOS Form Sheet' && props.modalHeaderTitle) {
            return (<react_native_1.View style={styles.modalHeaderContainer}>
          <react_native_1.Text style={props.darkMode ? styles.modalHeaderTitleDark : styles.modalHeaderTitleLight} numberOfLines={2}>{props.modalHeaderTitle}</react_native_1.Text>
        </react_native_1.View>);
        }
    };
    // Render Modal Type
    const renderModalType = () => {
        // iOS Form Sheet
        if (props.modalType === 'iOS Form Sheet') {
            return (<react_native_1.View style={styles.modalClosedContainer}>
          <>{props.screenContainer}</>

          <react_native_1.Modal animationType="slide" visible={props.modalVisible} presentationStyle="formSheet">
            <react_native_1.View style={styles.formSheetModalContainer}>
              <react_native_1.View style={renderModalHeaderContainerStyle()}>
                <react_native_1.TouchableOpacity onPress={props.pressCancel}>
                  <react_native_1.Text style={renderCancelTextStyle()}>Cancel</react_native_1.Text>
                </react_native_1.TouchableOpacity>

                <>{renderModalHeaderTitle()}</>

                <react_native_1.View style={styles.doneButtonContainer}>
                  <react_native_1.Button title="Done" onPress={props.pressDone} color={renderDoneTextStyle()} disabled={props.doneDisabled}/>
                </react_native_1.View>
              </react_native_1.View>

              <react_native_1.View style={renderFormSheetModalContentContainerStyle()}>
                <>{props.modalContainer}</>
              </react_native_1.View>
            </react_native_1.View>
          </react_native_1.Modal>
        </react_native_1.View>);
        }
        else {
            return (<react_native_1.View style={props.modalVisible ? styles.modalOpenContainer : styles.modalClosedContainer}>
          <>{props.screenContainer}</>

          <react_native_1.Modal animationType="slide" transparent={true} visible={props.modalVisible}>
            <react_native_1.View style={styles.bottomSheetModalContainer}>
              <react_native_1.View style={renderModalHeaderContainerStyle()}>
                <react_native_1.TouchableOpacity onPress={props.pressCancel}>
                  <react_native_1.Text style={renderCancelTextStyle()}>Cancel</react_native_1.Text>
                </react_native_1.TouchableOpacity>

                <react_native_1.View style={styles.doneButtonContainer}>
                  <react_native_1.Button title="Done" onPress={props.pressDone} color={renderDoneTextStyle()} disabled={props.doneDisabled}/>
                </react_native_1.View>
              </react_native_1.View>

              <react_native_1.View style={renderBottomSheetModalContentContainerStyle()}>
                <>{props.modalContainer}</>
              </react_native_1.View>
            </react_native_1.View>
          </react_native_1.Modal>
        </react_native_1.View>);
        }
    };
    return (<>{renderModalType()}</>);
};
const styles = react_native_1.StyleSheet.create({
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
        alignContent: 'center',
        width: width,
        height: height,
    },
    formSheetModalContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignContent: 'center',
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
exports.default = SlideModal;
