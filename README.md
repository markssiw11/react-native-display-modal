# react-native-display-modal
# Demo

![image demo](https://i.ibb.co/VBHmfT9/A-nh-chu-p-Ma-n-hi-nh-2021-08-01-lu-c-21-06-12.png)

![image android](https://i.ibb.co/fXb8Gkq/A-nh-chu-p-Ma-n-hi-nh-2021-08-02-lu-c-08-26-14.png)

![image android](https://i.ibb.co/Qf5c31m/A-nh-chu-p-Ma-n-hi-nh-2021-08-02-lu-c-08-35-41.png)

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


