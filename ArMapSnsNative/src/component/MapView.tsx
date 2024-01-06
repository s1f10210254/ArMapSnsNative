import {ViewStyle, requireNativeComponent} from 'react-native';

interface MapViewProps {
  style?: ViewStyle;
}
const MapView = requireNativeComponent<MapViewProps>('RNTMap');
export default MapView;
