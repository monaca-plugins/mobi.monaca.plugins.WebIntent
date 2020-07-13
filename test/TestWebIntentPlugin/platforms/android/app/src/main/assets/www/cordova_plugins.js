cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "monaca-plugin-webintent.Webintent",
      "file": "plugins/monaca-plugin-webintent/www/webintent.js",
      "pluginId": "monaca-plugin-webintent",
      "clobbers": [
        "plugins.webintent"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-custom-config": "5.1.0",
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova-plugin-whitelist": "1.3.3",
    "monaca-plugin-webintent": "1.0.2"
  };
});