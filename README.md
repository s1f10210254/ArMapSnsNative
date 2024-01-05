# ArMapSnsNative
cd ArMapSnsNative  
npm i  

cd server  
npm i  

環境変数ファイルの作成  
```
$ cp client/.env.example client/.env
$ cp server/.env.example server/.env
$ cp docker/dev/.env.example docker/dev/.env
```

ミドルウェアのセットアップ  
```
$ docker compose up -d
```
