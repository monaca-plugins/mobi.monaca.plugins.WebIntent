# WebIntent プラグイン ( Android 向け )

WebIntent プラグインを使用すれば、端末にインストールされている他のアプリを、Monaca アプリから起動できます。ここでは、例として、地図とPDFを表示するアプリを起動させます。

> ***このプラグインは、Android プラットフォーム専用です。***

## プラグインの追加方法 ( Monaca 上での処理 )
1. Monaca クラウド IDE から [***設定***] → [Cordova プラグインの管理] を選択します。

1. 利用可能なプラグイン 項目の [***WebIntent***] プラグインにカーソルを置き、[***有効***] ボタンをクリックします。

## WebIntent プラグインの使用例

    <!DOCTYPE HTML>
    <html>
    <head>
      <title>WebIntent DEMO</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, user-scalable=no">
      <script src="components/loader.js"></script>
      <link rel="stylesheet" href="components/loader.css">

      <script type="text/javascript">
        function startActivity() {
          window.plugins.webintent.startActivity({
            action: window.plugins.webintent.ACTION_VIEW,
            url: 'geo:0, 0?q=' + 'dummy address'},
            function() {},
            function() {alert('Failed to open URL via Android Intent')}
          );
       }
       function openPdf(url) {
        if (window.cordova && cordova.platformId === 'android') {
          window.plugins.webintent.startActivity({
                action: window.plugins.webintent.ACTION_VIEW,
                url: url,
                type: 'application/pdf'
            },
            function() {},
            function() {alert('Failed to open URL via Android Intent')}
          );
        } else { // Android以外の場合
          window.open(url);
        }
      }
      </script>
    </head>
    <body>
        <hr> WebIntent test <hr><br>
        <input type="button" onClick ="startActivity()" value ="startActivity()" /><br>
        <hr> WebIntent content test <hr>
        <input type="button" onClick ="openPdf('content://com.example.helloworld/files/sample.pdf')" value ="content" /><br>
        <hr> WebIntent full path test <hr>
        <input type="button" onClick ="openPdf('/data/user/0/com.example.helloworld/files/sample.pdf')" value ="full path" /><br>      
    </body>
    </html>

"***startActivity***" 関数の "***url***" 属性を使用して、起動させるアプリを指定できます。次に例を示します。

    // Call to the specified phone number
    url: 'tel: phone_number=' + '03-5875-6862'

    // Open the specified page in a browser
    url: 'http://www.asial.co.jp'

    // Open the information of the 1st person in the contact
    url: 'content://contacts/people/1'

    // Open PDF file with content:// path
    url: 'content://com.example.helloworld/files/sample.pdf'
    type: 'application/pdf'

    // Open PDF file with absolute full path
    url: 'content://com.example.helloworld/files/sample.pdf'
    type: 'application/pdf'

---

# WebIntent plugin only for Android

By using WebIntent plugin, you can launch anoher application installed in a device.  Here, this sample shows how to launch map or PDF viewer.

> ***This plugin is ONLY for Android***

## How to add plugin ( process on Monaca )
1. On Monaca Cloud IDE, select [***設定***] - [Cordova プラグインの管理]

1. Move mouse cursor on [***WebIntent***] plugin and click [***有効***] button

## How to use WebIntent plugin

    <!DOCTYPE HTML>
    <html>
    <head>
      <title>WebIntent DEMO</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, user-scalable=no">
      <script src="components/loader.js"></script>
      <link rel="stylesheet" href="components/loader.css">

      <script type="text/javascript">
        function startActivity() {
          window.plugins.webintent.startActivity({
            action: window.plugins.webintent.ACTION_VIEW,
            url: 'geo:0, 0?q=' + 'dummy address'},
            function() {},
            function() {alert('Failed to open URL via Android Intent')}
          );
       }
       function openPdf(url) {
        if (window.cordova && cordova.platformId === 'android') {
          window.plugins.webintent.startActivity({
                action: window.plugins.webintent.ACTION_VIEW,
                url: url,
                type: 'application/pdf'
            },
            function() {},
            function() {alert('Failed to open URL via Android Intent')}
          );
        } else { // other than Android
          window.open(url);
        }
      }
      </script>
    </head>
    <body>
        <hr> WebIntent test <hr><br>
        <input type="button" onClick ="startActivity()" value ="startActivity()" /><br>
        <hr> WebIntent content test <hr>
        <input type="button" onClick ="openPdf('content://com.example.helloworld/files/sample.pdf')" value ="content" /><br>
        <hr> WebIntent full path test <hr>
        <input type="button" onClick ="openPdf('/data/user/0/com.example.helloworld/files/sample.pdf')" value ="full path" /><br>      
    </body>
    </html>

Using "***url***" attribute of "***startActivity***" function, you can launch a specific application.  An example is shown below:

    // Call to the specified phone number
    url: 'tel: phone_number=' + '03-5875-6862'

    // Open the specified page in a browser
    url: 'http://www.asial.co.jp'

    // Open the information of the 1st person in the contact
    url: 'content://contacts/people/1'

    // Open PDF file with content:// path
    url: 'content://com.example.helloworld/files/sample.pdf'
    type: 'application/pdf'

    // Open PDF file with absolute full path
    url: 'content://com.example.helloworld/files/sample.pdf'
    type: 'application/pdf'
