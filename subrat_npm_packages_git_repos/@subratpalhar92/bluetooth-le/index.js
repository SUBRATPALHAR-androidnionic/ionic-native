var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
  })();
import { IonicNativePlugin, cordovaPropertyGet, cordovaPropertySet, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
export var BluetoothScanMode;
(function (BluetoothScanMode) {
  BluetoothScanMode[(BluetoothScanMode['SCAN_MODE_OPPORTUNISTIC'] = -1)] = 'SCAN_MODE_OPPORTUNISTIC';
  BluetoothScanMode[(BluetoothScanMode['SCAN_MODE_LOW_POWER'] = 0)] = 'SCAN_MODE_LOW_POWER';
  BluetoothScanMode[(BluetoothScanMode['SCAN_MODE_BALANCED'] = 1)] = 'SCAN_MODE_BALANCED';
  BluetoothScanMode[(BluetoothScanMode['SCAN_MODE_LOW_LATENCY'] = 2)] = 'SCAN_MODE_LOW_LATENCY';
})(BluetoothScanMode || (BluetoothScanMode = {}));
export var BluetoothMatchMode;
(function (BluetoothMatchMode) {
  BluetoothMatchMode[(BluetoothMatchMode['MATCH_MODE_AGRESSIVE'] = 1)] = 'MATCH_MODE_AGRESSIVE';
  BluetoothMatchMode[(BluetoothMatchMode['MATCH_MODE_STICKY'] = 2)] = 'MATCH_MODE_STICKY';
})(BluetoothMatchMode || (BluetoothMatchMode = {}));
export var BluetoothMatchNum;
(function (BluetoothMatchNum) {
  BluetoothMatchNum[(BluetoothMatchNum['MATCH_NUM_ONE_ADVERTISEMENT'] = 1)] = 'MATCH_NUM_ONE_ADVERTISEMENT';
  BluetoothMatchNum[(BluetoothMatchNum['MATCH_NUM_FEW_ADVERTISEMENT'] = 2)] = 'MATCH_NUM_FEW_ADVERTISEMENT';
  BluetoothMatchNum[(BluetoothMatchNum['MATCH_NUM_MAX_ADVERTISEMENT'] = 3)] = 'MATCH_NUM_MAX_ADVERTISEMENT';
})(BluetoothMatchNum || (BluetoothMatchNum = {}));
export var BluetoothCallbackType;
(function (BluetoothCallbackType) {
  BluetoothCallbackType[(BluetoothCallbackType['CALLBACK_TYPE_ALL_MATCHES'] = 1)] = 'CALLBACK_TYPE_ALL_MATCHES';
  BluetoothCallbackType[(BluetoothCallbackType['CALLBACK_TYPE_FIRST_MATCH'] = 2)] = 'CALLBACK_TYPE_FIRST_MATCH';
  BluetoothCallbackType[(BluetoothCallbackType['CALLBACK_TYPE_MATCH_LOST'] = 4)] = 'CALLBACK_TYPE_MATCH_LOST';
})(BluetoothCallbackType || (BluetoothCallbackType = {}));
var BluetoothLEOriginal = /** @class */ (function (_super) {
  __extends(BluetoothLEOriginal, _super);
  function BluetoothLEOriginal() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  BluetoothLEOriginal.prototype.initialize = function (params) {
    return cordova(this, 'initialize', { successIndex: 0, errorIndex: 2, observable: true }, arguments);
  };
  BluetoothLEOriginal.prototype.enable = function () {
    return cordova(this, 'enable', { callbackOrder: 'reverse', sync: true }, arguments);
  };
  BluetoothLEOriginal.prototype.disable = function () {
    return cordova(this, 'disable', { callbackOrder: 'reverse', sync: true }, arguments);
  };
  BluetoothLEOriginal.prototype.getAdapterInfo = function () {
    return cordova(this, 'getAdapterInfo', { callbackOrder: 'reverse' }, arguments);
  };
  BluetoothLEOriginal.prototype.startScan = function (params) {
    return cordova(this, 'startScan', { callbackOrder: 'reverse', observable: true }, arguments);
  };
  BluetoothLEOriginal.prototype.stopScan = function () {
    return cordova(this, 'stopScan', { callbackOrder: 'reverse' }, arguments);
  };
  BluetoothLEOriginal.prototype.retrieveConnected = function (params) {
    return cordova(this, 'retrieveConnected', { callbackOrder: 'reverse' }, arguments);
  };
  BluetoothLEOriginal.prototype.bond = function (params) {
    return cordova(this, 'bond', { callbackOrder: 'reverse', observable: true }, arguments);
  };
  BluetoothLEOriginal.prototype.unbond = function (params) {
    return cordova(this, 'unbond', { callbackOrder: 'reverse' }, arguments);
  };
  BluetoothLEOriginal.prototype.connect = function (params) {
    return cordova(this, 'connect', { callbackOrder: 'reverse', observable: true }, arguments);
  };
  BluetoothLEOriginal.prototype.reconnect = function (params) {
    return cordova(this, 'reconnect', { callbackOrder: 'reverse', observable: true }, arguments);
  };
  BluetoothLEOriginal.prototype.disconnect = function (params) {
    return cordova(this, 'disconnect', { callbackOrder: 'reverse' }, arguments);
  };
  BluetoothLEOriginal.prototype.close = function (params) {
    return cordova(this, 'close', { callbackOrder: 'reverse' }, arguments);
  };
  BluetoothLEOriginal.prototype.discover = function (params) {
    return cordova(this, 'discover', { callbackOrder: 'reverse' }, arguments);
  };
  BluetoothLEOriginal.prototype.services = function (params) {
    return cordova(this, 'services', { callbackOrder: 'reverse' }, arguments);
  };
  BluetoothLEOriginal.prototype.characteristics = function (params) {
    return cordova(this, 'characteristics', { callbackOrder: 'reverse' }, arguments);
  };
  BluetoothLEOriginal.prototype.descriptors = function (params) {
    return cordova(this, 'descriptors', { callbackOrder: 'reverse' }, arguments);
  };
  BluetoothLEOriginal.prototype.read = function (params) {
    return cordova(this, 'read', { callbackOrder: 'reverse' }, arguments);
  };
  BluetoothLEOriginal.prototype.subscribe = function (params) {
    return cordova(this, 'subscribe', { callbackOrder: 'reverse', observable: true }, arguments);
  };
  BluetoothLEOriginal.prototype.unsubscribe = function (params) {
    return cordova(this, 'unsubscribe', { callbackOrder: 'reverse' }, arguments);
  };
  BluetoothLEOriginal.prototype.write = function (params) {
    return cordova(this, 'write', { callbackOrder: 'reverse' }, arguments);
  };
  BluetoothLEOriginal.prototype.writeQ = function (params) {
    return cordova(this, 'writeQ', { callbackOrder: 'reverse' }, arguments);
  };
  BluetoothLEOriginal.prototype.writeCommandInByteArray = function (params, value) {
    return cordova(this, 'writeCommandInByteArray', { callbackOrder: 'reverse' }, arguments);
  };
  BluetoothLEOriginal.prototype.readDescriptor = function (params) {
    return cordova(this, 'readDescriptor', { callbackOrder: 'reverse' }, arguments);
  };
  BluetoothLEOriginal.prototype.writeDescriptor = function (params) {
    return cordova(this, 'writeDescriptor', { callbackOrder: 'reverse' }, arguments);
  };
  BluetoothLEOriginal.prototype.rssi = function (params) {
    return cordova(this, 'rssi', { callbackOrder: 'reverse' }, arguments);
  };
  BluetoothLEOriginal.prototype.mtu = function (params) {
    return cordova(this, 'mtu', { callbackOrder: 'reverse' }, arguments);
  };
  BluetoothLEOriginal.prototype.requestConnectionPriority = function (params) {
    return cordova(this, 'requestConnectionPriority', { callbackOrder: 'reverse' }, arguments);
  };
  BluetoothLEOriginal.prototype.isInitialized = function () {
    return cordova(this, 'isInitialized', { callbackOrder: 'reverse' }, arguments);
  };
  BluetoothLEOriginal.prototype.isEnabled = function () {
    return cordova(this, 'isEnabled', { callbackOrder: 'reverse' }, arguments);
  };
  BluetoothLEOriginal.prototype.isScanning = function () {
    return cordova(this, 'isScanning', { callbackOrder: 'reverse' }, arguments);
  };
  BluetoothLEOriginal.prototype.isBonded = function (params) {
    return cordova(this, 'isBonded', { callbackOrder: 'reverse' }, arguments);
  };
  BluetoothLEOriginal.prototype.wasConnected = function (params) {
    return cordova(this, 'wasConnected', { callbackOrder: 'reverse' }, arguments);
  };
  BluetoothLEOriginal.prototype.isConnected = function (params) {
    return cordova(this, 'isConnected', { callbackOrder: 'reverse' }, arguments);
  };
  BluetoothLEOriginal.prototype.isDiscovered = function (params) {
    return cordova(this, 'isDiscovered', { callbackOrder: 'reverse' }, arguments);
  };
  BluetoothLEOriginal.prototype.hasPermission = function () {
    return cordova(this, 'hasPermission', { callbackOrder: 'reverse' }, arguments);
  };
  BluetoothLEOriginal.prototype.requestPermission = function () {
    return cordova(this, 'requestPermission', { callbackOrder: 'reverse' }, arguments);
  };
  BluetoothLEOriginal.prototype.isLocationEnabled = function () {
    return cordova(this, 'isLocationEnabled', { callbackOrder: 'reverse' }, arguments);
  };
  BluetoothLEOriginal.prototype.requestLocation = function () {
    return cordova(this, 'requestLocation', { callbackOrder: 'reverse' }, arguments);
  };
  BluetoothLEOriginal.prototype.initializePeripheral = function (params) {
    return cordova(this, 'initializePeripheral', { callbackOrder: 'reverse', observable: true }, arguments);
  };
  BluetoothLEOriginal.prototype.addService = function (params) {
    return cordova(this, 'addService', { callbackOrder: 'reverse' }, arguments);
  };
  BluetoothLEOriginal.prototype.removeService = function (params) {
    return cordova(this, 'removeService', { callbackOrder: 'reverse' }, arguments);
  };
  BluetoothLEOriginal.prototype.removeAllServices = function () {
    return cordova(this, 'removeAllServices', { callbackOrder: 'reverse' }, arguments);
  };
  BluetoothLEOriginal.prototype.startAdvertising = function (params) {
    return cordova(this, 'startAdvertising', { callbackOrder: 'reverse' }, arguments);
  };
  BluetoothLEOriginal.prototype.stopAdvertising = function () {
    return cordova(this, 'stopAdvertising', { callbackOrder: 'reverse' }, arguments);
  };
  BluetoothLEOriginal.prototype.isAdvertising = function () {
    return cordova(this, 'isAdvertising', { callbackOrder: 'reverse' }, arguments);
  };
  BluetoothLEOriginal.prototype.respond = function (params) {
    return cordova(this, 'respond', { callbackOrder: 'reverse' }, arguments);
  };
  BluetoothLEOriginal.prototype.notify = function (params) {
    return cordova(this, 'notify', { callbackOrder: 'reverse' }, arguments);
  };
  BluetoothLEOriginal.prototype.encodedStringToBytes = function (value) {
    return cordova(this, 'encodedStringToBytes', { sync: true }, arguments);
  };
  BluetoothLEOriginal.prototype.bytesToEncodedString = function (value) {
    return cordova(this, 'bytesToEncodedString', { sync: true }, arguments);
  };
  BluetoothLEOriginal.prototype.stringToBytes = function (value) {
    return cordova(this, 'stringToBytes', { sync: true }, arguments);
  };
  BluetoothLEOriginal.prototype.bytesToString = function (value) {
    return cordova(this, 'bytesToString', { sync: true }, arguments);
  };
  Object.defineProperty(BluetoothLEOriginal.prototype, 'SCAN_MODE_OPPORTUNISTIC', {
    get: function () {
      return cordovaPropertyGet(this, 'SCAN_MODE_OPPORTUNISTIC');
    },
    set: function (value) {
      cordovaPropertySet(this, 'SCAN_MODE_OPPORTUNISTIC', value);
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(BluetoothLEOriginal.prototype, 'SCAN_MODE_LOW_POWER', {
    get: function () {
      return cordovaPropertyGet(this, 'SCAN_MODE_LOW_POWER');
    },
    set: function (value) {
      cordovaPropertySet(this, 'SCAN_MODE_LOW_POWER', value);
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(BluetoothLEOriginal.prototype, 'SCAN_MODE_BALANCED', {
    get: function () {
      return cordovaPropertyGet(this, 'SCAN_MODE_BALANCED');
    },
    set: function (value) {
      cordovaPropertySet(this, 'SCAN_MODE_BALANCED', value);
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(BluetoothLEOriginal.prototype, 'SCAN_MODE_LOW_LATENCY', {
    get: function () {
      return cordovaPropertyGet(this, 'SCAN_MODE_LOW_LATENCY');
    },
    set: function (value) {
      cordovaPropertySet(this, 'SCAN_MODE_LOW_LATENCY', value);
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(BluetoothLEOriginal.prototype, 'MATCH_MODE_AGGRESSIVE', {
    get: function () {
      return cordovaPropertyGet(this, 'MATCH_MODE_AGGRESSIVE');
    },
    set: function (value) {
      cordovaPropertySet(this, 'MATCH_MODE_AGGRESSIVE', value);
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(BluetoothLEOriginal.prototype, 'MATCH_MODE_STICKY', {
    get: function () {
      return cordovaPropertyGet(this, 'MATCH_MODE_STICKY');
    },
    set: function (value) {
      cordovaPropertySet(this, 'MATCH_MODE_STICKY', value);
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(BluetoothLEOriginal.prototype, 'MATCH_NUM_ONE_ADVERTISEMENT', {
    get: function () {
      return cordovaPropertyGet(this, 'MATCH_NUM_ONE_ADVERTISEMENT');
    },
    set: function (value) {
      cordovaPropertySet(this, 'MATCH_NUM_ONE_ADVERTISEMENT', value);
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(BluetoothLEOriginal.prototype, 'MATCH_NUM_FEW_ADVERTISEMENT', {
    get: function () {
      return cordovaPropertyGet(this, 'MATCH_NUM_FEW_ADVERTISEMENT');
    },
    set: function (value) {
      cordovaPropertySet(this, 'MATCH_NUM_FEW_ADVERTISEMENT', value);
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(BluetoothLEOriginal.prototype, 'MATCH_NUM_MAX_ADVERTISEMENT', {
    get: function () {
      return cordovaPropertyGet(this, 'MATCH_NUM_MAX_ADVERTISEMENT');
    },
    set: function (value) {
      cordovaPropertySet(this, 'MATCH_NUM_MAX_ADVERTISEMENT', value);
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(BluetoothLEOriginal.prototype, 'CALLBACK_TYPE_ALL_MATCHES', {
    get: function () {
      return cordovaPropertyGet(this, 'CALLBACK_TYPE_ALL_MATCHES');
    },
    set: function (value) {
      cordovaPropertySet(this, 'CALLBACK_TYPE_ALL_MATCHES', value);
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(BluetoothLEOriginal.prototype, 'CALLBACK_TYPE_FIRST_MATCH', {
    get: function () {
      return cordovaPropertyGet(this, 'CALLBACK_TYPE_FIRST_MATCH');
    },
    set: function (value) {
      cordovaPropertySet(this, 'CALLBACK_TYPE_FIRST_MATCH', value);
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(BluetoothLEOriginal.prototype, 'CALLBACK_TYPE_MATCH_LOST', {
    get: function () {
      return cordovaPropertyGet(this, 'CALLBACK_TYPE_MATCH_LOST');
    },
    set: function (value) {
      cordovaPropertySet(this, 'CALLBACK_TYPE_MATCH_LOST', value);
    },
    enumerable: true,
    configurable: true,
  });
  BluetoothLEOriginal.pluginName = 'BluetoothLE';
  BluetoothLEOriginal.plugin = 'cordova-plugin-bluetoothle';
  BluetoothLEOriginal.pluginRef = 'bluetoothle';
  BluetoothLEOriginal.repo = 'https://github.com/randdusing/cordova-plugin-bluetoothle';
  BluetoothLEOriginal.install = 'ionic cordova plugin add cordova-plugin-bluetoothle';
  BluetoothLEOriginal.installVariables = [];
  BluetoothLEOriginal.platforms = ['Android', 'iOS'];
  return BluetoothLEOriginal;
})(IonicNativePlugin);
var BluetoothLE = new BluetoothLEOriginal();
export { BluetoothLE };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JsdWV0b290aC1sZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyxzRUFBdUQsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBZ1dsQyxNQUFNLENBQU4sSUFBWSxpQkFLWDtBQUxELFdBQVksaUJBQWlCO0lBQzNCLGdHQUE0QixDQUFBO0lBQzVCLHVGQUF1QixDQUFBO0lBQ3ZCLHFGQUFzQixDQUFBO0lBQ3RCLDJGQUF5QixDQUFBO0FBQzNCLENBQUMsRUFMVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBSzVCO0FBRUQsTUFBTSxDQUFOLElBQVksa0JBR1g7QUFIRCxXQUFZLGtCQUFrQjtJQUM1QiwyRkFBd0IsQ0FBQTtJQUN4QixxRkFBcUIsQ0FBQTtBQUN2QixDQUFDLEVBSFcsa0JBQWtCLEtBQWxCLGtCQUFrQixRQUc3QjtBQUVELE1BQU0sQ0FBTixJQUFZLGlCQUlYO0FBSkQsV0FBWSxpQkFBaUI7SUFDM0IsdUdBQStCLENBQUE7SUFDL0IsdUdBQStCLENBQUE7SUFDL0IsdUdBQStCLENBQUE7QUFDakMsQ0FBQyxFQUpXLGlCQUFpQixLQUFqQixpQkFBaUIsUUFJNUI7QUFFRCxNQUFNLENBQU4sSUFBWSxxQkFJWDtBQUpELFdBQVkscUJBQXFCO0lBQy9CLDJHQUE2QixDQUFBO0lBQzdCLDJHQUE2QixDQUFBO0lBQzdCLHlHQUE0QixDQUFBO0FBQzlCLENBQUMsRUFKVyxxQkFBcUIsS0FBckIscUJBQXFCLFFBSWhDOztJQXNEZ0MsK0JBQWlCOzs7O0lBUWhELGdDQUFVLGFBQUMsTUFBbUI7SUFVOUIsNEJBQU07SUFVTiw2QkFBTztJQWFQLG9DQUFjO0lBZ0JkLCtCQUFTLGFBQUMsTUFBa0I7SUFXNUIsOEJBQVE7SUFZUix1Q0FBaUIsYUFBQyxNQUFnQztJQWtCbEQsMEJBQUksYUFBQyxNQUEyQjtJQWFoQyw0QkFBTSxhQUFDLE1BQTJCO0lBaUJsQyw2QkFBTyxhQUFDLE1BQWtEO0lBVzFELCtCQUFTLGFBQUMsTUFBMkI7SUFZckMsZ0NBQVUsYUFBQyxNQUEyQjtJQWF0QywyQkFBSyxhQUFDLE1BQTJCO0lBbUJqQyw4QkFBUSxhQUFDLE1BQWlEO0lBWTFELDhCQUFRLGFBQUMsTUFBZ0Q7SUFZekQscUNBQWUsYUFBQyxNQUE0QjtJQVc1QyxpQ0FBVyxhQUFDLE1BQXdCO0lBV3BDLDBCQUFJLGFBQUMsTUFBd0I7SUFhN0IsK0JBQVMsYUFBQyxNQUF3QjtJQVdsQyxpQ0FBVyxhQUFDLE1BQXdCO0lBWXBDLDJCQUFLLGFBQUMsTUFBaUM7SUFZdkMsNEJBQU0sYUFBQyxNQUFpQztJQWF4Qyw2Q0FBdUIsYUFBQyxNQUFxQyxFQUFFLEtBQWtCO0lBV2pGLG9DQUFjLGFBQUMsTUFBaUM7SUFZaEQscUNBQWUsYUFBQyxNQUE2QjtJQVc3QywwQkFBSSxhQUFDLE1BQTJCO0lBV2hDLHlCQUFHLGFBQUMsTUFBeUM7SUFZN0MsK0NBQXlCLGFBQUMsTUFBbUU7SUFVN0YsbUNBQWE7SUFVYiwrQkFBUztJQVVULGdDQUFVO0lBV1YsOEJBQVEsYUFBQyxNQUEyQjtJQVdwQyxrQ0FBWSxhQUFDLE1BQTJCO0lBV3hDLGlDQUFXLGFBQUMsTUFBMkI7SUFXdkMsa0NBQVksYUFBQyxNQUEyQjtJQVV4QyxtQ0FBYTtJQVdiLHVDQUFpQjtJQVVqQix1Q0FBaUI7SUFXakIscUNBQWU7SUFZZiwwQ0FBb0IsYUFBQyxNQUE2QjtJQVdsRCxnQ0FBVSxhQUFDLE1BR1Y7SUFXRCxtQ0FBYSxhQUFDLE1BQTJCO0lBVXpDLHVDQUFpQjtJQWFqQixzQ0FBZ0IsYUFBQyxNQUF5QjtJQVUxQyxxQ0FBZTtJQVVmLG1DQUFhO0lBV2IsNkJBQU8sYUFBQyxNQUFxQjtJQWE3Qiw0QkFBTSxhQUFDLE1BQW9CO0lBVzNCLDBDQUFvQixhQUFDLEtBQWE7SUFXbEMsMENBQW9CLGFBQUMsS0FBaUI7SUFXdEMsbUNBQWEsYUFBQyxLQUFhO0lBVzNCLG1DQUFhLGFBQUMsS0FBaUI7MEJBSy9CLGdEQUF1Qjs7Ozs7OzBCQUV2Qiw0Q0FBbUI7Ozs7OzswQkFFbkIsMkNBQWtCOzs7Ozs7MEJBRWxCLDhDQUFxQjs7Ozs7OzBCQUVyQiw4Q0FBcUI7Ozs7OzswQkFFckIsMENBQWlCOzs7Ozs7MEJBRWpCLG9EQUEyQjs7Ozs7OzBCQUUzQixvREFBMkI7Ozs7OzswQkFFM0Isb0RBQTJCOzs7Ozs7MEJBRTNCLGtEQUF5Qjs7Ozs7OzBCQUV6QixrREFBeUI7Ozs7OzswQkFFekIsaURBQXdCOzs7Ozs7Ozs7Ozs7O3NCQTVpQzFCO0VBOGFpQyxpQkFBaUI7U0FBckMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qIEF2YWlsYWJsZSBzdGF0dXMgb2YgZGV2aWNlICovXG5leHBvcnQgdHlwZSBTdGF0dXMgPVxuICB8ICdzY2FuU3RhcnRlZCdcbiAgfCAnc2NhblN0b3BwZWQnXG4gIHwgJ3NjYW5SZXN1bHQnXG4gIHwgJ2Nvbm5lY3RlZCdcbiAgfCAnZGlzY29ubmVjdGVkJ1xuICB8ICdib25kaW5nJ1xuICB8ICdib25kZWQnXG4gIHwgJ3VuYm9uZGVkJ1xuICB8ICdjbG9zZWQnXG4gIHwgJ3NlcnZpY2VzJ1xuICB8ICdkaXNjb3ZlcmVkJ1xuICB8ICdjaGFyYWN0ZXJpc3RpY3MnXG4gIHwgJ2Rlc2NyaXB0b3JzJ1xuICB8ICdyZWFkJ1xuICB8ICdzdWJzY3JpYmVkJ1xuICB8ICd1bnN1YnNjcmliZWQnXG4gIHwgJ3N1YnNjcmliZWRSZXN1bHQnXG4gIHwgJ3dyaXR0ZW4nXG4gIHwgJ3JlYWREZXNjcmlwdG9yJ1xuICB8ICd3cml0ZURlc2NyaXB0b3InXG4gIHwgJ3Jzc2knXG4gIHwgJ210dSdcbiAgfCAnY29ubmVjdGlvblByaW9yaXR5UmVxdWVzdGVkJ1xuICB8ICdlbmFibGVkJ1xuICB8ICdkaXNhYmxlZCdcbiAgfCAncmVhZFJlcXVlc3RlZCdcbiAgfCAnd3JpdGVSZXF1ZXN0ZWQnXG4gIHwgJ210dUNoYW5nZWQnXG4gIHwgJ25vdGlmeVJlYWR5J1xuICB8ICdub3RpZnlTZW50J1xuICB8ICdzZXJ2aWNlQWRkZWQnXG4gIHwgJ3NlcnZpY2VSZW1vdmVkJ1xuICB8ICdhbGxTZXJ2aWNlc1JlbW92ZWQnXG4gIHwgJ2FkdmVydGlzaW5nU3RhcnRlZCdcbiAgfCAnYWR2ZXJ0aXNpbmdTdG9wcGVkJ1xuICB8ICdyZXNwb25kZWQnXG4gIHwgJ25vdGlmaWVkJztcblxuLyoqIEF2YWlsYWJsZSBjb25uZWN0aW9uIHByaW9yaXRpZXMgKi9cbmV4cG9ydCB0eXBlIENvbm5lY3Rpb25Qcmlvcml0eSA9ICdsb3cnIHwgJ2JhbGFuY2VkJyB8ICdoaWdoJztcblxuZXhwb3J0IGludGVyZmFjZSBQYXJhbXMge1xuICAvKiogVGhlIGFkZHJlc3MvaWRlbnRpZmllciBwcm92aWRlZCBieSB0aGUgc2NhbidzIHJldHVybiBvYmplY3QgKi9cbiAgYWRkcmVzczogc3RyaW5nO1xuICAvKiogVGhlIHNlcnZpY2UncyBJRCAqL1xuICBzZXJ2aWNlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5pdFBlcmlwaGVyYWxQYXJhbXMge1xuICAvKiogU2hvdWxkIHVzZXIgYmUgcHJvbXB0ZWQgdG8gZW5hYmxlIEJsdWV0b290aCAqL1xuICByZXF1ZXN0PzogYm9vbGVhbjtcbiAgLyogQSB1bmlxdWUgc3RyaW5nIHRvIGlkZW50aWZ5IHlvdXIgYXBwLiBCbHVldG9vdGggQ2VudHJhbCBiYWNrZ3JvdW5kIG1vZGUgaXMgcmVxdWlyZWQgdG8gdXNlIHRoaXMsIGJ1dCBiYWNrZ3JvdW5kIG1vZGUgZG9lc24ndCBzZWVtIHRvIHJlcXVpcmUgc3BlY2lmeWluZyB0aGUgcmVzdG9yZUtleSAqL1xuICByZXN0b3JlS2V5Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEluaXRQYXJhbXMgZXh0ZW5kcyBJbml0UGVyaXBoZXJhbFBhcmFtcyB7XG4gIC8qKiBTaG91bGQgY2hhbmdlIGluIEJsdWV0b290aCBzdGF0dXMgbm90aWZpY2F0aW9ucyBiZSBzZW50ICovXG4gIHN0YXR1c1JlY2VpdmVyPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTY2FuUGFyYW1zIHtcbiAgLyogQW4gYXJyYXkgb2Ygc2VydmljZSBJRHMgdG8gZmlsdGVyIHRoZSBzY2FuIG9yIGVtcHR5IGFycmF5IC8gbnVsbC4gVGhpcyBwYXJhbWV0ZXIgaXMgbm90IHN1cHBvcnRlZCBvbiBXaW5kb3dzIHBsYXRmb3JtIHlldCAqL1xuICBzZXJ2aWNlcz86IHN0cmluZ1tdO1xuICAvKiBUcnVlL2ZhbHNlIHRvIGFsbG93IGR1cGxpY2F0ZSBhZHZlcnRpc2VtZW50IHBhY2tldHMsIGRlZmF1bHRzIHRvIGZhbHNlIChpT1MpKi9cbiAgYWxsb3dEdXBsaWNhdGVzPzogYm9vbGVhbjtcbiAgLyoqIERlZmF1bHRzIHRvIExvdyBQb3dlci4gQXZhaWxhYmxlIGZyb20gQVBJMjEgLyBBUEkgMjMgKEFuZHJvaWQpICovXG4gIHNjYW5Nb2RlPzogQmx1ZXRvb3RoU2Nhbk1vZGU7XG4gIC8qKiBEZWZhdWx0cyB0byBBZ2dyZXNzaXZlLiBBdmFpbGFibGUgZnJvbSBBUEkyMyAoQW5kcm9pZCkgKi9cbiAgbWF0Y2hNb2RlPzogQmx1ZXRvb3RoTWF0Y2hNb2RlO1xuICAvKiogRGVmYXVsdHMgdG8gT25lIEFkdmVydGlzZW1lbnQuIEF2YWlsYWJsZSBmcm9tIEFQSTIzIChBbmRyb2lkKSAqL1xuICBtYXRjaE51bT86IEJsdWV0b290aE1hdGNoTnVtO1xuICAvKiogRGVmYXVsdHMgdG8gQWxsIE1hdGNoZXMuIEF2YWlsYWJsZSBmcm9tIEFQSTIxIC8gQVBJIDIzLiAoQW5kcm9pZCkgKi9cbiAgY2FsbGJhY2tUeXBlPzogQmx1ZXRvb3RoQ2FsbGJhY2tUeXBlO1xuICAvKiogVHJ1ZS9mYWxzZSB0byBzaG93IG9ubHkgY29ubmVjdGFibGUgZGV2aWNlcywgcmF0aGVyIHRoYW4gYWxsIGRldmljZXMgZXZlciBzZWVuLCBkZWZhdWx0cyB0byBmYWxzZSAoV2luZG93cykgKi9cbiAgaXNDb25uZWN0YWJsZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90aWZ5UGFyYW1zIHtcbiAgLyoqIFNlcnZpY2UncyBVVUlEICovXG4gIHNlcnZpY2U6IHN0cmluZztcbiAgLyoqIENoYXJhY3RlcmlzdGljJ3MgVVVJRCAqL1xuICBjaGFyYWN0ZXJpc3RpYzogc3RyaW5nO1xuICAvKiogQmFzZTY0IGVuY29kZWQgc3RyaW5nLCBudW1iZXIgb3Igc3RyaW5nICovXG4gIHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uZFBhcmFtcyB7XG4gIC8qKiBUaGlzIGludGVnZXIgdmFsdWUgd2lsbCBiZSBpbmNyZW1lbnRlZCBldmVyeSByZWFkL3dyaXRlUmVxdWVzdGVkICovXG4gIHJlcXVlc3RJZDogbnVtYmVyO1xuICAvKiogYmFzZTY0IHN0cmluZyAqL1xuICB2YWx1ZTogc3RyaW5nO1xuICAvKiogbm90IGRvY3VtZW50ZWQgKi9cbiAgb2Zmc2V0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYXJhY3RlcmlzdGljUGFyYW1zIGV4dGVuZHMgUGFyYW1zIHtcbiAgLyoqIEFuIGFycmF5IG9mIGNoYXJhY3RlcmlzdGljIElEcyB0byBkaXNjb3ZlciBvciBlbXB0eSBhcnJheSAvIG51bGwgKi9cbiAgY2hhcmFjdGVyaXN0aWNzPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVzY3JpcHRvclBhcmFtcyBleHRlbmRzIFBhcmFtcyB7XG4gIC8qKiBUaGUgY2hhcmFjdGVyaXN0aWMncyBJRCAqL1xuICBjaGFyYWN0ZXJpc3RpYzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9wZXJhdGlvbkRlc2NyaXB0b3JQYXJhbXMgZXh0ZW5kcyBEZXNjcmlwdG9yUGFyYW1zIHtcbiAgLyoqIFRoZSBkZXNjcmlwdG9yJ3MgSUQgKi9cbiAgZGVzY3JpcHRvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdyaXRlQ2hhcmFjdGVyaXN0aWNQYXJhbXMgZXh0ZW5kcyBEZXNjcmlwdG9yUGFyYW1zIHtcbiAgLyogQmFzZTY0IGVuY29kZWQgc3RyaW5nICovXG4gIHZhbHVlOiBzdHJpbmc7XG4gIC8qIFNldCB0byBcIm5vUmVzcG9uc2VcIiB0byBlbmFibGUgd3JpdGUgd2l0aG91dCByZXNwb25zZSwgYWxsIG90aGVyIHZhbHVlcyB3aWxsIHdyaXRlIG5vcm1hbGx5LiAqL1xuICB0eXBlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdyaXRlQ29tbWFuZEluQnl0ZUFycmF5UGFyYW1zIGV4dGVuZHMgRGVzY3JpcHRvclBhcmFtcyB7XG4gIC8qIFNldCB0byBcIm5vUmVzcG9uc2VcIiB0byBlbmFibGUgd3JpdGUgd2l0aG91dCByZXNwb25zZSwgYWxsIG90aGVyIHZhbHVlcyB3aWxsIHdyaXRlIG5vcm1hbGx5LiAqL1xuICB0eXBlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdyaXRlRGVzY3JpcHRvclBhcmFtcyBleHRlbmRzIERlc2NyaXB0b3JQYXJhbXMge1xuICAvKiogVGhlIGRlc2NyaXB0b3IncyBJRCAqL1xuICBkZXNjcmlwdG9yOiBzdHJpbmc7XG4gIC8qKiBCYXNlNjQgZW5jb2RlZCBzdHJpbmcsIG51bWJlciBvciBzdHJpbmcgKi9cbiAgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgQWR2ZXJ0aXNpbmdQYXJhbXMgPSBBZHZlcnRpc2luZ1BhcmFtc0FuZHJvaWQgfCBBZHZlcnRpc2luZ1BhcmFtc0lPUztcbmV4cG9ydCB0eXBlIEFkdmVydGlzZU1vZGUgPSAnYmFsYW5jZWQnIHwgJ2xvd0xhdGVuY3knIHwgJ2xvd1Bvd2VyJztcbmV4cG9ydCB0eXBlIFR4UG93ZXJMZXZlbCA9ICdoaWdoJyB8ICdsb3cnIHwgJ3VsdHJhbG93JyB8ICdtZWRpdW0nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFkdmVydGlzaW5nUGFyYW1zQW5kcm9pZCB7XG4gIC8qKiBTZXJ2aWNlIFVVSUQgb24gQW5kcm9pZCAqL1xuICBzZXJ2aWNlOiBzdHJpbmc7XG4gIC8qKiBub3QgZG9jdW1lbnRlZCAqL1xuICBtb2RlPzogQWR2ZXJ0aXNlTW9kZTtcbiAgLyoqIG5vdCBkb2N1bWVudGVkICovXG4gIGNvbm5lY3RhYmxlPzogYm9vbGVhbjtcbiAgLyoqIG5vdCBkb2N1bWVudGVkICovXG4gIHRpbWVvdXQ/OiBudW1iZXI7XG4gIC8qKiBub3QgZG9jdW1lbnRlZCAqL1xuICB0eFBvd2VyTGV2ZWw/OiBUeFBvd2VyTGV2ZWw7XG4gIC8qKiBub3QgZG9jdW1lbnRlZCAqL1xuICBtYW51ZmFjdHVyZXJJZD86IG51bWJlcjtcbiAgLyoqIG5vdCBkb2N1bWVudGVkICovXG4gIG1hbnVmYWN0dXJlclNwZWNpZmljRGF0YT86IGFueTtcbiAgLyoqIG5vdCBkb2N1bWVudGVkICovXG4gIGluY2x1ZGVEZXZpY2VOYW1lOiBib29sZWFuO1xuICAvKiogbm90IGRvY3VtZW50ZWQgKi9cbiAgaW5jbHVkZVR4UG93ZXJMZXZlbDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZHZlcnRpc2luZ1BhcmFtc0lPUyB7XG4gIC8qKiBBcnJheSBvZiBzZXJ2aWNlIFVVSURzIG9uIGlPUyAqL1xuICBzZXJ2aWNlczogc3RyaW5nW107XG4gIC8qKiBkZXZpY2UncyBuYW1lICovXG4gIG5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tbW9uSW5mbyB7XG4gIC8qKiBUaGUgZGV2aWNlJ3MgZGlzcGxheSBuYW1lICovXG4gIG5hbWU6IHN0cmluZztcbiAgLyoqIFRoZSBkZXZpY2UncyBhZGRyZXNzIC8gaWRlbnRpZmllciBmb3IgY29ubmVjdGluZyB0byB0aGUgb2JqZWN0ICovXG4gIGFkZHJlc3M6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VJbmZvIGV4dGVuZHMgQ29tbW9uSW5mbyB7XG4gIC8qKiBEZXZpY2UncyBzdGF0dXMgKi9cbiAgc3RhdHVzOiBTdGF0dXM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUlNTSSBleHRlbmRzIERldmljZUluZm8ge1xuICAvKiogc2lnbmFsIHN0cmVuZ3RoICovXG4gIHJzc2k6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNVFUgZXh0ZW5kcyBEZXZpY2VJbmZvIHtcbiAgLyogbXR1IHZhbHVlICovXG4gIG10dTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJvbmRlZFN0YXR1cyBleHRlbmRzIENvbW1vbkluZm8ge1xuICAvKiBCb25kZWQgc3RhdHVzKi9cbiAgaXNCb25kZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJldkNvbm5lY3Rpb25TdGF0dXMgZXh0ZW5kcyBDb21tb25JbmZvIHtcbiAgLyoqIERldGVybWluZSB3aGV0aGVyIHRoZSBkZXZpY2Ugd2FzIGNvbm5lY3RlZCAqL1xuICB3YXNDb25uZWN0ZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VyckNvbm5lY3Rpb25TdGF0dXMgZXh0ZW5kcyBDb21tb25JbmZvIHtcbiAgLyoqIERldGVybWluZSB3aGV0aGVyIHRoZSBkZXZpY2UgaXMgY29ubmVjdGVkICovXG4gIGlzQ29ubmVjdGVkOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERpc2NvdmVyU3RhdHVzIGV4dGVuZHMgQ29tbW9uSW5mbyB7XG4gIC8qKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZGV2aWNlJ3MgY2hhcmFjdGVyaXN0aWNzIGFuZCBkZXNjcmlwdG9ycyBoYXZlIGJlZW4gZGlzY292ZXJlZCAqL1xuICBpc0Rpc2NvdmVyZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2NhblN0YXR1cyBleHRlbmRzIERldmljZUluZm8ge1xuICAvKiogc2lnbmFsIHN0cmVuZ3RoICovXG4gIHJzc2k6IG51bWJlcjtcbiAgLyoqXG4gICAqIGFkdmVydGlzZW1lbnQgZGF0YSBpbiBlbmNvZGVkIHN0cmluZyBvZiBieXRlcywgdXNlIGJsdWV0b290aGxlLmVuY29kZWRTdHJpbmdUb0J5dGVzKCkgKEFuZHJvaWQpXG4gICAqIGFkdmVydGlzZW1lbnQgaGFzaCB3aXRoIHRoZSBrZXlzIChpT1MpXG4gICAqIGVtcHR5IChXaW5kb3dzKVxuICAgKi9cbiAgYWR2ZXJ0aXNlbWVudDpcbiAgICB8IHtcbiAgICAgICAgLyoqIEFuIGFycmF5IG9mIHNlcnZpY2UgVVVJRHMgKi9cbiAgICAgICAgc2VydmljZVV1aWRzOiBzdHJpbmdbXTtcbiAgICAgICAgLyoqIEEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgbmFtZSBvZiB0aGUgbWFudWZhY3R1cmVyIG9mIHRoZSBkZXZpY2UgKi9cbiAgICAgICAgbWFudWZhY3R1cmVyRGF0YTogc3RyaW5nO1xuICAgICAgICAvKiogQSBudW1iZXIgY29udGFpbmluZyB0aGUgdHJhbnNtaXQgcG93ZXIgb2YgYSBwZXJpcGhlcmFsICovXG4gICAgICAgIHR4UG93ZXJMZXZlbDogbnVtYmVyO1xuICAgICAgICAvKiogQW4gYXJyYXkgb2Ygb25lIG9yIG1vcmUgQ0JVVUlEIG9iamVjdHMsIHJlcHJlc2VudGluZyBDQlNlcnZpY2UgVVVJRHMgdGhhdCB3ZXJlIGZvdW5kIGluIHRoZSDigJxvdmVyZmxvd+KAnSBhcmVhIG9mIHRoZSBhZHZlcnRpc2VtZW50IGRhdGEgKi9cbiAgICAgICAgb3ZlcmZsb3dTZXJ2aWNlVXVpZHM6IHN0cmluZ1tdO1xuICAgICAgICAvKiogQSBib29sZWFuIHZhbHVlIHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgdGhlIGFkdmVydGlzaW5nIGV2ZW50IHR5cGUgaXMgY29ubmVjdGFibGUgKi9cbiAgICAgICAgaXNDb25uZWN0YWJsZTogYm9vbGVhbjtcbiAgICAgICAgLyoqIEFuIGFycmF5IG9mIG9uZSBvciBtb3JlIENCVVVJRCBvYmplY3RzLCByZXByZXNlbnRpbmcgQ0JTZXJ2aWNlIFVVSURzICovXG4gICAgICAgIHNvbGljaXRlZFNlcnZpY2VVdWlkczogc3RyaW5nW107XG4gICAgICAgIC8qIEEgZGljdGlvbmFyeSBjb250YWluaW5nIHNlcnZpY2Utc3BlY2lmaWMgYWR2ZXJ0aXNlbWVudCBkYXRhICovXG4gICAgICAgIHNlcnZpY2VEYXRhOiBhbnk7XG4gICAgICAgIC8qIEEgc3RyaW5nIGNvbnRhaW5pbmcgdGhlIGxvY2FsIG5hbWUgb2YgYSBwZXJpcGhlcmFsICovXG4gICAgICAgIGxvY2FsTmFtZTogc3RyaW5nO1xuICAgICAgfVxuICAgIHwgc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlcnZpY2Uge1xuICAvKiogU2VydmljZSdzIHV1aWQgKi9cbiAgdXVpZDogc3RyaW5nO1xuICAvKiogQXJyYXkgb2YgY2hhcmFjdGVyaXN0aWNzICovXG4gIGNoYXJhY3RlcmlzdGljczogQ2hhcmFjdGVyaXN0aWNbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGFyYWN0ZXJpc3RpYyB7XG4gIC8qIEFycmF5IG9mIGRlc2NyaXB0b3JzICovXG4gIGRlc2NyaXB0b3JzPzogRGVzY3JpcHRvcltdO1xuICAvKiogIENoYXJhY3RlcmlzdGljJ3MgdXVpZCAqL1xuICB1dWlkOiBzdHJpbmc7XG4gIC8qKlxuICAgKiAgQ2hhcmFjdGVyaXN0aWMncyBwcm9wZXJ0aWVzXG4gICAqICBJZiB0aGUgcHJvcGVydHkgaXMgZGVmaW5lZCBhcyBhIGtleSwgdGhlIGNoYXJhY3RlcmlzdGljIGhhcyB0aGF0IHByb3BlcnR5XG4gICAqL1xuICBwcm9wZXJ0aWVzPzoge1xuICAgIHdyaXRlPzogYm9vbGVhbjtcbiAgICBicm9hZGNhc3Q/OiBib29sZWFuO1xuICAgIGV4dGVuZGVkUHJvcHM/OiBib29sZWFuO1xuICAgIHdyaXRlV2l0aG91dFJlc3BvbnNlPzogYm9vbGVhbjtcbiAgICB3cml0ZU5vUmVzcG9uc2U/OiBib29sZWFuO1xuICAgIHNpZ25lZFdyaXRlPzogYm9vbGVhbjtcbiAgICByZWFkPzogYm9vbGVhbjtcbiAgICBub3RpZnk/OiBib29sZWFuO1xuICAgIGluZGljYXRlPzogYm9vbGVhbjtcbiAgICBhdXRoZW50aWNhdGVkU2lnbmVkV3JpdGVzPzogYm9vbGVhbjtcbiAgICBub3RpZnlFbmNyeXB0aW9uUmVxdWlyZWQ/OiBib29sZWFuO1xuICAgIGluZGljYXRlRW5jcnlwdGlvblJlcXVpcmVkPzogYm9vbGVhbjtcbiAgfTtcbiAgLyoqXG4gICAqICBJZiB0aGUgcGVybWlzc2lvbiBpcyBkZWZpbmVkIGFzIGEga2V5LCB0aGUgY2hhcmFjdGVyIGhhcyB0aGF0IHBlcm1pc3Npb25cbiAgICovXG4gIHBlcm1pc3Npb25zPzoge1xuICAgIHJlYWQ/OiBib29sZWFuO1xuICAgIHJlYWRFbmNyeXB0ZWQ/OiBib29sZWFuO1xuICAgIHJlYWRFbmNyeXB0ZWRNSVRNPzogYm9vbGVhbjtcbiAgICB3cml0ZT86IGJvb2xlYW47XG4gICAgd3JpdGVTaWduZWQ/OiBib29sZWFuO1xuICAgIHdyaXRlU2lnbmVkTUlUTT86IGJvb2xlYW47XG4gICAgd3JpdGVFbmNyeXB0ZWRNSVRNPzogYm9vbGVhbjtcbiAgICByZWFkRW5jcnlwdGlvblJlcXVpcmVkPzogYm9vbGVhbjtcbiAgICB3cml0ZUVuY3J5cHRpb25SZXF1aXJlZD86IGJvb2xlYW47XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVzY3JpcHRvciB7XG4gIHV1aWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2UgZXh0ZW5kcyBEZXZpY2VJbmZvIHtcbiAgLyoqIERldmljZSdzIHNlcnZpY2VzICovXG4gIHNlcnZpY2VzOiBTZXJ2aWNlW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VydmljZXMgZXh0ZW5kcyBEZXZpY2VJbmZvIHtcbiAgLyoqIEFycmF5IG9mIHNlcnZpY2UgVVVJRFMgKi9cbiAgc2VydmljZXM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlc2NyaXB0b3JzIGV4dGVuZHMgRGV2aWNlSW5mbyB7XG4gIC8qKiBDaGFyYWN0ZXJpc3RpYydzIFVVSUQgKi9cbiAgY2hhcmFjdGVyaXN0aWM6IHN0cmluZztcbiAgLyoqIFNlcnZpY2UncyBVVUlEICovXG4gIHNlcnZpY2U6IHN0cmluZztcbiAgLyogQXJyYXkgb2YgZGVzY3JpcHRvciBVVUlEcyAqL1xuICBkZXNjcmlwdG9yczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3BlcmF0aW9uUmVzdWx0IGV4dGVuZHMgRGV2aWNlSW5mbyB7XG4gIC8qKiBDaGFyYWN0ZXJpc3RpYyBVVUlEICovXG4gIGNoYXJhY3RlcmlzdGljOiBzdHJpbmc7XG4gIC8qKiBTZXJ2aWNlJ3MgVVVJRCAqL1xuICBzZXJ2aWNlOiBzdHJpbmc7XG4gIC8qKiBCYXNlNjQgZW5jb2RlZCBzdHJpbmcgb2YgYnl0ZXMgKi9cbiAgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVbnN1YnNjcmliZVJlc3VsdCBleHRlbmRzIERldmljZUluZm8ge1xuICAvKiogQ2hhcmFjdGVyaXN0aWMgVVVJRCAqL1xuICBjaGFyYWN0ZXJpc3RpYzogc3RyaW5nO1xuICAvKiogU2VydmljZSdzIFVVSUQgKi9cbiAgc2VydmljZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlc2NyaXB0b3JSZXN1bHQgZXh0ZW5kcyBPcGVyYXRpb25SZXN1bHQge1xuICBkZXNjcmlwdG9yOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhcmFjdGVyaXN0aWNzIGV4dGVuZHMgRGV2aWNlSW5mbyB7XG4gIC8qKiBTZXJ2aWNlJ3MgaWQgKi9cbiAgc2VydmljZTogc3RyaW5nO1xuICAvKiBBcnJheSBvZiBjaGFyYWN0ZXJpc3RpYyBvYmplY3RzKi9cbiAgY2hhcmFjdGVyaXN0aWNzOiBDaGFyYWN0ZXJpc3RpY1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEluaXRpYWxpemVSZXN1bHQge1xuICAvKiogRGV2aWNlJ3Mgc3RhdHVzICovXG4gIHN0YXR1czogU3RhdHVzO1xuICAvKiogVGhlIGFkZHJlc3MvaWRlbnRpZmllciBwcm92aWRlZCBieSB0aGUgc2NhbidzIHJldHVybiBvYmplY3QgKi9cbiAgYWRkcmVzczogc3RyaW5nO1xuICAvKiogU2VydmljZSdzIFVVSUQgKi9cbiAgc2VydmljZTogc3RyaW5nO1xuICAvKiogQ2hhcmFjdGVyaXN0aWMgVVVJRCAqL1xuICBjaGFyYWN0ZXJpc3RpYzogc3RyaW5nO1xuICAvKiogVGhpcyBpbnRlZ2VyIHZhbHVlIHdpbGwgYmUgaW5jcmVtZW50ZWQgZXZlcnkgcmVhZC93cml0ZVJlcXVlc3RlZCAqL1xuICByZXF1ZXN0SWQ6IG51bWJlcjtcbiAgLyoqIE9mZnNldCB2YWx1ZSAqL1xuICBvZmZzZXQ6IG51bWJlcjtcbiAgLyoqIG10dSB2YWx1ZSAqL1xuICBtdHU6IG51bWJlcjtcbiAgLyoqIEJhc2U2NCBlbmNvZGVkIHN0cmluZyBvZiBieXRlcyAqL1xuICB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZW51bSBCbHVldG9vdGhTY2FuTW9kZSB7XG4gIFNDQU5fTU9ERV9PUFBPUlRVTklTVElDID0gLTEsXG4gIFNDQU5fTU9ERV9MT1dfUE9XRVIgPSAwLFxuICBTQ0FOX01PREVfQkFMQU5DRUQgPSAxLFxuICBTQ0FOX01PREVfTE9XX0xBVEVOQ1kgPSAyLFxufVxuXG5leHBvcnQgZW51bSBCbHVldG9vdGhNYXRjaE1vZGUge1xuICBNQVRDSF9NT0RFX0FHUkVTU0lWRSA9IDEsXG4gIE1BVENIX01PREVfU1RJQ0tZID0gMixcbn1cblxuZXhwb3J0IGVudW0gQmx1ZXRvb3RoTWF0Y2hOdW0ge1xuICBNQVRDSF9OVU1fT05FX0FEVkVSVElTRU1FTlQgPSAxLFxuICBNQVRDSF9OVU1fRkVXX0FEVkVSVElTRU1FTlQgPSAyLFxuICBNQVRDSF9OVU1fTUFYX0FEVkVSVElTRU1FTlQgPSAzLFxufVxuXG5leHBvcnQgZW51bSBCbHVldG9vdGhDYWxsYmFja1R5cGUge1xuICBDQUxMQkFDS19UWVBFX0FMTF9NQVRDSEVTID0gMSxcbiAgQ0FMTEJBQ0tfVFlQRV9GSVJTVF9NQVRDSCA9IDIsXG4gIENBTExCQUNLX1RZUEVfTUFUQ0hfTE9TVCA9IDQsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXJyb3Ige1xuICBjb2RlOiBudW1iZXI7XG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZGFwdGVySW5mbyB7XG4gIG5hbWU6IHN0cmluZztcbiAgYWRkcmVzczogc3RyaW5nO1xuICBpc0luaXRpYWxpemVkOiBib29sZWFuO1xuICBpc0VuYWJsZWQ6IGJvb2xlYW47XG4gIGlzU2Nhbm5pbmc6IGJvb2xlYW47XG4gIGlzRGlzY292ZXJhYmxlOiBib29sZWFuO1xufVxuXG4vKipcbiAqIEBuYW1lIEJsdWV0b290aExFXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGhhcyB0aGUgbW9zdCBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBmb3IgaW50ZXJhY3Rpbmcgd2l0aCBCbHVldG9vdGggTEUgZGV2aWNlcyBvbiBBbmRyb2lkLCBpT1MgYW5kIHBhcnRpYWxseSBXaW5kb3dzLlxuICogSXQncyBhIHdyYXAgYXJvdW5kIFtyYW5kZHVzaW5nL2NvcmRvdmEtcGx1Z2luLWJsdWV0b290aGxlXShodHRwczovL2dpdGh1Yi5jb20vcmFuZGR1c2luZy9jb3Jkb3ZhLXBsdWdpbi1ibHVldG9vdGhsZS9ibG9iL21hc3Rlci9yZWFkbWUubWQpIGNvcmRvdmEgcGx1Z2luIGZvciBJb25pYy5cbiAqIEl0IHN1cHBvcnRzIHBlcmlwaGVyYWwgKiphbmQqKiBjZW50cmFsIG1vZGVzIGFuZCBjb3ZlcnMgbW9zdCBvZiB0aGUgQVBJIG1ldGhvZHMgYXZhaWxhYmxlIG9uIEFuZHJvaWQgYW5kIGlPUy5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEJsdWV0b290aExFIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9ibHVldG9vdGgtbGUvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHVibGljIGJsdWV0b290aGxlOiBCbHVldG9vdGhMRSwgcHVibGljIHBsdDogUGxhdGZvcm0pIHtcbiAqXG4gKiAgdGhpcy5wbHQucmVhZHkoKS50aGVuKChyZWFkeVNvdXJjZSkgPT4ge1xuICpcbiAqICAgIGNvbnNvbGUubG9nKCdQbGF0Zm9ybSByZWFkeSBmcm9tJywgcmVhZHlTb3VyY2UpO1xuICpcbiAqICAgIHRoaXMuYmx1ZXRvb3RobGUuaW5pdGlhbGl6ZSgpLnRoZW4oYmxlID0+IHtcbiAqICAgICAgY29uc29sZS5sb2coJ2JsZScsIGJsZS5zdGF0dXMpIC8vIGxvZ3MgJ2VuYWJsZWQnXG4gKiAgICB9KTtcbiAqXG4gKiAgIH0pO1xuICogfVxuICpcbiAqIGBgYFxuICpcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdCbHVldG9vdGhMRScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWJsdWV0b290aGxlJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG4gIHBsdWdpblJlZjogJ2JsdWV0b290aGxlJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3JhbmRkdXNpbmcvY29yZG92YS1wbHVnaW4tYmx1ZXRvb3RobGUnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tYmx1ZXRvb3RobGUnLCAvLyBPUFRJT05BTCBpbnN0YWxsIGNvbW1hbmQsIGluIGNhc2UgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbiAgaW5zdGFsbFZhcmlhYmxlczogW10sIC8vIE9QVElPTkFMIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLCAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmx1ZXRvb3RoTEUgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBAbmFtZSBpbml0aWFsaXplXG4gICAqIEluaXRpYWxpemUgQmx1ZXRvb3RoIG9uIHRoZSBkZXZpY2VcbiAgICogQHBhcmFtIHtJbml0UGFyYW1zfSBbcGFyYW1zXVxuICAgKiBAcmV0dXJucyB7KE9ic2VydmFibGU8eyBzdGF0dXM6ICdlbmFibGVkJyB8ICdkaXNhYmxlZCd9Pil9IFRoZSBjYWxsYmFjayB0aGF0IGlzIHBhc3NlZCBpbml0aWFsaXplIHN0YXR1cyAoZW5hYmxlZC9kaXNhYmxlZClcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3VjY2Vzc0luZGV4OiAwLCBlcnJvckluZGV4OiAyLCBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIGluaXRpYWxpemUocGFyYW1zPzogSW5pdFBhcmFtcyk6IE9ic2VydmFibGU8eyBzdGF0dXM6ICdlbmFibGVkJyB8ICdkaXNhYmxlZCcgfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBlbmFibGUgKEFuZHJvaWQpXG4gICAqIEVuYWJsZSBCbHVldG9vdGggb24gdGhlIGRldmljZS4gQW5kcm9pZCBzdXBwb3J0IG9ubHlcbiAgICogQHJldHVybnMgdm9pZFxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsIHN5bmM6IHRydWUgfSlcbiAgZW5hYmxlKCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBkaXNhYmxlIChBbmRyb2lkKVxuICAgKiBEaXNhYmxlIEJsdWV0b290aCBvbiB0aGUgZGV2aWNlLiBBbmRyb2lkIHN1cHBvcnQgb25seVxuICAgKiBAcmV0dXJucyB2b2lkXG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJywgc3luYzogdHJ1ZSB9KVxuICBkaXNhYmxlKCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBnZXRBZGFwdGVySW5mbyAoQW5kcm9pZClcbiAgICogUmV0cmlldmUgdXNlZnVsIGluZm9ybWF0aW9uIHN1Y2ggYXMgdGhlIGFkZHJlc3MsIG5hbWUsIGFuZCB2YXJpb3VzIHN0YXRlcyAoaW5pdGlhbGl6ZWQsIGVuYWJsZWQsIHNjYW5uaW5nLCBkaXNjb3ZlcmFibGUpLlxuICAgKiBUaGlzIGNhbiBiZSB2ZXJ5IHVzZWZ1bCB3aGVuIHRoZSBnZW5lcmFsIHN0YXRlIG9mIHRoZSBhZGFwdGVyIGhhcyBiZWVuIGxvc3QsIGFuZCB3ZSB3b3VsZCBvdGhlcndpc2UgbmVlZCB0byBnbyB0aHJvdWdoIGEgc2VyaWVzIG9mIGNhbGxiYWNrcyB0byBnZXQgdGhlIGNvcnJlY3Qgc3RhdGUgKGZpcnN0IGluaXRpYWxpemVkLCB0aGVuIGVuYWJsZWQsIHRoZW4gaXNTY2FubmluZywgYW5kIHNvIGZvcnRoKS5cbiAgICogVGhlIHJlc3VsdCBvZiB0aGlzIG1ldGhvZCBhbGxvd3MgdXMgdG8gdGFrZSBidXNpbmVzcyBsb2dpYyBkZWNpc2lvbnMgd2hpbGUgYXZvaWRpbmcgYSBsYXJnZSBwYXJ0IG9mIHRoZSBjYWxsYmFjayBoZWxsLlxuICAgKiBDdXJyZW50bHkgdGhlIGRpc2NvdmVyYWJsZSBzdGF0ZSBkb2VzIG5vdCBoYXZlIGFueSByZWxldmFuY2UgYmVjYXVzZSB0aGVyZSBpcyBubyBcInNldERpc2NvdmVyYWJsZVwiIGZ1bmN0aW9uYWxpdHkgaW4gcGxhY2UuIFRoYXQgbWF5IGNoYW5nZSBpbiB0aGUgZnV0dXJlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBZGFwdGVySW5mbz59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICBnZXRBZGFwdGVySW5mbygpOiBQcm9taXNlPEFkYXB0ZXJJbmZvPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHN0YXJ0U2NhblxuICAgKiBTY2FuIGZvciBCbHVldG9vdGggTEUgZGV2aWNlcy5cbiAgICogU2luY2Ugc2Nhbm5pbmcgaXMgZXhwZW5zaXZlLCBzdG9wIGFzIHNvb24gYXMgcG9zc2libGUuIFRoZSBDb3Jkb3ZhIGFwcCBzaG91bGQgdXNlIGEgdGltZXIgdG8gbGltaXQgdGhlIHNjYW4gaW50ZXJ2YWwuXG4gICAqIEFuZHJvaWQgQVBJID49IDIzIHJlcXVpcmVzIEFDQ0VTU19DT0FSU0VfTE9DQVRJT04gcGVybWlzc2lvbnMgdG8gZmluZCB1bnBhaXJlZCBkZXZpY2VzLlxuICAgKiBQZXJtaXNzaW9ucyBjYW4gYmUgcmVxdWVzdGVkIGJ5IHVzaW5nIHRoZSBoYXNQZXJtaXNzaW9uIGFuZCByZXF1ZXN0UGVybWlzc2lvbiBmdW5jdGlvbnMuXG4gICAqIEFuZHJvaWQgQVBJID49IDIzIGFsc28gcmVxdWlyZXMgbG9jYXRpb24gc2VydmljZXMgdG8gYmUgZW5hYmxlZC4gVXNlIGlzTG9jYXRpb25FbmFibGVkIHRvIGRldGVybWluZSB3aGV0aGVyIGxvY2F0aW9uIHNlcnZpY2VzIGFyZSBlbmFibGVkLlxuICAgKiBJZiBub3QgZW5hYmxlZCwgdXNlIHJlcXVlc3RMb2NhdGlvbiB0byBwcm9tcHQgdGhlIGxvY2F0aW9uIHNlcnZpY2VzIHNldHRpbmdzIHBhZ2UuXG4gICAqIEBwYXJhbSB7U2NhblBhcmFtc30gcGFyYW1zIFNjYW4gcGFyYW1zXG4gICAqIEByZXR1cm5zIHsoT2JzZXJ2YWJsZTwgU2NhblN0YXR1cyA+KX1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLCBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIHN0YXJ0U2NhbihwYXJhbXM6IFNjYW5QYXJhbXMpOiBPYnNlcnZhYmxlPFNjYW5TdGF0dXM+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc3RvcFNjYW5cbiAgICogU3RvcCBzY2FuIGZvciBCbHVldG9vdGggTEUgZGV2aWNlcy4gU2luY2Ugc2Nhbm5pbmcgaXMgZXhwZW5zaXZlLCBzdG9wIGFzIHNvb24gYXMgcG9zc2libGVcbiAgICogVGhlIGFwcCBzaG91bGQgdXNlIGEgdGltZXIgdG8gbGltaXQgdGhlIHNjYW5uaW5nIHRpbWUuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHtzdGF0dXM6ICdzY2FuU3RvcHBlZCd9Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIHN0b3BTY2FuKCk6IFByb21pc2U8eyBzdGF0dXM6ICdzY2FuU3RvcHBlZCcgfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSByZXRyaWV2ZUNvbm5lY3RlZFxuICAgKiBSZXRyaWV2ZWQgcGFpcmVkIEJsdWV0b290aCBMRSBkZXZpY2VzLiBJbiBpT1MsIGRldmljZXMgdGhhdCBhcmUgXCJwYWlyZWRcIiB0byB3aWxsIG5vdCByZXR1cm4gZHVyaW5nIGEgbm9ybWFsIHNjYW4uXG4gICAqIENhbGxiYWNrIGlzIFwiaW5zdGFudFwiIGNvbXBhcmVkIHRvIGEgc2Nhbi5cbiAgICogQHBhcmFtIHt7IHNlcnZpY2VzOiBzdHJpbmdbXSB9fSBBbiBhcnJheSBvZiBzZXJ2aWNlIElEcyB0byBmaWx0ZXIgdGhlIHJldHJpZXZhbCBieS4gSWYgbm8gc2VydmljZSBJRHMgYXJlIHNwZWNpZmllZCwgbm8gZGV2aWNlcyB3aWxsIGJlIHJldHVybmVkLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7IGRldmljZXM6IERldmljZUluZm9bXSB9Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIHJldHJpZXZlQ29ubmVjdGVkKHBhcmFtcz86IHsgc2VydmljZXM/OiBzdHJpbmdbXSB9KTogUHJvbWlzZTx7IGRldmljZXM6IERldmljZUluZm9bXSB9PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGJvbmQgKEFuZHJvaWQpXG4gICAqIEJvbmQgd2l0aCBhIGRldmljZS5cbiAgICogVGhlIGRldmljZSBkb2Vzbid0IG5lZWQgdG8gYmUgY29ubmVjdGVkIHRvIGluaXRpYXRlIGJvbmRpbmcuIEFuZHJvaWQgc3VwcG9ydCBvbmx5LlxuICAgKiBAcGFyYW0ge3sgYWRkcmVzczogc3RyaW5nIH19IHBhcmFtcyBUaGUgYWRkcmVzcy9pZGVudGlmaWVyIHByb3ZpZGVkIGJ5IHRoZSBzY2FuJ3MgcmV0dXJuIG9iamVjdFxuICAgKiBAcmV0dXJucyB7KE9ic2VydmFibGU8eyBzdGF0dXM6IERldmljZUluZm8gfT4pfVxuICAgKiBzdWNjZXNzOlxuICAgKiAgICBUaGUgZmlyc3Qgc3VjY2VzcyBjYWxsYmFjayBzaG91bGQgYWx3YXlzIHJldHVybiB3aXRoIHN0YXR1cyA9PSBib25kaW5nLlxuICAgKiAgICBJZiB0aGUgYm9uZCBpcyBjcmVhdGVkLCB0aGUgY2FsbGJhY2sgd2lsbCByZXR1cm4gYWdhaW4gd2l0aCBzdGF0dXMgPT0gYm9uZGVkLlxuICAgKiAgICBJZiB0aGUgYm9uZGluZyBwb3B1cCBpcyBjYW5jZWxlZCBvciB0aGUgd3JvbmcgY29kZSBpcyBlbnRlcmVkLCB0aGUgY2FsbGJhY2sgd2lsbCByZXR1cm4gYWdhaW4gd2l0aCBzdGF0dXMgPT0gdW5ib25kZWQuXG4gICAqIGVycm9yOlxuICAgKiAgICBUaGUgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSBib25kIG9wZXJhdGlvbiBmYWlsc1xuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsIG9ic2VydmFibGU6IHRydWUgfSlcbiAgYm9uZChwYXJhbXM6IHsgYWRkcmVzczogc3RyaW5nIH0pOiBPYnNlcnZhYmxlPHsgc3RhdHVzOiBEZXZpY2VJbmZvIH0+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgdW5ib25kIChBbmRyb2lkKVxuICAgKiBVbmJvbmQgd2l0aCBhIGRldmljZS4gVGhlIGRldmljZSBkb2Vzbid0IG5lZWQgdG8gYmUgY29ubmVjdGVkIHRvIGluaXRpYXRlIGJvbmRpbmcuIEFuZHJvaWQgc3VwcG9ydCBvbmx5LlxuICAgKiBAcGFyYW0ge3thZGRyZXNzOiBzdHJpbmd9fSBwYXJhbXMgVGhlIGFkZHJlc3MvaWRlbnRpZmllclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7IHN0YXR1czogRGV2aWNlSW5mbyB9Pn1cbiAgICogICAgc3VjY2VzczogVGhlIHN1Y2Nlc3MgY2FsbGJhY2sgc2hvdWxkIGFsd2F5cyByZXR1cm4gd2l0aCBzdGF0dXMgPT0gdW5ib25kZWQsIHRoYXQgaXMgcGFzc2VkIHdpdGggZGV2aWNlIG9iamVjdFxuICAgKiAgICBlcnJvcjogVGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgdW5ib25kIG9wZXJhdGlvbiBmYWlsc1xuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgdW5ib25kKHBhcmFtczogeyBhZGRyZXNzOiBzdHJpbmcgfSk6IFByb21pc2U8eyBzdGF0dXM6IERldmljZUluZm8gfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBjb25uZWN0XG4gICAqIENvbm5lY3QgdG8gYSBCbHVldG9vdGggTEUgZGV2aWNlXG4gICAqIEBwYXJhbSBjb25uZWN0U3VjY2VzcyBUaGUgc3VjY2VzcyBjYWxsYmFjayB0aGF0IGlzIHBhc3NlZCB3aXRoIGRldmljZSBvYmplY3RcbiAgICogQHBhcmFtIGNvbm5lY3RFcnJvciAgIFRoZSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbm5lY3Qgb3BlcmF0aW9uIGZhaWxzXG4gICAqIEBwYXJhbSBwYXJhbXMgICAgICAgICBUaGUgYWRkcmVzcy9pZGVudGlmaWVyXG4gICAqXG4gICAqIEBwYXJhbSB7e2FkZHJlc3M6IHN0cmluZywgYXV0b0Nvbm5lY3Q6IGJvb2xlYW59fSBwYXJhbXNcbiAgICogQHJldHVybnMgeyhPYnNlcnZhYmxlPHsgc3RhdHVzOiBEZXZpY2VJbmZvIH0+KX1cbiAgICogICAgc3VjY2VzczogZGV2aWNlIG9iamVjdCB3aXRoIHN0YXR1c1xuICAgKiAgICBlcnJvcjogVGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgdW5ib25kIG9wZXJhdGlvbiBmYWlsc1xuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsIG9ic2VydmFibGU6IHRydWUgfSlcbiAgY29ubmVjdChwYXJhbXM6IHsgYWRkcmVzczogc3RyaW5nOyBhdXRvQ29ubmVjdD86IGJvb2xlYW4gfSk6IE9ic2VydmFibGU8RGV2aWNlSW5mbz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSByZWNvbm5lY3RcbiAgICogUmVjb25uZWN0IHRvIGEgcHJldmlvdXNseSBjb25uZWN0ZWQgQmx1ZXRvb3RoIGRldmljZVxuICAgKiBAcGFyYW0ge3thZGRyZXNzOiBzdHJpbmd9fSBwYXJhbXMgVGhlIGFkZHJlc3MvaWRlbnRpZmllclxuICAgKiBAcmV0dXJucyB7KE9ic2VydmFibGU8RGV2aWNlSW5mbz4pfVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsIG9ic2VydmFibGU6IHRydWUgfSlcbiAgcmVjb25uZWN0KHBhcmFtczogeyBhZGRyZXNzOiBzdHJpbmcgfSk6IE9ic2VydmFibGU8RGV2aWNlSW5mbz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBkaXNjb25uZWN0XG4gICAqIERpc2Nvbm5lY3QgZnJvbSBhIEJsdWV0b290aCBMRSBkZXZpY2UuXG4gICAqICAgICAgICAgICAgICBOb3RlOiBJdCdzIHNpbXBsZXIgdG8ganVzdCBjYWxsIGNsb3NlKCkuIFN0YXJ0aW5nIHdpdGggaU9TIDEwLCBkaXNjb25uZWN0aW5nIGJlZm9yZSBjbG9zaW5nIHNlZW1zIHJlcXVpcmVkIVxuICAgKiBAcGFyYW0ge3thZGRyZXNzOiBzdHJpbmd9fSBwYXJhbXMgVGhlIGFkZHJlc3MvaWRlbnRpZmllclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxEZXZpY2VJbmZvPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIGRpc2Nvbm5lY3QocGFyYW1zOiB7IGFkZHJlc3M6IHN0cmluZyB9KTogUHJvbWlzZTxEZXZpY2VJbmZvPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGNsb3NlXG4gICAqIENsb3NlL2Rpc3Bvc2UgYSBCbHVldG9vdGggTEUgZGV2aWNlLlxuICAgKiBQcmlvciB0byAyLjcuMCwgeW91IG5lZWRlZCB0byBkaXNjb25uZWN0IHRvIHRoZSBkZXZpY2UgYmVmb3JlIGNsb3NpbmcsIGJ1dCB0aGlzIGlzIG5vIGxvbmdlciB0aGUgY2FzZS5cbiAgICogU3RhcnRpbmcgd2l0aCBpT1MgMTAsIGRpc2Nvbm5lY3RpbmcgYmVmb3JlIGNsb3Npbmcgc2VlbXMgcmVxdWlyZWQhXG4gICAqIEBwYXJhbSB7eyBhZGRyZXNzOiBzdHJpbmcgfX0gcGFyYW1zIFRoZSBhZGRyZXNzL2lkZW50aWZpZXJcbiAgICogQHJldHVybnMge1Byb21pc2U8RGV2aWNlSW5mbz59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICBjbG9zZShwYXJhbXM6IHsgYWRkcmVzczogc3RyaW5nIH0pOiBQcm9taXNlPERldmljZUluZm8+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgZGlzY292ZXJcbiAgICogRGlzY292ZXIgYWxsIHRoZSBkZXZpY2VzIHNlcnZpY2VzLCBjaGFyYWN0ZXJpc3RpY3MgYW5kIGRlc2NyaXB0b3JzLlxuICAgKiBEb2Vzbid0IG5lZWQgdG8gYmUgY2FsbGVkIGFnYWluIGFmdGVyIGRpc2Nvbm5lY3RpbmcgYW5kIHRoZW4gcmVjb25uZWN0aW5nLlxuICAgKiBJZiB1c2luZyBpT1MsIHlvdSBzaG91bGRuJ3QgdXNlIGRpc2NvdmVyIGFuZCBzZXJ2aWNlcy9jaGFyYWN0ZXJpc3RpY3MvZGVzY3JpcHRvcnMgb24gdGhlIHNhbWUgZGV2aWNlLlxuICAgKiBUaGVyZSBzZWVtcyB0byBiZSBhbiBpc3N1ZSB3aXRoIGNhbGxpbmcgZGlzY292ZXIgb24gaU9TOCBkZXZpY2VzLCBzbyB1c2Ugd2l0aCBjYXV0aW9uLlxuICAgKiBPbiBzb21lIEFuZHJvaWQgdmVyc2lvbnMsIHRoZSBkaXNjb3ZlcmVkIHNlcnZpY2VzIG1heSBiZSBjYWNoZWQgZm9yIGEgZGV2aWNlLlxuICAgKiBTdWJzZXF1ZW50IGRpc2NvdmVyIGV2ZW50cyB3aWxsIG1ha2UgdXNlIG9mIHRoaXMgY2FjaGUuXG4gICAqIElmIHlvdXIgZGV2aWNlJ3Mgc2VydmljZXMgY2hhbmdlLCBzZXQgdGhlIGNsZWFyQ2FjaGUgcGFyYW1ldGVyIHRvIGZvcmNlIEFuZHJvaWQgdG8gcmUtZGlzY292ZXIgc2VydmljZXMuXG4gICAqIEBwYXJhbSB7eyBhZGRyZXNzOiBzdHJpbmcsIGNsZWFyQ2FjaGU6IGJvb2xlYW4gfX0gcGFyYW1zIFRoZSBhZGRyZXNzL2lkZW50aWZpZXJcbiAgICogQHJldHVybnMge1Byb21pc2U8RGV2aWNlPn1cbiAgICogICAgc3VjY2VzczogZGV2aWNlIG9iamVjdCAoY29udGFpbnMgYXJyYXkgb2Ygc2VydmljZSBvYmplY3RzKVxuICAgKiAgICBlcnJvcjogVGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgdW5ib25kIG9wZXJhdGlvbiBmYWlsc1xuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgZGlzY292ZXIocGFyYW1zOiB7IGFkZHJlc3M6IHN0cmluZzsgY2xlYXJDYWNoZT86IGJvb2xlYW4gfSk6IFByb21pc2U8RGV2aWNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHNlcnZpY2VzIChpT1MpXG4gICAqIERpc2NvdmVyIHRoZSBkZXZpY2UncyBzZXJ2aWNlcy5cbiAgICogTm90IHByb3ZpZGluZyBhbiBhcnJheSBvZiBzZXJ2aWNlcyB3aWxsIHJldHVybiBhbGwgc2VydmljZXMgYW5kIHRha2UgbG9uZ2VyIHRvIGRpc2NvdmVyLiBpT1Mgc3VwcG9ydCBvbmx5LlxuICAgKiBAcGFyYW0ge3thZGRyZXNzOiBzdHJpbmcsIHNlcnZpY2VzOiBzdHJpbmdbXX19IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxTZXJ2aWNlcz59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICBzZXJ2aWNlcyhwYXJhbXM6IHsgYWRkcmVzczogc3RyaW5nOyBzZXJ2aWNlcz86IHN0cmluZ1tdIH0pOiBQcm9taXNlPFNlcnZpY2VzPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGNoYXJhY3RlcmlzdGljcyAoaU9TKVxuICAgKiBEaXNjb3ZlciB0aGUgc2VydmljZSdzIGNoYXJhY3RlcmlzdGljcy5cbiAgICogTm90IHByb3ZpZGluZyBhbiBhcnJheSBvZiBjaGFyYWN0ZXJpc3RpY3Mgd2lsbCByZXR1cm4gYWxsIGNoYXJhY3RlcmlzdGljcyBhbmQgdGFrZSBsb25nZXIgdG8gZGlzY292ZXIuIGlPUyBzdXBwb3J0IG9ubHkuXG4gICAqIEBwYXJhbSB7Q2hhcmFjdGVyaXN0aWNQYXJhbXN9IHBhcmFtcyBDaGFyYWN0ZXJpc3RpYyBwYXJhbXNcbiAgICogQHJldHVybnMge1Byb21pc2U8eyBjaGFyYWN0ZXJpc3RpY3M6IENoYXJhY3RlcmlzdGljcyB9Pn0gVGhlIHNlcnZpY2UgaWQgYW5kIGFuIEFycmF5IG9mIGNoYXJhY3RlcmlzdGljc1xuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgY2hhcmFjdGVyaXN0aWNzKHBhcmFtczogQ2hhcmFjdGVyaXN0aWNQYXJhbXMpOiBQcm9taXNlPHsgY2hhcmFjdGVyaXN0aWNzOiBDaGFyYWN0ZXJpc3RpY3MgfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBkZXNjcmlwdG9ycyAoaU9TKVxuICAgKiBEaXNjb3ZlciB0aGUgY2hhcmFjdGVyaXN0aWMncyBkZXNjcmlwdG9ycy4gaU9TIHN1cHBvcnQgb25seS5cbiAgICogQHBhcmFtIHtEZXNjcmlwdG9yUGFyYW1zfSBwYXJhbXNcbiAgICogQHJldHVybnMge1Byb21pc2U8eyBkZXNjcmlwdG9yczogRGVzY3JpcHRvcnMgfT59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICBkZXNjcmlwdG9ycyhwYXJhbXM6IERlc2NyaXB0b3JQYXJhbXMpOiBQcm9taXNlPHsgZGVzY3JpcHRvcnM6IERlc2NyaXB0b3JzIH0+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgcmVhZFxuICAgKiBSZWFkIGEgcGFydGljdWxhciBzZXJ2aWNlJ3MgY2hhcmFjdGVyaXN0aWMgb25jZVxuICAgKiBAcGFyYW0ge0Rlc2NyaXB0b3JQYXJhbXN9IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxPcGVyYXRpb25SZXN1bHQ+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgcmVhZChwYXJhbXM6IERlc2NyaXB0b3JQYXJhbXMpOiBQcm9taXNlPE9wZXJhdGlvblJlc3VsdD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzdWJzY3JpYmVcbiAgICogU3Vic2NyaWJlIHRvIGEgcGFydGljdWxhciBzZXJ2aWNlJ3MgY2hhcmFjdGVyaXN0aWMuXG4gICAqIE9uY2UgYSBzdWJzY3JpcHRpb24gaXMgbm8gbG9uZ2VyIG5lZWRlZCwgZXhlY3V0ZSB1bnN1YnNjcmliZSBpbiBhIHNpbWlsYXIgZmFzaGlvbi5cbiAgICogVGhlIENsaWVudCBDb25maWd1cmF0aW9uIGRlc2NyaXB0b3Igd2lsbCBhdXRvbWF0aWNhbGx5IGJlIHdyaXR0ZW4gdG8gZW5hYmxlIG5vdGlmaWNhdGlvbi9pbmRpY2F0aW9uIGJhc2VkIG9uIHRoZSBjaGFyYWN0ZXJpc3RpYydzIHByb3BlcnRpZXMuXG4gICAqIEBwYXJhbSB7RGVzY3JpcHRvclBhcmFtc30gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPE9wZXJhdGlvblJlc3VsdD59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJywgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICBzdWJzY3JpYmUocGFyYW1zOiBEZXNjcmlwdG9yUGFyYW1zKTogT2JzZXJ2YWJsZTxPcGVyYXRpb25SZXN1bHQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgdW5zdWJzY3JpYmVcbiAgICogVW5zdWJzY3JpYmUgdG8gYSBwYXJ0aWN1bGFyIHNlcnZpY2UncyBjaGFyYWN0ZXJpc3RpYy5cbiAgICogQHBhcmFtIHtEZXNjcmlwdG9yUGFyYW1zfSBwYXJhbXNcbiAgICogQHJldHVybnMge1Byb21pc2U8VW5zdWJzY3JpYmVSZXN1bHQ+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgdW5zdWJzY3JpYmUocGFyYW1zOiBEZXNjcmlwdG9yUGFyYW1zKTogUHJvbWlzZTxVbnN1YnNjcmliZVJlc3VsdD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSB3cml0ZSAobGltaXRhdGlvbiBvbiBpT1MsIHJlYWQgYmVsb3cpXG4gICAqIFdyaXRlIGEgcGFydGljdWxhciBzZXJ2aWNlJ3MgY2hhcmFjdGVyaXN0aWNcbiAgICogTm90ZTogbm8gY2FsbGJhY2sgd2lsbCBvY2N1ciBvbiB3cml0ZSB3aXRob3V0IHJlc3BvbnNlIG9uIGlPUy5cbiAgICogQHBhcmFtIHtXcml0ZUNoYXJhY3RlcmlzdGljUGFyYW1zfSBwYXJhbXNcbiAgICogQHJldHVybnMge1Byb21pc2U8T3BlcmF0aW9uUmVzdWx0Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIHdyaXRlKHBhcmFtczogV3JpdGVDaGFyYWN0ZXJpc3RpY1BhcmFtcyk6IFByb21pc2U8T3BlcmF0aW9uUmVzdWx0PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHdyaXRlIChsaW1pdGF0aW9uIG9uIGlPUywgcmVhZCBiZWxvdylcbiAgICogV3JpdGUgUXVpY2sgLyBRdWV1ZSwgdXNlIHRoaXMgbWV0aG9kIHRvIHF1aWNrbHkgZXhlY3V0ZSB3cml0ZSB3aXRob3V0IHJlc3BvbnNlIGNvbW1hbmRzIHdoZW4gd3JpdGluZyBtb3JlIHRoYW4gMjAgYnl0ZXMgYXQgYSB0aW1lLlxuICAgKiBOb3RlOiBubyBjYWxsYmFjayB3aWxsIG9jY3VyIG9uIHdyaXRlIHdpdGhvdXQgcmVzcG9uc2Ugb24gaU9TLlxuICAgKiBAcGFyYW0ge1dyaXRlQ2hhcmFjdGVyaXN0aWNQYXJhbXN9IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxPcGVyYXRpb25SZXN1bHQ+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgd3JpdGVRKHBhcmFtczogV3JpdGVDaGFyYWN0ZXJpc3RpY1BhcmFtcyk6IFByb21pc2U8T3BlcmF0aW9uUmVzdWx0PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHdyaXRlQ29tbWFuZEluQnl0ZUFycmF5IChBbmRyb2lkIE9ubHkpXG4gICAqIFdyaXRlIGhleGFkZWNpbWFsIGJ5dGUgdG8gYSBwYXJ0aWN1bGFyIHNlcnZpY2UncyBjaGFyYWN0ZXJpc3RpY1xuICAgKiBOb3RlOiBubyBjYWxsYmFjayB3aWxsIG9jY3VyIG9uIHdyaXRlIHdpdGhvdXQgcmVzcG9uc2Ugb24gaU9TLlxuICAgKiBAcGFyYW0ge1dyaXRlQ29tbWFuZEluQnl0ZUFycmF5UGFyYW1zfSBwYXJhbXNcbiAgICogQHBhcmFtIHZhbHVlIEFycmF5QnVmZmVyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPE9wZXJhdGlvblJlc3VsdD59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICB3cml0ZUNvbW1hbmRJbkJ5dGVBcnJheShwYXJhbXM6IFdyaXRlQ29tbWFuZEluQnl0ZUFycmF5UGFyYW1zLCB2YWx1ZTogQXJyYXlCdWZmZXIpOiBQcm9taXNlPE9wZXJhdGlvblJlc3VsdD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSByZWFkRGVzY3JpcHRvclxuICAgKiBSZWFkIGEgcGFydGljdWxhciBjaGFyYWN0ZXJpc3QncyBkZXNjcmlwdG9yXG4gICAqIEBwYXJhbSB7T3BlcmF0aW9uRGVzY3JpcHRvclBhcmFtc30gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPERlc2NyaXB0b3JSZXN1bHQ+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgcmVhZERlc2NyaXB0b3IocGFyYW1zOiBPcGVyYXRpb25EZXNjcmlwdG9yUGFyYW1zKTogUHJvbWlzZTxEZXNjcmlwdG9yUmVzdWx0PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHdyaXRlRGVzY3JpcHRvclxuICAgKiBXcml0ZSBhIHBhcnRpY3VsYXIgY2hhcmFjdGVyaXN0aWMncyBkZXNjcmlwdG9yLiBVbmFibGUgdG8gd3JpdGUgY2hhcmFjdGVyaXN0aWMgY29uZmlndXJhdGlvbiBkaXJlY3RseSB0byBrZWVwIGluIGxpbmUgd2l0aCBpT1MgaW1wbGVtZW50YXRpb24uXG4gICAqIEluc3RlYWQgdXNlIHN1YnNjcmliZS91bnN1YnNjcmliZSwgd2hpY2ggd2lsbCBhdXRvbWF0aWNhbGx5IGVuYWJsZS9kaXNhYmxlIG5vdGlmaWNhdGlvbi5cbiAgICogQHBhcmFtIHtXcml0ZURlc2NyaXB0b3JQYXJhbXN9IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxEZXNjcmlwdG9yUmVzdWx0Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIHdyaXRlRGVzY3JpcHRvcihwYXJhbXM6IFdyaXRlRGVzY3JpcHRvclBhcmFtcyk6IFByb21pc2U8RGVzY3JpcHRvclJlc3VsdD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSByc3NpXG4gICAqIFJlYWQgUlNTSSBvZiBhIGNvbm5lY3RlZCBkZXZpY2UuIFJTU0kgaXMgYWxzbyByZXR1cm5lZCB3aXRoIHNjYW5uaW5nLlxuICAgKiBAcGFyYW0ge3sgYWRkcmVzczogc3RyaW5nIH19IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTwgUlNTSSA+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgcnNzaShwYXJhbXM6IHsgYWRkcmVzczogc3RyaW5nIH0pOiBQcm9taXNlPFJTU0k+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgbXR1IChBbmRyb2lkLCBBbmRyb2lkIDUrKVxuICAgKiBTZXQgTVRVIG9mIGEgY29ubmVjdGVkIGRldmljZS4gQW5kcm9pZCBvbmx5LlxuICAgKiBAcGFyYW0ge3sgYWRkcmVzczogc3RyaW5nLCBtdHU6IG51bWJlciB9fSBwYXJhbXNcbiAgICogQHJldHVybnMge1Byb21pc2U8IE1UVSA+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgbXR1KHBhcmFtczogeyBhZGRyZXNzOiBzdHJpbmc7IG10dT86IG51bWJlciB9KTogUHJvbWlzZTxNVFU+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgcmVxdWVzdENvbm5lY3Rpb25Qcmlvcml0eSAoQW5kcm9pZCwgQW5kcm9pZCA1KylcbiAgICogUmVxdWVzdCBhIGNoYW5nZSBpbiB0aGUgY29ubmVjdGlvbiBwcmlvcml0eSB0byBpbXByb3ZlIHRocm91Z2hwdXQgd2hlbiB0cmFuc2ZlciBsYXJnZSBhbW91bnRzIG9mIGRhdGEgdmlhIEJMRS5cbiAgICogQW5kcm9pZCBzdXBwb3J0IG9ubHkuIGlPUyB3aWxsIHJldHVybiBlcnJvci5cbiAgICogQHBhcmFtIHt7IGFkZHJlc3M6IHN0cmluZywgY29ubmVjdGlvblByaW9yaXR5OiBDb25uZWN0aW9uUHJpb3JpdHkgfX0gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPERldmljZUluZm8+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgcmVxdWVzdENvbm5lY3Rpb25Qcmlvcml0eShwYXJhbXM6IHsgYWRkcmVzczogc3RyaW5nOyBjb25uZWN0aW9uUHJpb3JpdHk6IENvbm5lY3Rpb25Qcmlvcml0eSB9KTogUHJvbWlzZTxEZXZpY2VJbmZvPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGlzSW5pdGlhbGl6ZWRcbiAgICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGFkYXB0ZXIgaXMgaW5pdGlhbGl6ZWQuIE5vIGVycm9yIGNhbGxiYWNrLiBSZXR1cm5zIHRydWUgb3IgZmFsc2VcbiAgICogQHJldHVybnMge1Byb21pc2U8eyBpc0luaXRpYWxpemVkOiBib29sZWFuIH0+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgaXNJbml0aWFsaXplZCgpOiBQcm9taXNlPHsgaXNJbml0aWFsaXplZDogYm9vbGVhbiB9PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGlzRW5hYmxlZFxuICAgKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgYWRhcHRlciBpcyBlbmFibGVkLiBObyBlcnJvciBjYWxsYmFja1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7IGlzRW5hYmxlZDogYm9vbGVhbiB9Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIGlzRW5hYmxlZCgpOiBQcm9taXNlPHsgaXNFbmFibGVkOiBib29sZWFuIH0+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgaXNTY2FubmluZ1xuICAgKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgYWRhcHRlciBpcyBzY2FubmluZy4gTm8gZXJyb3IgY2FsbGJhY2suIFJldHVybnMgdHJ1ZSBvciBmYWxzZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7IGlzU2Nhbm5pbmc6IGJvb2xlYW4gfT59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICBpc1NjYW5uaW5nKCk6IFByb21pc2U8eyBpc1NjYW5uaW5nOiBib29sZWFuIH0+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgaXNCb25kZWQgKEFuZHJvaWQpXG4gICAqIERldGVybWluZSB3aGV0aGVyIHRoZSBkZXZpY2UgaXMgYm9uZGVkIG9yIG5vdCwgb3IgZXJyb3IgaWYgbm90IGluaXRpYWxpemVkLiBBbmRyb2lkIHN1cHBvcnQgb25seS5cbiAgICogQHBhcmFtIHt7IGFkZHJlc3M6IHN0cmluZyB9fSBwYXJhbXNcbiAgICogQHJldHVybnMge1Byb21pc2U8Qm9uZGVkU3RhdHVzPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIGlzQm9uZGVkKHBhcmFtczogeyBhZGRyZXNzOiBzdHJpbmcgfSk6IFByb21pc2U8Qm9uZGVkU3RhdHVzPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHdhc0Nvbm5lY3RlZFxuICAgKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZGV2aWNlIHdhcyBjb25uZWN0ZWQsIG9yIGVycm9yIGlmIG5vdCBpbml0aWFsaXplZC5cbiAgICogQHBhcmFtIHt7IGFkZHJlc3M6IHN0cmluZyB9fSBwYXJhbXNcbiAgICogQHJldHVybnMge1Byb21pc2U8UHJldkNvbm5lY3Rpb25TdGF0dXM+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgd2FzQ29ubmVjdGVkKHBhcmFtczogeyBhZGRyZXNzOiBzdHJpbmcgfSk6IFByb21pc2U8UHJldkNvbm5lY3Rpb25TdGF0dXM+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgaXNDb25uZWN0ZWRcbiAgICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGRldmljZSBpcyBjb25uZWN0ZWQsIG9yIGVycm9yIGlmIG5vdCBpbml0aWFsaXplZCBvciBuZXZlciBjb25uZWN0ZWQgdG8gZGV2aWNlXG4gICAqIEBwYXJhbSB7eyBhZGRyZXNzOiBzdHJpbmcgfX0gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEN1cnJDb25uZWN0aW9uU3RhdHVzPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIGlzQ29ubmVjdGVkKHBhcmFtczogeyBhZGRyZXNzOiBzdHJpbmcgfSk6IFByb21pc2U8Q3VyckNvbm5lY3Rpb25TdGF0dXM+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgaXNEaXNjb3ZlcmVkXG4gICAqIERldGVybWluZSB3aGV0aGVyIHRoZSBkZXZpY2UncyBjaGFyYWN0ZXJpc3RpY3MgYW5kIGRlc2NyaXB0b3JzIGhhdmUgYmVlbiBkaXNjb3ZlcmVkLCBvciBlcnJvciBpZiBub3QgaW5pdGlhbGl6ZWQgb3Igbm90IGNvbm5lY3RlZCB0byBkZXZpY2UuXG4gICAqIEBwYXJhbSB7eyBhZGRyZXNzOiBzdHJpbmcgfX0gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPERpc2NvdmVyU3RhdHVzPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIGlzRGlzY292ZXJlZChwYXJhbXM6IHsgYWRkcmVzczogc3RyaW5nIH0pOiBQcm9taXNlPERpc2NvdmVyU3RhdHVzPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGhhc1Blcm1pc3Npb24gKHVzZWZ1bCBvbmx5IGZvciBBbmRyb2lkIDYrIC8gQVBJIDIzKVxuICAgKiBEZXRlcm1pbmUgd2hldGhlciBjb2Fyc2UgbG9jYXRpb24gcHJpdmlsZWdlcyBhcmUgZ3JhbnRlZCBzaW5jZSBzY2FubmluZyBmb3IgdW5wYWlyZWQgZGV2aWNlcyByZXF1aXJlcyBpdCBpbiBBbmRyb2lkIEFQSSAyM1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7IGhhc1Blcm1pc3Npb246IGJvb2xlYW4gfT59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICBoYXNQZXJtaXNzaW9uKCk6IFByb21pc2U8eyBoYXNQZXJtaXNzaW9uOiBib29sZWFuIH0+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgcmVxdWVzdFBlcm1pc3Npb24gKHVzZWZ1bCBvbmx5IGZvciBBbmRyb2lkIDYrIC8gQVBJIDIzKVxuICAgKiBSZXF1ZXN0IGNvYXJzZSBsb2NhdGlvbiBwcml2aWxlZ2VzIHNpbmNlIHNjYW5uaW5nIGZvciB1bnBhaXJlZCBkZXZpY2VzIHJlcXVpcmVzIGl0IGluIEFuZHJvaWQgQVBJIDIzLlxuICAgKiBXaWxsIHJldHVybiBhbiBlcnJvciBpZiBjYWxsZWQgb24gaU9TIG9yIEFuZHJvaWQgdmVyc2lvbnMgcHJpb3IgdG8gNi4wLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7IHJlcXVlc3RQZXJtaXNzaW9uOiBib29sZWFuIH0+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgcmVxdWVzdFBlcm1pc3Npb24oKTogUHJvbWlzZTx7IHJlcXVlc3RQZXJtaXNzaW9uOiBib29sZWFuIH0+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgaXNMb2NhdGlvbkVuYWJsZWQgKHVzZWZ1bCBvbmx5IGZvciBBbmRyb2lkIDYrIC8gQVBJIDIzKVxuICAgKiBEZXRlcm1pbmUgaWYgbG9jYXRpb24gc2VydmljZXMgYXJlIGVuYWJsZWQgb3Igbm90LiBMb2NhdGlvbiBTZXJ2aWNlcyBhcmUgcmVxdWlyZWQgdG8gZmluZCBkZXZpY2VzIGluIEFuZHJvaWQgQVBJIDIzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHsgaXNMb2NhdGlvbkVuYWJsZWQ6IGJvb2xlYW4gfT59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICBpc0xvY2F0aW9uRW5hYmxlZCgpOiBQcm9taXNlPHsgaXNMb2NhdGlvbkVuYWJsZWQ6IGJvb2xlYW4gfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSByZXF1ZXN0TG9jYXRpb24gKHVzZWZ1bCBvbmx5IGZvciBBbmRyb2lkIDYrIC8gQVBJIDIzKVxuICAgKiBQcm9tcHQgbG9jYXRpb24gc2VydmljZXMgc2V0dGluZ3MgcGFnZXMuIHJlcXVlc3RMb2NhdGlvbiBwcm9wZXJ0eSByZXR1cm5zIHdoZXRoZXIgbG9jYXRpb24gc2VydmljZXMgYXJlIGVuYWJsZWQgb3IgZGlzYWJsZWQuXG4gICAqIExvY2F0aW9uIFNlcnZpY2VzIGFyZSByZXF1aXJlZCB0byBmaW5kIGRldmljZXMgaW4gQW5kcm9pZCBBUEkgMjMuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHsgcmVxdWVzdExvY2F0aW9uOiBib29sZWFuIH0+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgcmVxdWVzdExvY2F0aW9uKCk6IFByb21pc2U8eyByZXF1ZXN0TG9jYXRpb246IGJvb2xlYW4gfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBpbml0aWFsaXplUGVyaXBoZXJhbFxuICAgKiBJbml0aWFsaXplIEJsdWV0b290aCBvbiB0aGUgZGV2aWNlLiBNdXN0IGJlIGNhbGxlZCBiZWZvcmUgYW55dGhpbmcgZWxzZS5cbiAgICogQ2FsbGJhY2sgd2lsbCBjb250aW51b3VzbHkgYmUgdXNlZCB3aGVuZXZlciBCbHVldG9vdGggaXMgZW5hYmxlZCBvciBkaXNhYmxlZC5cbiAgICogQHBhcmFtIHtJbml0UGVyaXBoZXJhbFBhcmFtc30gW3BhcmFtc11cbiAgICogQHJldHVybnMge09ic2VydmFibGU8SW5pdGlhbGl6ZVJlc3VsdD59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJywgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICBpbml0aWFsaXplUGVyaXBoZXJhbChwYXJhbXM/OiBJbml0UGVyaXBoZXJhbFBhcmFtcyk6IE9ic2VydmFibGU8SW5pdGlhbGl6ZVJlc3VsdD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBhZGRTZXJ2aWNlXG4gICAqIEFkZCBhIHNlcnZpY2Ugd2l0aCBjaGFyYWN0ZXJpc3RpY3MgYW5kIGRlc2NyaXB0b3JzLiBJZiBtb3JlIHRoYW4gb25lIHNlcnZpY2UgaXMgYWRkZWQsIGFkZCB0aGVtIHNlcXVlbnRpYWxseVxuICAgKiBAcGFyYW0ge3sgc2VydmljZTogc3RyaW5nLCBjaGFyYWN0ZXJpc3RpY3M6IENoYXJhY3RlcmlzdGljW10gfX0gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHsgc2VydmljZTogc3RyaW5nLCBzdGF0dXM6IFN0YXR1cyB9Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIGFkZFNlcnZpY2UocGFyYW1zOiB7XG4gICAgc2VydmljZTogc3RyaW5nO1xuICAgIGNoYXJhY3RlcmlzdGljczogQ2hhcmFjdGVyaXN0aWNbXTtcbiAgfSk6IFByb21pc2U8eyBzZXJ2aWNlOiBzdHJpbmc7IHN0YXR1czogU3RhdHVzIH0+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgcmVtb3ZlU2VydmljZVxuICAgKiBSZW1vdmUgYSBzZXJ2aWNlXG4gICAqIEBwYXJhbSB7eyBzZXJ2aWNlOiBzdHJpbmcgfX0gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHsgc2VydmljZTogc3RyaW5nLCBzdGF0dXM6IFN0YXR1cyB9Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIHJlbW92ZVNlcnZpY2UocGFyYW1zOiB7IHNlcnZpY2U6IHN0cmluZyB9KTogUHJvbWlzZTx7IHNlcnZpY2U6IHN0cmluZzsgc3RhdHVzOiBTdGF0dXMgfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSByZW1vdmVBbGxTZXJ2aWNlc1xuICAgKiBSZW1vdmUgYWxsIHNlcnZpY2VzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHsgc3RhdHVzOiBTdGF0dXMgfT59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICByZW1vdmVBbGxTZXJ2aWNlcygpOiBQcm9taXNlPHsgc3RhdHVzOiBTdGF0dXMgfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzdGFydEFkdmVydGlzaW5nIChkaWZmZXJlbnQgYmVoYXZpb3Igb24gQW5kcm9pZC9pT1MsIHJlYWQgYmVsb3cpXG4gICAqIFN0YXJ0IGFkdmVydGlzaW5nIGFzIGEgQkxFIGRldmljZS5cbiAgICogTm90ZTogVGhpcyBuZWVkcyB0byBiZSBpbXByb3ZlZCBzbyBzZXJ2aWNlcyBjYW4gYmUgdXNlZCBmb3IgYm90aCBBbmRyb2lkIGFuZCBpT1MuXG4gICAqIE9uIGlPUywgdGhlIGFkdmVydGlzaW5nIGRldmljZXMgbGlrZXMgdG8gcmVuYW1lIGl0c2VsZiBiYWNrIHRvIHRoZSBuYW1lIG9mIHRoZSBkZXZpY2UsIGkuZS4gUmFuZCcgaVBob25lXG4gICAqIEBwYXJhbSB7QWR2ZXJ0aXNpbmdQYXJhbXN9IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7IHN0YXR1czogU3RhdHVzIH0+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgc3RhcnRBZHZlcnRpc2luZyhwYXJhbXM6IEFkdmVydGlzaW5nUGFyYW1zKTogUHJvbWlzZTx7IHN0YXR1czogU3RhdHVzIH0+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc3RvcEFkdmVydGlzaW5nXG4gICAqIFN0b3AgYWR2ZXJ0aXNpbmdcbiAgICogQHJldHVybnMge1Byb21pc2U8eyBzdGF0dXM6IFN0YXR1cyB9Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIHN0b3BBZHZlcnRpc2luZygpOiBQcm9taXNlPHsgc3RhdHVzOiBTdGF0dXMgfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBpc0FkdmVydGlzaW5nXG4gICAqIERldGVybWluZSBpZiBhcHAgaXMgYWR2ZXJ0aXNpbmcgb3Igbm90LlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7IHN0YXR1czogYm9vbGVhbiB9Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIGlzQWR2ZXJ0aXNpbmcoKTogUHJvbWlzZTx7IHN0YXR1czogYm9vbGVhbiB9PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHJlc3BvbmRcbiAgICogUmVzcG9uZCB0byBhIHJlYWQgb3Igd3JpdGUgcmVxdWVzdFxuICAgKiBAcGFyYW0ge1Jlc3BvbmRQYXJhbXN9IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7IHN0YXR1czogU3RhdHVzIH0+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgcmVzcG9uZChwYXJhbXM6IFJlc3BvbmRQYXJhbXMpOiBQcm9taXNlPHsgc3RhdHVzOiBTdGF0dXMgfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBub3RpZnlcbiAgICogVXBkYXRlIGEgdmFsdWUgZm9yIGEgc3Vic2NyaXB0aW9uLiBDdXJyZW50bHkgYWxsIHN1YnNjcmliZWQgZGV2aWNlcyB3aWxsIHJlY2VpdmUgdXBkYXRlLlxuICAgKiBEZXZpY2Ugc3BlY2lmaWMgdXBkYXRlcyB3aWxsIGJlIGFkZGVkIGluIHRoZSBmdXR1cmUuXG4gICAqIElmIHNlbnQgZXF1YWxzIGZhbHNlIGluIHRoZSByZXR1cm4gdmFsdWUsIHlvdSBtdXN0IHdhaXQgZm9yIHRoZSBwZXJpcGhlcmFsTWFuYWdlcklzUmVhZHlUb1VwZGF0ZVN1YnNjcmliZXJzIGV2ZW50IGJlZm9yZSBzZW5kaW5nIG1vcmUgdXBkYXRlcy5cbiAgICogQHBhcmFtIHtOb3RpZnlQYXJhbXN9IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7IHN0YXR1czogU3RhdHVzLCBzZW50OiBib29sZWFuIH0+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgbm90aWZ5KHBhcmFtczogTm90aWZ5UGFyYW1zKTogUHJvbWlzZTx7IHN0YXR1czogU3RhdHVzOyBzZW50OiBib29sZWFuIH0+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgZW5jb2RlZFN0cmluZ1RvQnl0ZXNcbiAgICogSGVscGVyIGZ1bmN0aW9uIHRvIGNvbnZlcnQgYSBiYXNlNjQgZW5jb2RlZCBzdHJpbmcgZnJvbSBhIGNoYXJhY3RlcmlzdGljIG9yIGRlc2NyaXB0b3IgdmFsdWUgaW50byBhIHVpbnQ4QXJyYXkgb2JqZWN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAgICogQHJldHVybnMge1VpbnQ4QXJyYXl9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZW5jb2RlZFN0cmluZ1RvQnl0ZXModmFsdWU6IHN0cmluZyk6IFVpbnQ4QXJyYXkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBieXRlc1RvRW5jb2RlZFN0cmluZ1xuICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gY29udmVydCBhIHVuaXQ4QXJyYXkgdG8gYSBiYXNlNjQgZW5jb2RlZCBzdHJpbmcgZm9yIGEgY2hhcmFjdGVyaWMgb3IgZGVzY3JpcHRvciB3cml0ZVxuICAgKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IGJ5dGVzXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgYnl0ZXNUb0VuY29kZWRTdHJpbmcodmFsdWU6IFVpbnQ4QXJyYXkpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzdHJpbmdUb0J5dGVzXG4gICAqIEhlbHBlciBmdW5jdGlvbiB0byBjb252ZXJ0IGEgc3RyaW5nIHRvIGJ5dGVzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7VWludDhBcnJheX1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzdHJpbmdUb0J5dGVzKHZhbHVlOiBzdHJpbmcpOiBVaW50OEFycmF5IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgYnl0ZXNUb1N0cmluZ1xuICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gY29udmVydCBieXRlcyB0byBhIHN0cmluZy5cbiAgICogQHBhcmFtIHtVaW50OEFycmF5fSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGJ5dGVzVG9TdHJpbmcodmFsdWU6IFVpbnQ4QXJyYXkpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBTQ0FOX01PREVfT1BQT1JUVU5JU1RJQzogbnVtYmVyO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgU0NBTl9NT0RFX0xPV19QT1dFUjogbnVtYmVyO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgU0NBTl9NT0RFX0JBTEFOQ0VEOiBudW1iZXI7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBTQ0FOX01PREVfTE9XX0xBVEVOQ1k6IG51bWJlcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIE1BVENIX01PREVfQUdHUkVTU0lWRTogbnVtYmVyO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgTUFUQ0hfTU9ERV9TVElDS1k6IG51bWJlcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIE1BVENIX05VTV9PTkVfQURWRVJUSVNFTUVOVDogbnVtYmVyO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgTUFUQ0hfTlVNX0ZFV19BRFZFUlRJU0VNRU5UOiBudW1iZXI7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBNQVRDSF9OVU1fTUFYX0FEVkVSVElTRU1FTlQ6IG51bWJlcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIENBTExCQUNLX1RZUEVfQUxMX01BVENIRVM6IG51bWJlcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIENBTExCQUNLX1RZUEVfRklSU1RfTUFUQ0g6IG51bWJlcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIENBTExCQUNLX1RZUEVfTUFUQ0hfTE9TVDogbnVtYmVyO1xufVxuIl19
