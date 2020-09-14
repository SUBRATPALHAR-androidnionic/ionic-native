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
  BluetoothLEOriginal.prototype.writeCommandInByteArray = function (params) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JsdWV0b290aC1sZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyxzRUFBdUQsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBMlZsQyxNQUFNLENBQU4sSUFBWSxpQkFLWDtBQUxELFdBQVksaUJBQWlCO0lBQzNCLGdHQUE0QixDQUFBO0lBQzVCLHVGQUF1QixDQUFBO0lBQ3ZCLHFGQUFzQixDQUFBO0lBQ3RCLDJGQUF5QixDQUFBO0FBQzNCLENBQUMsRUFMVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBSzVCO0FBRUQsTUFBTSxDQUFOLElBQVksa0JBR1g7QUFIRCxXQUFZLGtCQUFrQjtJQUM1QiwyRkFBd0IsQ0FBQTtJQUN4QixxRkFBcUIsQ0FBQTtBQUN2QixDQUFDLEVBSFcsa0JBQWtCLEtBQWxCLGtCQUFrQixRQUc3QjtBQUVELE1BQU0sQ0FBTixJQUFZLGlCQUlYO0FBSkQsV0FBWSxpQkFBaUI7SUFDM0IsdUdBQStCLENBQUE7SUFDL0IsdUdBQStCLENBQUE7SUFDL0IsdUdBQStCLENBQUE7QUFDakMsQ0FBQyxFQUpXLGlCQUFpQixLQUFqQixpQkFBaUIsUUFJNUI7QUFFRCxNQUFNLENBQU4sSUFBWSxxQkFJWDtBQUpELFdBQVkscUJBQXFCO0lBQy9CLDJHQUE2QixDQUFBO0lBQzdCLDJHQUE2QixDQUFBO0lBQzdCLHlHQUE0QixDQUFBO0FBQzlCLENBQUMsRUFKVyxxQkFBcUIsS0FBckIscUJBQXFCLFFBSWhDOztJQXNEZ0MsK0JBQWlCOzs7O0lBUWhELGdDQUFVLGFBQUMsTUFBbUI7SUFVOUIsNEJBQU07SUFVTiw2QkFBTztJQWFQLG9DQUFjO0lBZ0JkLCtCQUFTLGFBQUMsTUFBa0I7SUFXNUIsOEJBQVE7SUFZUix1Q0FBaUIsYUFBQyxNQUFnQztJQWtCbEQsMEJBQUksYUFBQyxNQUEyQjtJQWFoQyw0QkFBTSxhQUFDLE1BQTJCO0lBaUJsQyw2QkFBTyxhQUFDLE1BQWtEO0lBVzFELCtCQUFTLGFBQUMsTUFBMkI7SUFZckMsZ0NBQVUsYUFBQyxNQUEyQjtJQWF0QywyQkFBSyxhQUFDLE1BQTJCO0lBbUJqQyw4QkFBUSxhQUFDLE1BQWlEO0lBWTFELDhCQUFRLGFBQUMsTUFBZ0Q7SUFZekQscUNBQWUsYUFBQyxNQUE0QjtJQVc1QyxpQ0FBVyxhQUFDLE1BQXdCO0lBV3BDLDBCQUFJLGFBQUMsTUFBd0I7SUFhN0IsK0JBQVMsYUFBQyxNQUF3QjtJQVdsQyxpQ0FBVyxhQUFDLE1BQXdCO0lBWXBDLDJCQUFLLGFBQUMsTUFBaUM7SUFZdkMsNEJBQU0sYUFBQyxNQUFpQztJQVl4Qyw2Q0FBdUIsYUFBQyxNQUFpQztJQVd6RCxvQ0FBYyxhQUFDLE1BQWlDO0lBWWhELHFDQUFlLGFBQUMsTUFBNkI7SUFXN0MsMEJBQUksYUFBQyxNQUEyQjtJQVdoQyx5QkFBRyxhQUFDLE1BQXlDO0lBWTdDLCtDQUF5QixhQUFDLE1BQW1FO0lBVTdGLG1DQUFhO0lBVWIsK0JBQVM7SUFVVCxnQ0FBVTtJQVdWLDhCQUFRLGFBQUMsTUFBMkI7SUFXcEMsa0NBQVksYUFBQyxNQUEyQjtJQVd4QyxpQ0FBVyxhQUFDLE1BQTJCO0lBV3ZDLGtDQUFZLGFBQUMsTUFBMkI7SUFVeEMsbUNBQWE7SUFXYix1Q0FBaUI7SUFVakIsdUNBQWlCO0lBV2pCLHFDQUFlO0lBWWYsMENBQW9CLGFBQUMsTUFBNkI7SUFXbEQsZ0NBQVUsYUFBQyxNQUdWO0lBV0QsbUNBQWEsYUFBQyxNQUEyQjtJQVV6Qyx1Q0FBaUI7SUFhakIsc0NBQWdCLGFBQUMsTUFBeUI7SUFVMUMscUNBQWU7SUFVZixtQ0FBYTtJQVdiLDZCQUFPLGFBQUMsTUFBcUI7SUFhN0IsNEJBQU0sYUFBQyxNQUFvQjtJQVczQiwwQ0FBb0IsYUFBQyxLQUFhO0lBV2xDLDBDQUFvQixhQUFDLEtBQWlCO0lBV3RDLG1DQUFhLGFBQUMsS0FBYTtJQVczQixtQ0FBYSxhQUFDLEtBQWlCOzBCQUsvQixnREFBdUI7Ozs7OzswQkFFdkIsNENBQW1COzs7Ozs7MEJBRW5CLDJDQUFrQjs7Ozs7OzBCQUVsQiw4Q0FBcUI7Ozs7OzswQkFFckIsOENBQXFCOzs7Ozs7MEJBRXJCLDBDQUFpQjs7Ozs7OzBCQUVqQixvREFBMkI7Ozs7OzswQkFFM0Isb0RBQTJCOzs7Ozs7MEJBRTNCLG9EQUEyQjs7Ozs7OzBCQUUzQixrREFBeUI7Ozs7OzswQkFFekIsa0RBQXlCOzs7Ozs7MEJBRXpCLGlEQUF3Qjs7Ozs7Ozs7Ozs7OztzQkF0aUMxQjtFQXlhaUMsaUJBQWlCO1NBQXJDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG4vKiBBdmFpbGFibGUgc3RhdHVzIG9mIGRldmljZSAqL1xuZXhwb3J0IHR5cGUgU3RhdHVzID1cbiAgfCAnc2NhblN0YXJ0ZWQnXG4gIHwgJ3NjYW5TdG9wcGVkJ1xuICB8ICdzY2FuUmVzdWx0J1xuICB8ICdjb25uZWN0ZWQnXG4gIHwgJ2Rpc2Nvbm5lY3RlZCdcbiAgfCAnYm9uZGluZydcbiAgfCAnYm9uZGVkJ1xuICB8ICd1bmJvbmRlZCdcbiAgfCAnY2xvc2VkJ1xuICB8ICdzZXJ2aWNlcydcbiAgfCAnZGlzY292ZXJlZCdcbiAgfCAnY2hhcmFjdGVyaXN0aWNzJ1xuICB8ICdkZXNjcmlwdG9ycydcbiAgfCAncmVhZCdcbiAgfCAnc3Vic2NyaWJlZCdcbiAgfCAndW5zdWJzY3JpYmVkJ1xuICB8ICdzdWJzY3JpYmVkUmVzdWx0J1xuICB8ICd3cml0dGVuJ1xuICB8ICdyZWFkRGVzY3JpcHRvcidcbiAgfCAnd3JpdGVEZXNjcmlwdG9yJ1xuICB8ICdyc3NpJ1xuICB8ICdtdHUnXG4gIHwgJ2Nvbm5lY3Rpb25Qcmlvcml0eVJlcXVlc3RlZCdcbiAgfCAnZW5hYmxlZCdcbiAgfCAnZGlzYWJsZWQnXG4gIHwgJ3JlYWRSZXF1ZXN0ZWQnXG4gIHwgJ3dyaXRlUmVxdWVzdGVkJ1xuICB8ICdtdHVDaGFuZ2VkJ1xuICB8ICdub3RpZnlSZWFkeSdcbiAgfCAnbm90aWZ5U2VudCdcbiAgfCAnc2VydmljZUFkZGVkJ1xuICB8ICdzZXJ2aWNlUmVtb3ZlZCdcbiAgfCAnYWxsU2VydmljZXNSZW1vdmVkJ1xuICB8ICdhZHZlcnRpc2luZ1N0YXJ0ZWQnXG4gIHwgJ2FkdmVydGlzaW5nU3RvcHBlZCdcbiAgfCAncmVzcG9uZGVkJ1xuICB8ICdub3RpZmllZCc7XG5cbi8qKiBBdmFpbGFibGUgY29ubmVjdGlvbiBwcmlvcml0aWVzICovXG5leHBvcnQgdHlwZSBDb25uZWN0aW9uUHJpb3JpdHkgPSAnbG93JyB8ICdiYWxhbmNlZCcgfCAnaGlnaCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFyYW1zIHtcbiAgLyoqIFRoZSBhZGRyZXNzL2lkZW50aWZpZXIgcHJvdmlkZWQgYnkgdGhlIHNjYW4ncyByZXR1cm4gb2JqZWN0ICovXG4gIGFkZHJlc3M6IHN0cmluZztcbiAgLyoqIFRoZSBzZXJ2aWNlJ3MgSUQgKi9cbiAgc2VydmljZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEluaXRQZXJpcGhlcmFsUGFyYW1zIHtcbiAgLyoqIFNob3VsZCB1c2VyIGJlIHByb21wdGVkIHRvIGVuYWJsZSBCbHVldG9vdGggKi9cbiAgcmVxdWVzdD86IGJvb2xlYW47XG4gIC8qIEEgdW5pcXVlIHN0cmluZyB0byBpZGVudGlmeSB5b3VyIGFwcC4gQmx1ZXRvb3RoIENlbnRyYWwgYmFja2dyb3VuZCBtb2RlIGlzIHJlcXVpcmVkIHRvIHVzZSB0aGlzLCBidXQgYmFja2dyb3VuZCBtb2RlIGRvZXNuJ3Qgc2VlbSB0byByZXF1aXJlIHNwZWNpZnlpbmcgdGhlIHJlc3RvcmVLZXkgKi9cbiAgcmVzdG9yZUtleT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbml0UGFyYW1zIGV4dGVuZHMgSW5pdFBlcmlwaGVyYWxQYXJhbXMge1xuICAvKiogU2hvdWxkIGNoYW5nZSBpbiBCbHVldG9vdGggc3RhdHVzIG5vdGlmaWNhdGlvbnMgYmUgc2VudCAqL1xuICBzdGF0dXNSZWNlaXZlcj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2NhblBhcmFtcyB7XG4gIC8qIEFuIGFycmF5IG9mIHNlcnZpY2UgSURzIHRvIGZpbHRlciB0aGUgc2NhbiBvciBlbXB0eSBhcnJheSAvIG51bGwuIFRoaXMgcGFyYW1ldGVyIGlzIG5vdCBzdXBwb3J0ZWQgb24gV2luZG93cyBwbGF0Zm9ybSB5ZXQgKi9cbiAgc2VydmljZXM/OiBzdHJpbmdbXTtcbiAgLyogVHJ1ZS9mYWxzZSB0byBhbGxvdyBkdXBsaWNhdGUgYWR2ZXJ0aXNlbWVudCBwYWNrZXRzLCBkZWZhdWx0cyB0byBmYWxzZSAoaU9TKSovXG4gIGFsbG93RHVwbGljYXRlcz86IGJvb2xlYW47XG4gIC8qKiBEZWZhdWx0cyB0byBMb3cgUG93ZXIuIEF2YWlsYWJsZSBmcm9tIEFQSTIxIC8gQVBJIDIzIChBbmRyb2lkKSAqL1xuICBzY2FuTW9kZT86IEJsdWV0b290aFNjYW5Nb2RlO1xuICAvKiogRGVmYXVsdHMgdG8gQWdncmVzc2l2ZS4gQXZhaWxhYmxlIGZyb20gQVBJMjMgKEFuZHJvaWQpICovXG4gIG1hdGNoTW9kZT86IEJsdWV0b290aE1hdGNoTW9kZTtcbiAgLyoqIERlZmF1bHRzIHRvIE9uZSBBZHZlcnRpc2VtZW50LiBBdmFpbGFibGUgZnJvbSBBUEkyMyAoQW5kcm9pZCkgKi9cbiAgbWF0Y2hOdW0/OiBCbHVldG9vdGhNYXRjaE51bTtcbiAgLyoqIERlZmF1bHRzIHRvIEFsbCBNYXRjaGVzLiBBdmFpbGFibGUgZnJvbSBBUEkyMSAvIEFQSSAyMy4gKEFuZHJvaWQpICovXG4gIGNhbGxiYWNrVHlwZT86IEJsdWV0b290aENhbGxiYWNrVHlwZTtcbiAgLyoqIFRydWUvZmFsc2UgdG8gc2hvdyBvbmx5IGNvbm5lY3RhYmxlIGRldmljZXMsIHJhdGhlciB0aGFuIGFsbCBkZXZpY2VzIGV2ZXIgc2VlbiwgZGVmYXVsdHMgdG8gZmFsc2UgKFdpbmRvd3MpICovXG4gIGlzQ29ubmVjdGFibGU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vdGlmeVBhcmFtcyB7XG4gIC8qKiBTZXJ2aWNlJ3MgVVVJRCAqL1xuICBzZXJ2aWNlOiBzdHJpbmc7XG4gIC8qKiBDaGFyYWN0ZXJpc3RpYydzIFVVSUQgKi9cbiAgY2hhcmFjdGVyaXN0aWM6IHN0cmluZztcbiAgLyoqIEJhc2U2NCBlbmNvZGVkIHN0cmluZywgbnVtYmVyIG9yIHN0cmluZyAqL1xuICB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbmRQYXJhbXMge1xuICAvKiogVGhpcyBpbnRlZ2VyIHZhbHVlIHdpbGwgYmUgaW5jcmVtZW50ZWQgZXZlcnkgcmVhZC93cml0ZVJlcXVlc3RlZCAqL1xuICByZXF1ZXN0SWQ6IG51bWJlcjtcbiAgLyoqIGJhc2U2NCBzdHJpbmcgKi9cbiAgdmFsdWU6IHN0cmluZztcbiAgLyoqIG5vdCBkb2N1bWVudGVkICovXG4gIG9mZnNldD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGFyYWN0ZXJpc3RpY1BhcmFtcyBleHRlbmRzIFBhcmFtcyB7XG4gIC8qKiBBbiBhcnJheSBvZiBjaGFyYWN0ZXJpc3RpYyBJRHMgdG8gZGlzY292ZXIgb3IgZW1wdHkgYXJyYXkgLyBudWxsICovXG4gIGNoYXJhY3RlcmlzdGljcz86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlc2NyaXB0b3JQYXJhbXMgZXh0ZW5kcyBQYXJhbXMge1xuICAvKiogVGhlIGNoYXJhY3RlcmlzdGljJ3MgSUQgKi9cbiAgY2hhcmFjdGVyaXN0aWM6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPcGVyYXRpb25EZXNjcmlwdG9yUGFyYW1zIGV4dGVuZHMgRGVzY3JpcHRvclBhcmFtcyB7XG4gIC8qKiBUaGUgZGVzY3JpcHRvcidzIElEICovXG4gIGRlc2NyaXB0b3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXcml0ZUNoYXJhY3RlcmlzdGljUGFyYW1zIGV4dGVuZHMgRGVzY3JpcHRvclBhcmFtcyB7XG4gIC8qIEJhc2U2NCBlbmNvZGVkIHN0cmluZyAqL1xuICB2YWx1ZTogc3RyaW5nO1xuICAvKiBTZXQgdG8gXCJub1Jlc3BvbnNlXCIgdG8gZW5hYmxlIHdyaXRlIHdpdGhvdXQgcmVzcG9uc2UsIGFsbCBvdGhlciB2YWx1ZXMgd2lsbCB3cml0ZSBub3JtYWxseS4gKi9cbiAgdHlwZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXcml0ZURlc2NyaXB0b3JQYXJhbXMgZXh0ZW5kcyBEZXNjcmlwdG9yUGFyYW1zIHtcbiAgLyoqIFRoZSBkZXNjcmlwdG9yJ3MgSUQgKi9cbiAgZGVzY3JpcHRvcjogc3RyaW5nO1xuICAvKiogQmFzZTY0IGVuY29kZWQgc3RyaW5nLCBudW1iZXIgb3Igc3RyaW5nICovXG4gIHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIEFkdmVydGlzaW5nUGFyYW1zID0gQWR2ZXJ0aXNpbmdQYXJhbXNBbmRyb2lkIHwgQWR2ZXJ0aXNpbmdQYXJhbXNJT1M7XG5leHBvcnQgdHlwZSBBZHZlcnRpc2VNb2RlID0gJ2JhbGFuY2VkJyB8ICdsb3dMYXRlbmN5JyB8ICdsb3dQb3dlcic7XG5leHBvcnQgdHlwZSBUeFBvd2VyTGV2ZWwgPSAnaGlnaCcgfCAnbG93JyB8ICd1bHRyYWxvdycgfCAnbWVkaXVtJztcblxuZXhwb3J0IGludGVyZmFjZSBBZHZlcnRpc2luZ1BhcmFtc0FuZHJvaWQge1xuICAvKiogU2VydmljZSBVVUlEIG9uIEFuZHJvaWQgKi9cbiAgc2VydmljZTogc3RyaW5nO1xuICAvKiogbm90IGRvY3VtZW50ZWQgKi9cbiAgbW9kZT86IEFkdmVydGlzZU1vZGU7XG4gIC8qKiBub3QgZG9jdW1lbnRlZCAqL1xuICBjb25uZWN0YWJsZT86IGJvb2xlYW47XG4gIC8qKiBub3QgZG9jdW1lbnRlZCAqL1xuICB0aW1lb3V0PzogbnVtYmVyO1xuICAvKiogbm90IGRvY3VtZW50ZWQgKi9cbiAgdHhQb3dlckxldmVsPzogVHhQb3dlckxldmVsO1xuICAvKiogbm90IGRvY3VtZW50ZWQgKi9cbiAgbWFudWZhY3R1cmVySWQ/OiBudW1iZXI7XG4gIC8qKiBub3QgZG9jdW1lbnRlZCAqL1xuICBtYW51ZmFjdHVyZXJTcGVjaWZpY0RhdGE/OiBhbnk7XG4gIC8qKiBub3QgZG9jdW1lbnRlZCAqL1xuICBpbmNsdWRlRGV2aWNlTmFtZTogYm9vbGVhbjtcbiAgLyoqIG5vdCBkb2N1bWVudGVkICovXG4gIGluY2x1ZGVUeFBvd2VyTGV2ZWw6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWR2ZXJ0aXNpbmdQYXJhbXNJT1Mge1xuICAvKiogQXJyYXkgb2Ygc2VydmljZSBVVUlEcyBvbiBpT1MgKi9cbiAgc2VydmljZXM6IHN0cmluZ1tdO1xuICAvKiogZGV2aWNlJ3MgbmFtZSAqL1xuICBuYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbW1vbkluZm8ge1xuICAvKiogVGhlIGRldmljZSdzIGRpc3BsYXkgbmFtZSAqL1xuICBuYW1lOiBzdHJpbmc7XG4gIC8qKiBUaGUgZGV2aWNlJ3MgYWRkcmVzcyAvIGlkZW50aWZpZXIgZm9yIGNvbm5lY3RpbmcgdG8gdGhlIG9iamVjdCAqL1xuICBhZGRyZXNzOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlSW5mbyBleHRlbmRzIENvbW1vbkluZm8ge1xuICAvKiogRGV2aWNlJ3Mgc3RhdHVzICovXG4gIHN0YXR1czogU3RhdHVzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJTU0kgZXh0ZW5kcyBEZXZpY2VJbmZvIHtcbiAgLyoqIHNpZ25hbCBzdHJlbmd0aCAqL1xuICByc3NpOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTVRVIGV4dGVuZHMgRGV2aWNlSW5mbyB7XG4gIC8qIG10dSB2YWx1ZSAqL1xuICBtdHU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCb25kZWRTdGF0dXMgZXh0ZW5kcyBDb21tb25JbmZvIHtcbiAgLyogQm9uZGVkIHN0YXR1cyovXG4gIGlzQm9uZGVkOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByZXZDb25uZWN0aW9uU3RhdHVzIGV4dGVuZHMgQ29tbW9uSW5mbyB7XG4gIC8qKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZGV2aWNlIHdhcyBjb25uZWN0ZWQgKi9cbiAgd2FzQ29ubmVjdGVkOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEN1cnJDb25uZWN0aW9uU3RhdHVzIGV4dGVuZHMgQ29tbW9uSW5mbyB7XG4gIC8qKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZGV2aWNlIGlzIGNvbm5lY3RlZCAqL1xuICBpc0Nvbm5lY3RlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEaXNjb3ZlclN0YXR1cyBleHRlbmRzIENvbW1vbkluZm8ge1xuICAvKiogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGRldmljZSdzIGNoYXJhY3RlcmlzdGljcyBhbmQgZGVzY3JpcHRvcnMgaGF2ZSBiZWVuIGRpc2NvdmVyZWQgKi9cbiAgaXNEaXNjb3ZlcmVkOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNjYW5TdGF0dXMgZXh0ZW5kcyBEZXZpY2VJbmZvIHtcbiAgLyoqIHNpZ25hbCBzdHJlbmd0aCAqL1xuICByc3NpOiBudW1iZXI7XG4gIC8qKlxuICAgKiBhZHZlcnRpc2VtZW50IGRhdGEgaW4gZW5jb2RlZCBzdHJpbmcgb2YgYnl0ZXMsIHVzZSBibHVldG9vdGhsZS5lbmNvZGVkU3RyaW5nVG9CeXRlcygpIChBbmRyb2lkKVxuICAgKiBhZHZlcnRpc2VtZW50IGhhc2ggd2l0aCB0aGUga2V5cyAoaU9TKVxuICAgKiBlbXB0eSAoV2luZG93cylcbiAgICovXG4gIGFkdmVydGlzZW1lbnQ6XG4gICAgfCB7XG4gICAgICAgIC8qKiBBbiBhcnJheSBvZiBzZXJ2aWNlIFVVSURzICovXG4gICAgICAgIHNlcnZpY2VVdWlkczogc3RyaW5nW107XG4gICAgICAgIC8qKiBBIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIG5hbWUgb2YgdGhlIG1hbnVmYWN0dXJlciBvZiB0aGUgZGV2aWNlICovXG4gICAgICAgIG1hbnVmYWN0dXJlckRhdGE6IHN0cmluZztcbiAgICAgICAgLyoqIEEgbnVtYmVyIGNvbnRhaW5pbmcgdGhlIHRyYW5zbWl0IHBvd2VyIG9mIGEgcGVyaXBoZXJhbCAqL1xuICAgICAgICB0eFBvd2VyTGV2ZWw6IG51bWJlcjtcbiAgICAgICAgLyoqIEFuIGFycmF5IG9mIG9uZSBvciBtb3JlIENCVVVJRCBvYmplY3RzLCByZXByZXNlbnRpbmcgQ0JTZXJ2aWNlIFVVSURzIHRoYXQgd2VyZSBmb3VuZCBpbiB0aGUg4oCcb3ZlcmZsb3figJ0gYXJlYSBvZiB0aGUgYWR2ZXJ0aXNlbWVudCBkYXRhICovXG4gICAgICAgIG92ZXJmbG93U2VydmljZVV1aWRzOiBzdHJpbmdbXTtcbiAgICAgICAgLyoqIEEgYm9vbGVhbiB2YWx1ZSB0aGF0IGluZGljYXRlcyB3aGV0aGVyIHRoZSBhZHZlcnRpc2luZyBldmVudCB0eXBlIGlzIGNvbm5lY3RhYmxlICovXG4gICAgICAgIGlzQ29ubmVjdGFibGU6IGJvb2xlYW47XG4gICAgICAgIC8qKiBBbiBhcnJheSBvZiBvbmUgb3IgbW9yZSBDQlVVSUQgb2JqZWN0cywgcmVwcmVzZW50aW5nIENCU2VydmljZSBVVUlEcyAqL1xuICAgICAgICBzb2xpY2l0ZWRTZXJ2aWNlVXVpZHM6IHN0cmluZ1tdO1xuICAgICAgICAvKiBBIGRpY3Rpb25hcnkgY29udGFpbmluZyBzZXJ2aWNlLXNwZWNpZmljIGFkdmVydGlzZW1lbnQgZGF0YSAqL1xuICAgICAgICBzZXJ2aWNlRGF0YTogYW55O1xuICAgICAgICAvKiBBIHN0cmluZyBjb250YWluaW5nIHRoZSBsb2NhbCBuYW1lIG9mIGEgcGVyaXBoZXJhbCAqL1xuICAgICAgICBsb2NhbE5hbWU6IHN0cmluZztcbiAgICAgIH1cbiAgICB8IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXJ2aWNlIHtcbiAgLyoqIFNlcnZpY2UncyB1dWlkICovXG4gIHV1aWQ6IHN0cmluZztcbiAgLyoqIEFycmF5IG9mIGNoYXJhY3RlcmlzdGljcyAqL1xuICBjaGFyYWN0ZXJpc3RpY3M6IENoYXJhY3RlcmlzdGljW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhcmFjdGVyaXN0aWMge1xuICAvKiBBcnJheSBvZiBkZXNjcmlwdG9ycyAqL1xuICBkZXNjcmlwdG9ycz86IERlc2NyaXB0b3JbXTtcbiAgLyoqICBDaGFyYWN0ZXJpc3RpYydzIHV1aWQgKi9cbiAgdXVpZDogc3RyaW5nO1xuICAvKipcbiAgICogIENoYXJhY3RlcmlzdGljJ3MgcHJvcGVydGllc1xuICAgKiAgSWYgdGhlIHByb3BlcnR5IGlzIGRlZmluZWQgYXMgYSBrZXksIHRoZSBjaGFyYWN0ZXJpc3RpYyBoYXMgdGhhdCBwcm9wZXJ0eVxuICAgKi9cbiAgcHJvcGVydGllcz86IHtcbiAgICB3cml0ZT86IGJvb2xlYW47XG4gICAgYnJvYWRjYXN0PzogYm9vbGVhbjtcbiAgICBleHRlbmRlZFByb3BzPzogYm9vbGVhbjtcbiAgICB3cml0ZVdpdGhvdXRSZXNwb25zZT86IGJvb2xlYW47XG4gICAgd3JpdGVOb1Jlc3BvbnNlPzogYm9vbGVhbjtcbiAgICBzaWduZWRXcml0ZT86IGJvb2xlYW47XG4gICAgcmVhZD86IGJvb2xlYW47XG4gICAgbm90aWZ5PzogYm9vbGVhbjtcbiAgICBpbmRpY2F0ZT86IGJvb2xlYW47XG4gICAgYXV0aGVudGljYXRlZFNpZ25lZFdyaXRlcz86IGJvb2xlYW47XG4gICAgbm90aWZ5RW5jcnlwdGlvblJlcXVpcmVkPzogYm9vbGVhbjtcbiAgICBpbmRpY2F0ZUVuY3J5cHRpb25SZXF1aXJlZD86IGJvb2xlYW47XG4gIH07XG4gIC8qKlxuICAgKiAgSWYgdGhlIHBlcm1pc3Npb24gaXMgZGVmaW5lZCBhcyBhIGtleSwgdGhlIGNoYXJhY3RlciBoYXMgdGhhdCBwZXJtaXNzaW9uXG4gICAqL1xuICBwZXJtaXNzaW9ucz86IHtcbiAgICByZWFkPzogYm9vbGVhbjtcbiAgICByZWFkRW5jcnlwdGVkPzogYm9vbGVhbjtcbiAgICByZWFkRW5jcnlwdGVkTUlUTT86IGJvb2xlYW47XG4gICAgd3JpdGU/OiBib29sZWFuO1xuICAgIHdyaXRlU2lnbmVkPzogYm9vbGVhbjtcbiAgICB3cml0ZVNpZ25lZE1JVE0/OiBib29sZWFuO1xuICAgIHdyaXRlRW5jcnlwdGVkTUlUTT86IGJvb2xlYW47XG4gICAgcmVhZEVuY3J5cHRpb25SZXF1aXJlZD86IGJvb2xlYW47XG4gICAgd3JpdGVFbmNyeXB0aW9uUmVxdWlyZWQ/OiBib29sZWFuO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlc2NyaXB0b3Ige1xuICB1dWlkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlIGV4dGVuZHMgRGV2aWNlSW5mbyB7XG4gIC8qKiBEZXZpY2UncyBzZXJ2aWNlcyAqL1xuICBzZXJ2aWNlczogU2VydmljZVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlcnZpY2VzIGV4dGVuZHMgRGV2aWNlSW5mbyB7XG4gIC8qKiBBcnJheSBvZiBzZXJ2aWNlIFVVSURTICovXG4gIHNlcnZpY2VzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXNjcmlwdG9ycyBleHRlbmRzIERldmljZUluZm8ge1xuICAvKiogQ2hhcmFjdGVyaXN0aWMncyBVVUlEICovXG4gIGNoYXJhY3RlcmlzdGljOiBzdHJpbmc7XG4gIC8qKiBTZXJ2aWNlJ3MgVVVJRCAqL1xuICBzZXJ2aWNlOiBzdHJpbmc7XG4gIC8qIEFycmF5IG9mIGRlc2NyaXB0b3IgVVVJRHMgKi9cbiAgZGVzY3JpcHRvcnM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9wZXJhdGlvblJlc3VsdCBleHRlbmRzIERldmljZUluZm8ge1xuICAvKiogQ2hhcmFjdGVyaXN0aWMgVVVJRCAqL1xuICBjaGFyYWN0ZXJpc3RpYzogc3RyaW5nO1xuICAvKiogU2VydmljZSdzIFVVSUQgKi9cbiAgc2VydmljZTogc3RyaW5nO1xuICAvKiogQmFzZTY0IGVuY29kZWQgc3RyaW5nIG9mIGJ5dGVzICovXG4gIHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVW5zdWJzY3JpYmVSZXN1bHQgZXh0ZW5kcyBEZXZpY2VJbmZvIHtcbiAgLyoqIENoYXJhY3RlcmlzdGljIFVVSUQgKi9cbiAgY2hhcmFjdGVyaXN0aWM6IHN0cmluZztcbiAgLyoqIFNlcnZpY2UncyBVVUlEICovXG4gIHNlcnZpY2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXNjcmlwdG9yUmVzdWx0IGV4dGVuZHMgT3BlcmF0aW9uUmVzdWx0IHtcbiAgZGVzY3JpcHRvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYXJhY3RlcmlzdGljcyBleHRlbmRzIERldmljZUluZm8ge1xuICAvKiogU2VydmljZSdzIGlkICovXG4gIHNlcnZpY2U6IHN0cmluZztcbiAgLyogQXJyYXkgb2YgY2hhcmFjdGVyaXN0aWMgb2JqZWN0cyovXG4gIGNoYXJhY3RlcmlzdGljczogQ2hhcmFjdGVyaXN0aWNbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbml0aWFsaXplUmVzdWx0IHtcbiAgLyoqIERldmljZSdzIHN0YXR1cyAqL1xuICBzdGF0dXM6IFN0YXR1cztcbiAgLyoqIFRoZSBhZGRyZXNzL2lkZW50aWZpZXIgcHJvdmlkZWQgYnkgdGhlIHNjYW4ncyByZXR1cm4gb2JqZWN0ICovXG4gIGFkZHJlc3M6IHN0cmluZztcbiAgLyoqIFNlcnZpY2UncyBVVUlEICovXG4gIHNlcnZpY2U6IHN0cmluZztcbiAgLyoqIENoYXJhY3RlcmlzdGljIFVVSUQgKi9cbiAgY2hhcmFjdGVyaXN0aWM6IHN0cmluZztcbiAgLyoqIFRoaXMgaW50ZWdlciB2YWx1ZSB3aWxsIGJlIGluY3JlbWVudGVkIGV2ZXJ5IHJlYWQvd3JpdGVSZXF1ZXN0ZWQgKi9cbiAgcmVxdWVzdElkOiBudW1iZXI7XG4gIC8qKiBPZmZzZXQgdmFsdWUgKi9cbiAgb2Zmc2V0OiBudW1iZXI7XG4gIC8qKiBtdHUgdmFsdWUgKi9cbiAgbXR1OiBudW1iZXI7XG4gIC8qKiBCYXNlNjQgZW5jb2RlZCBzdHJpbmcgb2YgYnl0ZXMgKi9cbiAgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gQmx1ZXRvb3RoU2Nhbk1vZGUge1xuICBTQ0FOX01PREVfT1BQT1JUVU5JU1RJQyA9IC0xLFxuICBTQ0FOX01PREVfTE9XX1BPV0VSID0gMCxcbiAgU0NBTl9NT0RFX0JBTEFOQ0VEID0gMSxcbiAgU0NBTl9NT0RFX0xPV19MQVRFTkNZID0gMixcbn1cblxuZXhwb3J0IGVudW0gQmx1ZXRvb3RoTWF0Y2hNb2RlIHtcbiAgTUFUQ0hfTU9ERV9BR1JFU1NJVkUgPSAxLFxuICBNQVRDSF9NT0RFX1NUSUNLWSA9IDIsXG59XG5cbmV4cG9ydCBlbnVtIEJsdWV0b290aE1hdGNoTnVtIHtcbiAgTUFUQ0hfTlVNX09ORV9BRFZFUlRJU0VNRU5UID0gMSxcbiAgTUFUQ0hfTlVNX0ZFV19BRFZFUlRJU0VNRU5UID0gMixcbiAgTUFUQ0hfTlVNX01BWF9BRFZFUlRJU0VNRU5UID0gMyxcbn1cblxuZXhwb3J0IGVudW0gQmx1ZXRvb3RoQ2FsbGJhY2tUeXBlIHtcbiAgQ0FMTEJBQ0tfVFlQRV9BTExfTUFUQ0hFUyA9IDEsXG4gIENBTExCQUNLX1RZUEVfRklSU1RfTUFUQ0ggPSAyLFxuICBDQUxMQkFDS19UWVBFX01BVENIX0xPU1QgPSA0LFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVycm9yIHtcbiAgY29kZTogbnVtYmVyO1xuICBtZXNzYWdlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRhcHRlckluZm8ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgaXNJbml0aWFsaXplZDogYm9vbGVhbjtcbiAgaXNFbmFibGVkOiBib29sZWFuO1xuICBpc1NjYW5uaW5nOiBib29sZWFuO1xuICBpc0Rpc2NvdmVyYWJsZTogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAbmFtZSBCbHVldG9vdGhMRVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBoYXMgdGhlIG1vc3QgY29tcGxldGUgaW1wbGVtZW50YXRpb24gZm9yIGludGVyYWN0aW5nIHdpdGggQmx1ZXRvb3RoIExFIGRldmljZXMgb24gQW5kcm9pZCwgaU9TIGFuZCBwYXJ0aWFsbHkgV2luZG93cy5cbiAqIEl0J3MgYSB3cmFwIGFyb3VuZCBbcmFuZGR1c2luZy9jb3Jkb3ZhLXBsdWdpbi1ibHVldG9vdGhsZV0oaHR0cHM6Ly9naXRodWIuY29tL3JhbmRkdXNpbmcvY29yZG92YS1wbHVnaW4tYmx1ZXRvb3RobGUvYmxvYi9tYXN0ZXIvcmVhZG1lLm1kKSBjb3Jkb3ZhIHBsdWdpbiBmb3IgSW9uaWMuXG4gKiBJdCBzdXBwb3J0cyBwZXJpcGhlcmFsICoqYW5kKiogY2VudHJhbCBtb2RlcyBhbmQgY292ZXJzIG1vc3Qgb2YgdGhlIEFQSSBtZXRob2RzIGF2YWlsYWJsZSBvbiBBbmRyb2lkIGFuZCBpT1MuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBCbHVldG9vdGhMRSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYmx1ZXRvb3RoLWxlL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHB1YmxpYyBibHVldG9vdGhsZTogQmx1ZXRvb3RoTEUsIHB1YmxpYyBwbHQ6IFBsYXRmb3JtKSB7XG4gKlxuICogIHRoaXMucGx0LnJlYWR5KCkudGhlbigocmVhZHlTb3VyY2UpID0+IHtcbiAqXG4gKiAgICBjb25zb2xlLmxvZygnUGxhdGZvcm0gcmVhZHkgZnJvbScsIHJlYWR5U291cmNlKTtcbiAqXG4gKiAgICB0aGlzLmJsdWV0b290aGxlLmluaXRpYWxpemUoKS50aGVuKGJsZSA9PiB7XG4gKiAgICAgIGNvbnNvbGUubG9nKCdibGUnLCBibGUuc3RhdHVzKSAvLyBsb2dzICdlbmFibGVkJ1xuICogICAgfSk7XG4gKlxuICogICB9KTtcbiAqIH1cbiAqXG4gKiBgYGBcbiAqXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQmx1ZXRvb3RoTEUnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1ibHVldG9vdGhsZScsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICdibHVldG9vdGhsZScsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9yYW5kZHVzaW5nL2NvcmRvdmEtcGx1Z2luLWJsdWV0b290aGxlJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLWJsdWV0b290aGxlJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLCAvLyBPUFRJT05BTCB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSwgLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJsdWV0b290aExFIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQG5hbWUgaW5pdGlhbGl6ZVxuICAgKiBJbml0aWFsaXplIEJsdWV0b290aCBvbiB0aGUgZGV2aWNlXG4gICAqIEBwYXJhbSB7SW5pdFBhcmFtc30gW3BhcmFtc11cbiAgICogQHJldHVybnMgeyhPYnNlcnZhYmxlPHsgc3RhdHVzOiAnZW5hYmxlZCcgfCAnZGlzYWJsZWQnfT4pfSBUaGUgY2FsbGJhY2sgdGhhdCBpcyBwYXNzZWQgaW5pdGlhbGl6ZSBzdGF0dXMgKGVuYWJsZWQvZGlzYWJsZWQpXG4gICAqL1xuICBAQ29yZG92YSh7IHN1Y2Nlc3NJbmRleDogMCwgZXJyb3JJbmRleDogMiwgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICBpbml0aWFsaXplKHBhcmFtcz86IEluaXRQYXJhbXMpOiBPYnNlcnZhYmxlPHsgc3RhdHVzOiAnZW5hYmxlZCcgfCAnZGlzYWJsZWQnIH0+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgZW5hYmxlIChBbmRyb2lkKVxuICAgKiBFbmFibGUgQmx1ZXRvb3RoIG9uIHRoZSBkZXZpY2UuIEFuZHJvaWQgc3VwcG9ydCBvbmx5XG4gICAqIEByZXR1cm5zIHZvaWRcbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLCBzeW5jOiB0cnVlIH0pXG4gIGVuYWJsZSgpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgZGlzYWJsZSAoQW5kcm9pZClcbiAgICogRGlzYWJsZSBCbHVldG9vdGggb24gdGhlIGRldmljZS4gQW5kcm9pZCBzdXBwb3J0IG9ubHlcbiAgICogQHJldHVybnMgdm9pZFxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsIHN5bmM6IHRydWUgfSlcbiAgZGlzYWJsZSgpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgZ2V0QWRhcHRlckluZm8gKEFuZHJvaWQpXG4gICAqIFJldHJpZXZlIHVzZWZ1bCBpbmZvcm1hdGlvbiBzdWNoIGFzIHRoZSBhZGRyZXNzLCBuYW1lLCBhbmQgdmFyaW91cyBzdGF0ZXMgKGluaXRpYWxpemVkLCBlbmFibGVkLCBzY2FubmluZywgZGlzY292ZXJhYmxlKS5cbiAgICogVGhpcyBjYW4gYmUgdmVyeSB1c2VmdWwgd2hlbiB0aGUgZ2VuZXJhbCBzdGF0ZSBvZiB0aGUgYWRhcHRlciBoYXMgYmVlbiBsb3N0LCBhbmQgd2Ugd291bGQgb3RoZXJ3aXNlIG5lZWQgdG8gZ28gdGhyb3VnaCBhIHNlcmllcyBvZiBjYWxsYmFja3MgdG8gZ2V0IHRoZSBjb3JyZWN0IHN0YXRlIChmaXJzdCBpbml0aWFsaXplZCwgdGhlbiBlbmFibGVkLCB0aGVuIGlzU2Nhbm5pbmcsIGFuZCBzbyBmb3J0aCkuXG4gICAqIFRoZSByZXN1bHQgb2YgdGhpcyBtZXRob2QgYWxsb3dzIHVzIHRvIHRha2UgYnVzaW5lc3MgbG9naWMgZGVjaXNpb25zIHdoaWxlIGF2b2lkaW5nIGEgbGFyZ2UgcGFydCBvZiB0aGUgY2FsbGJhY2sgaGVsbC5cbiAgICogQ3VycmVudGx5IHRoZSBkaXNjb3ZlcmFibGUgc3RhdGUgZG9lcyBub3QgaGF2ZSBhbnkgcmVsZXZhbmNlIGJlY2F1c2UgdGhlcmUgaXMgbm8gXCJzZXREaXNjb3ZlcmFibGVcIiBmdW5jdGlvbmFsaXR5IGluIHBsYWNlLiBUaGF0IG1heSBjaGFuZ2UgaW4gdGhlIGZ1dHVyZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8QWRhcHRlckluZm8+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgZ2V0QWRhcHRlckluZm8oKTogUHJvbWlzZTxBZGFwdGVySW5mbz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzdGFydFNjYW5cbiAgICogU2NhbiBmb3IgQmx1ZXRvb3RoIExFIGRldmljZXMuXG4gICAqIFNpbmNlIHNjYW5uaW5nIGlzIGV4cGVuc2l2ZSwgc3RvcCBhcyBzb29uIGFzIHBvc3NpYmxlLiBUaGUgQ29yZG92YSBhcHAgc2hvdWxkIHVzZSBhIHRpbWVyIHRvIGxpbWl0IHRoZSBzY2FuIGludGVydmFsLlxuICAgKiBBbmRyb2lkIEFQSSA+PSAyMyByZXF1aXJlcyBBQ0NFU1NfQ09BUlNFX0xPQ0FUSU9OIHBlcm1pc3Npb25zIHRvIGZpbmQgdW5wYWlyZWQgZGV2aWNlcy5cbiAgICogUGVybWlzc2lvbnMgY2FuIGJlIHJlcXVlc3RlZCBieSB1c2luZyB0aGUgaGFzUGVybWlzc2lvbiBhbmQgcmVxdWVzdFBlcm1pc3Npb24gZnVuY3Rpb25zLlxuICAgKiBBbmRyb2lkIEFQSSA+PSAyMyBhbHNvIHJlcXVpcmVzIGxvY2F0aW9uIHNlcnZpY2VzIHRvIGJlIGVuYWJsZWQuIFVzZSBpc0xvY2F0aW9uRW5hYmxlZCB0byBkZXRlcm1pbmUgd2hldGhlciBsb2NhdGlvbiBzZXJ2aWNlcyBhcmUgZW5hYmxlZC5cbiAgICogSWYgbm90IGVuYWJsZWQsIHVzZSByZXF1ZXN0TG9jYXRpb24gdG8gcHJvbXB0IHRoZSBsb2NhdGlvbiBzZXJ2aWNlcyBzZXR0aW5ncyBwYWdlLlxuICAgKiBAcGFyYW0ge1NjYW5QYXJhbXN9IHBhcmFtcyBTY2FuIHBhcmFtc1xuICAgKiBAcmV0dXJucyB7KE9ic2VydmFibGU8IFNjYW5TdGF0dXMgPil9XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJywgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICBzdGFydFNjYW4ocGFyYW1zOiBTY2FuUGFyYW1zKTogT2JzZXJ2YWJsZTxTY2FuU3RhdHVzPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHN0b3BTY2FuXG4gICAqIFN0b3Agc2NhbiBmb3IgQmx1ZXRvb3RoIExFIGRldmljZXMuIFNpbmNlIHNjYW5uaW5nIGlzIGV4cGVuc2l2ZSwgc3RvcCBhcyBzb29uIGFzIHBvc3NpYmxlXG4gICAqIFRoZSBhcHAgc2hvdWxkIHVzZSBhIHRpbWVyIHRvIGxpbWl0IHRoZSBzY2FubmluZyB0aW1lLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7c3RhdHVzOiAnc2NhblN0b3BwZWQnfT59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICBzdG9wU2NhbigpOiBQcm9taXNlPHsgc3RhdHVzOiAnc2NhblN0b3BwZWQnIH0+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgcmV0cmlldmVDb25uZWN0ZWRcbiAgICogUmV0cmlldmVkIHBhaXJlZCBCbHVldG9vdGggTEUgZGV2aWNlcy4gSW4gaU9TLCBkZXZpY2VzIHRoYXQgYXJlIFwicGFpcmVkXCIgdG8gd2lsbCBub3QgcmV0dXJuIGR1cmluZyBhIG5vcm1hbCBzY2FuLlxuICAgKiBDYWxsYmFjayBpcyBcImluc3RhbnRcIiBjb21wYXJlZCB0byBhIHNjYW4uXG4gICAqIEBwYXJhbSB7eyBzZXJ2aWNlczogc3RyaW5nW10gfX0gQW4gYXJyYXkgb2Ygc2VydmljZSBJRHMgdG8gZmlsdGVyIHRoZSByZXRyaWV2YWwgYnkuIElmIG5vIHNlcnZpY2UgSURzIGFyZSBzcGVjaWZpZWQsIG5vIGRldmljZXMgd2lsbCBiZSByZXR1cm5lZC5cbiAgICogQHJldHVybnMge1Byb21pc2U8eyBkZXZpY2VzOiBEZXZpY2VJbmZvW10gfT59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICByZXRyaWV2ZUNvbm5lY3RlZChwYXJhbXM/OiB7IHNlcnZpY2VzPzogc3RyaW5nW10gfSk6IFByb21pc2U8eyBkZXZpY2VzOiBEZXZpY2VJbmZvW10gfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBib25kIChBbmRyb2lkKVxuICAgKiBCb25kIHdpdGggYSBkZXZpY2UuXG4gICAqIFRoZSBkZXZpY2UgZG9lc24ndCBuZWVkIHRvIGJlIGNvbm5lY3RlZCB0byBpbml0aWF0ZSBib25kaW5nLiBBbmRyb2lkIHN1cHBvcnQgb25seS5cbiAgICogQHBhcmFtIHt7IGFkZHJlc3M6IHN0cmluZyB9fSBwYXJhbXMgVGhlIGFkZHJlc3MvaWRlbnRpZmllciBwcm92aWRlZCBieSB0aGUgc2NhbidzIHJldHVybiBvYmplY3RcbiAgICogQHJldHVybnMgeyhPYnNlcnZhYmxlPHsgc3RhdHVzOiBEZXZpY2VJbmZvIH0+KX1cbiAgICogc3VjY2VzczpcbiAgICogICAgVGhlIGZpcnN0IHN1Y2Nlc3MgY2FsbGJhY2sgc2hvdWxkIGFsd2F5cyByZXR1cm4gd2l0aCBzdGF0dXMgPT0gYm9uZGluZy5cbiAgICogICAgSWYgdGhlIGJvbmQgaXMgY3JlYXRlZCwgdGhlIGNhbGxiYWNrIHdpbGwgcmV0dXJuIGFnYWluIHdpdGggc3RhdHVzID09IGJvbmRlZC5cbiAgICogICAgSWYgdGhlIGJvbmRpbmcgcG9wdXAgaXMgY2FuY2VsZWQgb3IgdGhlIHdyb25nIGNvZGUgaXMgZW50ZXJlZCwgdGhlIGNhbGxiYWNrIHdpbGwgcmV0dXJuIGFnYWluIHdpdGggc3RhdHVzID09IHVuYm9uZGVkLlxuICAgKiBlcnJvcjpcbiAgICogICAgVGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgYm9uZCBvcGVyYXRpb24gZmFpbHNcbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLCBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIGJvbmQocGFyYW1zOiB7IGFkZHJlc3M6IHN0cmluZyB9KTogT2JzZXJ2YWJsZTx7IHN0YXR1czogRGV2aWNlSW5mbyB9PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHVuYm9uZCAoQW5kcm9pZClcbiAgICogVW5ib25kIHdpdGggYSBkZXZpY2UuIFRoZSBkZXZpY2UgZG9lc24ndCBuZWVkIHRvIGJlIGNvbm5lY3RlZCB0byBpbml0aWF0ZSBib25kaW5nLiBBbmRyb2lkIHN1cHBvcnQgb25seS5cbiAgICogQHBhcmFtIHt7YWRkcmVzczogc3RyaW5nfX0gcGFyYW1zIFRoZSBhZGRyZXNzL2lkZW50aWZpZXJcbiAgICogQHJldHVybnMge1Byb21pc2U8eyBzdGF0dXM6IERldmljZUluZm8gfT59XG4gICAqICAgIHN1Y2Nlc3M6IFRoZSBzdWNjZXNzIGNhbGxiYWNrIHNob3VsZCBhbHdheXMgcmV0dXJuIHdpdGggc3RhdHVzID09IHVuYm9uZGVkLCB0aGF0IGlzIHBhc3NlZCB3aXRoIGRldmljZSBvYmplY3RcbiAgICogICAgZXJyb3I6IFRoZSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIHVuYm9uZCBvcGVyYXRpb24gZmFpbHNcbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIHVuYm9uZChwYXJhbXM6IHsgYWRkcmVzczogc3RyaW5nIH0pOiBQcm9taXNlPHsgc3RhdHVzOiBEZXZpY2VJbmZvIH0+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgY29ubmVjdFxuICAgKiBDb25uZWN0IHRvIGEgQmx1ZXRvb3RoIExFIGRldmljZVxuICAgKiBAcGFyYW0gY29ubmVjdFN1Y2Nlc3MgVGhlIHN1Y2Nlc3MgY2FsbGJhY2sgdGhhdCBpcyBwYXNzZWQgd2l0aCBkZXZpY2Ugb2JqZWN0XG4gICAqIEBwYXJhbSBjb25uZWN0RXJyb3IgICBUaGUgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSBjb25uZWN0IG9wZXJhdGlvbiBmYWlsc1xuICAgKiBAcGFyYW0gcGFyYW1zICAgICAgICAgVGhlIGFkZHJlc3MvaWRlbnRpZmllclxuICAgKlxuICAgKiBAcGFyYW0ge3thZGRyZXNzOiBzdHJpbmcsIGF1dG9Db25uZWN0OiBib29sZWFufX0gcGFyYW1zXG4gICAqIEByZXR1cm5zIHsoT2JzZXJ2YWJsZTx7IHN0YXR1czogRGV2aWNlSW5mbyB9Pil9XG4gICAqICAgIHN1Y2Nlc3M6IGRldmljZSBvYmplY3Qgd2l0aCBzdGF0dXNcbiAgICogICAgZXJyb3I6IFRoZSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIHVuYm9uZCBvcGVyYXRpb24gZmFpbHNcbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLCBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIGNvbm5lY3QocGFyYW1zOiB7IGFkZHJlc3M6IHN0cmluZzsgYXV0b0Nvbm5lY3Q/OiBib29sZWFuIH0pOiBPYnNlcnZhYmxlPERldmljZUluZm8+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgcmVjb25uZWN0XG4gICAqIFJlY29ubmVjdCB0byBhIHByZXZpb3VzbHkgY29ubmVjdGVkIEJsdWV0b290aCBkZXZpY2VcbiAgICogQHBhcmFtIHt7YWRkcmVzczogc3RyaW5nfX0gcGFyYW1zIFRoZSBhZGRyZXNzL2lkZW50aWZpZXJcbiAgICogQHJldHVybnMgeyhPYnNlcnZhYmxlPERldmljZUluZm8+KX1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLCBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIHJlY29ubmVjdChwYXJhbXM6IHsgYWRkcmVzczogc3RyaW5nIH0pOiBPYnNlcnZhYmxlPERldmljZUluZm8+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgZGlzY29ubmVjdFxuICAgKiBEaXNjb25uZWN0IGZyb20gYSBCbHVldG9vdGggTEUgZGV2aWNlLlxuICAgKiAgICAgICAgICAgICAgTm90ZTogSXQncyBzaW1wbGVyIHRvIGp1c3QgY2FsbCBjbG9zZSgpLiBTdGFydGluZyB3aXRoIGlPUyAxMCwgZGlzY29ubmVjdGluZyBiZWZvcmUgY2xvc2luZyBzZWVtcyByZXF1aXJlZCFcbiAgICogQHBhcmFtIHt7YWRkcmVzczogc3RyaW5nfX0gcGFyYW1zIFRoZSBhZGRyZXNzL2lkZW50aWZpZXJcbiAgICogQHJldHVybnMge1Byb21pc2U8RGV2aWNlSW5mbz59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICBkaXNjb25uZWN0KHBhcmFtczogeyBhZGRyZXNzOiBzdHJpbmcgfSk6IFByb21pc2U8RGV2aWNlSW5mbz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBjbG9zZVxuICAgKiBDbG9zZS9kaXNwb3NlIGEgQmx1ZXRvb3RoIExFIGRldmljZS5cbiAgICogUHJpb3IgdG8gMi43LjAsIHlvdSBuZWVkZWQgdG8gZGlzY29ubmVjdCB0byB0aGUgZGV2aWNlIGJlZm9yZSBjbG9zaW5nLCBidXQgdGhpcyBpcyBubyBsb25nZXIgdGhlIGNhc2UuXG4gICAqIFN0YXJ0aW5nIHdpdGggaU9TIDEwLCBkaXNjb25uZWN0aW5nIGJlZm9yZSBjbG9zaW5nIHNlZW1zIHJlcXVpcmVkIVxuICAgKiBAcGFyYW0ge3sgYWRkcmVzczogc3RyaW5nIH19IHBhcmFtcyBUaGUgYWRkcmVzcy9pZGVudGlmaWVyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPERldmljZUluZm8+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgY2xvc2UocGFyYW1zOiB7IGFkZHJlc3M6IHN0cmluZyB9KTogUHJvbWlzZTxEZXZpY2VJbmZvPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGRpc2NvdmVyXG4gICAqIERpc2NvdmVyIGFsbCB0aGUgZGV2aWNlcyBzZXJ2aWNlcywgY2hhcmFjdGVyaXN0aWNzIGFuZCBkZXNjcmlwdG9ycy5cbiAgICogRG9lc24ndCBuZWVkIHRvIGJlIGNhbGxlZCBhZ2FpbiBhZnRlciBkaXNjb25uZWN0aW5nIGFuZCB0aGVuIHJlY29ubmVjdGluZy5cbiAgICogSWYgdXNpbmcgaU9TLCB5b3Ugc2hvdWxkbid0IHVzZSBkaXNjb3ZlciBhbmQgc2VydmljZXMvY2hhcmFjdGVyaXN0aWNzL2Rlc2NyaXB0b3JzIG9uIHRoZSBzYW1lIGRldmljZS5cbiAgICogVGhlcmUgc2VlbXMgdG8gYmUgYW4gaXNzdWUgd2l0aCBjYWxsaW5nIGRpc2NvdmVyIG9uIGlPUzggZGV2aWNlcywgc28gdXNlIHdpdGggY2F1dGlvbi5cbiAgICogT24gc29tZSBBbmRyb2lkIHZlcnNpb25zLCB0aGUgZGlzY292ZXJlZCBzZXJ2aWNlcyBtYXkgYmUgY2FjaGVkIGZvciBhIGRldmljZS5cbiAgICogU3Vic2VxdWVudCBkaXNjb3ZlciBldmVudHMgd2lsbCBtYWtlIHVzZSBvZiB0aGlzIGNhY2hlLlxuICAgKiBJZiB5b3VyIGRldmljZSdzIHNlcnZpY2VzIGNoYW5nZSwgc2V0IHRoZSBjbGVhckNhY2hlIHBhcmFtZXRlciB0byBmb3JjZSBBbmRyb2lkIHRvIHJlLWRpc2NvdmVyIHNlcnZpY2VzLlxuICAgKiBAcGFyYW0ge3sgYWRkcmVzczogc3RyaW5nLCBjbGVhckNhY2hlOiBib29sZWFuIH19IHBhcmFtcyBUaGUgYWRkcmVzcy9pZGVudGlmaWVyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPERldmljZT59XG4gICAqICAgIHN1Y2Nlc3M6IGRldmljZSBvYmplY3QgKGNvbnRhaW5zIGFycmF5IG9mIHNlcnZpY2Ugb2JqZWN0cylcbiAgICogICAgZXJyb3I6IFRoZSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIHVuYm9uZCBvcGVyYXRpb24gZmFpbHNcbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIGRpc2NvdmVyKHBhcmFtczogeyBhZGRyZXNzOiBzdHJpbmc7IGNsZWFyQ2FjaGU/OiBib29sZWFuIH0pOiBQcm9taXNlPERldmljZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzZXJ2aWNlcyAoaU9TKVxuICAgKiBEaXNjb3ZlciB0aGUgZGV2aWNlJ3Mgc2VydmljZXMuXG4gICAqIE5vdCBwcm92aWRpbmcgYW4gYXJyYXkgb2Ygc2VydmljZXMgd2lsbCByZXR1cm4gYWxsIHNlcnZpY2VzIGFuZCB0YWtlIGxvbmdlciB0byBkaXNjb3Zlci4gaU9TIHN1cHBvcnQgb25seS5cbiAgICogQHBhcmFtIHt7YWRkcmVzczogc3RyaW5nLCBzZXJ2aWNlczogc3RyaW5nW119fSBwYXJhbXNcbiAgICogQHJldHVybnMge1Byb21pc2U8U2VydmljZXM+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgc2VydmljZXMocGFyYW1zOiB7IGFkZHJlc3M6IHN0cmluZzsgc2VydmljZXM/OiBzdHJpbmdbXSB9KTogUHJvbWlzZTxTZXJ2aWNlcz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBjaGFyYWN0ZXJpc3RpY3MgKGlPUylcbiAgICogRGlzY292ZXIgdGhlIHNlcnZpY2UncyBjaGFyYWN0ZXJpc3RpY3MuXG4gICAqIE5vdCBwcm92aWRpbmcgYW4gYXJyYXkgb2YgY2hhcmFjdGVyaXN0aWNzIHdpbGwgcmV0dXJuIGFsbCBjaGFyYWN0ZXJpc3RpY3MgYW5kIHRha2UgbG9uZ2VyIHRvIGRpc2NvdmVyLiBpT1Mgc3VwcG9ydCBvbmx5LlxuICAgKiBAcGFyYW0ge0NoYXJhY3RlcmlzdGljUGFyYW1zfSBwYXJhbXMgQ2hhcmFjdGVyaXN0aWMgcGFyYW1zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHsgY2hhcmFjdGVyaXN0aWNzOiBDaGFyYWN0ZXJpc3RpY3MgfT59IFRoZSBzZXJ2aWNlIGlkIGFuZCBhbiBBcnJheSBvZiBjaGFyYWN0ZXJpc3RpY3NcbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIGNoYXJhY3RlcmlzdGljcyhwYXJhbXM6IENoYXJhY3RlcmlzdGljUGFyYW1zKTogUHJvbWlzZTx7IGNoYXJhY3RlcmlzdGljczogQ2hhcmFjdGVyaXN0aWNzIH0+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgZGVzY3JpcHRvcnMgKGlPUylcbiAgICogRGlzY292ZXIgdGhlIGNoYXJhY3RlcmlzdGljJ3MgZGVzY3JpcHRvcnMuIGlPUyBzdXBwb3J0IG9ubHkuXG4gICAqIEBwYXJhbSB7RGVzY3JpcHRvclBhcmFtc30gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHsgZGVzY3JpcHRvcnM6IERlc2NyaXB0b3JzIH0+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgZGVzY3JpcHRvcnMocGFyYW1zOiBEZXNjcmlwdG9yUGFyYW1zKTogUHJvbWlzZTx7IGRlc2NyaXB0b3JzOiBEZXNjcmlwdG9ycyB9PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHJlYWRcbiAgICogUmVhZCBhIHBhcnRpY3VsYXIgc2VydmljZSdzIGNoYXJhY3RlcmlzdGljIG9uY2VcbiAgICogQHBhcmFtIHtEZXNjcmlwdG9yUGFyYW1zfSBwYXJhbXNcbiAgICogQHJldHVybnMge1Byb21pc2U8T3BlcmF0aW9uUmVzdWx0Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIHJlYWQocGFyYW1zOiBEZXNjcmlwdG9yUGFyYW1zKTogUHJvbWlzZTxPcGVyYXRpb25SZXN1bHQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc3Vic2NyaWJlXG4gICAqIFN1YnNjcmliZSB0byBhIHBhcnRpY3VsYXIgc2VydmljZSdzIGNoYXJhY3RlcmlzdGljLlxuICAgKiBPbmNlIGEgc3Vic2NyaXB0aW9uIGlzIG5vIGxvbmdlciBuZWVkZWQsIGV4ZWN1dGUgdW5zdWJzY3JpYmUgaW4gYSBzaW1pbGFyIGZhc2hpb24uXG4gICAqIFRoZSBDbGllbnQgQ29uZmlndXJhdGlvbiBkZXNjcmlwdG9yIHdpbGwgYXV0b21hdGljYWxseSBiZSB3cml0dGVuIHRvIGVuYWJsZSBub3RpZmljYXRpb24vaW5kaWNhdGlvbiBiYXNlZCBvbiB0aGUgY2hhcmFjdGVyaXN0aWMncyBwcm9wZXJ0aWVzLlxuICAgKiBAcGFyYW0ge0Rlc2NyaXB0b3JQYXJhbXN9IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxPcGVyYXRpb25SZXN1bHQ+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsIG9ic2VydmFibGU6IHRydWUgfSlcbiAgc3Vic2NyaWJlKHBhcmFtczogRGVzY3JpcHRvclBhcmFtcyk6IE9ic2VydmFibGU8T3BlcmF0aW9uUmVzdWx0PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHVuc3Vic2NyaWJlXG4gICAqIFVuc3Vic2NyaWJlIHRvIGEgcGFydGljdWxhciBzZXJ2aWNlJ3MgY2hhcmFjdGVyaXN0aWMuXG4gICAqIEBwYXJhbSB7RGVzY3JpcHRvclBhcmFtc30gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFVuc3Vic2NyaWJlUmVzdWx0Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIHVuc3Vic2NyaWJlKHBhcmFtczogRGVzY3JpcHRvclBhcmFtcyk6IFByb21pc2U8VW5zdWJzY3JpYmVSZXN1bHQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgd3JpdGUgKGxpbWl0YXRpb24gb24gaU9TLCByZWFkIGJlbG93KVxuICAgKiBXcml0ZSBhIHBhcnRpY3VsYXIgc2VydmljZSdzIGNoYXJhY3RlcmlzdGljXG4gICAqIE5vdGU6IG5vIGNhbGxiYWNrIHdpbGwgb2NjdXIgb24gd3JpdGUgd2l0aG91dCByZXNwb25zZSBvbiBpT1MuXG4gICAqIEBwYXJhbSB7V3JpdGVDaGFyYWN0ZXJpc3RpY1BhcmFtc30gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPE9wZXJhdGlvblJlc3VsdD59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICB3cml0ZShwYXJhbXM6IFdyaXRlQ2hhcmFjdGVyaXN0aWNQYXJhbXMpOiBQcm9taXNlPE9wZXJhdGlvblJlc3VsdD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSB3cml0ZSAobGltaXRhdGlvbiBvbiBpT1MsIHJlYWQgYmVsb3cpXG4gICAqIFdyaXRlIFF1aWNrIC8gUXVldWUsIHVzZSB0aGlzIG1ldGhvZCB0byBxdWlja2x5IGV4ZWN1dGUgd3JpdGUgd2l0aG91dCByZXNwb25zZSBjb21tYW5kcyB3aGVuIHdyaXRpbmcgbW9yZSB0aGFuIDIwIGJ5dGVzIGF0IGEgdGltZS5cbiAgICogTm90ZTogbm8gY2FsbGJhY2sgd2lsbCBvY2N1ciBvbiB3cml0ZSB3aXRob3V0IHJlc3BvbnNlIG9uIGlPUy5cbiAgICogQHBhcmFtIHtXcml0ZUNoYXJhY3RlcmlzdGljUGFyYW1zfSBwYXJhbXNcbiAgICogQHJldHVybnMge1Byb21pc2U8T3BlcmF0aW9uUmVzdWx0Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIHdyaXRlUShwYXJhbXM6IFdyaXRlQ2hhcmFjdGVyaXN0aWNQYXJhbXMpOiBQcm9taXNlPE9wZXJhdGlvblJlc3VsdD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSB3cml0ZUNvbW1hbmRJbkJ5dGVBcnJheSAoQW5kcm9pZCBPbmx5KVxuICAgKiBXcml0ZSBoZXhhZGVjaW1hbCBieXRlIHRvIGEgcGFydGljdWxhciBzZXJ2aWNlJ3MgY2hhcmFjdGVyaXN0aWNcbiAgICogTm90ZTogbm8gY2FsbGJhY2sgd2lsbCBvY2N1ciBvbiB3cml0ZSB3aXRob3V0IHJlc3BvbnNlIG9uIGlPUy5cbiAgICogQHBhcmFtIHtXcml0ZUNoYXJhY3RlcmlzdGljUGFyYW1zfSBwYXJhbXNcbiAgICogQHJldHVybnMge1Byb21pc2U8T3BlcmF0aW9uUmVzdWx0Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIHdyaXRlQ29tbWFuZEluQnl0ZUFycmF5KHBhcmFtczogV3JpdGVDaGFyYWN0ZXJpc3RpY1BhcmFtcyk6IFByb21pc2U8T3BlcmF0aW9uUmVzdWx0PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHJlYWREZXNjcmlwdG9yXG4gICAqIFJlYWQgYSBwYXJ0aWN1bGFyIGNoYXJhY3RlcmlzdCdzIGRlc2NyaXB0b3JcbiAgICogQHBhcmFtIHtPcGVyYXRpb25EZXNjcmlwdG9yUGFyYW1zfSBwYXJhbXNcbiAgICogQHJldHVybnMge1Byb21pc2U8RGVzY3JpcHRvclJlc3VsdD59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICByZWFkRGVzY3JpcHRvcihwYXJhbXM6IE9wZXJhdGlvbkRlc2NyaXB0b3JQYXJhbXMpOiBQcm9taXNlPERlc2NyaXB0b3JSZXN1bHQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgd3JpdGVEZXNjcmlwdG9yXG4gICAqIFdyaXRlIGEgcGFydGljdWxhciBjaGFyYWN0ZXJpc3RpYydzIGRlc2NyaXB0b3IuIFVuYWJsZSB0byB3cml0ZSBjaGFyYWN0ZXJpc3RpYyBjb25maWd1cmF0aW9uIGRpcmVjdGx5IHRvIGtlZXAgaW4gbGluZSB3aXRoIGlPUyBpbXBsZW1lbnRhdGlvbi5cbiAgICogSW5zdGVhZCB1c2Ugc3Vic2NyaWJlL3Vuc3Vic2NyaWJlLCB3aGljaCB3aWxsIGF1dG9tYXRpY2FsbHkgZW5hYmxlL2Rpc2FibGUgbm90aWZpY2F0aW9uLlxuICAgKiBAcGFyYW0ge1dyaXRlRGVzY3JpcHRvclBhcmFtc30gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPERlc2NyaXB0b3JSZXN1bHQ+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgd3JpdGVEZXNjcmlwdG9yKHBhcmFtczogV3JpdGVEZXNjcmlwdG9yUGFyYW1zKTogUHJvbWlzZTxEZXNjcmlwdG9yUmVzdWx0PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHJzc2lcbiAgICogUmVhZCBSU1NJIG9mIGEgY29ubmVjdGVkIGRldmljZS4gUlNTSSBpcyBhbHNvIHJldHVybmVkIHdpdGggc2Nhbm5pbmcuXG4gICAqIEBwYXJhbSB7eyBhZGRyZXNzOiBzdHJpbmcgfX0gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPCBSU1NJID59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICByc3NpKHBhcmFtczogeyBhZGRyZXNzOiBzdHJpbmcgfSk6IFByb21pc2U8UlNTST4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBtdHUgKEFuZHJvaWQsIEFuZHJvaWQgNSspXG4gICAqIFNldCBNVFUgb2YgYSBjb25uZWN0ZWQgZGV2aWNlLiBBbmRyb2lkIG9ubHkuXG4gICAqIEBwYXJhbSB7eyBhZGRyZXNzOiBzdHJpbmcsIG10dTogbnVtYmVyIH19IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTwgTVRVID59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICBtdHUocGFyYW1zOiB7IGFkZHJlc3M6IHN0cmluZzsgbXR1PzogbnVtYmVyIH0pOiBQcm9taXNlPE1UVT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSByZXF1ZXN0Q29ubmVjdGlvblByaW9yaXR5IChBbmRyb2lkLCBBbmRyb2lkIDUrKVxuICAgKiBSZXF1ZXN0IGEgY2hhbmdlIGluIHRoZSBjb25uZWN0aW9uIHByaW9yaXR5IHRvIGltcHJvdmUgdGhyb3VnaHB1dCB3aGVuIHRyYW5zZmVyIGxhcmdlIGFtb3VudHMgb2YgZGF0YSB2aWEgQkxFLlxuICAgKiBBbmRyb2lkIHN1cHBvcnQgb25seS4gaU9TIHdpbGwgcmV0dXJuIGVycm9yLlxuICAgKiBAcGFyYW0ge3sgYWRkcmVzczogc3RyaW5nLCBjb25uZWN0aW9uUHJpb3JpdHk6IENvbm5lY3Rpb25Qcmlvcml0eSB9fSBwYXJhbXNcbiAgICogQHJldHVybnMge1Byb21pc2U8RGV2aWNlSW5mbz59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICByZXF1ZXN0Q29ubmVjdGlvblByaW9yaXR5KHBhcmFtczogeyBhZGRyZXNzOiBzdHJpbmc7IGNvbm5lY3Rpb25Qcmlvcml0eTogQ29ubmVjdGlvblByaW9yaXR5IH0pOiBQcm9taXNlPERldmljZUluZm8+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgaXNJbml0aWFsaXplZFxuICAgKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgYWRhcHRlciBpcyBpbml0aWFsaXplZC4gTm8gZXJyb3IgY2FsbGJhY2suIFJldHVybnMgdHJ1ZSBvciBmYWxzZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7IGlzSW5pdGlhbGl6ZWQ6IGJvb2xlYW4gfT59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICBpc0luaXRpYWxpemVkKCk6IFByb21pc2U8eyBpc0luaXRpYWxpemVkOiBib29sZWFuIH0+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgaXNFbmFibGVkXG4gICAqIERldGVybWluZSB3aGV0aGVyIHRoZSBhZGFwdGVyIGlzIGVuYWJsZWQuIE5vIGVycm9yIGNhbGxiYWNrXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHsgaXNFbmFibGVkOiBib29sZWFuIH0+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgaXNFbmFibGVkKCk6IFByb21pc2U8eyBpc0VuYWJsZWQ6IGJvb2xlYW4gfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBpc1NjYW5uaW5nXG4gICAqIERldGVybWluZSB3aGV0aGVyIHRoZSBhZGFwdGVyIGlzIHNjYW5uaW5nLiBObyBlcnJvciBjYWxsYmFjay4gUmV0dXJucyB0cnVlIG9yIGZhbHNlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHsgaXNTY2FubmluZzogYm9vbGVhbiB9Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIGlzU2Nhbm5pbmcoKTogUHJvbWlzZTx7IGlzU2Nhbm5pbmc6IGJvb2xlYW4gfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBpc0JvbmRlZCAoQW5kcm9pZClcbiAgICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGRldmljZSBpcyBib25kZWQgb3Igbm90LCBvciBlcnJvciBpZiBub3QgaW5pdGlhbGl6ZWQuIEFuZHJvaWQgc3VwcG9ydCBvbmx5LlxuICAgKiBAcGFyYW0ge3sgYWRkcmVzczogc3RyaW5nIH19IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxCb25kZWRTdGF0dXM+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgaXNCb25kZWQocGFyYW1zOiB7IGFkZHJlc3M6IHN0cmluZyB9KTogUHJvbWlzZTxCb25kZWRTdGF0dXM+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgd2FzQ29ubmVjdGVkXG4gICAqIERldGVybWluZSB3aGV0aGVyIHRoZSBkZXZpY2Ugd2FzIGNvbm5lY3RlZCwgb3IgZXJyb3IgaWYgbm90IGluaXRpYWxpemVkLlxuICAgKiBAcGFyYW0ge3sgYWRkcmVzczogc3RyaW5nIH19IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxQcmV2Q29ubmVjdGlvblN0YXR1cz59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICB3YXNDb25uZWN0ZWQocGFyYW1zOiB7IGFkZHJlc3M6IHN0cmluZyB9KTogUHJvbWlzZTxQcmV2Q29ubmVjdGlvblN0YXR1cz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBpc0Nvbm5lY3RlZFxuICAgKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZGV2aWNlIGlzIGNvbm5lY3RlZCwgb3IgZXJyb3IgaWYgbm90IGluaXRpYWxpemVkIG9yIG5ldmVyIGNvbm5lY3RlZCB0byBkZXZpY2VcbiAgICogQHBhcmFtIHt7IGFkZHJlc3M6IHN0cmluZyB9fSBwYXJhbXNcbiAgICogQHJldHVybnMge1Byb21pc2U8Q3VyckNvbm5lY3Rpb25TdGF0dXM+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgaXNDb25uZWN0ZWQocGFyYW1zOiB7IGFkZHJlc3M6IHN0cmluZyB9KTogUHJvbWlzZTxDdXJyQ29ubmVjdGlvblN0YXR1cz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBpc0Rpc2NvdmVyZWRcbiAgICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGRldmljZSdzIGNoYXJhY3RlcmlzdGljcyBhbmQgZGVzY3JpcHRvcnMgaGF2ZSBiZWVuIGRpc2NvdmVyZWQsIG9yIGVycm9yIGlmIG5vdCBpbml0aWFsaXplZCBvciBub3QgY29ubmVjdGVkIHRvIGRldmljZS5cbiAgICogQHBhcmFtIHt7IGFkZHJlc3M6IHN0cmluZyB9fSBwYXJhbXNcbiAgICogQHJldHVybnMge1Byb21pc2U8RGlzY292ZXJTdGF0dXM+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgaXNEaXNjb3ZlcmVkKHBhcmFtczogeyBhZGRyZXNzOiBzdHJpbmcgfSk6IFByb21pc2U8RGlzY292ZXJTdGF0dXM+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgaGFzUGVybWlzc2lvbiAodXNlZnVsIG9ubHkgZm9yIEFuZHJvaWQgNisgLyBBUEkgMjMpXG4gICAqIERldGVybWluZSB3aGV0aGVyIGNvYXJzZSBsb2NhdGlvbiBwcml2aWxlZ2VzIGFyZSBncmFudGVkIHNpbmNlIHNjYW5uaW5nIGZvciB1bnBhaXJlZCBkZXZpY2VzIHJlcXVpcmVzIGl0IGluIEFuZHJvaWQgQVBJIDIzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHsgaGFzUGVybWlzc2lvbjogYm9vbGVhbiB9Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIGhhc1Blcm1pc3Npb24oKTogUHJvbWlzZTx7IGhhc1Blcm1pc3Npb246IGJvb2xlYW4gfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSByZXF1ZXN0UGVybWlzc2lvbiAodXNlZnVsIG9ubHkgZm9yIEFuZHJvaWQgNisgLyBBUEkgMjMpXG4gICAqIFJlcXVlc3QgY29hcnNlIGxvY2F0aW9uIHByaXZpbGVnZXMgc2luY2Ugc2Nhbm5pbmcgZm9yIHVucGFpcmVkIGRldmljZXMgcmVxdWlyZXMgaXQgaW4gQW5kcm9pZCBBUEkgMjMuXG4gICAqIFdpbGwgcmV0dXJuIGFuIGVycm9yIGlmIGNhbGxlZCBvbiBpT1Mgb3IgQW5kcm9pZCB2ZXJzaW9ucyBwcmlvciB0byA2LjAuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHsgcmVxdWVzdFBlcm1pc3Npb246IGJvb2xlYW4gfT59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICByZXF1ZXN0UGVybWlzc2lvbigpOiBQcm9taXNlPHsgcmVxdWVzdFBlcm1pc3Npb246IGJvb2xlYW4gfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBpc0xvY2F0aW9uRW5hYmxlZCAodXNlZnVsIG9ubHkgZm9yIEFuZHJvaWQgNisgLyBBUEkgMjMpXG4gICAqIERldGVybWluZSBpZiBsb2NhdGlvbiBzZXJ2aWNlcyBhcmUgZW5hYmxlZCBvciBub3QuIExvY2F0aW9uIFNlcnZpY2VzIGFyZSByZXF1aXJlZCB0byBmaW5kIGRldmljZXMgaW4gQW5kcm9pZCBBUEkgMjNcbiAgICogQHJldHVybnMge1Byb21pc2U8eyBpc0xvY2F0aW9uRW5hYmxlZDogYm9vbGVhbiB9Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIGlzTG9jYXRpb25FbmFibGVkKCk6IFByb21pc2U8eyBpc0xvY2F0aW9uRW5hYmxlZDogYm9vbGVhbiB9PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHJlcXVlc3RMb2NhdGlvbiAodXNlZnVsIG9ubHkgZm9yIEFuZHJvaWQgNisgLyBBUEkgMjMpXG4gICAqIFByb21wdCBsb2NhdGlvbiBzZXJ2aWNlcyBzZXR0aW5ncyBwYWdlcy4gcmVxdWVzdExvY2F0aW9uIHByb3BlcnR5IHJldHVybnMgd2hldGhlciBsb2NhdGlvbiBzZXJ2aWNlcyBhcmUgZW5hYmxlZCBvciBkaXNhYmxlZC5cbiAgICogTG9jYXRpb24gU2VydmljZXMgYXJlIHJlcXVpcmVkIHRvIGZpbmQgZGV2aWNlcyBpbiBBbmRyb2lkIEFQSSAyMy5cbiAgICogQHJldHVybnMge1Byb21pc2U8eyByZXF1ZXN0TG9jYXRpb246IGJvb2xlYW4gfT59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICByZXF1ZXN0TG9jYXRpb24oKTogUHJvbWlzZTx7IHJlcXVlc3RMb2NhdGlvbjogYm9vbGVhbiB9PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGluaXRpYWxpemVQZXJpcGhlcmFsXG4gICAqIEluaXRpYWxpemUgQmx1ZXRvb3RoIG9uIHRoZSBkZXZpY2UuIE11c3QgYmUgY2FsbGVkIGJlZm9yZSBhbnl0aGluZyBlbHNlLlxuICAgKiBDYWxsYmFjayB3aWxsIGNvbnRpbnVvdXNseSBiZSB1c2VkIHdoZW5ldmVyIEJsdWV0b290aCBpcyBlbmFibGVkIG9yIGRpc2FibGVkLlxuICAgKiBAcGFyYW0ge0luaXRQZXJpcGhlcmFsUGFyYW1zfSBbcGFyYW1zXVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxJbml0aWFsaXplUmVzdWx0Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLCBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIGluaXRpYWxpemVQZXJpcGhlcmFsKHBhcmFtcz86IEluaXRQZXJpcGhlcmFsUGFyYW1zKTogT2JzZXJ2YWJsZTxJbml0aWFsaXplUmVzdWx0PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGFkZFNlcnZpY2VcbiAgICogQWRkIGEgc2VydmljZSB3aXRoIGNoYXJhY3RlcmlzdGljcyBhbmQgZGVzY3JpcHRvcnMuIElmIG1vcmUgdGhhbiBvbmUgc2VydmljZSBpcyBhZGRlZCwgYWRkIHRoZW0gc2VxdWVudGlhbGx5XG4gICAqIEBwYXJhbSB7eyBzZXJ2aWNlOiBzdHJpbmcsIGNoYXJhY3RlcmlzdGljczogQ2hhcmFjdGVyaXN0aWNbXSB9fSBwYXJhbXNcbiAgICogQHJldHVybnMge1Byb21pc2U8eyBzZXJ2aWNlOiBzdHJpbmcsIHN0YXR1czogU3RhdHVzIH0+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgYWRkU2VydmljZShwYXJhbXM6IHtcbiAgICBzZXJ2aWNlOiBzdHJpbmc7XG4gICAgY2hhcmFjdGVyaXN0aWNzOiBDaGFyYWN0ZXJpc3RpY1tdO1xuICB9KTogUHJvbWlzZTx7IHNlcnZpY2U6IHN0cmluZzsgc3RhdHVzOiBTdGF0dXMgfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSByZW1vdmVTZXJ2aWNlXG4gICAqIFJlbW92ZSBhIHNlcnZpY2VcbiAgICogQHBhcmFtIHt7IHNlcnZpY2U6IHN0cmluZyB9fSBwYXJhbXNcbiAgICogQHJldHVybnMge1Byb21pc2U8eyBzZXJ2aWNlOiBzdHJpbmcsIHN0YXR1czogU3RhdHVzIH0+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgcmVtb3ZlU2VydmljZShwYXJhbXM6IHsgc2VydmljZTogc3RyaW5nIH0pOiBQcm9taXNlPHsgc2VydmljZTogc3RyaW5nOyBzdGF0dXM6IFN0YXR1cyB9PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHJlbW92ZUFsbFNlcnZpY2VzXG4gICAqIFJlbW92ZSBhbGwgc2VydmljZXNcbiAgICogQHJldHVybnMge1Byb21pc2U8eyBzdGF0dXM6IFN0YXR1cyB9Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIHJlbW92ZUFsbFNlcnZpY2VzKCk6IFByb21pc2U8eyBzdGF0dXM6IFN0YXR1cyB9PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHN0YXJ0QWR2ZXJ0aXNpbmcgKGRpZmZlcmVudCBiZWhhdmlvciBvbiBBbmRyb2lkL2lPUywgcmVhZCBiZWxvdylcbiAgICogU3RhcnQgYWR2ZXJ0aXNpbmcgYXMgYSBCTEUgZGV2aWNlLlxuICAgKiBOb3RlOiBUaGlzIG5lZWRzIHRvIGJlIGltcHJvdmVkIHNvIHNlcnZpY2VzIGNhbiBiZSB1c2VkIGZvciBib3RoIEFuZHJvaWQgYW5kIGlPUy5cbiAgICogT24gaU9TLCB0aGUgYWR2ZXJ0aXNpbmcgZGV2aWNlcyBsaWtlcyB0byByZW5hbWUgaXRzZWxmIGJhY2sgdG8gdGhlIG5hbWUgb2YgdGhlIGRldmljZSwgaS5lLiBSYW5kJyBpUGhvbmVcbiAgICogQHBhcmFtIHtBZHZlcnRpc2luZ1BhcmFtc30gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHsgc3RhdHVzOiBTdGF0dXMgfT59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICBzdGFydEFkdmVydGlzaW5nKHBhcmFtczogQWR2ZXJ0aXNpbmdQYXJhbXMpOiBQcm9taXNlPHsgc3RhdHVzOiBTdGF0dXMgfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzdG9wQWR2ZXJ0aXNpbmdcbiAgICogU3RvcCBhZHZlcnRpc2luZ1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7IHN0YXR1czogU3RhdHVzIH0+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgc3RvcEFkdmVydGlzaW5nKCk6IFByb21pc2U8eyBzdGF0dXM6IFN0YXR1cyB9PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGlzQWR2ZXJ0aXNpbmdcbiAgICogRGV0ZXJtaW5lIGlmIGFwcCBpcyBhZHZlcnRpc2luZyBvciBub3QuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHsgc3RhdHVzOiBib29sZWFuIH0+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgaXNBZHZlcnRpc2luZygpOiBQcm9taXNlPHsgc3RhdHVzOiBib29sZWFuIH0+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgcmVzcG9uZFxuICAgKiBSZXNwb25kIHRvIGEgcmVhZCBvciB3cml0ZSByZXF1ZXN0XG4gICAqIEBwYXJhbSB7UmVzcG9uZFBhcmFtc30gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHsgc3RhdHVzOiBTdGF0dXMgfT59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICByZXNwb25kKHBhcmFtczogUmVzcG9uZFBhcmFtcyk6IFByb21pc2U8eyBzdGF0dXM6IFN0YXR1cyB9PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIG5vdGlmeVxuICAgKiBVcGRhdGUgYSB2YWx1ZSBmb3IgYSBzdWJzY3JpcHRpb24uIEN1cnJlbnRseSBhbGwgc3Vic2NyaWJlZCBkZXZpY2VzIHdpbGwgcmVjZWl2ZSB1cGRhdGUuXG4gICAqIERldmljZSBzcGVjaWZpYyB1cGRhdGVzIHdpbGwgYmUgYWRkZWQgaW4gdGhlIGZ1dHVyZS5cbiAgICogSWYgc2VudCBlcXVhbHMgZmFsc2UgaW4gdGhlIHJldHVybiB2YWx1ZSwgeW91IG11c3Qgd2FpdCBmb3IgdGhlIHBlcmlwaGVyYWxNYW5hZ2VySXNSZWFkeVRvVXBkYXRlU3Vic2NyaWJlcnMgZXZlbnQgYmVmb3JlIHNlbmRpbmcgbW9yZSB1cGRhdGVzLlxuICAgKiBAcGFyYW0ge05vdGlmeVBhcmFtc30gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHsgc3RhdHVzOiBTdGF0dXMsIHNlbnQ6IGJvb2xlYW4gfT59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICBub3RpZnkocGFyYW1zOiBOb3RpZnlQYXJhbXMpOiBQcm9taXNlPHsgc3RhdHVzOiBTdGF0dXM7IHNlbnQ6IGJvb2xlYW4gfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBlbmNvZGVkU3RyaW5nVG9CeXRlc1xuICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gY29udmVydCBhIGJhc2U2NCBlbmNvZGVkIHN0cmluZyBmcm9tIGEgY2hhcmFjdGVyaXN0aWMgb3IgZGVzY3JpcHRvciB2YWx1ZSBpbnRvIGEgdWludDhBcnJheSBvYmplY3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICAgKiBAcmV0dXJucyB7VWludDhBcnJheX1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBlbmNvZGVkU3RyaW5nVG9CeXRlcyh2YWx1ZTogc3RyaW5nKTogVWludDhBcnJheSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGJ5dGVzVG9FbmNvZGVkU3RyaW5nXG4gICAqIEhlbHBlciBmdW5jdGlvbiB0byBjb252ZXJ0IGEgdW5pdDhBcnJheSB0byBhIGJhc2U2NCBlbmNvZGVkIHN0cmluZyBmb3IgYSBjaGFyYWN0ZXJpYyBvciBkZXNjcmlwdG9yIHdyaXRlXG4gICAqIEBwYXJhbSB7VWludDhBcnJheX0gYnl0ZXNcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBieXRlc1RvRW5jb2RlZFN0cmluZyh2YWx1ZTogVWludDhBcnJheSk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHN0cmluZ1RvQnl0ZXNcbiAgICogSGVscGVyIGZ1bmN0aW9uIHRvIGNvbnZlcnQgYSBzdHJpbmcgdG8gYnl0ZXNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqIEByZXR1cm5zIHtVaW50OEFycmF5fVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHN0cmluZ1RvQnl0ZXModmFsdWU6IHN0cmluZyk6IFVpbnQ4QXJyYXkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBieXRlc1RvU3RyaW5nXG4gICAqIEhlbHBlciBmdW5jdGlvbiB0byBjb252ZXJ0IGJ5dGVzIHRvIGEgc3RyaW5nLlxuICAgKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IHZhbHVlXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgYnl0ZXNUb1N0cmluZyh2YWx1ZTogVWludDhBcnJheSk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIFNDQU5fTU9ERV9PUFBPUlRVTklTVElDOiBudW1iZXI7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBTQ0FOX01PREVfTE9XX1BPV0VSOiBudW1iZXI7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBTQ0FOX01PREVfQkFMQU5DRUQ6IG51bWJlcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIFNDQU5fTU9ERV9MT1dfTEFURU5DWTogbnVtYmVyO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgTUFUQ0hfTU9ERV9BR0dSRVNTSVZFOiBudW1iZXI7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBNQVRDSF9NT0RFX1NUSUNLWTogbnVtYmVyO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgTUFUQ0hfTlVNX09ORV9BRFZFUlRJU0VNRU5UOiBudW1iZXI7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBNQVRDSF9OVU1fRkVXX0FEVkVSVElTRU1FTlQ6IG51bWJlcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIE1BVENIX05VTV9NQVhfQURWRVJUSVNFTUVOVDogbnVtYmVyO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgQ0FMTEJBQ0tfVFlQRV9BTExfTUFUQ0hFUzogbnVtYmVyO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgQ0FMTEJBQ0tfVFlQRV9GSVJTVF9NQVRDSDogbnVtYmVyO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgQ0FMTEJBQ0tfVFlQRV9NQVRDSF9MT1NUOiBudW1iZXI7XG59XG4iXX0=
