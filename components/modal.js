import React from 'react';
import { View, Text, TouchableOpacity, Modal, Image, ActivityIndicator, TouchableWithoutFeedback } from 'react-native';
import Button from './button';
import { defaultCloseTintColor, defaultIconViewTintColor } from '../utils';
import styles from '../utils/styles';
function DisplayModal(props) {
  const { isOpen, onCloseModal, type = 'actions' } = props;
  const ModalActionType = () => {
    return (
      <TouchableWithoutFeedback onPress={onCloseModal} style={styles.centeredView}>
        <View style={styles.centeredView}>
          <RenderModalBody {...props} />
        </View>
      </TouchableWithoutFeedback>
    );
  };
  const ModalLoadingType = () => {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  };
  const RenderModalType = () => {
    switch (type) {
      case 'loading':
        return <ModalLoadingType />;
      default:
        return <ModalActionType />;
    }
  };
  return (
    <Modal animationType="none" transparent visible={isOpen} onRequestClose={onCloseModal}>
      <RenderModalType />
    </Modal>
  );
}

const RenderModalBody = (props) => {
  const {
    title,
    context,
    titleStyle,
    contextStyle,
    iconView,
    button = [],
    hiddenIconView,
    iconViewTintColor,
    subContext,
    subContextStyle,
    modalStyle,
  } = props;
  return (
    <TouchableWithoutFeedback>
      <View style={[styles.modalView, { ...modalStyle }]}>
        <View style={styles.bodyModal}>
          <RenderCloseView {...props} />
          <RenderIconView iconView={iconView} hiddenIconView={hiddenIconView} iconViewTintColor={iconViewTintColor} />
          <Text numberOfLines={5} style={[styles.titleTxt, { ...titleStyle }]}>{title}</Text>
          <Text numberOfLines={20} style={[styles.contextTxt, { ...contextStyle }]}>{context}</Text>
          <Text numberOfLines={10} style={[styles.subContextTxt, { ...subContextStyle }]}>{subContext}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {button.map(({ title, buttonStyle, textStyle, onPress }, i) => (
            <Button key={i} title={title} buttonStyle={buttonStyle} textStyle={textStyle} onPress={onPress} />
          ))}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const RenderCloseView = ({ closeButtonShow, closeIcon, closeButtonMode, onCloseModal, closeIconTintColor }) => {
  if (!closeButtonShow) return <View />;
  switch (closeButtonMode) {
    case 'upper':
      return (
        <TouchableOpacity style={styles.closeButtonCtn} onPress={onCloseModal}>
          {closeIcon ? (
            closeIcon()
          ) : (
            <Image
              source={require('../assets/images/cross.png')}
              resizeMode="contain"
              style={[styles.closeButton, { tintColor: closeIconTintColor || defaultCloseTintColor }]}
            />
          )}
        </TouchableOpacity>
      );
    case 'right':
      return (
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <TouchableOpacity onPress={onCloseModal}>
            <RenderCloseIcon closeIcon={closeIcon} />
          </TouchableOpacity>
        </View>
      );
    case 'left':
      return (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={onCloseModal}>
            <RenderCloseIcon closeIcon={closeIcon} />
          </TouchableOpacity>
        </View>
      );
    default:
      break;
  }
};

const RenderCloseIcon = ({ closeIcon }) => {
  if (closeIcon) return closeIcon();
  return <Image source={require('../assets/images/cross.png')} resizeMode="contain" style={styles.closeButton} />;
};
const RenderIconView = ({ iconView, hiddenIconView, iconViewTintColor }) => {
  if (hiddenIconView) return <View />;
  if (iconView) return iconView();
  return (
    <Image
      source={require('../assets/images/warning.png')}
      resizeMode="contain"
      style={[styles.imageContainer, { tintColor: iconViewTintColor || defaultIconViewTintColor }]}
    />
  );
};
export default DisplayModal;
RenderModalBody.defaultProps = {
  closeButtonMode: 'right',
  hiddenIconView: false,
};
