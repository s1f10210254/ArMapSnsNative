import {Button, Text, View} from 'react-native';
import {OtherScreenNavigationProp} from '../utils/ParamList';

type Props = {
  navigation: OtherScreenNavigationProp;
};
const OtherScreen = ({navigation}: Props) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Go back to Home" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default OtherScreen;
