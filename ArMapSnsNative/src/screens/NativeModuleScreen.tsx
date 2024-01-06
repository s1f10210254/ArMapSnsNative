import {
  Button,
  NativeEventEmitter,
  NativeModules,
  View,
  requireNativeComponent,
} from 'react-native';
import {NativeModuleScreenNavigationProp} from '../utils/ParamList';
import {useEffect} from 'react';

type Props = {
  navigation: NativeModuleScreenNavigationProp;
};

const NativeModuleScreen = ({navigation}: Props) => {
  const {CalendarModule} = NativeModules;
  const onPress = () => {
    // console.log('We will invoke the native module here!');
    // CalendarModule.createCalendarEvent('foo', 'bar');
    const {DEFAULT_EVENT_NAME} = CalendarModule.getConstants();
    console.log('DEFAULT_EVENT', DEFAULT_EVENT_NAME);
  };

  const onSubmit = async () => {
    try {
      const eventId = await CalendarModule.createCalendarEvent(
        'Party',
        'my house',
      );
      console.log(`Created a new event with id ${eventId}`);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View>
      <Button
        title="Click to invoke your native module!"
        color="#841584"
        onPress={onPress}
      />
      <Button title="Click to Promise" color="#841584" onPress={onSubmit} />
    </View>
  );
};
export default NativeModuleScreen;
