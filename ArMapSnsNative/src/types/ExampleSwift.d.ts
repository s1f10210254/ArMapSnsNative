import 'react-native';
import {EmitterSubscription} from 'react-native';
declare module 'react-native' {
  interface NativeModulesStatic {
    CalendarModule: {
      //   createCalendarEvent(name: string, location: string): void;
      createCalendarEvent(title: string, location: string): Promise<number>;
      //定数の定義
      getConstants(): {DEFAULT_EVENT_NAME: string};
    };
  }
}
