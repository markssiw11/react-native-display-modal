import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Pressable,
  Dimensions,
  Image,
} from 'react-native';
const {width, height} = Dimensions.get('window');
function DisplayModal() {
  const [isOpen, setOpen] = useState(false);
  const onCloseModal = () => {
    setOpen(false);
  };
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ModalComponent
        title="+ 1 CREDIT"
        context="Đăng nhập và tương tác với ứng dụng hàng ngày để nhận thêm nhiều
      credit bạn nhé!"
        isOpen={isOpen}
        onCloseModal={onCloseModal}
      />
      <TouchableOpacity onPress={() => setOpen(true)}>
        <Text selectable>OpenModal</Text>
      </TouchableOpacity>
    </View>
  );
}

function ModalComponent(props) {
  const {isOpen, onCloseModal, title, context} = props;
  return (
    <View style={[styles.modalContainer, isOpen && {backgroundColor: 'grey'}]}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isOpen}
        onRequestClose={onCloseModal}>
        <TouchableOpacity style={styles.centeredView} onPress={onCloseModal}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.closeButtonCtn}
              onPress={onCloseModal}>
              <Image
                source={require('../assets/images/cancel.png')}
                resizeMode="contain"
                style={styles.closeButton}
              />
            </TouchableOpacity>

            <View style={styles.bodyModal}>
              <View style={styles.imageContainer}>
                <Image
                  source={require('../assets/images/box.png')}
                  resizeMode="contain"
                  style={styles.iconImage}
                />
              </View>

              <Text style={styles.titleTxt}>{title}</Text>
              <Text style={styles.modalText}>{context}</Text>
            </View>
            <Pressable style={styles.button} onPress={onCloseModal}>
              <Text style={styles.textStyle}>KIỂM TRA CREDIT</Text>
            </Pressable>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
export default DisplayModal;
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyModal: {
    marginVertical: 20,
  },
  modalView: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    borderRadius: 20,
    minWidth: width - 140,
    maxWidth: width - 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingBottom: 20,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#09a505',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    textAlign: 'justify',
  },
  titleTxt: {
    textAlign: 'center',
    marginHorizontal: 10,
    marginVertical: 20,
    fontWeight: '600',
    fontSize: 18,
  },
  iconImage: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    top: -50,
    left: 0,
    width: 120,
    height: 120,
    alignSelf: 'center',
  },
  imageContainer: {
    height: 80,
    width: 120,
    alignSelf: 'center',
  },
  closeButton: {
    width: 30,
    height: 30,
  },
  closeButtonCtn: {
    top: -40,
    position: 'absolute',
    right: 0,
  },
});
