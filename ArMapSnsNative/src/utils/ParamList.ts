import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Other: undefined;
  Minio: undefined;
  Animate: undefined;
  Map: undefined;
  AR: undefined;
  Prisma: undefined;
  Firebase: undefined;
  Swift: undefined;
};
export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;
