import {Button, NativeModules} from 'react-native';
import {NativeModuleScreenNavigationProp} from '../utils/ParamList';

type Props = {
  navigation: NativeModuleScreenNavigationProp;
};

const NativeModuleScreen = ({navigation}: Props) => {
  const {CalendarModule} = NativeModules;
  const onPress = () => {
    // console.log('We will invoke the native module here!');
    CalendarModule.createCalendarEvent('testName', 'testLocation');
  };
  return (
    <Button
      title="Click to invoke your native module!"
      color="#841584"
      onPress={onPress}
    />
  );
};
export default NativeModuleScreen;
