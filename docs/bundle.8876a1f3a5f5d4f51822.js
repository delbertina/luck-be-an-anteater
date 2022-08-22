(() => {
  var e = {
      335: (e, t, n) => {
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
        function o(e) {
          var t = i(e);
          return n(t);
        }
        function i(e) {
          if (!n.o(r, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          }
          return r[e];
        }
        (o.keys = function () {
          return Object.keys(r);
        }),
          (o.resolve = i),
          (e.exports = o),
          (o.id = 335);
      },
      297: (e, t, n) => {
        "use strict";
        e.exports = n.p + "3c856104bdf6659e8a9d.svg";
      },
      535: (e, t, n) => {
        "use strict";
        e.exports = n.p + "7e1849bcc60589f5a8a5.svg";
      },
      158: (e, t, n) => {
        "use strict";
        e.exports = n.p + "ea2a3d136f1ad1fbbef9.svg";
      },
      935: (e, t, n) => {
        "use strict";
        e.exports = n.p + "caa3382377dd3c633b07.svg";
      },
      370: (e, t, n) => {
        "use strict";
        e.exports = n.p + "194734dc40e808b7b641.svg";
      },
      670: (e, t, n) => {
        "use strict";
        e.exports = n.p + "5c02620f7ce7718af45f.svg";
      },
      282: (e, t, n) => {
        "use strict";
        e.exports = n.p + "40385df2f985d1962cf2.svg";
      },
      463: (e, t, n) => {
        "use strict";
        e.exports = n.p + "554f5d153aad2948e0c7.svg";
      },
      200: (e, t, n) => {
        "use strict";
        e.exports = n.p + "3b0870b8414a1c9a0a2a.svg";
      },
      807: (e, t, n) => {
        "use strict";
        e.exports = n.p + "2edc70468384b78f121f.svg";
      },
      765: (e, t, n) => {
        "use strict";
        e.exports = n.p + "555cdca3f0dd966e94f5.svg";
      },
      321: (e, t, n) => {
        "use strict";
        e.exports = n.p + "bad03b245603240e266d.svg";
      },
      11: (e, t, n) => {
        "use strict";
        e.exports = n.p + "f7fcf7e37c7dcddb6e41.svg";
      },
      510: (e, t, n) => {
        "use strict";
        e.exports = n.p + "bc5ab9077f5397a1f72c.svg";
      },
      585: (e, t, n) => {
        "use strict";
        e.exports = n.p + "f798d8b3854dd079b61e.svg";
      },
      393: (e, t, n) => {
        "use strict";
        e.exports = n.p + "af87264ffc6d74b6dbd9.svg";
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { exports: {} });
    return e[r](i, i.exports, n), i.exports;
  }
  (n.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) return window;
    }
  })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e;
      n.g.importScripts && (e = n.g.location + "");
      var t = n.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var r = t.getElementsByTagName("script");
        r.length && (e = r[r.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = e);
    })(),
    (() => {
      "use strict";
      function e(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function t(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var r = {},
        o = (function () {
          function o() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : o.random();
            e(this, o),
              (this.name = t),
              r[t]
                ? (this.img = r[t].cloneNode())
                : ((this.img = new Image()),
                  (this.img.src = n(335)("./".concat(t, ".svg"))),
                  (r[t] = this.img));
          }
          var i, a;
          return (
            (i = o),
            (a = [
              {
                key: "preload",
                value: function () {
                  o.symbols.forEach(function (e) {
                    return new o(e);
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
            null && t(i.prototype, null),
            a && t(i, a),
            Object.defineProperty(i, "prototype", { writable: !1 }),
            o
          );
        })();
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var a = (function () {
        function e(t, n, r) {
          var i = this;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.reelContainer = t),
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
                      (5 + 10 * Math.floor(this.factor))) *
                      100,
                    "%)"
                  ),
                  filter: "blur(0)",
                },
              ],
              { duration: 1e3 * this.factor, easing: "ease-in-out" }
            )),
            this.animation.cancel(),
            r.forEach(function (e) {
              return i.symbolContainer.appendChild(new o(e).img);
            });
        }
        var t, n;
        return (
          (t = e),
          (n = [
            {
              key: "factor",
              get: function () {
                return 1 + Math.pow(this.idx / 2, 2);
              },
            },
            {
              key: "renderSymbols",
              value: function (e) {
                for (
                  var t = document.createDocumentFragment(), n = 5;
                  n < 5 + 10 * Math.floor(this.factor);
                  n++
                ) {
                  var r = new o(
                    n >= 10 * Math.floor(this.factor) - 2
                      ? e[n - 10 * Math.floor(this.factor)]
                      : void 0
                  );
                  t.appendChild(r.img);
                }
                this.symbolContainer.appendChild(t);
              },
            },
            {
              key: "spin",
              value: function () {
                var e = this,
                  t = new Promise(function (t) {
                    return (e.animation.onfinish = t);
                  }),
                  n = new Promise(function (t) {
                    return setTimeout(t, 1e3 * e.factor);
                  });
                return (
                  this.animation.play(),
                  Promise.race([t, n]).then(function () {
                    "finished" !== e.animation.playState &&
                      e.animation.finish();
                    for (
                      var t = e.symbolContainer.children.length - 5, n = 0;
                      n < t;
                      n++
                    )
                      e.symbolContainer.firstChild.remove();
                  })
                );
              },
            },
          ]) && i(t.prototype, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e
        );
      })();
      function s(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function p(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var l = (function () {
          function e(t) {
            var n = this,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            s(this, e),
              o.preload(),
              (this.currentSymbols = [
                ["Apple", "Apple", "Apple", "Apple", "Apple"],
                ["Apple", "Apple", "Apple", "Apple", "Apple"],
                ["Apple", "Apple", "Apple", "Apple", "Apple"],
                ["Apple", "Apple", "Apple", "Apple", "Apple"],
                ["Apple", "Apple", "Apple", "Apple", "Apple"],
              ]),
              (this.nextSymbols = [
                ["Apple", "Apple", "Apple", "Apple", "Apple"],
                ["Apple", "Apple", "Apple", "Apple", "Apple"],
                ["Apple", "Apple", "Apple", "Apple", "Apple"],
                ["Apple", "Apple", "Apple", "Apple", "Apple"],
                ["Apple", "Apple", "Apple", "Apple", "Apple"],
              ]),
              (this.container = t),
              (this.reels = Array.from(
                this.container.getElementsByClassName("reel")
              ).map(function (e, t) {
                return new a(e, t, n.currentSymbols[t]);
              })),
              (this.spinButton = document.getElementById("spin")),
              this.spinButton.addEventListener("click", function () {
                return n.spin();
              }),
              (this.autoPlayCheckbox = document.getElementById("autoplay")),
              r.inverted && this.container.classList.add("inverted"),
              (this.config = r);
          }
          var t, n;
          return (
            (t = e),
            (n = [
              {
                key: "spin",
                value: function () {
                  var e = this;
                  return (
                    (this.currentSymbols = this.nextSymbols),
                    (this.nextSymbols = [
                      [
                        o.random(),
                        o.random(),
                        o.random(),
                        o.random(),
                        o.random(),
                      ],
                      [
                        o.random(),
                        o.random(),
                        o.random(),
                        o.random(),
                        o.random(),
                      ],
                      [
                        o.random(),
                        o.random(),
                        o.random(),
                        o.random(),
                        o.random(),
                      ],
                      [
                        o.random(),
                        o.random(),
                        o.random(),
                        o.random(),
                        o.random(),
                      ],
                      [
                        o.random(),
                        o.random(),
                        o.random(),
                        o.random(),
                        o.random(),
                      ],
                    ]),
                    this.onSpinStart(this.nextSymbols),
                    Promise.all(
                      this.reels.map(function (t) {
                        return t.renderSymbols(e.nextSymbols[t.idx]), t.spin();
                      })
                    ).then(function () {
                      return e.onSpinEnd(e.nextSymbols);
                    })
                  );
                },
              },
              {
                key: "onSpinStart",
                value: function (e) {
                  var t, n;
                  (this.spinButton.disabled = !0),
                    null === (t = (n = this.config).onSpinStart) ||
                      void 0 === t ||
                      t.call(n, e);
                },
              },
              {
                key: "onSpinEnd",
                value: function (e) {
                  var t,
                    n,
                    r = this;
                  if (
                    ((this.spinButton.disabled = !1),
                    null === (t = (n = this.config).onSpinEnd) ||
                      void 0 === t ||
                      t.call(n, e),
                    this.autoPlayCheckbox.checked)
                  )
                    return window.setTimeout(function () {
                      return r.spin();
                    }, 200);
                },
              },
            ]) && p(t.prototype, n),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e
          );
        })(),
        c = {
          inverted: !1,
          onSpinStart: function (e) {
            console.log("onSpinStart", e);
          },
          onSpinEnd: function (e) {
            console.log("onSpinEnd", e);
          },
        };
      new l(document.getElementById("slot"), c);
    })();
})();
