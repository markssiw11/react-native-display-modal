import React, { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";

export interface DisplayModalProps {
  isOpen: boolean,
  onCloseModal: () => void,
  title?: string,
  context?: string,
  subContext?: string,
  titleStyle?: StyleProp<TextStyle>,
  contextStyle?: StyleProp<TextStyle>,
  subContextStyle?: StyleProp<TextStyle>,
  iconView?: ReactNode,
  headerCloseButton? :boolean,
  closeButtonMode: 'upper' |  'right' | 'left',
  closeButtonShow: boolean,
  button: ButtonProps[],
  closeIcon: ReactNode,
  hiddenIconView?: boolean,
  closeIconTintColor?: string,
  iconViewTintColor?: string
}

type ButtonProps = {
  buttonStyle?: StyleProp<ViewStyle>,
  textStyle?: StyleProp<TextStyle>,
  title: string,
  onPress: () => void
}

export class DisplayModal extends React.Component<DisplayModalProps> {}
