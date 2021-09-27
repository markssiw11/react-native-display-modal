
import { StyleSheet, Dimensions } from 'react-native'
import { defaultCloseTintColor } from "./index";
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
  },
  bodyModal: {
    marginVertical: 20,
    backgroundColor: 'white',
    opacity: 1
  },
  modalView: {
    backgroundColor: defaultCloseTintColor,
    paddingHorizontal: 20,
    borderRadius: 20,
    minWidth: width - 100,
    maxWidth: width - 40,
    maxHeight: height - 50,
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
    textAlign: 'center',
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
  },
  loadingContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.2,
    backgroundColor: 'grey'
  }
});
export default styles;