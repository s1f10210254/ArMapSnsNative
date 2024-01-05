# ArMapSnsNative

cd ArMapSnsNative  
npm i

cd server  
npm i

**環境変数ファイルの作成**

```
$ cp client/.env.example client/.env
$ cp server/.env.example server/.env
$ cp docker/dev/.env.example docker/dev/.env
```

**ミドルウェアのセットアップ**

```
$ docker compose up -d
```

**開発サーバー起動**  
_native 側_  
cd ArMapSnsNative  
`npm start`

シミレーターが起動していない状態 ↓  
npm run ios  
or  
xcode から起動

_server 側_  
cd server  
`npm run dev`
cd ArMapSnsNative  
npm i

cd server  
npm i

**環境変数ファイルの作成**

```
$ cp client/.env.example client/.env
$ cp server/.env.example server/.env
$ cp docker/dev/.env.example docker/dev/.env
```

**ミドルウェアのセットアップ**

```
$ docker compose up -d
```

**開発サーバー起動**  
_native 側_  
cd ArMapSnsNative  
`npm start`

シミレーターが起動していない状態 ↓  
npm run ios  
or  
xcode から起動

_server 側_  
cd server  
`npm run dev`
