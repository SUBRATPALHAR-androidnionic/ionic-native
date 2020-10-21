import { __decorate, __extends } from 'tslib';
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
var BLE = /** @class */ (function (_super) {
  __extends(BLE, _super);
  function BLE() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  BLE.prototype.scan = function (services, seconds) {
    return cordova(this, 'scan', { observable: true }, arguments);
  };
  BLE.prototype.startScan = function (services) {
    return cordova(this, 'startScan', { observable: true, clearFunction: 'stopScan', clearWithArgs: false }, arguments);
  };
  BLE.prototype.startScanWithOptions = function (services, options) {
    return cordova(
      this,
      'startScanWithOptions',
      { observable: true, clearFunction: 'stopScan', clearWithArgs: false },
      arguments
    );
  };
  BLE.prototype.stopScan = function () {
    return cordova(this, 'stopScan', {}, arguments);
  };
  BLE.prototype.connect = function (deviceId) {
    return cordova(this, 'connect', { observable: true, clearFunction: 'disconnect', clearWithArgs: true }, arguments);
  };
  BLE.prototype.autoConnect = function (deviceId, connectCallback, disconnectCallback) {
    return cordova(this, 'autoConnect', { sync: true }, arguments);
  };
  BLE.prototype.requestMtu = function (deviceId, mtuSize) {
    return cordova(this, 'requestMtu', {}, arguments);
  };
  BLE.prototype.refreshDeviceCache = function (deviceId, timeoutMillis) {
    return cordova(this, 'refreshDeviceCache', {}, arguments);
  };
  BLE.prototype.disconnect = function (deviceId) {
    return cordova(this, 'disconnect', {}, arguments);
  };
  BLE.prototype.read = function (deviceId, serviceUUID, characteristicUUID) {
    return cordova(this, 'read', {}, arguments);
  };
  BLE.prototype.write = function (deviceId, serviceUUID, characteristicUUID, value) {
    return cordova(this, 'write', {}, arguments);
  };
  BLE.prototype.writeWithoutResponse = function (deviceId, serviceUUID, characteristicUUID, value) {
    return cordova(this, 'writeWithoutResponse', {}, arguments);
  };
  BLE.prototype.writeHexByte = function (deviceId, serviceUUID, characteristicUUID, value) {
    return cordova(this, 'writeHexByte', {}, arguments);
  };
  BLE.prototype.writeHexString = function (deviceId, serviceUUID, characteristicUUID, value) {
    return cordova(this, 'writeHexString', {}, arguments);
  };
  BLE.prototype.writeStringWithGetBytes = function (deviceId, serviceUUID, characteristicUUID, value) {
    return cordova(this, 'writeStringWithGetBytes', {}, arguments);
  };
  BLE.prototype.testWrite = function (deviceId, serviceUUID, characteristicUUID, value) {
    return cordova(this, 'testWrite', {}, arguments);
  };
  BLE.prototype.startNotification = function (deviceId, serviceUUID, characteristicUUID) {
    return cordova(
      this,
      'startNotification',
      { observable: true, destruct: true, clearFunction: 'stopNotification', clearWithArgs: true },
      arguments
    );
  };
  BLE.prototype.stopNotification = function (deviceId, serviceUUID, characteristicUUID) {
    return cordova(this, 'stopNotification', {}, arguments);
  };
  BLE.prototype.isConnected = function (deviceId) {
    return cordova(this, 'isConnected', {}, arguments);
  };
  BLE.prototype.isEnabled = function () {
    return cordova(this, 'isEnabled', {}, arguments);
  };
  BLE.prototype.startStateNotifications = function () {
    return cordova(
      this,
      'startStateNotifications',
      { observable: true, clearFunction: 'stopStateNotifications', clearWithArgs: false },
      arguments
    );
  };
  BLE.prototype.stopStateNotifications = function () {
    return cordova(this, 'stopStateNotifications', {}, arguments);
  };
  BLE.prototype.showBluetoothSettings = function () {
    return cordova(this, 'showBluetoothSettings', {}, arguments);
  };
  BLE.prototype.enable = function () {
    return cordova(this, 'enable', {}, arguments);
  };
  BLE.prototype.readRSSI = function (deviceId) {
    return cordova(this, 'readRSSI', {}, arguments);
  };
  BLE.prototype.connectedPeripheralsWithServices = function (services) {
    return cordova(this, 'connectedPeripheralsWithServices', {}, arguments);
  };
  BLE.prototype.peripheralsWithIdentifiers = function (uuids) {
    return cordova(this, 'peripheralsWithIdentifiers', {}, arguments);
  };
  BLE.prototype.bondedDevices = function () {
    return cordova(this, 'bondedDevices', {}, arguments);
  };
  BLE.prototype.isLocationEnabled = function () {
    return cordova(this, 'isLocationEnabled', {}, arguments);
  };
  BLE.pluginName = 'BLE';
  BLE.plugin = 'cordova-plugin-ble-central';
  BLE.pluginRef = 'ble';
  BLE.repo = 'https://github.com/don/cordova-plugin-ble-central';
  BLE.platforms = ['Android', 'iOS'];
  BLE = __decorate([Injectable()], BLE);
  return BLE;
})(IonicNativePlugin);
export { BLE };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JsZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQXVMVCx1QkFBaUI7Ozs7SUFpQnhDLGtCQUFJLGFBQUMsUUFBa0IsRUFBRSxPQUFlO0lBeUJ4Qyx1QkFBUyxhQUFDLFFBQWtCO0lBZTVCLGtDQUFvQixhQUFDLFFBQWtCLEVBQUUsT0FBdUI7SUFtQmhFLHNCQUFRO0lBdUJSLHFCQUFPLGFBQUMsUUFBZ0I7SUFnQ3hCLHlCQUFXLGFBQUMsUUFBZ0IsRUFBRSxlQUFvQixFQUFFLGtCQUF1QjtJQW9CM0Usd0JBQVUsYUFBQyxRQUFnQixFQUFFLE9BQWU7SUFzQjVDLGdDQUFrQixhQUFDLFFBQWdCLEVBQUUsYUFBcUI7SUFnQjFELHdCQUFVLGFBQUMsUUFBZ0I7SUFhM0Isa0JBQUksYUFBQyxRQUFnQixFQUFFLFdBQW1CLEVBQUUsa0JBQTBCO0lBaUN0RSxtQkFBSyxhQUFDLFFBQWdCLEVBQUUsV0FBbUIsRUFBRSxrQkFBMEIsRUFBRSxLQUFrQjtJQWMzRixrQ0FBb0IsYUFDbEIsUUFBZ0IsRUFDaEIsV0FBbUIsRUFDbkIsa0JBQTBCLEVBQzFCLEtBQWtCO0lBaUJwQiwwQkFBWSxhQUFDLFFBQWdCLEVBQUUsV0FBbUIsRUFBRSxrQkFBMEIsRUFBRSxLQUFZO0lBaUI1Riw0QkFBYyxhQUFDLFFBQWdCLEVBQUUsV0FBbUIsRUFBRSxrQkFBMEIsRUFBRSxLQUFZO0lBZTlGLHFDQUF1QixhQUFDLFFBQWdCLEVBQUUsV0FBbUIsRUFBRSxrQkFBMEIsRUFBRSxLQUFhO0lBWXhHLHVCQUFTLGFBQUMsUUFBZ0IsRUFBRSxXQUFtQixFQUFFLGtCQUEwQixFQUFFLEtBQVk7SUEyQnpGLCtCQUFpQixhQUFDLFFBQWdCLEVBQUUsV0FBbUIsRUFBRSxrQkFBMEI7SUFhbkYsOEJBQWdCLGFBQUMsUUFBZ0IsRUFBRSxXQUFtQixFQUFFLGtCQUEwQjtJQWtCbEYseUJBQVcsYUFBQyxRQUFnQjtJQVU1Qix1QkFBUztJQXFCVCxxQ0FBdUI7SUFVdkIsb0NBQXNCO0lBVXRCLG1DQUFxQjtJQVVyQixvQkFBTTtJQVlOLHNCQUFRLGFBQUMsUUFBZ0I7SUFhekIsOENBQWdDLGFBQUMsUUFBa0I7SUFZbkQsd0NBQTBCLGFBQUMsS0FBZTtJQVcxQywyQkFBYTtJQVdiLCtCQUFpQjs7Ozs7O0lBNWVOLEdBQUc7UUFEZixVQUFVLEVBQUU7T0FDQSxHQUFHO2NBekxoQjtFQXlMeUIsaUJBQWlCO1NBQTdCLEdBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBCTEVTY2FuT3B0aW9ucyB7XG4gIC8qKiB0cnVlIGlmIGR1cGxpY2F0ZSBkZXZpY2VzIHNob3VsZCBiZSByZXBvcnRlZCwgZmFsc2UgKGRlZmF1bHQpIGlmIGRldmljZXMgc2hvdWxkIG9ubHkgYmUgcmVwb3J0ZWQgb25jZS4gICovXG4gIHJlcG9ydER1cGxpY2F0ZXM/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEBuYW1lIEJMRVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBlbmFibGVzIGNvbW11bmljYXRpb24gYmV0d2VlbiBhIHBob25lIGFuZCBCbHVldG9vdGggTG93IEVuZXJneSAoQkxFKSBwZXJpcGhlcmFscy5cbiAqXG4gKiBUaGUgcGx1Z2luIHByb3ZpZGVzIGEgc2ltcGxlIEphdmFTY3JpcHQgQVBJIGZvciBpT1MgYW5kIEFuZHJvaWQuXG4gKlxuICogLSBTY2FuIGZvciBwZXJpcGhlcmFsc1xuICogLSBDb25uZWN0IHRvIGEgcGVyaXBoZXJhbFxuICogLSBSZWFkIHRoZSB2YWx1ZSBvZiBhIGNoYXJhY3RlcmlzdGljXG4gKiAtIFdyaXRlIG5ldyB2YWx1ZSB0byBhIGNoYXJhY3RlcmlzdGljXG4gKiAtIEdldCBub3RpZmllZCB3aGVuIGNoYXJhY3RlcmlzdGljJ3MgdmFsdWUgY2hhbmdlc1xuICpcbiAqIEFkdmVydGlzaW5nIGluZm9ybWF0aW9uIGlzIHJldHVybmVkIHdoZW4gc2Nhbm5pbmcgZm9yIHBlcmlwaGVyYWxzLiBTZXJ2aWNlLCBjaGFyYWN0ZXJpc3RpYywgYW5kIHByb3BlcnR5IGluZm8gaXMgcmV0dXJuZWQgd2hlbiBjb25uZWN0aW5nIHRvIGEgcGVyaXBoZXJhbC4gQWxsIGFjY2VzcyBpcyB2aWEgc2VydmljZSBhbmQgY2hhcmFjdGVyaXN0aWMgVVVJRHMuIFRoZSBwbHVnaW4gbWFuYWdlcyBoYW5kbGVzIGludGVybmFsbHkuXG4gKlxuICogU2ltdWx0YW5lb3VzIGNvbm5lY3Rpb25zIHRvIG11bHRpcGxlIHBlcmlwaGVyYWxzIGFyZSBzdXBwb3J0ZWQuXG4gKlxuICogQHVzYWdlXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICpcbiAqIGltcG9ydCB7IEJMRSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYmxlL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBibGU6IEJMRSkgeyB9XG4gKlxuICogYGBgXG4gKlxuICogIyMgUGVyaXBoZXJhbCBEYXRhXG4gKlxuICogUGVyaXBoZXJhbCBEYXRhIGlzIHBhc3NlZCB0byB0aGUgc3VjY2VzcyBjYWxsYmFjayB3aGVuIHNjYW5uaW5nIGFuZCBjb25uZWN0aW5nLiBMaW1pdGVkIGRhdGEgaXMgcGFzc2VkIHdoZW4gc2Nhbm5pbmcuXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogICB7XG4gKiAgICAgICAnbmFtZSc6ICdCYXR0ZXJ5IERlbW8nLFxuICogICAgICAgJ2lkJzogJzIwOkZGOkQwOkZGOkQxOkMwJyxcbiAqICAgICAgICdhZHZlcnRpc2luZyc6IFsyLDEsNiwzLDMsMTUsMjQsOCw5LDY2LDk3LDExNiwxMTYsMTAxLDExNCwxMjFdLFxuICogICAgICAgJ3Jzc2knOiAtNTVcbiAqICAgfVxuICogYGBgXG4gKiBBZnRlciBjb25uZWN0aW5nLCB0aGUgcGVyaXBoZXJhbCBvYmplY3QgYWxzbyBpbmNsdWRlcyBzZXJ2aWNlLCBjaGFyYWN0ZXJpc3RpYyBhbmQgZGVzY3JpcHRvciBpbmZvcm1hdGlvbi5cbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiAgIHtcbiAqICAgICAgICduYW1lJzogJ0JhdHRlcnkgRGVtbycsXG4gKiAgICAgICAnaWQnOiAnMjA6RkY6RDA6RkY6RDE6QzAnLFxuICogICAgICAgJ2FkdmVydGlzaW5nJzogWzIsMSw2LDMsMywxNSwyNCw4LDksNjYsOTcsMTE2LDExNiwxMDEsMTE0LDEyMV0sXG4gKiAgICAgICAncnNzaSc6IC01NSxcbiAqICAgICAgICdzZXJ2aWNlcyc6IFtcbiAqICAgICAgICAgICAnMTgwMCcsXG4gKiAgICAgICAgICAgJzE4MDEnLFxuICogICAgICAgICAgICcxODBmJ1xuICogICAgICAgXSxcbiAqICAgICAgICdjaGFyYWN0ZXJpc3RpY3MnOiBbXG4gKiAgICAgICAgICAge1xuICogICAgICAgICAgICAgICAnc2VydmljZSc6ICcxODAwJyxcbiAqICAgICAgICAgICAgICAgJ2NoYXJhY3RlcmlzdGljJzogJzJhMDAnLFxuICogICAgICAgICAgICAgICAncHJvcGVydGllcyc6IFtcbiAqICAgICAgICAgICAgICAgICAgICdSZWFkJ1xuICogICAgICAgICAgICAgICBdXG4gKiAgICAgICAgICAgfSxcbiAqICAgICAgICAgICB7XG4gKiAgICAgICAgICAgICAgICdzZXJ2aWNlJzogJzE4MDAnLFxuICogICAgICAgICAgICAgICAnY2hhcmFjdGVyaXN0aWMnOiAnMmEwMScsXG4gKiAgICAgICAgICAgICAgICdwcm9wZXJ0aWVzJzogW1xuICogICAgICAgICAgICAgICAgICAgJ1JlYWQnXG4gKiAgICAgICAgICAgICAgIF1cbiAqICAgICAgICAgICB9LFxuICogICAgICAgICAgIHtcbiAqICAgICAgICAgICAgICAgJ3NlcnZpY2UnOiAnMTgwMScsXG4gKiAgICAgICAgICAgICAgICdjaGFyYWN0ZXJpc3RpYyc6ICcyYTA1JyxcbiAqICAgICAgICAgICAgICAgJ3Byb3BlcnRpZXMnOiBbXG4gKiAgICAgICAgICAgICAgICAgICAnUmVhZCdcbiAqICAgICAgICAgICAgICAgXVxuICogICAgICAgICAgIH0sXG4gKiAgICAgICAgICAge1xuICogICAgICAgICAgICAgICAnc2VydmljZSc6ICcxODBmJyxcbiAqICAgICAgICAgICAgICAgJ2NoYXJhY3RlcmlzdGljJzogJzJhMTknLFxuICogICAgICAgICAgICAgICAncHJvcGVydGllcyc6IFtcbiAqICAgICAgICAgICAgICAgICAgICdSZWFkJ1xuICogICAgICAgICAgICAgICBdLFxuICogICAgICAgICAgICAgICAnZGVzY3JpcHRvcnMnOiBbXG4gKiAgICAgICAgICAgICAgICAgICB7XG4gKiAgICAgICAgICAgICAgICAgICAgICAgJ3V1aWQnOiAnMjkwMSdcbiAqICAgICAgICAgICAgICAgICAgIH0sXG4gKiAgICAgICAgICAgICAgICAgICB7XG4gKiAgICAgICAgICAgICAgICAgICAgICAgJ3V1aWQnOiAnMjkwNCdcbiAqICAgICAgICAgICAgICAgICAgIH1cbiAqICAgICAgICAgICAgICAgXVxuICogICAgICAgICAgIH1cbiAqICAgICAgIF1cbiAqICAgfVxuICogYGBgXG4gKlxuICogIyMgQWR2ZXJ0aXNpbmcgRGF0YVxuICogQmx1ZXRvb3RoIGFkdmVydGlzaW5nIGRhdGEgaXMgcmV0dXJuZWQgaW4gd2hlbiBzY2FubmluZyBmb3IgZGV2aWNlcy4gVGhlIGZvcm1hdCB2YXJpZXMgZGVwZW5kaW5nIG9uIHlvdXIgcGxhdGZvcm0uIE9uIEFuZHJvaWQgYWR2ZXJ0aXNpbmcgZGF0YSB3aWxsIGJlIHRoZSByYXcgYWR2ZXJ0aXNpbmcgYnl0ZXMuIGlPUyBkb2VzIG5vdCBhbGxvdyBhY2Nlc3MgdG8gcmF3IGFkdmVydGlzaW5nIGRhdGEsIHNvIGEgZGljdGlvbmFyeSBvZiBkYXRhIGlzIHJldHVybmVkLlxuICpcbiAqIFRoZSBhZHZlcnRpc2luZyBpbmZvcm1hdGlvbiBmb3IgYm90aCBBbmRyb2lkIGFuZCBpT1MgYXBwZWFycyB0byBiZSBhIGNvbWJpbmF0aW9uIG9mIGFkdmVydGlzaW5nIGRhdGEgYW5kIHNjYW4gcmVzcG9uc2UgZGF0YS5cbiAqXG4gKiAjIyMgQW5kcm9pZFxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqICAge1xuICogICAgICAgJ25hbWUnOiAnZGVtbycsXG4gKiAgICAgICAnaWQnOiAnMDA6MUE6N0Q6REE6NzE6MTMnLFxuICogICAgICAgJ2FkdmVydGlzaW5nJzogQXJyYXlCdWZmZXIsXG4gKiAgICAgICdyc3NpJzogLTM3XG4gKiAgfVxuICogYGBgXG4gKlxuICogQ29udmVydCB0aGUgYWR2ZXJ0aXNpbmcgaW5mbyB0byBhIFVpbnQ4QXJyYXkgZm9yIHByb2Nlc3NpbmcuIGB2YXIgYWREYXRhID0gbmV3IFVpbnQ4QXJyYXkocGVyaXBoZXJhbC5hZHZlcnRpc2luZylgXG4gKlxuICogIyMjIGlPU1xuICpcbiAqIE5vdGUgdGhhdCBpT1MgdXNlcyB0aGUgc3RyaW5nIHZhbHVlIG9mIHRoZSBjb25zdGFudHMgZm9yIHRoZSBbQWR2ZXJ0aXNlbWVudCBEYXRhIFJldHJpZXZhbCBLZXlzXShodHRwczovL2RldmVsb3Blci5hcHBsZS5jb20vbGlicmFyeS9pb3MvZG9jdW1lbnRhdGlvbi9Db3JlQmx1ZXRvb3RoL1JlZmVyZW5jZS9DQkNlbnRyYWxNYW5hZ2VyRGVsZWdhdGVfUHJvdG9jb2wvaW5kZXguaHRtbCMvL2FwcGxlX3JlZi9kb2MvY29uc3RhbnRfZ3JvdXAvQWR2ZXJ0aXNlbWVudF9EYXRhX1JldHJpZXZhbF9LZXlzKS4gVGhpcyB3aWxsIGxpa2VseSBjaGFuZ2UgaW4gdGhlIGZ1dHVyZS5cbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiAgIHtcbiAqICAgICAgICduYW1lJzogJ2RlbW8nLFxuICogICAgICAgJ2lkJzogJ0Q4NDc5QTRGLTc1MTctQkNEMy05MUI1LTMzMDJCMkY4MTgwMicsXG4gKiAgICAgICAnYWR2ZXJ0aXNpbmcnOiB7XG4gKiAgICAgICAgICAgJ2tDQkFkdkRhdGFDaGFubmVsJzogMzcsXG4gKiAgICAgICAgICAgJ2tDQkFkdkRhdGFTZXJ2aWNlRGF0YSc6IHtcbiAqICAgICAgICAgICAgICAgJ0ZFRDgnOiB7XG4gKiAgICAgICAgICAgICAgICAgICAnYnl0ZUxlbmd0aCc6IDcgLy8gZGF0YSBub3Qgc2hvd25cbiAqICAgICAgICAgICAgICAgfVxuICogICAgICAgICAgIH0sXG4gKiAgICAgICAgICAgJ2tDQkFkdkRhdGFMb2NhbE5hbWUnOiAnZGVtbycsXG4gKiAgICAgICAgICAgJ2tDQkFkdkRhdGFTZXJ2aWNlVVVJRHMnOiBbJ0ZFRDgnXSxcbiAqICAgICAgICAgICAna0NCQWR2RGF0YU1hbnVmYWN0dXJlckRhdGEnOiB7XG4gKiAgICAgICAgICAgICAgICdieXRlTGVuZ3RoJzogNyAgLy8gZGF0YSBub3Qgc2hvd25cbiAqICAgICAgICAgICB9LFxuICogICAgICAgICAgICdrQ0JBZHZEYXRhVHhQb3dlckxldmVsJzogMzIsXG4gKiAgICAgICAgICAgJ2tDQkFkdkRhdGFJc0Nvbm5lY3RhYmxlJzogdHJ1ZVxuICogICAgICAgfSxcbiAqICAgICAgICdyc3NpJzogLTUzXG4gKiAgIH1cbiAqIGBgYFxuICpcbiAqICMjIFR5cGVkIEFycmF5c1xuICpcbiAqIFRoaXMgcGx1Z2luIHVzZXMgdHlwZWQgQXJyYXlzIG9yIEFycmF5QnVmZmVycyBmb3Igc2VuZGluZyBhbmQgcmVjZWl2aW5nIGRhdGEuXG4gKlxuICogVGhpcyBtZWFucyB0aGF0IHlvdSBuZWVkIGNvbnZlcnQgeW91ciBkYXRhIHRvIEFycmF5QnVmZmVycyBiZWZvcmUgc2VuZGluZyBhbmQgZnJvbSBBcnJheUJ1ZmZlcnMgd2hlbiByZWNlaXZpbmcuXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogICAvLyBBU0NJSSBvbmx5XG4gKiAgIGZ1bmN0aW9uIHN0cmluZ1RvQnl0ZXMoc3RyaW5nKSB7XG4gKiAgICAgIHZhciBhcnJheSA9IG5ldyBVaW50OEFycmF5KHN0cmluZy5sZW5ndGgpO1xuICogICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHN0cmluZy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAqICAgICAgICAgIGFycmF5W2ldID0gc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gKiAgICAgICB9XG4gKiAgICAgICByZXR1cm4gYXJyYXkuYnVmZmVyO1xuICogICB9XG4gKlxuICogICAvLyBBU0NJSSBvbmx5XG4gKiAgIGZ1bmN0aW9uIGJ5dGVzVG9TdHJpbmcoYnVmZmVyKSB7XG4gKiAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBuZXcgVWludDhBcnJheShidWZmZXIpKTtcbiAqICAgfVxuICogYGBgXG4gKiBZb3UgY2FuIHJlYWQgbW9yZSBhYm91dCB0eXBlZCBhcnJheXMgaW4gdGhlc2UgYXJ0aWNsZXMgb24gW01ETl0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9UeXBlZF9hcnJheXMpIGFuZCBbSFRNTDUgUm9ja3NdKGh0dHA6Ly93d3cuaHRtbDVyb2Nrcy5jb20vZW4vdHV0b3JpYWxzL3dlYmdsL3R5cGVkX2FycmF5cy8pLlxuICpcbiAqICMjIFVVSURzXG4gKlxuICogVVVJRHMgYXJlIGFsd2F5cyBzdHJpbmdzIGFuZCBub3QgbnVtYmVycy4gU29tZSAxNi1iaXQgVVVJRHMsIHN1Y2ggYXMgJzIyMjAnIGxvb2sgbGlrZSBpbnRlZ2VycywgYnV0IHRoZXkncmUgbm90LiAoVGhlIGludGVnZXIgMjIyMCBpcyAweDhBQyBpbiBoZXguKSBUaGlzIGlzbid0IGEgcHJvYmxlbSB3aXRoIDEyOCBiaXQgVVVJRHMgc2luY2UgdGhleSBsb29rIGxpa2Ugc3RyaW5ncyA4MmI5ZTZlMS01OTNhLTQ1NmYtYmU5Yi05MjE1MTYwZWJjYWMuIEFsbCAxNi1iaXQgVVVJRHMgc2hvdWxkIGFsc28gYmUgcGFzc2VkIHRvIG1ldGhvZHMgYXMgc3RyaW5ncy5cbiAqXG4gKiBAaW50ZXJmYWNlc1xuICogQkxFU2Nhbk9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdCTEUnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1ibGUtY2VudHJhbCcsXG4gIHBsdWdpblJlZjogJ2JsZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vZG9uL2NvcmRvdmEtcGx1Z2luLWJsZS1jZW50cmFsJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJMRSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFNjYW4gYW5kIGRpc2NvdmVyIEJMRSBwZXJpcGhlcmFscyBmb3IgdGhlIHNwZWNpZmllZCBhbW91bnQgb2YgdGltZS5cbiAgICpcbiAgICogQHVzYWdlXG4gICAqIGBgYFxuICAgKiBCTEUuc2NhbihbXSwgNSkuc3Vic2NyaWJlKGRldmljZSA9PiB7XG4gICAqICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGV2aWNlKSk7XG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gc2VydmljZXMgIExpc3Qgb2Ygc2VydmljZSBVVUlEcyB0byBkaXNjb3Zlciwgb3IgYFtdYCB0byBmaW5kIGFsbCBkZXZpY2VzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzZWNvbmRzICBOdW1iZXIgb2Ygc2Vjb25kcyB0byBydW4gZGlzY292ZXJ5XG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIG9mIGVhY2ggcGVyaXBoZXJhbCB0aGF0IGlzIGRpc2NvdmVyZWQgZHVyaW5nIHRoZSBzcGVjaWZpZWQgdGltZS5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICB9KVxuICBzY2FuKHNlcnZpY2VzOiBzdHJpbmdbXSwgc2Vjb25kczogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2NhbiBhbmQgZGlzY292ZXIgQkxFIHBlcmlwaGVyYWxzIHVudGlsIGBzdG9wU2NhbmAgaXMgY2FsbGVkLlxuICAgKlxuICAgKiBAdXNhZ2VcbiAgICogYGBgXG4gICAqIEJMRS5zdGFydFNjYW4oW10pLnN1YnNjcmliZShkZXZpY2UgPT4ge1xuICAgKiAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRldmljZSkpO1xuICAgKiB9KTtcbiAgICpcbiAgICogc2V0VGltZW91dCgoKSA9PiB7XG4gICAqICAgQkxFLnN0b3BTY2FuKCk7XG4gICAqIH0sIDUwMDApO1xuICAgKiBgYGBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gc2VydmljZXMgIExpc3Qgb2Ygc2VydmljZSBVVUlEcyB0byBkaXNjb3Zlciwgb3IgYFtdYCB0byBmaW5kIGFsbCBkZXZpY2VzXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIG9mIGVhY2ggcGVyaXBoZXJhbCBkaXNjb3ZlcmVkLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgY2xlYXJGdW5jdGlvbjogJ3N0b3BTY2FuJyxcbiAgICBjbGVhcldpdGhBcmdzOiBmYWxzZSxcbiAgfSlcbiAgc3RhcnRTY2FuKHNlcnZpY2VzOiBzdHJpbmdbXSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNjYW5zIGZvciBCTEUgZGV2aWNlcy4gVGhpcyBmdW5jdGlvbiBvcGVyYXRlcyBzaW1pbGFybHkgdG8gdGhlIGBzdGFydFNjYW5gIGZ1bmN0aW9uLCBidXQgYWxsb3dzIHlvdSB0byBzcGVjaWZ5IGV4dHJhIG9wdGlvbnMgKGxpa2UgYWxsb3dpbmcgZHVwbGljYXRlIGRldmljZSByZXBvcnRzKS5cbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gc2VydmljZXMgIExpc3Qgb2Ygc2VydmljZSBVVUlEcyB0byBkaXNjb3Zlciwgb3IgYFtdYCB0byBmaW5kIGFsbCBkZXZpY2VzXG4gICAqIEBwYXJhbSB7QkxFU2Nhbk9wdGlvbnN9IG9wdGlvbnMgT3B0aW9uc1xuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBub3RpZmllcyBvZiBlYWNoIHBlcmlwaGVyYWwgZGlzY292ZXJlZC5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICdzdG9wU2NhbicsXG4gICAgY2xlYXJXaXRoQXJnczogZmFsc2UsXG4gIH0pXG4gIHN0YXJ0U2NhbldpdGhPcHRpb25zKHNlcnZpY2VzOiBzdHJpbmdbXSwgb3B0aW9uczogQkxFU2Nhbk9wdGlvbnMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIGEgc2NhbiBzdGFydGVkIGJ5IGBzdGFydFNjYW5gLlxuICAgKlxuICAgKiBAdXNhZ2VcbiAgICogYGBgXG4gICAqIEJMRS5zdGFydFNjYW4oW10pLnN1YnNjcmliZShkZXZpY2UgPT4ge1xuICAgKiAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRldmljZSkpO1xuICAgKiB9KTtcbiAgICogc2V0VGltZW91dCgoKSA9PiB7XG4gICAqICAgQkxFLnN0b3BTY2FuKCkudGhlbigoKSA9PiB7IGNvbnNvbGUubG9nKCdzY2FuIHN0b3BwZWQnKTsgfSk7XG4gICAqIH0sIDUwMDApO1xuICAgKiBgYGBcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RvcFNjYW4oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ29ubmVjdCB0byBhIHBlcmlwaGVyYWwuXG4gICAqIEB1c2FnZVxuICAgKiBgYGBcbiAgICogICBCTEUuY29ubmVjdCgnMTI6MzQ6NTY6Nzg6OUE6QkMnKS5zdWJzY3JpYmUocGVyaXBoZXJhbERhdGEgPT4ge1xuICAgKiAgICAgY29uc29sZS5sb2cocGVyaXBoZXJhbERhdGEpO1xuICAgKiAgIH0sXG4gICAqICAgcGVyaXBoZXJhbERhdGEgPT4ge1xuICAgKiAgICAgY29uc29sZS5sb2coJ2Rpc2Nvbm5lY3RlZCcpO1xuICAgKiAgIH0pO1xuICAgKiBgYGBcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRldmljZUlkIFVVSUQgb3IgTUFDIGFkZHJlc3Mgb2YgdGhlIHBlcmlwaGVyYWxcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fSBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBub3RpZmllcyBvZiBjb25uZWN0L2Rpc2Nvbm5lY3QuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBjbGVhckZ1bmN0aW9uOiAnZGlzY29ubmVjdCcsXG4gICAgY2xlYXJXaXRoQXJnczogdHJ1ZSxcbiAgfSlcbiAgY29ubmVjdChkZXZpY2VJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRXN0YWJsaXNoIGFuIGF1dG9tYXRpYyBjb25uZWN0aW9uIHRvIGEgcGVyaXBoZXJhbC4gVGhlIHBob25lIHdpbGwgYXV0b21hdGljYWxseSBjb25uZWN0IHRvIHRoZSBCbHVldG9vdGggcGVyaXBoZXJhbFxuICAgKiB3aGVuZXZlciBpdCBpcyBpbiByYW5nZS4gVGhlIGF1dG9Db25uZWN0IGZ1bmN0aW9uIHVzZXMgY2FsbGJhY2tzIGluc3RlYWQgb2Ygb2JzZXJ2YWJsZXMgYmVjYXVzZSBjb25uZWN0IGFuZFxuICAgKiBkaXNjb25uZWN0IGNhbiBlYWNoIGJlIGNhbGxlZCBtYW55IHRpbWVzIGFzIGEgZGV2aWNlcyBjb25uZWN0cyBhbmQgZGlzY29ubmVjdHMuXG4gICAqXG4gICAqIE9uIEFuZHJvaWQgeW91IGNhbiBwYXNzIGEgTUFDIGFkZHJlc3MgZGlyZWN0bHkgdG8gYXV0b0Nvbm5lY3QuIFdpdGggaU9TLCB5b3UgbmVlZCB0byBnZXQgYSBkZXZpY2UgaWQgYnkgc2Nhbm5pbmcsXG4gICAqIGNhbGxpbmcgYmxlLnBlcmlwaGVyYWxzV2l0aElkZW50aWZpZXJzLCBvciBjYWxsaW5nIGJsZS5jb25uZWN0ZWRQZXJpcGhlcmFsc1dpdGhTZXJ2aWNlcy5cbiAgICpcbiAgICogQHVzYWdlXG4gICAqIGBgYFxuICAgKiAgc29tZUZ1bmN0aW9uKCkge1xuICAgKiAgICB0aGlzLmJsZS5hdXRvQ29ubmVjdChkZXZpY2VJZCwgb25Db25uZWN0ZWQuYmluZCh0aGlzKSwgb25EaXNjb25uZWN0ZWQuYmluZCh0aGlzKSk7XG4gICAqICB9XG4gICAqXG4gICAqICBvbkNvbm5lY3RlZChwZXJpcGhlcmFsKSB7XG4gICAqICAgIGNvbnNvbGUubG9nKGBDb25uZWN0ZWQgdG8gJHtwZXJpcGhlcmFsLmlkfWApbFxuICAgKiAgfVxuICAgKlxuICAgKiAgb25EaXNjb25uZWN0ZWQocGVyaXBoZXJhbCkge1xuICAgKiAgICBjb25zb2xlLmxvZyhgRGlzY29ubmVjdGVkIGZyb20gJHtwZXJpcGhlcmFsLmlkfWApbFxuICAgKiAgfVxuICAgKlxuICAgKiBgYGBcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRldmljZUlkIFVVSUQgb3IgTUFDIGFkZHJlc3Mgb2YgdGhlIHBlcmlwaGVyYWxcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY29ubmVjdENhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdpdGggcGVyaXBoZXJhbCBkYXRhIHdoZW4gdGhlIGRldmljZXMgY29ubmVjdHNcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZGlzY29ubmVjdENhbGxiYWNrICBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB3aXRoIHBlcmlwaGVyYWwgZGF0YSB3aGVuIHRoZSBkZXZpY2VzIGRpc2Nvbm5lY3RzXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgYXV0b0Nvbm5lY3QoZGV2aWNlSWQ6IHN0cmluZywgY29ubmVjdENhbGxiYWNrOiBhbnksIGRpc2Nvbm5lY3RDYWxsYmFjazogYW55KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3QgTVRVIHNpemUuXG4gICAqIE1heSBiZSB1c2VkIHRvIGZpeCB0aGUgRXJyb3IgMTQgXCJVbmxpa2VseVwiIG9uIHdyaXRlIHJlcXVlc3RzIHdpdGggbW9yZSB0aGFuIDIwIGJ5dGVzLlxuICAgKiBAdXNhZ2VcbiAgICogYGBgXG4gICAqICAgQkxFLnJlcXVlc3RNdHUoJzEyOjM0OjU2Ojc4OjlBOkJDJywgNTEyKS50aGVuKCgpID0+IHtcbiAgICogICAgIGNvbnNvbGUubG9nKCdNVFUgU2l6ZSBBY2NlcHRlZCcpO1xuICAgKiAgIH0sIGVycm9yID0+IHtcbiAgICogICAgIGNvbnNvbGUubG9nKCdNVFUgU2l6ZSBGYWlsZWQnKTtcbiAgICogICB9KTtcbiAgICogYGBgXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkZXZpY2VJZCBVVUlEIG9yIE1BQyBhZGRyZXNzIG9mIHRoZSBwZXJpcGhlcmFsXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtdHVTaXplIFRoZSBuZXcgTVRVIHNpemUuICgyMyAtIDUxNywgZGVmYXVsdCBpcyB1c3VhbGx5IDIzLiBNYXggcmVjb21tZW5kZWQ6IDUxMilcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZS5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVxdWVzdE10dShkZXZpY2VJZDogc3RyaW5nLCBtdHVTaXplOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIERldmljZSBDYWNoZVxuICAgKiBUaGlzIG1ldGhvZCBtYXkgZml4IGEgaXNzdWUgb2Ygb2xkIGNhY2hlZCBzZXJ2aWNlcyBhbmQgY2hhcmFjdGVyaXN0aWNzLlxuICAgKiBOT1RFIFNpbmNlIHRoaXMgdXNlcyBhbiB1bmRvY3VtZW50ZWQgQVBJIGl0J3Mgbm90IGd1YXJhbnRlZWQgdG8gd29yay5cbiAgICogSWYgeW91IGNob29zZSBhIHRvbyBsb3cgZGVsYXkgdGltZSAodGltZW91dE1pbGxpcykgdGhlIG1ldGhvZCBjb3VsZCBmYWlsLlxuICAgKiBAdXNhZ2VcbiAgICogYGBgXG4gICAqICAgQkxFLnJlZnJlc2hEZXZpY2VDYWNoZSgnMTI6MzQ6NTY6Nzg6OUE6QkMnLCAxMDAwMCkudGhlbihkaXNjb3ZlcmVkU2VydmljZXMgPT4ge1xuICAgKiAgICAgY29uc29sZS5sb2coJ1RoZSBuZXcgZGlzY292ZXJlZCBzZXJ2aWNlcyBhZnRlciB0aGUgY2xlYW46ICcsIGRpc2NvdmVyZWRTZXJ2aWNlcyk7XG4gICAqICAgfSwgZXJyb3IgPT4ge1xuICAgKiAgICAgY29uc29sZS5sb2coJ1JlZnJlc2ggZGV2aWNlIGNhY2hlIGZhaWxlZC4nKTtcbiAgICogICB9KTtcbiAgICogYGBgXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkZXZpY2VJZCBVVUlEIG9yIE1BQyBhZGRyZXNzIG9mIHRoZSBwZXJpcGhlcmFsXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lb3V0TWlsbGlzIERlbGF5IGluIG1pbGxpc2Vjb25kcyBhZnRlciByZWZyZXNoIGJlZm9yZSBkaXNjb3ZlcmluZyBzZXJ2aWNlcy5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZS5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVmcmVzaERldmljZUNhY2hlKGRldmljZUlkOiBzdHJpbmcsIHRpbWVvdXRNaWxsaXM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2Nvbm5lY3QgZnJvbSBhIHBlcmlwaGVyYWwuXG4gICAqIEB1c2FnZVxuICAgKiBgYGBcbiAgICogICBCTEUuZGlzY29ubmVjdCgnMTI6MzQ6NTY6Nzg6OUE6QkMnKS50aGVuKCgpID0+IHtcbiAgICogICAgIGNvbnNvbGUubG9nKCdEaXNjb25uZWN0ZWQnKTtcbiAgICogICB9KTtcbiAgICogYGBgXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkZXZpY2VJZCAgVVVJRCBvciBNQUMgYWRkcmVzcyBvZiB0aGUgcGVyaXBoZXJhbFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRpc2Nvbm5lY3QoZGV2aWNlSWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWQgdGhlIHZhbHVlIG9mIGEgY2hhcmFjdGVyaXN0aWMuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkZXZpY2VJZCAgVVVJRCBvciBNQUMgYWRkcmVzcyBvZiB0aGUgcGVyaXBoZXJhbFxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VydmljZVVVSUQgIFVVSUQgb2YgdGhlIEJMRSBzZXJ2aWNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyYWN0ZXJpc3RpY1VVSUQgIFVVSUQgb2YgdGhlIEJMRSBjaGFyYWN0ZXJpc3RpY1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlYWQoZGV2aWNlSWQ6IHN0cmluZywgc2VydmljZVVVSUQ6IHN0cmluZywgY2hhcmFjdGVyaXN0aWNVVUlEOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcml0ZSB0aGUgdmFsdWUgb2YgYSBjaGFyYWN0ZXJpc3RpYy5cbiAgICogQHVzYWdlXG4gICAqIGBgYFxuICAgKiAvLyBzZW5kIDEgYnl0ZSB0byBzd2l0Y2ggYSBsaWdodCBvblxuICAgKiB2YXIgZGF0YSA9IG5ldyBVaW50OEFycmF5KDEpO1xuICAgKiBkYXRhWzBdID0gMTtcbiAgICogQkxFLndyaXRlKGRldmljZV9pZCwgJ0ZGMTAnLCAnRkYxMScsIGRhdGEuYnVmZmVyKTtcbiAgICpcbiAgICogLy8gc2VuZCBhIDMgYnl0ZSB2YWx1ZSB3aXRoIFJHQiBjb2xvclxuICAgKiB2YXIgZGF0YSA9IG5ldyBVaW50OEFycmF5KDMpO1xuICAgKiBkYXRhWzBdID0gMHhGRjsgIC8vIHJlZFxuICAgKiBkYXRhWzBdID0gMHgwMDsgLy8gZ3JlZW5cbiAgICogZGF0YVswXSA9IDB4RkY7IC8vIGJsdWVcbiAgICogQkxFLndyaXRlKGRldmljZV9pZCwgJ2NjYzAnLCAnY2NjMScsIGRhdGEuYnVmZmVyKTtcbiAgICpcbiAgICogLy8gc2VuZCBhIDMyIGJpdCBpbnRlZ2VyXG4gICAqIHZhciBkYXRhID0gbmV3IFVpbnQzMkFycmF5KDEpO1xuICAgKiBkYXRhWzBdID0gY291bnRlcklucHV0LnZhbHVlO1xuICAgKiBCTEUud3JpdGUoZGV2aWNlX2lkLCBTRVJWSUNFLCBDSEFSQUNURVJJU1RJQywgZGF0YS5idWZmZXIpO1xuICAgKlxuICAgKiBgYGBcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRldmljZUlkICBVVUlEIG9yIE1BQyBhZGRyZXNzIG9mIHRoZSBwZXJpcGhlcmFsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZXJ2aWNlVVVJRCAgVVVJRCBvZiB0aGUgQkxFIHNlcnZpY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNoYXJhY3RlcmlzdGljVVVJRCAgVVVJRCBvZiB0aGUgQkxFIGNoYXJhY3RlcmlzdGljXG4gICAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IHZhbHVlICBEYXRhIHRvIHdyaXRlIHRvIHRoZSBjaGFyYWN0ZXJpc3RpYywgYXMgYW4gQXJyYXlCdWZmZXIuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgd3JpdGUoZGV2aWNlSWQ6IHN0cmluZywgc2VydmljZVVVSUQ6IHN0cmluZywgY2hhcmFjdGVyaXN0aWNVVUlEOiBzdHJpbmcsIHZhbHVlOiBBcnJheUJ1ZmZlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyaXRlIHRoZSB2YWx1ZSBvZiBhIGNoYXJhY3RlcmlzdGljIHdpdGhvdXQgd2FpdGluZyBmb3IgY29uZmlybWF0aW9uIGZyb20gdGhlIHBlcmlwaGVyYWwuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkZXZpY2VJZCAgVVVJRCBvciBNQUMgYWRkcmVzcyBvZiB0aGUgcGVyaXBoZXJhbFxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VydmljZVVVSUQgIFVVSUQgb2YgdGhlIEJMRSBzZXJ2aWNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyYWN0ZXJpc3RpY1VVSUQgIFVVSUQgb2YgdGhlIEJMRSBjaGFyYWN0ZXJpc3RpY1xuICAgKiBAcGFyYW0ge0FycmF5QnVmZmVyfSB2YWx1ZSAgRGF0YSB0byB3cml0ZSB0byB0aGUgY2hhcmFjdGVyaXN0aWMsIGFzIGFuIEFycmF5QnVmZmVyLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHdyaXRlV2l0aG91dFJlc3BvbnNlKFxuICAgIGRldmljZUlkOiBzdHJpbmcsXG4gICAgc2VydmljZVVVSUQ6IHN0cmluZyxcbiAgICBjaGFyYWN0ZXJpc3RpY1VVSUQ6IHN0cmluZyxcbiAgICB2YWx1ZTogQXJyYXlCdWZmZXJcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogd3JpdGVzIHVuc2lnbmVkIEhleCBCeXRlIGluIGJ5dGUgYXJyYXlcbiAgICogbWF4OiAyNTYgWzAtMjU1XVxuICAgKiBhY2NlcHRzIEhFWC1OdW1iZXJzIGFzIGFyZ3NcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRldmljZUlkICBVVUlEIG9yIE1BQyBhZGRyZXNzIG9mIHRoZSBwZXJpcGhlcmFsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZXJ2aWNlVVVJRCAgVVVJRCBvZiB0aGUgQkxFIHNlcnZpY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNoYXJhY3RlcmlzdGljVVVJRCAgVVVJRCBvZiB0aGUgQkxFIGNoYXJhY3RlcmlzdGljXG4gICAqIEBwYXJhbSB7YW55W119IHZhbHVlICBEYXRhIHRvIHdyaXRlIHRvIHRoZSBjaGFyYWN0ZXJpc3RpYywgYXMgYW4gQXJyYXlCdWZmZXIuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgd3JpdGVIZXhCeXRlKGRldmljZUlkOiBzdHJpbmcsIHNlcnZpY2VVVUlEOiBzdHJpbmcsIGNoYXJhY3RlcmlzdGljVVVJRDogc3RyaW5nLCB2YWx1ZTogYW55W10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY2NlcHRzIEFTQ0lJIGVxdWl2YWxlbnQgb2YgYXJncyBpbiBEZWNpbWFsLUZvcm1hdFxuICAgKiBDb252ZXJ0IGl0IHRvIEhFWCBOdW1iZXJzXG4gICAqIFdyaXRlcyB1bnNpZ25lZCBoZXggbnVtYmVyIGluIGJ5dGUgYXJyYXlcbiAgICogTWF4OiAyNTYgWzAtMjU1XVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGV2aWNlSWQgIFVVSUQgb3IgTUFDIGFkZHJlc3Mgb2YgdGhlIHBlcmlwaGVyYWxcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlcnZpY2VVVUlEICBVVUlEIG9mIHRoZSBCTEUgc2VydmljZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2hhcmFjdGVyaXN0aWNVVUlEICBVVUlEIG9mIHRoZSBCTEUgY2hhcmFjdGVyaXN0aWNcbiAgICogQHBhcmFtIHthbnlbXX0gdmFsdWUgIHRha2VzIGRlY2ltYWwgbnVtYmVyICYgY29udmVydCBpdCB0byBoZXhhZGVjaW1hbCAmIHRoZW4gcm91bmQgb2ZmIHRvIG9uZSB1bnNpZ25lZCBieXRlICgmMHhGRilcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB3cml0ZUhleFN0cmluZyhkZXZpY2VJZDogc3RyaW5nLCBzZXJ2aWNlVVVJRDogc3RyaW5nLCBjaGFyYWN0ZXJpc3RpY1VVSUQ6IHN0cmluZywgdmFsdWU6IGFueVtdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQWNjZXB0cyBzdHJpbmcgZGF0YVxuICAgKiBVc2VzIGphdmEgbWV0aG9kIGdldEJ5dGVzKCkgdG8gZ2V0IEJ5dGVBcnJheSBmcm9tIGEgZ2l2ZW4gc3RyaW5nXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkZXZpY2VJZCAgVVVJRCBvciBNQUMgYWRkcmVzcyBvZiB0aGUgcGVyaXBoZXJhbFxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VydmljZVVVSUQgIFVVSUQgb2YgdGhlIEJMRSBzZXJ2aWNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyYWN0ZXJpc3RpY1VVSUQgIFVVSUQgb2YgdGhlIEJMRSBjaGFyYWN0ZXJpc3RpY1xuICAgKiBAcGFyYW0ge2FueVtdfSB2YWx1ZSAgdGFrZXMgZGVjaW1hbCBudW1iZXIgJiBjb252ZXJ0IGl0IHRvIGhleGFkZWNpbWFsICYgdGhlbiByb3VuZCBvZmYgdG8gb25lIHVuc2lnbmVkIGJ5dGUgKCYweEZGKVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHdyaXRlU3RyaW5nV2l0aEdldEJ5dGVzKGRldmljZUlkOiBzdHJpbmcsIHNlcnZpY2VVVUlEOiBzdHJpbmcsIGNoYXJhY3RlcmlzdGljVVVJRDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRldmljZUlkICBVVUlEIG9yIE1BQyBhZGRyZXNzIG9mIHRoZSBwZXJpcGhlcmFsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZXJ2aWNlVVVJRCAgVVVJRCBvZiB0aGUgQkxFIHNlcnZpY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNoYXJhY3RlcmlzdGljVVVJRCAgVVVJRCBvZiB0aGUgQkxFIGNoYXJhY3RlcmlzdGljXG4gICAqIEBwYXJhbSB7YW55W119IHZhbHVlICB0YWtlcyBkZWNpbWFsIG51bWJlciAmIGNvbnZlcnQgaXQgdG8gaGV4YWRlY2ltYWwgJiB0aGVuIHJvdW5kIG9mZiB0byBvbmUgdW5zaWduZWQgYnl0ZSAoJjB4RkYpXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdGVzdFdyaXRlKGRldmljZUlkOiBzdHJpbmcsIHNlcnZpY2VVVUlEOiBzdHJpbmcsIGNoYXJhY3RlcmlzdGljVVVJRDogc3RyaW5nLCB2YWx1ZTogYW55W10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciB0byBiZSBub3RpZmllZCB3aGVuIHRoZSB2YWx1ZSBvZiBhIGNoYXJhY3RlcmlzdGljIGNoYW5nZXMuXG4gICAqXG4gICAqIEB1c2FnZVxuICAgKiBgYGBcbiAgICogQkxFLnN0YXJ0Tm90aWZpY2F0aW9uKGRldmljZV9pZCwgJ0ZGMTAnLCAnRkYxMScpLnN1YnNjcmliZShidWZmZXIgPT4ge1xuICAgKiAgIGNvbnNvbGUubG9nKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKSk7XG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRldmljZUlkICBVVUlEIG9yIE1BQyBhZGRyZXNzIG9mIHRoZSBwZXJpcGhlcmFsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZXJ2aWNlVVVJRCAgVVVJRCBvZiB0aGUgQkxFIHNlcnZpY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNoYXJhY3RlcmlzdGljVVVJRCAgVVVJRCBvZiB0aGUgQkxFIGNoYXJhY3RlcmlzdGljXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn0gUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgb2YgY2hhcmFjdGVyaXN0aWMgY2hhbmdlcy5cbiAgICogVGhlIG9ic2VydmVyIGVtaXQgYW4gYXJyYXkgd2l0aCBkYXRhIGF0IGluZGV4IDAgYW5kIHNlcXVlbmNlIG9yZGVyIGF0IGluZGV4IDEuXG4gICAqIFRoZSBzZXF1ZW5jZSBvcmRlciBpcyBhbHdheXMgdW5kZWZpbmVkIG9uIGlPUy4gT24gYW5kcm9pZCBpdCBsZWF2ZSB0aGUgY2xpZW50IHRvIGNoZWNrIHRoZSBzZXF1ZW5jZSBvcmRlciBhbmQgcmVvcmRlciBpZiBuZWVkZWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGRlc3RydWN0OiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICdzdG9wTm90aWZpY2F0aW9uJyxcbiAgICBjbGVhcldpdGhBcmdzOiB0cnVlLFxuICB9KVxuICBzdGFydE5vdGlmaWNhdGlvbihkZXZpY2VJZDogc3RyaW5nLCBzZXJ2aWNlVVVJRDogc3RyaW5nLCBjaGFyYWN0ZXJpc3RpY1VVSUQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3AgYmVpbmcgbm90aWZpZWQgd2hlbiB0aGUgdmFsdWUgb2YgYSBjaGFyYWN0ZXJpc3RpYyBjaGFuZ2VzLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGV2aWNlSWQgIFVVSUQgb3IgTUFDIGFkZHJlc3Mgb2YgdGhlIHBlcmlwaGVyYWxcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlcnZpY2VVVUlEICBVVUlEIG9mIHRoZSBCTEUgc2VydmljZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2hhcmFjdGVyaXN0aWNVVUlEICBVVUlEIG9mIHRoZSBCTEUgY2hhcmFjdGVyaXN0aWNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RvcE5vdGlmaWNhdGlvbihkZXZpY2VJZDogc3RyaW5nLCBzZXJ2aWNlVVVJRDogc3RyaW5nLCBjaGFyYWN0ZXJpc3RpY1VVSUQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcG9ydCB0aGUgY29ubmVjdGlvbiBzdGF0dXMuXG4gICAqXG4gICAqIEB1c2FnZVxuICAgKiBgYGBcbiAgICogQkxFLmlzQ29ubmVjdGVkKCdGRkNBMEIwOS1DQjFELTREQzAtQTFFRi0zMUFGRDNFREZCNTMnKS50aGVuKFxuICAgKiAgICgpID0+IHsgY29uc29sZS5sb2coJ2Nvbm5lY3RlZCcpOyB9LFxuICAgKiAgICgpID0+IHsgY29uc29sZS5sb2coJ25vdCBjb25uZWN0ZWQnKTsgfVxuICAgKiApO1xuICAgKiBgYGBcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRldmljZUlkICBVVUlEIG9yIE1BQyBhZGRyZXNzIG9mIHRoZSBwZXJpcGhlcmFsXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzQ29ubmVjdGVkKGRldmljZUlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBvcnQgaWYgYmx1ZXRvb3RoIGlzIGVuYWJsZWQuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIGlmIEJsdWV0b290aCBpcyBlbmFibGVkLCBhbmQgcmVqZWN0cyBpZiBkaXNhYmxlZC5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNFbmFibGVkKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciB0byBiZSBub3RpZmllZCB3aGVuIEJsdWV0b290aCBzdGF0ZSBjaGFuZ2VzIG9uIHRoZSBkZXZpY2UuXG4gICAqXG4gICAqIEB1c2FnZVxuICAgKiBgYGBcbiAgICogQkxFLnN0YXJ0U3RhdGVOb3RpZmljYXRpb25zKCkuc3Vic2NyaWJlKHN0YXRlID0+IHtcbiAgICogICBjb25zb2xlLmxvZyhcIkJsdWV0b290aCBpcyBcIiArIHN0YXRlKTtcbiAgICogfSk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59IFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHdoZW4gdGhlIEJsdWV0b290aCBpcyBlbmFibGVkIG9yIGRpc2FibGVkIG9uIHRoZSBkZXZpY2UuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBjbGVhckZ1bmN0aW9uOiAnc3RvcFN0YXRlTm90aWZpY2F0aW9ucycsXG4gICAgY2xlYXJXaXRoQXJnczogZmFsc2UsXG4gIH0pXG4gIHN0YXJ0U3RhdGVOb3RpZmljYXRpb25zKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3Agc3RhdGUgbm90aWZpY2F0aW9ucy5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RvcFN0YXRlTm90aWZpY2F0aW9ucygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVuIFN5c3RlbSBCbHVldG9vdGggc2V0dGluZ3MgKEFuZHJvaWQgb25seSkuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNob3dCbHVldG9vdGhTZXR0aW5ncygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgQmx1ZXRvb3RoIG9uIHRoZSBkZXZpY2UgKEFuZHJvaWQgb25seSkuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGVuYWJsZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkIHRoZSBSU1NJIHZhbHVlIG9uIHRoZSBkZXZpY2UgY29ubmVjdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRldmljZUlkICBVVUlEIG9yIE1BQyBhZGRyZXNzIG9mIHRoZSBwZXJpcGhlcmFsXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlYWRSU1NJKGRldmljZUlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgYSBsaXN0IG9mIHRoZSBwZXJpcGhlcmFscyAoY29udGFpbmluZyBhbnkgb2YgdGhlIHNwZWNpZmllZCBzZXJ2aWNlcylcbiAgICogY3VycmVudGx5IGNvbm5lY3RlZCB0byB0aGUgc3lzdGVtLiBUaGUgcGVyaXBoZXJhbCBsaXN0IGlzIHNlbnQgdG8gdGhlIHN1Y2Nlc3MgY2FsbGJhY2suXG4gICAqIGlPUyBvbmx5XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHNlcnZpY2VzIExpc3Qgb2Ygc2VydmljZXMgdG8gZGlzY292ZXJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCBhIGxpc3Qgb2YgcGVyaXBoZXJhbCBvYmplY3RzXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNvbm5lY3RlZFBlcmlwaGVyYWxzV2l0aFNlcnZpY2VzKHNlcnZpY2VzOiBzdHJpbmdbXSk6IFByb21pc2U8YW55W10+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRmluZCB0aGUgY29ubmVjdGVkIHBlcmlwaGVyYWxzIG9mZmVyaW5nIHRoZSBsaXN0ZWQgc2VydmljZSBVVUlEcy5cbiAgICogaU9TIG9ubHlcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gdXVpZHMgTGlzdCBvZiBwZXJpcGhlcmFsIFVVSURzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHdpdGggYSBsaXN0IG9mIHBlcmlwaGVyYWwgb2JqZWN0c1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwZXJpcGhlcmFsc1dpdGhJZGVudGlmaWVycyh1dWlkczogc3RyaW5nW10pOiBQcm9taXNlPGFueVtdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgdGhlIGJvbmRlZCBkZXZpY2VzXG4gICAqIEFuZHJvaWQgb25seVxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIGEgbGlzdCBvZiBwZXJpcGhlcmFsIG9iamVjdHNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgYm9uZGVkRGV2aWNlcygpOiBQcm9taXNlPGFueVtdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcG9ydHMgaWYgbG9jYXRpb24gc2VydmljZXMgYXJlIGVuYWJsZWQuXG4gICAqIEFuZHJvaWQgb25seVxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNMb2NhdGlvbkVuYWJsZWQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=
