import {ViewStyle, requireNativeComponent} from 'react-native';

interface MapViewProps {
  zoomEnabled?: boolean;
  style?: ViewStyle;
}
const MapView = requireNativeComponent<MapViewProps>('RNTMap');
export default MapView;
