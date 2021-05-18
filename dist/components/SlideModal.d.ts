import React from 'react';
import { ContainerStyle, CancelTextStyle, DoneTextStyle, ModalHeaderContainerStyle, ModalContentContainerStyle, PickerItemTextStyle } from '../types/types';
interface Props {
    screenContainer: JSX.Element;
    modalContainer: JSX.Element;
    modalType: 'iOS Bottom Sheet' | 'iOS Form Sheet';
    modalVisible: boolean;
    darkMode?: boolean;
    modalHeaderTitle?: string;
    pressCancel: () => void;
    pressDone: () => void;
    doneDisabled: boolean;
    customStyleContainer?: ContainerStyle;
    customStyleModalHeaderContainer?: ModalHeaderContainerStyle;
    customStyleCancelText?: CancelTextStyle;
    customStyleDoneText?: DoneTextStyle;
    customStyleModalContentContainer?: ModalContentContainerStyle;
    customStylePickerItemText?: PickerItemTextStyle;
}
declare const SlideModal: React.FC<Props>;
export default SlideModal;
