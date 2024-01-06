// RCTCalendarModule.m
#import "RCTCalendarModule.h"
//ネイティブコードからデバッグ情報や重要な情報を出力する際に使用
#import <React/RCTLog.h>

@implementation RCTCalendarModule


// To export a module named RCTCalendarModule
RCT_EXPORT_MODULE();

// 非同期処理　ジャバスクリプトから呼び出し可能になり引数として名前と場所を受け取る
//RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)name location:(NSString *)location)
//{
//  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
//}

// randomでIDを返す
- (NSInteger)createCalendarEventWithTitle:(NSString *)title location:(NSString *)location {
    // ここにイベント作成のロジックを実装
    // 例: ランダムなイベントIDを生成する
    NSInteger eventId = arc4random_uniform(10000);
    return eventId;  // イベントIDを返す
}

RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)title
                 location:(NSString *)location
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  NSInteger eventId = [self createCalendarEventWithTitle:title location:location];
 if (eventId) {
    resolve(@(eventId));
  } else {
    reject(@"event_failure", @"no event id returned", nil);
  }
}

// 定数のエクスポート
- (NSDictionary *)constantsToExport
{
  return @{ @"DEFAULT_EVENT_NAME": @"New Event" };
}


@end



