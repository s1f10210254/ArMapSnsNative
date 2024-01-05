# ArMapSnsNative
cd ArMapSnsNative  
npm i  

cd server  
npm i  

環境変数ファイルの作成  
```
$ cp server/.env.example server/.env
$ cp docker/dev/.env.example docker/dev/.env
```

ミドルウェアのセットアップ  
```
$ docker compose up -d
```

開発サーバー起動  
native側  
cd ArMapSnsNative  
```npm start```  

server側  
cd server  
```npm run dev```  

