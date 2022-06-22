(() => {
  var t = {
      335: (t, e, n) => {
        var r = {
          "./Apple.svg": 297,
          "./Avocado.svg": 535,
          "./Banana.svg": 158,
          "./Broccoli.svg": 935,
          "./Cactus.svg": 370,
          "./Citrus.svg": 670,
          "./Grapes.svg": 282,
          "./Hazelnut.svg": 463,
          "./Melon.svg": 200,
          "./Nut.svg": 807,
          "./Pear.svg": 765,
          "./Plum.svg": 321,
          "./Pomegranate.svg": 11,
          "./Raspberry.svg": 510,
          "./Tomato.svg": 585,
          "./Watermelon.svg": 393,
        };
        function o(t) {
          var e = i(t);
          return n(e);
        }
        function i(t) {
          if (!n.o(r, t)) {
            var e = new Error("Cannot find module '" + t + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          }
          return r[t];
        }
        (o.keys = function () {
          return Object.keys(r);
        }),
          (o.resolve = i),
          (t.exports = o),
          (o.id = 335);
      },
      297: (t, e, n) => {
        "use strict";
        t.exports = n.p + "3c856104bdf6659e8a9d.svg";
      },
      535: (t, e, n) => {
        "use strict";
        t.exports = n.p + "7e1849bcc60589f5a8a5.svg";
      },
      158: (t, e, n) => {
        "use strict";
        t.exports = n.p + "ea2a3d136f1ad1fbbef9.svg";
      },
      935: (t, e, n) => {
        "use strict";
        t.exports = n.p + "caa3382377dd3c633b07.svg";
      },
      370: (t, e, n) => {
        "use strict";
        t.exports = n.p + "194734dc40e808b7b641.svg";
      },
      670: (t, e, n) => {
        "use strict";
        t.exports = n.p + "5c02620f7ce7718af45f.svg";
      },
      282: (t, e, n) => {
        "use strict";
        t.exports = n.p + "40385df2f985d1962cf2.svg";
      },
      463: (t, e, n) => {
        "use strict";
        t.exports = n.p + "554f5d153aad2948e0c7.svg";
      },
      200: (t, e, n) => {
        "use strict";
        t.exports = n.p + "3b0870b8414a1c9a0a2a.svg";
      },
      807: (t, e, n) => {
        "use strict";
        t.exports = n.p + "2edc70468384b78f121f.svg";
      },
      765: (t, e, n) => {
        "use strict";
        t.exports = n.p + "555cdca3f0dd966e94f5.svg";
      },
      321: (t, e, n) => {
        "use strict";
        t.exports = n.p + "bad03b245603240e266d.svg";
      },
      11: (t, e, n) => {
        "use strict";
        t.exports = n.p + "f7fcf7e37c7dcddb6e41.svg";
      },
      510: (t, e, n) => {
        "use strict";
        t.exports = n.p + "bc5ab9077f5397a1f72c.svg";
      },
      585: (t, e, n) => {
        "use strict";
        t.exports = n.p + "f798d8b3854dd079b61e.svg";
      },
      393: (t, e, n) => {
        "use strict";
        t.exports = n.p + "af87264ffc6d74b6dbd9.svg";
      },
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var i = (e[r] = { exports: {} });
    return t[r](i, i.exports, n), i.exports;
  }
  (n.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (t) {
      if ("object" == typeof window) return window;
    }
  })()),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      var t;
      n.g.importScripts && (t = n.g.location + "");
      var e = n.g.document;
      if (!t && e && (e.currentScript && (t = e.currentScript.src), !t)) {
        var r = e.getElementsByTagName("script");
        r.length && (t = r[r.length - 1].src);
      }
      if (!t)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (t = t
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = t);
    })(),
    (() => {
      "use strict";
      function t(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function e(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      var r = {},
        o = (function () {
          function o() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : o.random();
            t(this, o),
              (this.name = e),
              r[e]
                ? (this.img = r[e].cloneNode())
                : ((this.img = new Image()),
                  (this.img.src = n(335)("./".concat(e, ".svg"))),
                  (r[e] = this.img));
          }
          var i, a;
          return (
            (i = o),
            (a = [
              {
                key: "preload",
                value: function () {
                  o.symbols.forEach(function (t) {
                    return new o(t);
                  });
                },
              },
              {
                key: "symbols",
                get: function () {
                  return [
                    "Apple",
                    "Avocado",
                    "Banana",
                    "Broccoli",
                    "Cactus",
                    "Citrus",
                    "Grapes",
                    "Hazelnut",
                    "Melon",
                    "Nut",
                    "Pear",
                    "Plum",
                    "Pomegranate",
                    "Raspberry",
                    "Tomato",
                    "Watermelon",
                  ];
                },
              },
              {
                key: "random",
                value: function () {
                  return this.symbols[
                    Math.floor(Math.random() * this.symbols.length)
                  ];
                },
              },
            ]),
            null && e(i.prototype, null),
            a && e(i, a),
            Object.defineProperty(i, "prototype", { writable: !1 }),
            o
          );
        })();
      function i(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      var a = (function () {
        function t(e, n, r) {
          var i = this;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.reelContainer = e),
            (this.idx = n),
            (this.symbolContainer = document.createElement("div")),
            this.symbolContainer.classList.add("icons"),
            this.reelContainer.appendChild(this.symbolContainer),
            (this.animation = this.symbolContainer.animate(
              [
                { transform: "none", filter: "blur(0)" },
                { filter: "blur(2px)", offset: 0.5 },
                {
                  transform: "translateY(-".concat(
                    ((10 * Math.floor(this.factor)) /
                      (3 + 10 * Math.floor(this.factor))) *
                      100,
                    "%)"
                  ),
                  filter: "blur(0)",
                },
              ],
              { duration: 1e3 * this.factor, easing: "ease-in-out" }
            )),
            this.animation.cancel(),
            r.forEach(function (t) {
              return i.symbolContainer.appendChild(new o(t).img);
            });
        }
        var e, n;
        return (
          (e = t),
          (n = [
            {
              key: "factor",
              get: function () {
                return 1 + Math.pow(this.idx / 2, 2);
              },
            },
            {
              key: "renderSymbols",
              value: function (t) {
                for (
                  var e = document.createDocumentFragment(), n = 3;
                  n < 3 + 10 * Math.floor(this.factor);
                  n++
                ) {
                  var r = new o(
                    n >= 10 * Math.floor(this.factor) - 2
                      ? t[n - 10 * Math.floor(this.factor)]
                      : void 0
                  );
                  e.appendChild(r.img);
                }
                this.symbolContainer.appendChild(e);
              },
            },
            {
              key: "spin",
              value: function () {
                var t = this,
                  e = new Promise(function (e) {
                    return (t.animation.onfinish = e);
                  }),
                  n = new Promise(function (e) {
                    return setTimeout(e, 1e3 * t.factor);
                  });
                return (
                  this.animation.play(),
                  Promise.race([e, n]).then(function () {
                    "finished" !== t.animation.playState &&
                      t.animation.finish();
                    for (
                      var e = t.symbolContainer.children.length - 3, n = 0;
                      n < e;
                      n++
                    )
                      t.symbolContainer.firstChild.remove();
                  })
                );
              },
            },
          ]) && i(e.prototype, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t
        );
      })();
      function s(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function l(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      var p = (function () {
          function t(e) {
            var n = this,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            s(this, t),
              o.preload(),
              (this.currentSymbols = [
                ["Apple", "Apple", "Apple"],
                ["Apple", "Apple", "Apple"],
                ["Apple", "Apple", "Apple"],
                ["Apple", "Apple", "Apple"],
                ["Apple", "Apple", "Apple"],
              ]),
              (this.nextSymbols = [
                ["Apple", "Apple", "Apple"],
                ["Apple", "Apple", "Apple"],
                ["Apple", "Apple", "Apple"],
                ["Apple", "Apple", "Apple"],
                ["Apple", "Apple", "Apple"],
              ]),
              (this.container = e),
              (this.reels = Array.from(
                this.container.getElementsByClassName("reel")
              ).map(function (t, e) {
                return new a(t, e, n.currentSymbols[e]);
              })),
              (this.spinButton = document.getElementById("spin")),
              this.spinButton.addEventListener("click", function () {
                return n.spin();
              }),
              (this.autoPlayCheckbox = document.getElementById("autoplay")),
              r.inverted && this.container.classList.add("inverted"),
              (this.config = r);
          }
          var e, n;
          return (
            (e = t),
            (n = [
              {
                key: "spin",
                value: function () {
                  var t = this;
                  return (
                    (this.currentSymbols = this.nextSymbols),
                    (this.nextSymbols = [
                      [o.random(), o.random(), o.random()],
                      [o.random(), o.random(), o.random()],
                      [o.random(), o.random(), o.random()],
                      [o.random(), o.random(), o.random()],
                      [o.random(), o.random(), o.random()],
                    ]),
                    this.onSpinStart(this.nextSymbols),
                    Promise.all(
                      this.reels.map(function (e) {
                        return e.renderSymbols(t.nextSymbols[e.idx]), e.spin();
                      })
                    ).then(function () {
                      return t.onSpinEnd(t.nextSymbols);
                    })
                  );
                },
              },
              {
                key: "onSpinStart",
                value: function (t) {
                  var e, n;
                  (this.spinButton.disabled = !0),
                    null === (e = (n = this.config).onSpinStart) ||
                      void 0 === e ||
                      e.call(n, t);
                },
              },
              {
                key: "onSpinEnd",
                value: function (t) {
                  var e,
                    n,
                    r = this;
                  if (
                    ((this.spinButton.disabled = !1),
                    null === (e = (n = this.config).onSpinEnd) ||
                      void 0 === e ||
                      e.call(n, t),
                    this.autoPlayCheckbox.checked)
                  )
                    return window.setTimeout(function () {
                      return r.spin();
                    }, 200);
                },
              },
            ]) && l(e.prototype, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t
          );
        })(),
        c = {
          inverted: !1,
          onSpinStart: function (t) {
            console.log("onSpinStart", t);
          },
          onSpinEnd: function (t) {
            console.log("onSpinEnd", t);
          },
        };
      new p(document.getElementById("slot"), c);
    })();
})();
