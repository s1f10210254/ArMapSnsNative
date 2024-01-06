import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Other: undefined;
  User: undefined;
  Minio: undefined;
  Animate: undefined;
  Map: undefined;
  AR: undefined;
  Prisma: undefined;
  Firebase: undefined;
  Swift: undefined;
  NativeModule: undefined;
};
export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type OtherScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Other'
>;

export type FirebaseScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Firebase'
>;

export type NativeModuleScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'NativeModule'
>;
