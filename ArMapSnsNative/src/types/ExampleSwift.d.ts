import 'react-native';
declare module 'react-native' {
  interface NativeModulesStatic {
    CalendarModule: {
      createCalendarEvent(name: string, location: string): void;
    };
  }
}
