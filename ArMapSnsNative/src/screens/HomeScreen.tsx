import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Button, Text, View} from 'react-native';
import {HomeScreenNavigationProp, RootStackParamList} from '../utils/ParamList';

type Props = {
  navigation: HomeScreenNavigationProp;
};
const HomeScreen = ({navigation}: Props) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Go to Other Screen"
        onPress={() => navigation.navigate('Other')}
      />
      <Button title="User" onPress={() => navigation.navigate('User')} />
    </View>
  );
};
export default HomeScreen;
