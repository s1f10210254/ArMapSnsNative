import {Text, View} from 'react-native';
import {MapScreenNavigationProp} from '../utils/ParamList';
import MapView from '../component/MapView';

type Props = {
  navigation: MapScreenNavigationProp;
};

const MapScreen = ({navigation}: Props) => {
  return (
    <View style={{flex: 1}}>
      <MapView style={{flex: 1}} />
    </View>
  );
};

export default MapScreen;
