// RCTCalendarModule.m
#import "RCTCalendarModule.h"
//ネイティブコードからデバッグ情報や重要な情報を出力する際に使用
#import <React/RCTLog.h>

@implementation RCTCalendarModule

// To export a module named RCTCalendarModule
RCT_EXPORT_MODULE();

// 非同期処理　ジャバスクリプトから呼び出し可能になり引数として名前と場所を受け取る
RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

@end

