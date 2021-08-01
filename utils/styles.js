
import { StyleSheet, Dimensions } from 'react-native'
import { defaultCloseTintColor } from "./index";
const { width } = Dimensions.get('window');

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
    backgroundColor: defaultCloseTintColor,
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
    color: defaultCloseTintColor,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contextTxt: {
    textAlign: 'justify',
  },
  titleTxt: {
    textAlign: 'center',
    marginHorizontal: 10,
    marginVertical: 20,
    fontWeight: '600',
    fontSize: 18,
  },
  imageContainer: {
    height: 80,
    width: 120,
    alignSelf: 'center',
    tintColor: 'orange',
  },
  closeButton: {
    width: 30,
    height: 30,
  },
  closeButtonCtn: {
    top: -60,
    position: 'absolute',
    right: 0,
    right: -20
  },
  subContextTxt: {
    alignSelf: 'center'
  }
});
export default styles;