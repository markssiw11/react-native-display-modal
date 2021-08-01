# react-native-display-modal
# Demo

![image-demo](http://https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60)


# 1. install
 - npm i react-native-display-modal
# 2. Usage
   ```js
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
  import {DisplayModal} from 'react-native-display-modal';
  function DisplayModalExample() {
   const [isOpen, setOpen] = useState(false);
   const onCloseModal = () => {
     setOpen(false);
   };
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <DisplayModal
        title="React Native Alert"
        context="Welcome to react-native-display-modal !!!"
        isOpen={isOpen}
        onCloseModal={onCloseModal}
        // iconView={iconView}
        headerCloseButton={false}
        // closeButtonMode="upper"
        closeButtonShow={true}
        // subContext="sub context you want display"
        titleStyle={{color: 'red'}}
        button={[
          {
            title: 'CANCEL',
            onPress: onCloseModal,
          },
        ]}
        // closeIcon={closeIcon}
      />
      <TouchableOpacity onPress={() => setOpen(true)}>
        <Text selectable>OpenModal</Text>
      </TouchableOpacity>
    </View>
   );
}
```

# Props
  - isOpen: boolean,
  - onCloseModal: () => void,
  - title?: string,
  - context?: string,
  - subContext?: string,
  - titleStyle?: StyleProp<TextStyle>,
  - contextStyle?: StyleProp<TextStyle>,
  - subContextStyle?: StyleProp<TextStyle>,
  - iconView?: ReactNode,
  - headerCloseButton? :boolean,
  - closeButtonMode: 'upper' |  'right' | 'left',
  - closeButtonShow: boolean,
  - button: ButtonProps[],
  - closeIcon: ReactNode,
  - hiddenIconView?: boolean,
  - closeIconTintColor?: string,
  - iconViewTintColor?: string


