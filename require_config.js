var require = {
    // キャッシュ防止
    urlArgs: "v=" + (new Date()).getTime(),

    // ファイルのpathを指定
    paths : {
        'jquery' : 'lib/jquery-2.1.3.min',
    },

    // ファイルの依存関係を指定
    shim : {
        'jquery' : {
            exports : '$'
        }
    }
};