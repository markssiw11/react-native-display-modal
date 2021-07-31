import React, { ReactNode } from "react";
import { StyleProp, TextStyle, TextProps } from "react-native";

export interface DisplayModalProps {
  isOpen: boolean,
  onCloseModal: () => void,
  title?: string,
  context?: string,
}

export class DisplayModal extends React.Component<DisplayModalProps> {}
