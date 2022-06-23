"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.AOS = t();
}(void 0, function () {
  "use strict";

  var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = "Expected a function",
      n = NaN,
      o = "[object Symbol]",
      i = /^\s+|\s+$/g,
      a = /^[-+]0x[0-9a-f]+$/i,
      r = /^0b[01]+$/i,
      c = /^0o[0-7]+$/i,
      s = parseInt,
      u = "object" == _typeof(e) && e && e.Object === Object && e,
      d = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
      l = u || d || Function("return this")(),
      f = Object.prototype.toString,
      m = Math.max,
      p = Math.min,
      b = function b() {
    return l.Date.now();
  };

  function v(e, n, o) {
    var i,
        a,
        r,
        c,
        s,
        u,
        d = 0,
        l = !1,
        f = !1,
        v = !0;
    if ("function" != typeof e) throw new TypeError(t);

    function y(t) {
      var n = i,
          o = a;
      return i = a = void 0, d = t, c = e.apply(o, n);
    }

    function h(e) {
      var t = e - u;
      return void 0 === u || t >= n || t < 0 || f && e - d >= r;
    }

    function k() {
      var e = b();
      if (h(e)) return x(e);
      s = setTimeout(k, function (e) {
        var t = n - (e - u);
        return f ? p(t, r - (e - d)) : t;
      }(e));
    }

    function x(e) {
      return s = void 0, v && i ? y(e) : (i = a = void 0, c);
    }

    function O() {
      var e = b(),
          t = h(e);

      if (i = arguments, a = this, u = e, t) {
        if (void 0 === s) return function (e) {
          return d = e, s = setTimeout(k, n), l ? y(e) : c;
        }(u);
        if (f) return s = setTimeout(k, n), y(u);
      }

      return void 0 === s && (s = setTimeout(k, n)), c;
    }

    return n = w(n) || 0, g(o) && (l = !!o.leading, r = (f = "maxWait" in o) ? m(w(o.maxWait) || 0, n) : r, v = "trailing" in o ? !!o.trailing : v), O.cancel = function () {
      void 0 !== s && clearTimeout(s), d = 0, i = u = a = s = void 0;
    }, O.flush = function () {
      return void 0 === s ? c : x(b());
    }, O;
  }

  function g(e) {
    var t = _typeof(e);

    return !!e && ("object" == t || "function" == t);
  }

  function w(e) {
    if ("number" == typeof e) return e;
    if (function (e) {
      return "symbol" == _typeof(e) || function (e) {
        return !!e && "object" == _typeof(e);
      }(e) && f.call(e) == o;
    }(e)) return n;

    if (g(e)) {
      var t = "function" == typeof e.valueOf ? e.valueOf() : e;
      e = g(t) ? t + "" : t;
    }

    if ("string" != typeof e) return 0 === e ? e : +e;
    e = e.replace(i, "");
    var u = r.test(e);
    return u || c.test(e) ? s(e.slice(2), u ? 2 : 8) : a.test(e) ? n : +e;
  }

  var y = function y(e, n, o) {
    var i = !0,
        a = !0;
    if ("function" != typeof e) throw new TypeError(t);
    return g(o) && (i = "leading" in o ? !!o.leading : i, a = "trailing" in o ? !!o.trailing : a), v(e, n, {
      leading: i,
      maxWait: n,
      trailing: a
    });
  },
      h = "Expected a function",
      k = NaN,
      x = "[object Symbol]",
      O = /^\s+|\s+$/g,
      j = /^[-+]0x[0-9a-f]+$/i,
      E = /^0b[01]+$/i,
      N = /^0o[0-7]+$/i,
      z = parseInt,
      C = "object" == _typeof(e) && e && e.Object === Object && e,
      A = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
      q = C || A || Function("return this")(),
      L = Object.prototype.toString,
      T = Math.max,
      M = Math.min,
      S = function S() {
    return q.Date.now();
  };

  function D(e) {
    var t = _typeof(e);

    return !!e && ("object" == t || "function" == t);
  }

  function H(e) {
    if ("number" == typeof e) return e;
    if (function (e) {
      return "symbol" == _typeof(e) || function (e) {
        return !!e && "object" == _typeof(e);
      }(e) && L.call(e) == x;
    }(e)) return k;

    if (D(e)) {
      var t = "function" == typeof e.valueOf ? e.valueOf() : e;
      e = D(t) ? t + "" : t;
    }

    if ("string" != typeof e) return 0 === e ? e : +e;
    e = e.replace(O, "");
    var n = E.test(e);
    return n || N.test(e) ? z(e.slice(2), n ? 2 : 8) : j.test(e) ? k : +e;
  }

  var $ = function $(e, t, n) {
    var o,
        i,
        a,
        r,
        c,
        s,
        u = 0,
        d = !1,
        l = !1,
        f = !0;
    if ("function" != typeof e) throw new TypeError(h);

    function m(t) {
      var n = o,
          a = i;
      return o = i = void 0, u = t, r = e.apply(a, n);
    }

    function p(e) {
      var n = e - s;
      return void 0 === s || n >= t || n < 0 || l && e - u >= a;
    }

    function b() {
      var e = S();
      if (p(e)) return v(e);
      c = setTimeout(b, function (e) {
        var n = t - (e - s);
        return l ? M(n, a - (e - u)) : n;
      }(e));
    }

    function v(e) {
      return c = void 0, f && o ? m(e) : (o = i = void 0, r);
    }

    function g() {
      var e = S(),
          n = p(e);

      if (o = arguments, i = this, s = e, n) {
        if (void 0 === c) return function (e) {
          return u = e, c = setTimeout(b, t), d ? m(e) : r;
        }(s);
        if (l) return c = setTimeout(b, t), m(s);
      }

      return void 0 === c && (c = setTimeout(b, t)), r;
    }

    return t = H(t) || 0, D(n) && (d = !!n.leading, a = (l = "maxWait" in n) ? T(H(n.maxWait) || 0, t) : a, f = "trailing" in n ? !!n.trailing : f), g.cancel = function () {
      void 0 !== c && clearTimeout(c), u = 0, o = s = i = c = void 0;
    }, g.flush = function () {
      return void 0 === c ? r : v(S());
    }, g;
  },
      W = function W() {};

  function P(e) {
    e && e.forEach(function (e) {
      var t = Array.prototype.slice.call(e.addedNodes),
          n = Array.prototype.slice.call(e.removedNodes);
      if (function e(t) {
        var n = void 0,
            o = void 0;

        for (n = 0; n < t.length; n += 1) {
          if ((o = t[n]).dataset && o.dataset.aos) return !0;
          if (o.children && e(o.children)) return !0;
        }

        return !1;
      }(t.concat(n))) return W();
    });
  }

  function Y() {
    return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
  }

  var _ = {
    isSupported: function isSupported() {
      return !!Y();
    },
    ready: function ready(e, t) {
      var n = window.document,
          o = new (Y())(P);
      W = t, o.observe(n.documentElement, {
        childList: !0,
        subtree: !0,
        removedNodes: !0
      });
    }
  },
      B = function B(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  },
      F = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }

    return function (t, n, o) {
      return n && e(t.prototype, n), o && e(t, o), t;
    };
  }(),
      I = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];

      for (var o in n) {
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
      }
    }

    return e;
  },
      K = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
      G = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
      J = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
      Q = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;

  function R() {
    return navigator.userAgent || navigator.vendor || window.opera || "";
  }

  var U = new (function () {
    function e() {
      B(this, e);
    }

    return F(e, [{
      key: "phone",
      value: function value() {
        var e = R();
        return !(!K.test(e) && !G.test(e.substr(0, 4)));
      }
    }, {
      key: "mobile",
      value: function value() {
        var e = R();
        return !(!J.test(e) && !Q.test(e.substr(0, 4)));
      }
    }, {
      key: "tablet",
      value: function value() {
        return this.mobile() && !this.phone();
      }
    }, {
      key: "ie11",
      value: function value() {
        return "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style;
      }
    }]), e;
  }())(),
      V = function V(e, t) {
    var n = void 0;
    return U.ie11() ? (n = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, {
      detail: t
    }) : n = new CustomEvent(e, {
      detail: t
    }), document.dispatchEvent(n);
  },
      X = function X(e) {
    return e.forEach(function (e, t) {
      return function (e, t) {
        var n = e.options,
            o = e.position,
            i = e.node,
            a = (e.data, function () {
          e.animated && (function (e, t) {
            t && t.forEach(function (t) {
              return e.classList.remove(t);
            });
          }(i, n.animatedClassNames), V("aos:out", i), e.options.id && V("aos:in:" + e.options.id, i), e.animated = !1);
        });
        n.mirror && t >= o.out && !n.once ? a() : t >= o.in ? e.animated || (function (e, t) {
          t && t.forEach(function (t) {
            return e.classList.add(t);
          });
        }(i, n.animatedClassNames), V("aos:in", i), e.options.id && V("aos:in:" + e.options.id, i), e.animated = !0) : e.animated && !n.once && a();
      }(e, window.pageYOffset);
    });
  },
      Z = function Z(e) {
    for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) {
      t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
    }

    return {
      top: n,
      left: t
    };
  },
      ee = function ee(e, t, n) {
    var o = e.getAttribute("data-aos-" + t);

    if (void 0 !== o) {
      if ("true" === o) return !0;
      if ("false" === o) return !1;
    }

    return o || n;
  },
      te = function te(e, t) {
    return e.forEach(function (e, n) {
      var o = ee(e.node, "mirror", t.mirror),
          i = ee(e.node, "once", t.once),
          a = ee(e.node, "id"),
          r = t.useClassNames && e.node.getAttribute("data-aos"),
          c = [t.animatedClassName].concat(r ? r.split(" ") : []).filter(function (e) {
        return "string" == typeof e;
      });
      t.initClassName && e.node.classList.add(t.initClassName), e.position = {
        in: function (e, t, n) {
          var o = window.innerHeight,
              i = ee(e, "anchor"),
              a = ee(e, "anchor-placement"),
              r = Number(ee(e, "offset", a ? 0 : t)),
              c = a || n,
              s = e;
          i && document.querySelectorAll(i) && (s = document.querySelectorAll(i)[0]);
          var u = Z(s).top - o;

          switch (c) {
            case "top-bottom":
              break;

            case "center-bottom":
              u += s.offsetHeight / 2;
              break;

            case "bottom-bottom":
              u += s.offsetHeight;
              break;

            case "top-center":
              u += o / 2;
              break;

            case "center-center":
              u += o / 2 + s.offsetHeight / 2;
              break;

            case "bottom-center":
              u += o / 2 + s.offsetHeight;
              break;

            case "top-top":
              u += o;
              break;

            case "bottom-top":
              u += o + s.offsetHeight;
              break;

            case "center-top":
              u += o + s.offsetHeight / 2;
          }

          return u + r;
        }(e.node, t.offset, t.anchorPlacement),
        out: o && function (e, t) {
          window.innerHeight;
          var n = ee(e, "anchor"),
              o = ee(e, "offset", t),
              i = e;
          return n && document.querySelectorAll(n) && (i = document.querySelectorAll(n)[0]), Z(i).top + i.offsetHeight - o;
        }(e.node, t.offset)
      }, e.options = {
        once: i,
        mirror: o,
        animatedClassNames: c,
        id: a
      };
    }), e;
  },
      ne = function ne() {
    var e = document.querySelectorAll("[data-aos]");
    return Array.prototype.map.call(e, function (e) {
      return {
        node: e
      };
    });
  },
      oe = [],
      ie = !1,
      ae = {
    offset: 120,
    delay: 0,
    easing: "ease",
    duration: 400,
    disable: !1,
    once: !1,
    mirror: !1,
    anchorPlacement: "top-bottom",
    startEvent: "DOMContentLoaded",
    animatedClassName: "aos-animate",
    initClassName: "aos-init",
    useClassNames: !1,
    disableMutationObserver: !1,
    throttleDelay: 99,
    debounceDelay: 50
  },
      re = function re() {
    return document.all && !window.atob;
  },
      ce = function ce() {
    arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (ie = !0), ie && (oe = te(oe, ae), X(oe), window.addEventListener("scroll", y(function () {
      X(oe, ae.once);
    }, ae.throttleDelay)));
  },
      se = function se() {
    if (oe = ne(), de(ae.disable) || re()) return ue();
    ce();
  },
      ue = function ue() {
    oe.forEach(function (e, t) {
      e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay"), ae.initClassName && e.node.classList.remove(ae.initClassName), ae.animatedClassName && e.node.classList.remove(ae.animatedClassName);
    });
  },
      de = function de(e) {
    return !0 === e || "mobile" === e && U.mobile() || "phone" === e && U.phone() || "tablet" === e && U.tablet() || "function" == typeof e && !0 === e();
  };

  return {
    init: function init(e) {
      return ae = I(ae, e), oe = ne(), ae.disableMutationObserver || _.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), ae.disableMutationObserver = !0), ae.disableMutationObserver || _.ready("[data-aos]", se), de(ae.disable) || re() ? ue() : (document.querySelector("body").setAttribute("data-aos-easing", ae.easing), document.querySelector("body").setAttribute("data-aos-duration", ae.duration), document.querySelector("body").setAttribute("data-aos-delay", ae.delay), -1 === ["DOMContentLoaded", "load"].indexOf(ae.startEvent) ? document.addEventListener(ae.startEvent, function () {
        ce(!0);
      }) : window.addEventListener("load", function () {
        ce(!0);
      }), "DOMContentLoaded" === ae.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 && ce(!0), window.addEventListener("resize", $(ce, ae.debounceDelay, !0)), window.addEventListener("orientationchange", $(ce, ae.debounceDelay, !0)), oe);
    },
    refresh: ce,
    refreshHard: se
  };
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*!
 * Bootstrap v4.0.0-beta.3 (https://getbootstrap.com)
 * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper);
}(void 0, function (t, e, n) {
  "use strict";

  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }

  function s(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }

  function r() {
    return (r = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];

        for (var i in n) {
          Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
      }

      return t;
    }).apply(this, arguments);
  }

  e = e && e.hasOwnProperty("default") ? e.default : e, n = n && n.hasOwnProperty("default") ? n.default : n;

  var o = function (t) {
    function e(t) {
      return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
    }

    function n(e) {
      var n = this,
          i = !1;
      return t(this).one(s.TRANSITION_END, function () {
        i = !0;
      }), setTimeout(function () {
        i || s.triggerTransitionEnd(n);
      }, e), this;
    }

    var i = !1,
        s = {
      TRANSITION_END: "bsTransitionEnd",
      getUID: function getUID(t) {
        do {
          t += ~~(1e6 * Math.random());
        } while (document.getElementById(t));

        return t;
      },
      getSelectorFromElement: function getSelectorFromElement(e) {
        var n = e.getAttribute("data-target");
        n && "#" !== n || (n = e.getAttribute("href") || ""), "#" === n.charAt(0) && (n = function (e) {
          return e = "function" == typeof t.escapeSelector ? t.escapeSelector(e).substr(1) : e.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1");
        }(n));

        try {
          return t(document).find(n).length > 0 ? n : null;
        } catch (t) {
          return null;
        }
      },
      reflow: function reflow(t) {
        return t.offsetHeight;
      },
      triggerTransitionEnd: function triggerTransitionEnd(e) {
        t(e).trigger(i.end);
      },
      supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(i);
      },
      isElement: function isElement(t) {
        return (t[0] || t).nodeType;
      },
      typeCheckConfig: function typeCheckConfig(t, n, i) {
        for (var r in i) {
          if (Object.prototype.hasOwnProperty.call(i, r)) {
            var o = i[r],
                a = n[r],
                l = a && s.isElement(a) ? "element" : e(a);
            if (!new RegExp(o).test(l)) throw new Error(t.toUpperCase() + ': Option "' + r + '" provided type "' + l + '" but expected type "' + o + '".');
          }
        }
      }
    };
    return i = !window.QUnit && {
      end: "transitionend"
    }, t.fn.emulateTransitionEnd = n, s.supportsTransitionEnd() && (t.event.special[s.TRANSITION_END] = {
      bindType: i.end,
      delegateType: i.end,
      handle: function handle(e) {
        if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
      }
    }), s;
  }(e),
      a = function (t) {
    var e = "alert",
        n = "bs.alert",
        i = "." + n,
        r = t.fn[e],
        a = {
      CLOSE: "close" + i,
      CLOSED: "closed" + i,
      CLICK_DATA_API: "click" + i + ".data-api"
    },
        l = "alert",
        h = "fade",
        c = "show",
        u = function () {
      function e(t) {
        this._element = t;
      }

      var i = e.prototype;
      return i.close = function (t) {
        t = t || this._element;

        var e = this._getRootElement(t);

        this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
      }, i.dispose = function () {
        t.removeData(this._element, n), this._element = null;
      }, i._getRootElement = function (e) {
        var n = o.getSelectorFromElement(e),
            i = !1;
        return n && (i = t(n)[0]), i || (i = t(e).closest("." + l)[0]), i;
      }, i._triggerCloseEvent = function (e) {
        var n = t.Event(a.CLOSE);
        return t(e).trigger(n), n;
      }, i._removeElement = function (e) {
        var n = this;
        t(e).removeClass(c), o.supportsTransitionEnd() && t(e).hasClass(h) ? t(e).one(o.TRANSITION_END, function (t) {
          return n._destroyElement(e, t);
        }).emulateTransitionEnd(150) : this._destroyElement(e);
      }, i._destroyElement = function (e) {
        t(e).detach().trigger(a.CLOSED).remove();
      }, e._jQueryInterface = function (i) {
        return this.each(function () {
          var s = t(this),
              r = s.data(n);
          r || (r = new e(this), s.data(n, r)), "close" === i && r[i](this);
        });
      }, e._handleDismiss = function (t) {
        return function (e) {
          e && e.preventDefault(), t.close(this);
        };
      }, s(e, null, [{
        key: "VERSION",
        get: function get() {
          return "4.0.0-beta.3";
        }
      }]), e;
    }();

    return t(document).on(a.CLICK_DATA_API, '[data-dismiss="alert"]', u._handleDismiss(new u())), t.fn[e] = u._jQueryInterface, t.fn[e].Constructor = u, t.fn[e].noConflict = function () {
      return t.fn[e] = r, u._jQueryInterface;
    }, u;
  }(e),
      l = function (t) {
    var e = "button",
        n = "bs.button",
        i = "." + n,
        r = ".data-api",
        o = t.fn[e],
        a = "active",
        l = "btn",
        h = "focus",
        c = '[data-toggle^="button"]',
        u = '[data-toggle="buttons"]',
        f = "input",
        d = ".active",
        _ = ".btn",
        g = {
      CLICK_DATA_API: "click" + i + r,
      FOCUS_BLUR_DATA_API: "focus" + i + r + " blur" + i + r
    },
        m = function () {
      function e(t) {
        this._element = t;
      }

      var i = e.prototype;
      return i.toggle = function () {
        var e = !0,
            n = !0,
            i = t(this._element).closest(u)[0];

        if (i) {
          var s = t(this._element).find(f)[0];

          if (s) {
            if ("radio" === s.type) if (s.checked && t(this._element).hasClass(a)) e = !1;else {
              var r = t(i).find(d)[0];
              r && t(r).removeClass(a);
            }

            if (e) {
              if (s.hasAttribute("disabled") || i.hasAttribute("disabled") || s.classList.contains("disabled") || i.classList.contains("disabled")) return;
              s.checked = !t(this._element).hasClass(a), t(s).trigger("change");
            }

            s.focus(), n = !1;
          }
        }

        n && this._element.setAttribute("aria-pressed", !t(this._element).hasClass(a)), e && t(this._element).toggleClass(a);
      }, i.dispose = function () {
        t.removeData(this._element, n), this._element = null;
      }, e._jQueryInterface = function (i) {
        return this.each(function () {
          var s = t(this).data(n);
          s || (s = new e(this), t(this).data(n, s)), "toggle" === i && s[i]();
        });
      }, s(e, null, [{
        key: "VERSION",
        get: function get() {
          return "4.0.0-beta.3";
        }
      }]), e;
    }();

    return t(document).on(g.CLICK_DATA_API, c, function (e) {
      e.preventDefault();
      var n = e.target;
      t(n).hasClass(l) || (n = t(n).closest(_)), m._jQueryInterface.call(t(n), "toggle");
    }).on(g.FOCUS_BLUR_DATA_API, c, function (e) {
      var n = t(e.target).closest(_)[0];
      t(n).toggleClass(h, /^focus(in)?$/.test(e.type));
    }), t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function () {
      return t.fn[e] = o, m._jQueryInterface;
    }, m;
  }(e),
      h = function (t) {
    var e = "carousel",
        n = "bs.carousel",
        i = "." + n,
        a = t.fn[e],
        l = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0
    },
        h = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean"
    },
        c = "next",
        u = "prev",
        f = "left",
        d = "right",
        _ = {
      SLIDE: "slide" + i,
      SLID: "slid" + i,
      KEYDOWN: "keydown" + i,
      MOUSEENTER: "mouseenter" + i,
      MOUSELEAVE: "mouseleave" + i,
      TOUCHEND: "touchend" + i,
      LOAD_DATA_API: "load" + i + ".data-api",
      CLICK_DATA_API: "click" + i + ".data-api"
    },
        g = "carousel",
        m = "active",
        p = "slide",
        v = "carousel-item-right",
        E = "carousel-item-left",
        T = "carousel-item-next",
        y = "carousel-item-prev",
        C = {
      ACTIVE: ".active",
      ACTIVE_ITEM: ".active.carousel-item",
      ITEM: ".carousel-item",
      NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
      INDICATORS: ".carousel-indicators",
      DATA_SLIDE: "[data-slide], [data-slide-to]",
      DATA_RIDE: '[data-ride="carousel"]'
    },
        I = function () {
      function a(e, n) {
        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(C.INDICATORS)[0], this._addEventListeners();
      }

      var I = a.prototype;
      return I.next = function () {
        this._isSliding || this._slide(c);
      }, I.nextWhenVisible = function () {
        !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next();
      }, I.prev = function () {
        this._isSliding || this._slide(u);
      }, I.pause = function (e) {
        e || (this._isPaused = !0), t(this._element).find(C.NEXT_PREV)[0] && o.supportsTransitionEnd() && (o.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
      }, I.cycle = function (t) {
        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
      }, I.to = function (e) {
        var n = this;
        this._activeElement = t(this._element).find(C.ACTIVE_ITEM)[0];

        var i = this._getItemIndex(this._activeElement);

        if (!(e > this._items.length - 1 || e < 0)) if (this._isSliding) t(this._element).one(_.SLID, function () {
          return n.to(e);
        });else {
          if (i === e) return this.pause(), void this.cycle();
          var s = e > i ? c : u;

          this._slide(s, this._items[e]);
        }
      }, I.dispose = function () {
        t(this._element).off(i), t.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
      }, I._getConfig = function (t) {
        return t = r({}, l, t), o.typeCheckConfig(e, t, h), t;
      }, I._addEventListeners = function () {
        var e = this;
        this._config.keyboard && t(this._element).on(_.KEYDOWN, function (t) {
          return e._keydown(t);
        }), "hover" === this._config.pause && (t(this._element).on(_.MOUSEENTER, function (t) {
          return e.pause(t);
        }).on(_.MOUSELEAVE, function (t) {
          return e.cycle(t);
        }), "ontouchstart" in document.documentElement && t(this._element).on(_.TOUCHEND, function () {
          e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
            return e.cycle(t);
          }, 500 + e._config.interval);
        }));
      }, I._keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
          case 37:
            t.preventDefault(), this.prev();
            break;

          case 39:
            t.preventDefault(), this.next();
            break;

          default:
            return;
        }
      }, I._getItemIndex = function (e) {
        return this._items = t.makeArray(t(e).parent().find(C.ITEM)), this._items.indexOf(e);
      }, I._getItemByDirection = function (t, e) {
        var n = t === c,
            i = t === u,
            s = this._getItemIndex(e),
            r = this._items.length - 1;

        if ((i && 0 === s || n && s === r) && !this._config.wrap) return e;
        var o = (s + (t === u ? -1 : 1)) % this._items.length;
        return -1 === o ? this._items[this._items.length - 1] : this._items[o];
      }, I._triggerSlideEvent = function (e, n) {
        var i = this._getItemIndex(e),
            s = this._getItemIndex(t(this._element).find(C.ACTIVE_ITEM)[0]),
            r = t.Event(_.SLIDE, {
          relatedTarget: e,
          direction: n,
          from: s,
          to: i
        });

        return t(this._element).trigger(r), r;
      }, I._setActiveIndicatorElement = function (e) {
        if (this._indicatorsElement) {
          t(this._indicatorsElement).find(C.ACTIVE).removeClass(m);

          var n = this._indicatorsElement.children[this._getItemIndex(e)];

          n && t(n).addClass(m);
        }
      }, I._slide = function (e, n) {
        var i,
            s,
            r,
            a = this,
            l = t(this._element).find(C.ACTIVE_ITEM)[0],
            h = this._getItemIndex(l),
            u = n || l && this._getItemByDirection(e, l),
            g = this._getItemIndex(u),
            I = Boolean(this._interval);

        if (e === c ? (i = E, s = T, r = f) : (i = v, s = y, r = d), u && t(u).hasClass(m)) this._isSliding = !1;else {
          if (!this._triggerSlideEvent(u, r).isDefaultPrevented() && l && u) {
            this._isSliding = !0, I && this.pause(), this._setActiveIndicatorElement(u);
            var A = t.Event(_.SLID, {
              relatedTarget: u,
              direction: r,
              from: h,
              to: g
            });
            o.supportsTransitionEnd() && t(this._element).hasClass(p) ? (t(u).addClass(s), o.reflow(u), t(l).addClass(i), t(u).addClass(i), t(l).one(o.TRANSITION_END, function () {
              t(u).removeClass(i + " " + s).addClass(m), t(l).removeClass(m + " " + s + " " + i), a._isSliding = !1, setTimeout(function () {
                return t(a._element).trigger(A);
              }, 0);
            }).emulateTransitionEnd(600)) : (t(l).removeClass(m), t(u).addClass(m), this._isSliding = !1, t(this._element).trigger(A)), I && this.cycle();
          }
        }
      }, a._jQueryInterface = function (e) {
        return this.each(function () {
          var i = t(this).data(n),
              s = r({}, l, t(this).data());
          "object" == _typeof(e) && (s = r({}, s, e));
          var o = "string" == typeof e ? e : s.slide;
          if (i || (i = new a(this, s), t(this).data(n, i)), "number" == typeof e) i.to(e);else if ("string" == typeof o) {
            if ("undefined" == typeof i[o]) throw new Error('No method named "' + o + '"');
            i[o]();
          } else s.interval && (i.pause(), i.cycle());
        });
      }, a._dataApiClickHandler = function (e) {
        var i = o.getSelectorFromElement(this);

        if (i) {
          var s = t(i)[0];

          if (s && t(s).hasClass(g)) {
            var l = r({}, t(s).data(), t(this).data()),
                h = this.getAttribute("data-slide-to");
            h && (l.interval = !1), a._jQueryInterface.call(t(s), l), h && t(s).data(n).to(h), e.preventDefault();
          }
        }
      }, s(a, null, [{
        key: "VERSION",
        get: function get() {
          return "4.0.0-beta.3";
        }
      }, {
        key: "Default",
        get: function get() {
          return l;
        }
      }]), a;
    }();

    return t(document).on(_.CLICK_DATA_API, C.DATA_SLIDE, I._dataApiClickHandler), t(window).on(_.LOAD_DATA_API, function () {
      t(C.DATA_RIDE).each(function () {
        var e = t(this);

        I._jQueryInterface.call(e, e.data());
      });
    }), t.fn[e] = I._jQueryInterface, t.fn[e].Constructor = I, t.fn[e].noConflict = function () {
      return t.fn[e] = a, I._jQueryInterface;
    }, I;
  }(e),
      c = function (t) {
    var e = "collapse",
        n = "bs.collapse",
        i = "." + n,
        a = t.fn[e],
        l = {
      toggle: !0,
      parent: ""
    },
        h = {
      toggle: "boolean",
      parent: "(string|element)"
    },
        c = {
      SHOW: "show" + i,
      SHOWN: "shown" + i,
      HIDE: "hide" + i,
      HIDDEN: "hidden" + i,
      CLICK_DATA_API: "click" + i + ".data-api"
    },
        u = "show",
        f = "collapse",
        d = "collapsing",
        _ = "collapsed",
        g = "width",
        m = "height",
        p = {
      ACTIVES: ".show, .collapsing",
      DATA_TOGGLE: '[data-toggle="collapse"]'
    },
        v = function () {
      function i(e, n) {
        this._isTransitioning = !1, this._element = e, this._config = this._getConfig(n), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));

        for (var i = t(p.DATA_TOGGLE), s = 0; s < i.length; s++) {
          var r = i[s],
              a = o.getSelectorFromElement(r);
          null !== a && t(a).filter(e).length > 0 && this._triggerArray.push(r);
        }

        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
      }

      var a = i.prototype;
      return a.toggle = function () {
        t(this._element).hasClass(u) ? this.hide() : this.show();
      }, a.show = function () {
        var e = this;

        if (!this._isTransitioning && !t(this._element).hasClass(u)) {
          var s, r;

          if (this._parent && ((s = t.makeArray(t(this._parent).children().children(p.ACTIVES))).length || (s = null)), !(s && (r = t(s).data(n)) && r._isTransitioning)) {
            var a = t.Event(c.SHOW);

            if (t(this._element).trigger(a), !a.isDefaultPrevented()) {
              s && (i._jQueryInterface.call(t(s), "hide"), r || t(s).data(n, null));

              var l = this._getDimension();

              t(this._element).removeClass(f).addClass(d), this._element.style[l] = 0, this._triggerArray.length && t(this._triggerArray).removeClass(_).attr("aria-expanded", !0), this.setTransitioning(!0);

              var h = function h() {
                t(e._element).removeClass(d).addClass(f).addClass(u), e._element.style[l] = "", e.setTransitioning(!1), t(e._element).trigger(c.SHOWN);
              };

              if (o.supportsTransitionEnd()) {
                var g = "scroll" + (l[0].toUpperCase() + l.slice(1));
                t(this._element).one(o.TRANSITION_END, h).emulateTransitionEnd(600), this._element.style[l] = this._element[g] + "px";
              } else h();
            }
          }
        }
      }, a.hide = function () {
        var e = this;

        if (!this._isTransitioning && t(this._element).hasClass(u)) {
          var n = t.Event(c.HIDE);

          if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
            var i = this._getDimension();

            if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", o.reflow(this._element), t(this._element).addClass(d).removeClass(f).removeClass(u), this._triggerArray.length) for (var s = 0; s < this._triggerArray.length; s++) {
              var r = this._triggerArray[s],
                  a = o.getSelectorFromElement(r);

              if (null !== a) {
                t(a).hasClass(u) || t(r).addClass(_).attr("aria-expanded", !1);
              }
            }
            this.setTransitioning(!0);

            var l = function l() {
              e.setTransitioning(!1), t(e._element).removeClass(d).addClass(f).trigger(c.HIDDEN);
            };

            this._element.style[i] = "", o.supportsTransitionEnd() ? t(this._element).one(o.TRANSITION_END, l).emulateTransitionEnd(600) : l();
          }
        }
      }, a.setTransitioning = function (t) {
        this._isTransitioning = t;
      }, a.dispose = function () {
        t.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
      }, a._getConfig = function (t) {
        return t = r({}, l, t), t.toggle = Boolean(t.toggle), o.typeCheckConfig(e, t, h), t;
      }, a._getDimension = function () {
        return t(this._element).hasClass(g) ? g : m;
      }, a._getParent = function () {
        var e = this,
            n = null;
        o.isElement(this._config.parent) ? (n = this._config.parent, "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = t(this._config.parent)[0];
        var s = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
        return t(n).find(s).each(function (t, n) {
          e._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n]);
        }), n;
      }, a._addAriaAndCollapsedClass = function (e, n) {
        if (e) {
          var i = t(e).hasClass(u);
          n.length && t(n).toggleClass(_, !i).attr("aria-expanded", i);
        }
      }, i._getTargetFromElement = function (e) {
        var n = o.getSelectorFromElement(e);
        return n ? t(n)[0] : null;
      }, i._jQueryInterface = function (e) {
        return this.each(function () {
          var s = t(this),
              o = s.data(n),
              a = r({}, l, s.data(), "object" == _typeof(e) && e);

          if (!o && a.toggle && /show|hide/.test(e) && (a.toggle = !1), o || (o = new i(this, a), s.data(n, o)), "string" == typeof e) {
            if ("undefined" == typeof o[e]) throw new Error('No method named "' + e + '"');
            o[e]();
          }
        });
      }, s(i, null, [{
        key: "VERSION",
        get: function get() {
          return "4.0.0-beta.3";
        }
      }, {
        key: "Default",
        get: function get() {
          return l;
        }
      }]), i;
    }();

    return t(document).on(c.CLICK_DATA_API, p.DATA_TOGGLE, function (e) {
      "A" === e.currentTarget.tagName && e.preventDefault();
      var i = t(this),
          s = o.getSelectorFromElement(this);
      t(s).each(function () {
        var e = t(this),
            s = e.data(n) ? "toggle" : i.data();

        v._jQueryInterface.call(e, s);
      });
    }), t.fn[e] = v._jQueryInterface, t.fn[e].Constructor = v, t.fn[e].noConflict = function () {
      return t.fn[e] = a, v._jQueryInterface;
    }, v;
  }(e),
      u = function (t) {
    var e = "dropdown",
        i = "bs.dropdown",
        a = "." + i,
        l = ".data-api",
        h = t.fn[e],
        c = new RegExp("38|40|27"),
        u = {
      HIDE: "hide" + a,
      HIDDEN: "hidden" + a,
      SHOW: "show" + a,
      SHOWN: "shown" + a,
      CLICK: "click" + a,
      CLICK_DATA_API: "click" + a + l,
      KEYDOWN_DATA_API: "keydown" + a + l,
      KEYUP_DATA_API: "keyup" + a + l
    },
        f = "disabled",
        d = "show",
        _ = "dropup",
        g = "dropright",
        m = "dropleft",
        p = "dropdown-menu-right",
        v = "dropdown-menu-left",
        E = "position-static",
        T = '[data-toggle="dropdown"]',
        y = ".dropdown form",
        C = ".dropdown-menu",
        I = ".navbar-nav",
        A = ".dropdown-menu .dropdown-item:not(.disabled)",
        b = "top-start",
        D = "top-end",
        S = "bottom-start",
        w = "bottom-end",
        N = "right-start",
        O = "left-start",
        k = {
      offset: 0,
      flip: !0,
      boundary: "scrollParent"
    },
        P = {
      offset: "(number|string|function)",
      flip: "boolean",
      boundary: "(string|element)"
    },
        L = function () {
      function l(t, e) {
        this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
      }

      var h = l.prototype;
      return h.toggle = function () {
        if (!this._element.disabled && !t(this._element).hasClass(f)) {
          var e = l._getParentFromElement(this._element),
              i = t(this._menu).hasClass(d);

          if (l._clearMenus(), !i) {
            var s = {
              relatedTarget: this._element
            },
                r = t.Event(u.SHOW, s);

            if (t(e).trigger(r), !r.isDefaultPrevented()) {
              if (!this._inNavbar) {
                if ("undefined" == typeof n) throw new Error("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                var o = this._element;
                t(e).hasClass(_) && (t(this._menu).hasClass(v) || t(this._menu).hasClass(p)) && (o = e), "scrollParent" !== this._config.boundary && t(e).addClass(E), this._popper = new n(o, this._menu, this._getPopperConfig());
              }

              "ontouchstart" in document.documentElement && !t(e).closest(I).length && t("body").children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(d), t(e).toggleClass(d).trigger(t.Event(u.SHOWN, s));
            }
          }
        }
      }, h.dispose = function () {
        t.removeData(this._element, i), t(this._element).off(a), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null);
      }, h.update = function () {
        this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
      }, h._addEventListeners = function () {
        var e = this;
        t(this._element).on(u.CLICK, function (t) {
          t.preventDefault(), t.stopPropagation(), e.toggle();
        });
      }, h._getConfig = function (n) {
        return n = r({}, this.constructor.Default, t(this._element).data(), n), o.typeCheckConfig(e, n, this.constructor.DefaultType), n;
      }, h._getMenuElement = function () {
        if (!this._menu) {
          var e = l._getParentFromElement(this._element);

          this._menu = t(e).find(C)[0];
        }

        return this._menu;
      }, h._getPlacement = function () {
        var e = t(this._element).parent(),
            n = S;
        return e.hasClass(_) ? (n = b, t(this._menu).hasClass(p) && (n = D)) : e.hasClass(g) ? n = N : e.hasClass(m) ? n = O : t(this._menu).hasClass(p) && (n = w), n;
      }, h._detectNavbar = function () {
        return t(this._element).closest(".navbar").length > 0;
      }, h._getPopperConfig = function () {
        var t = this,
            e = {};
        "function" == typeof this._config.offset ? e.fn = function (e) {
          return e.offsets = r({}, e.offsets, t._config.offset(e.offsets) || {}), e;
        } : e.offset = this._config.offset;
        return {
          placement: this._getPlacement(),
          modifiers: {
            offset: e,
            flip: {
              enabled: this._config.flip
            },
            preventOverflow: {
              boundariesElement: this._config.boundary
            }
          }
        };
      }, l._jQueryInterface = function (e) {
        return this.each(function () {
          var n = t(this).data(i);

          if (n || (n = new l(this, "object" == _typeof(e) ? e : null), t(this).data(i, n)), "string" == typeof e) {
            if ("undefined" == typeof n[e]) throw new Error('No method named "' + e + '"');
            n[e]();
          }
        });
      }, l._clearMenus = function (e) {
        if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which)) for (var n = t.makeArray(t(T)), s = 0; s < n.length; s++) {
          var r = l._getParentFromElement(n[s]),
              o = t(n[s]).data(i),
              a = {
            relatedTarget: n[s]
          };

          if (o) {
            var h = o._menu;

            if (t(r).hasClass(d) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && t.contains(r, e.target))) {
              var c = t.Event(u.HIDE, a);
              t(r).trigger(c), c.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), n[s].setAttribute("aria-expanded", "false"), t(h).removeClass(d), t(r).removeClass(d).trigger(t.Event(u.HIDDEN, a)));
            }
          }
        }
      }, l._getParentFromElement = function (e) {
        var n,
            i = o.getSelectorFromElement(e);
        return i && (n = t(i)[0]), n || e.parentNode;
      }, l._dataApiKeydownHandler = function (e) {
        if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || t(e.target).closest(C).length)) : c.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !t(this).hasClass(f))) {
          var n = l._getParentFromElement(this),
              i = t(n).hasClass(d);

          if ((i || 27 === e.which && 32 === e.which) && (!i || 27 !== e.which && 32 !== e.which)) {
            var s = t(n).find(A).get();

            if (s.length) {
              var r = s.indexOf(e.target);
              38 === e.which && r > 0 && r--, 40 === e.which && r < s.length - 1 && r++, r < 0 && (r = 0), s[r].focus();
            }
          } else {
            if (27 === e.which) {
              var o = t(n).find(T)[0];
              t(o).trigger("focus");
            }

            t(this).trigger("click");
          }
        }
      }, s(l, null, [{
        key: "VERSION",
        get: function get() {
          return "4.0.0-beta.3";
        }
      }, {
        key: "Default",
        get: function get() {
          return k;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return P;
        }
      }]), l;
    }();

    return t(document).on(u.KEYDOWN_DATA_API, T, L._dataApiKeydownHandler).on(u.KEYDOWN_DATA_API, C, L._dataApiKeydownHandler).on(u.CLICK_DATA_API + " " + u.KEYUP_DATA_API, L._clearMenus).on(u.CLICK_DATA_API, T, function (e) {
      e.preventDefault(), e.stopPropagation(), L._jQueryInterface.call(t(this), "toggle");
    }).on(u.CLICK_DATA_API, y, function (t) {
      t.stopPropagation();
    }), t.fn[e] = L._jQueryInterface, t.fn[e].Constructor = L, t.fn[e].noConflict = function () {
      return t.fn[e] = h, L._jQueryInterface;
    }, L;
  }(e),
      f = function (t) {
    var e = "modal",
        n = "bs.modal",
        i = "." + n,
        a = t.fn.modal,
        l = {
      backdrop: !0,
      keyboard: !0,
      focus: !0,
      show: !0
    },
        h = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
      show: "boolean"
    },
        c = {
      HIDE: "hide" + i,
      HIDDEN: "hidden" + i,
      SHOW: "show" + i,
      SHOWN: "shown" + i,
      FOCUSIN: "focusin" + i,
      RESIZE: "resize" + i,
      CLICK_DISMISS: "click.dismiss" + i,
      KEYDOWN_DISMISS: "keydown.dismiss" + i,
      MOUSEUP_DISMISS: "mouseup.dismiss" + i,
      MOUSEDOWN_DISMISS: "mousedown.dismiss" + i,
      CLICK_DATA_API: "click" + i + ".data-api"
    },
        u = "modal-scrollbar-measure",
        f = "modal-backdrop",
        d = "modal-open",
        _ = "fade",
        g = "show",
        m = {
      DIALOG: ".modal-dialog",
      DATA_TOGGLE: '[data-toggle="modal"]',
      DATA_DISMISS: '[data-dismiss="modal"]',
      FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      STICKY_CONTENT: ".sticky-top",
      NAVBAR_TOGGLER: ".navbar-toggler"
    },
        p = function () {
      function a(e, n) {
        this._config = this._getConfig(n), this._element = e, this._dialog = t(e).find(m.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0;
      }

      var p = a.prototype;
      return p.toggle = function (t) {
        return this._isShown ? this.hide() : this.show(t);
      }, p.show = function (e) {
        var n = this;

        if (!this._isTransitioning && !this._isShown) {
          o.supportsTransitionEnd() && t(this._element).hasClass(_) && (this._isTransitioning = !0);
          var i = t.Event(c.SHOW, {
            relatedTarget: e
          });
          t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), t(document.body).addClass(d), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(c.CLICK_DISMISS, m.DATA_DISMISS, function (t) {
            return n.hide(t);
          }), t(this._dialog).on(c.MOUSEDOWN_DISMISS, function () {
            t(n._element).one(c.MOUSEUP_DISMISS, function (e) {
              t(e.target).is(n._element) && (n._ignoreBackdropClick = !0);
            });
          }), this._showBackdrop(function () {
            return n._showElement(e);
          }));
        }
      }, p.hide = function (e) {
        var n = this;

        if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
          var i = t.Event(c.HIDE);

          if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
            this._isShown = !1;
            var s = o.supportsTransitionEnd() && t(this._element).hasClass(_);
            s && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(c.FOCUSIN), t(this._element).removeClass(g), t(this._element).off(c.CLICK_DISMISS), t(this._dialog).off(c.MOUSEDOWN_DISMISS), s ? t(this._element).one(o.TRANSITION_END, function (t) {
              return n._hideModal(t);
            }).emulateTransitionEnd(300) : this._hideModal();
          }
        }
      }, p.dispose = function () {
        t.removeData(this._element, n), t(window, document, this._element, this._backdrop).off(i), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null;
      }, p.handleUpdate = function () {
        this._adjustDialog();
      }, p._getConfig = function (t) {
        return t = r({}, l, t), o.typeCheckConfig(e, t, h), t;
      }, p._showElement = function (e) {
        var n = this,
            i = o.supportsTransitionEnd() && t(this._element).hasClass(_);
        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && o.reflow(this._element), t(this._element).addClass(g), this._config.focus && this._enforceFocus();

        var s = t.Event(c.SHOWN, {
          relatedTarget: e
        }),
            r = function r() {
          n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(s);
        };

        i ? t(this._dialog).one(o.TRANSITION_END, r).emulateTransitionEnd(300) : r();
      }, p._enforceFocus = function () {
        var e = this;
        t(document).off(c.FOCUSIN).on(c.FOCUSIN, function (n) {
          document === n.target || e._element === n.target || t(e._element).has(n.target).length || e._element.focus();
        });
      }, p._setEscapeEvent = function () {
        var e = this;
        this._isShown && this._config.keyboard ? t(this._element).on(c.KEYDOWN_DISMISS, function (t) {
          27 === t.which && (t.preventDefault(), e.hide());
        }) : this._isShown || t(this._element).off(c.KEYDOWN_DISMISS);
      }, p._setResizeEvent = function () {
        var e = this;
        this._isShown ? t(window).on(c.RESIZE, function (t) {
          return e.handleUpdate(t);
        }) : t(window).off(c.RESIZE);
      }, p._hideModal = function () {
        var e = this;
        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
          t(document.body).removeClass(d), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(c.HIDDEN);
        });
      }, p._removeBackdrop = function () {
        this._backdrop && (t(this._backdrop).remove(), this._backdrop = null);
      }, p._showBackdrop = function (e) {
        var n = this,
            i = t(this._element).hasClass(_) ? _ : "";

        if (this._isShown && this._config.backdrop) {
          var s = o.supportsTransitionEnd() && i;
          if (this._backdrop = document.createElement("div"), this._backdrop.className = f, i && t(this._backdrop).addClass(i), t(this._backdrop).appendTo(document.body), t(this._element).on(c.CLICK_DISMISS, function (t) {
            n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide());
          }), s && o.reflow(this._backdrop), t(this._backdrop).addClass(g), !e) return;
          if (!s) return void e();
          t(this._backdrop).one(o.TRANSITION_END, e).emulateTransitionEnd(150);
        } else if (!this._isShown && this._backdrop) {
          t(this._backdrop).removeClass(g);

          var r = function r() {
            n._removeBackdrop(), e && e();
          };

          o.supportsTransitionEnd() && t(this._element).hasClass(_) ? t(this._backdrop).one(o.TRANSITION_END, r).emulateTransitionEnd(150) : r();
        } else e && e();
      }, p._adjustDialog = function () {
        var t = this._element.scrollHeight > document.documentElement.clientHeight;
        !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
      }, p._resetAdjustments = function () {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }, p._checkScrollbar = function () {
        var t = document.body.getBoundingClientRect();
        this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
      }, p._setScrollbar = function () {
        var e = this;

        if (this._isBodyOverflowing) {
          t(m.FIXED_CONTENT).each(function (n, i) {
            var s = t(i)[0].style.paddingRight,
                r = t(i).css("padding-right");
            t(i).data("padding-right", s).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px");
          }), t(m.STICKY_CONTENT).each(function (n, i) {
            var s = t(i)[0].style.marginRight,
                r = t(i).css("margin-right");
            t(i).data("margin-right", s).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px");
          }), t(m.NAVBAR_TOGGLER).each(function (n, i) {
            var s = t(i)[0].style.marginRight,
                r = t(i).css("margin-right");
            t(i).data("margin-right", s).css("margin-right", parseFloat(r) + e._scrollbarWidth + "px");
          });
          var n = document.body.style.paddingRight,
              i = t("body").css("padding-right");
          t("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
        }
      }, p._resetScrollbar = function () {
        t(m.FIXED_CONTENT).each(function (e, n) {
          var i = t(n).data("padding-right");
          "undefined" != typeof i && t(n).css("padding-right", i).removeData("padding-right");
        }), t(m.STICKY_CONTENT + ", " + m.NAVBAR_TOGGLER).each(function (e, n) {
          var i = t(n).data("margin-right");
          "undefined" != typeof i && t(n).css("margin-right", i).removeData("margin-right");
        });
        var e = t("body").data("padding-right");
        "undefined" != typeof e && t("body").css("padding-right", e).removeData("padding-right");
      }, p._getScrollbarWidth = function () {
        var t = document.createElement("div");
        t.className = u, document.body.appendChild(t);
        var e = t.getBoundingClientRect().width - t.clientWidth;
        return document.body.removeChild(t), e;
      }, a._jQueryInterface = function (e, i) {
        return this.each(function () {
          var s = t(this).data(n),
              o = r({}, a.Default, t(this).data(), "object" == _typeof(e) && e);

          if (s || (s = new a(this, o), t(this).data(n, s)), "string" == typeof e) {
            if ("undefined" == typeof s[e]) throw new Error('No method named "' + e + '"');
            s[e](i);
          } else o.show && s.show(i);
        });
      }, s(a, null, [{
        key: "VERSION",
        get: function get() {
          return "4.0.0-beta.3";
        }
      }, {
        key: "Default",
        get: function get() {
          return l;
        }
      }]), a;
    }();

    return t(document).on(c.CLICK_DATA_API, m.DATA_TOGGLE, function (e) {
      var i,
          s = this,
          a = o.getSelectorFromElement(this);
      a && (i = t(a)[0]);
      var l = t(i).data(n) ? "toggle" : r({}, t(i).data(), t(this).data());
      "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
      var h = t(i).one(c.SHOW, function (e) {
        e.isDefaultPrevented() || h.one(c.HIDDEN, function () {
          t(s).is(":visible") && s.focus();
        });
      });

      p._jQueryInterface.call(t(i), l, this);
    }), t.fn.modal = p._jQueryInterface, t.fn.modal.Constructor = p, t.fn.modal.noConflict = function () {
      return t.fn.modal = a, p._jQueryInterface;
    }, p;
  }(e),
      d = function (t) {
    var e = "tooltip",
        i = "bs.tooltip",
        a = "." + i,
        l = t.fn[e],
        h = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        c = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(number|string)",
      container: "(string|element|boolean)",
      fallbackPlacement: "(string|array)",
      boundary: "(string|element)"
    },
        u = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: "right",
      BOTTOM: "bottom",
      LEFT: "left"
    },
        f = {
      animation: !0,
      template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: 0,
      container: !1,
      fallbackPlacement: "flip",
      boundary: "scrollParent"
    },
        d = "show",
        _ = "out",
        g = {
      HIDE: "hide" + a,
      HIDDEN: "hidden" + a,
      SHOW: "show" + a,
      SHOWN: "shown" + a,
      INSERTED: "inserted" + a,
      CLICK: "click" + a,
      FOCUSIN: "focusin" + a,
      FOCUSOUT: "focusout" + a,
      MOUSEENTER: "mouseenter" + a,
      MOUSELEAVE: "mouseleave" + a
    },
        m = "fade",
        p = "show",
        v = ".tooltip-inner",
        E = ".arrow",
        T = "hover",
        y = "focus",
        C = "click",
        I = "manual",
        A = function () {
      function l(t, e) {
        if ("undefined" == typeof n) throw new Error("Bootstrap tooltips require Popper.js (https://popper.js.org)");
        this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
      }

      var A = l.prototype;
      return A.enable = function () {
        this._isEnabled = !0;
      }, A.disable = function () {
        this._isEnabled = !1;
      }, A.toggleEnabled = function () {
        this._isEnabled = !this._isEnabled;
      }, A.toggle = function (e) {
        if (this._isEnabled) if (e) {
          var n = this.constructor.DATA_KEY,
              i = t(e.currentTarget).data(n);
          i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i);
        } else {
          if (t(this.getTipElement()).hasClass(p)) return void this._leave(null, this);

          this._enter(null, this);
        }
      }, A.dispose = function () {
        clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
      }, A.show = function () {
        var e = this;
        if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
        var i = t.Event(this.constructor.Event.SHOW);

        if (this.isWithContent() && this._isEnabled) {
          t(this.element).trigger(i);
          var s = t.contains(this.element.ownerDocument.documentElement, this.element);
          if (i.isDefaultPrevented() || !s) return;
          var r = this.getTipElement(),
              a = o.getUID(this.constructor.NAME);
          r.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && t(r).addClass(m);

          var h = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
              c = this._getAttachment(h);

          this.addAttachmentClass(c);
          var u = !1 === this.config.container ? document.body : t(this.config.container);
          t(r).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(r).appendTo(u), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, r, {
            placement: c,
            modifiers: {
              offset: {
                offset: this.config.offset
              },
              flip: {
                behavior: this.config.fallbackPlacement
              },
              arrow: {
                element: E
              },
              preventOverflow: {
                boundariesElement: this.config.boundary
              }
            },
            onCreate: function onCreate(t) {
              t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
            },
            onUpdate: function onUpdate(t) {
              e._handlePopperPlacementChange(t);
            }
          }), t(r).addClass(p), "ontouchstart" in document.documentElement && t("body").children().on("mouseover", null, t.noop);

          var f = function f() {
            e.config.animation && e._fixTransition();
            var n = e._hoverState;
            e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === _ && e._leave(null, e);
          };

          o.supportsTransitionEnd() && t(this.tip).hasClass(m) ? t(this.tip).one(o.TRANSITION_END, f).emulateTransitionEnd(l._TRANSITION_DURATION) : f();
        }
      }, A.hide = function (e) {
        var n = this,
            i = this.getTipElement(),
            s = t.Event(this.constructor.Event.HIDE),
            r = function r() {
          n._hoverState !== d && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e();
        };

        t(this.element).trigger(s), s.isDefaultPrevented() || (t(i).removeClass(p), "ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), this._activeTrigger[C] = !1, this._activeTrigger[y] = !1, this._activeTrigger[T] = !1, o.supportsTransitionEnd() && t(this.tip).hasClass(m) ? t(i).one(o.TRANSITION_END, r).emulateTransitionEnd(150) : r(), this._hoverState = "");
      }, A.update = function () {
        null !== this._popper && this._popper.scheduleUpdate();
      }, A.isWithContent = function () {
        return Boolean(this.getTitle());
      }, A.addAttachmentClass = function (e) {
        t(this.getTipElement()).addClass("bs-tooltip-" + e);
      }, A.getTipElement = function () {
        return this.tip = this.tip || t(this.config.template)[0], this.tip;
      }, A.setContent = function () {
        var e = t(this.getTipElement());
        this.setElementContent(e.find(v), this.getTitle()), e.removeClass(m + " " + p);
      }, A.setElementContent = function (e, n) {
        var i = this.config.html;
        "object" == _typeof(n) && (n.nodeType || n.jquery) ? i ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[i ? "html" : "text"](n);
      }, A.getTitle = function () {
        var t = this.element.getAttribute("data-original-title");
        return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
      }, A._getAttachment = function (t) {
        return u[t.toUpperCase()];
      }, A._setListeners = function () {
        var e = this;
        this.config.trigger.split(" ").forEach(function (n) {
          if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
            return e.toggle(t);
          });else if (n !== I) {
            var i = n === T ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                s = n === T ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
            t(e.element).on(i, e.config.selector, function (t) {
              return e._enter(t);
            }).on(s, e.config.selector, function (t) {
              return e._leave(t);
            });
          }
          t(e.element).closest(".modal").on("hide.bs.modal", function () {
            return e.hide();
          });
        }), this.config.selector ? this.config = r({}, this.config, {
          trigger: "manual",
          selector: ""
        }) : this._fixTitle();
      }, A._fixTitle = function () {
        var t = _typeof(this.element.getAttribute("data-original-title"));

        (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
      }, A._enter = function (e, n) {
        var i = this.constructor.DATA_KEY;
        (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? y : T] = !0), t(n.getTipElement()).hasClass(p) || n._hoverState === d ? n._hoverState = d : (clearTimeout(n._timeout), n._hoverState = d, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
          n._hoverState === d && n.show();
        }, n.config.delay.show) : n.show());
      }, A._leave = function (e, n) {
        var i = this.constructor.DATA_KEY;
        (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? y : T] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = _, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
          n._hoverState === _ && n.hide();
        }, n.config.delay.hide) : n.hide());
      }, A._isWithActiveTrigger = function () {
        for (var t in this._activeTrigger) {
          if (this._activeTrigger[t]) return !0;
        }

        return !1;
      }, A._getConfig = function (n) {
        return "number" == typeof (n = r({}, this.constructor.Default, t(this.element).data(), n)).delay && (n.delay = {
          show: n.delay,
          hide: n.delay
        }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), o.typeCheckConfig(e, n, this.constructor.DefaultType), n;
      }, A._getDelegateConfig = function () {
        var t = {};
        if (this.config) for (var e in this.config) {
          this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
        }
        return t;
      }, A._cleanTipClass = function () {
        var e = t(this.getTipElement()),
            n = e.attr("class").match(h);
        null !== n && n.length > 0 && e.removeClass(n.join(""));
      }, A._handlePopperPlacementChange = function (t) {
        this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
      }, A._fixTransition = function () {
        var e = this.getTipElement(),
            n = this.config.animation;
        null === e.getAttribute("x-placement") && (t(e).removeClass(m), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n);
      }, l._jQueryInterface = function (e) {
        return this.each(function () {
          var n = t(this).data(i),
              s = "object" == _typeof(e) && e;

          if ((n || !/dispose|hide/.test(e)) && (n || (n = new l(this, s), t(this).data(i, n)), "string" == typeof e)) {
            if ("undefined" == typeof n[e]) throw new Error('No method named "' + e + '"');
            n[e]();
          }
        });
      }, s(l, null, [{
        key: "VERSION",
        get: function get() {
          return "4.0.0-beta.3";
        }
      }, {
        key: "Default",
        get: function get() {
          return f;
        }
      }, {
        key: "NAME",
        get: function get() {
          return e;
        }
      }, {
        key: "DATA_KEY",
        get: function get() {
          return i;
        }
      }, {
        key: "Event",
        get: function get() {
          return g;
        }
      }, {
        key: "EVENT_KEY",
        get: function get() {
          return a;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return c;
        }
      }]), l;
    }();

    return t.fn[e] = A._jQueryInterface, t.fn[e].Constructor = A, t.fn[e].noConflict = function () {
      return t.fn[e] = l, A._jQueryInterface;
    }, A;
  }(e),
      _ = function (t) {
    var e = "popover",
        n = "bs.popover",
        i = "." + n,
        o = t.fn[e],
        a = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        l = r({}, d.Default, {
      placement: "right",
      trigger: "click",
      content: "",
      template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }),
        h = r({}, d.DefaultType, {
      content: "(string|element|function)"
    }),
        c = "fade",
        u = "show",
        f = ".popover-header",
        _ = ".popover-body",
        g = {
      HIDE: "hide" + i,
      HIDDEN: "hidden" + i,
      SHOW: "show" + i,
      SHOWN: "shown" + i,
      INSERTED: "inserted" + i,
      CLICK: "click" + i,
      FOCUSIN: "focusin" + i,
      FOCUSOUT: "focusout" + i,
      MOUSEENTER: "mouseenter" + i,
      MOUSELEAVE: "mouseleave" + i
    },
        m = function (r) {
      function o() {
        return r.apply(this, arguments) || this;
      }

      !function (t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
      }(o, r);
      var d = o.prototype;
      return d.isWithContent = function () {
        return this.getTitle() || this._getContent();
      }, d.addAttachmentClass = function (e) {
        t(this.getTipElement()).addClass("bs-popover-" + e);
      }, d.getTipElement = function () {
        return this.tip = this.tip || t(this.config.template)[0], this.tip;
      }, d.setContent = function () {
        var e = t(this.getTipElement());
        this.setElementContent(e.find(f), this.getTitle());

        var n = this._getContent();

        "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(_), n), e.removeClass(c + " " + u);
      }, d._getContent = function () {
        return this.element.getAttribute("data-content") || this.config.content;
      }, d._cleanTipClass = function () {
        var e = t(this.getTipElement()),
            n = e.attr("class").match(a);
        null !== n && n.length > 0 && e.removeClass(n.join(""));
      }, o._jQueryInterface = function (e) {
        return this.each(function () {
          var i = t(this).data(n),
              s = "object" == _typeof(e) ? e : null;

          if ((i || !/destroy|hide/.test(e)) && (i || (i = new o(this, s), t(this).data(n, i)), "string" == typeof e)) {
            if ("undefined" == typeof i[e]) throw new Error('No method named "' + e + '"');
            i[e]();
          }
        });
      }, s(o, null, [{
        key: "VERSION",
        get: function get() {
          return "4.0.0-beta.3";
        }
      }, {
        key: "Default",
        get: function get() {
          return l;
        }
      }, {
        key: "NAME",
        get: function get() {
          return e;
        }
      }, {
        key: "DATA_KEY",
        get: function get() {
          return n;
        }
      }, {
        key: "Event",
        get: function get() {
          return g;
        }
      }, {
        key: "EVENT_KEY",
        get: function get() {
          return i;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return h;
        }
      }]), o;
    }(d);

    return t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function () {
      return t.fn[e] = o, m._jQueryInterface;
    }, m;
  }(e),
      g = function (t) {
    var e = "scrollspy",
        n = "bs.scrollspy",
        i = "." + n,
        a = t.fn[e],
        l = {
      offset: 10,
      method: "auto",
      target: ""
    },
        h = {
      offset: "number",
      method: "string",
      target: "(string|element)"
    },
        c = {
      ACTIVATE: "activate" + i,
      SCROLL: "scroll" + i,
      LOAD_DATA_API: "load" + i + ".data-api"
    },
        u = "dropdown-item",
        f = "active",
        d = {
      DATA_SPY: '[data-spy="scroll"]',
      ACTIVE: ".active",
      NAV_LIST_GROUP: ".nav, .list-group",
      NAV_LINKS: ".nav-link",
      NAV_ITEMS: ".nav-item",
      LIST_ITEMS: ".list-group-item",
      DROPDOWN: ".dropdown",
      DROPDOWN_ITEMS: ".dropdown-item",
      DROPDOWN_TOGGLE: ".dropdown-toggle"
    },
        _ = "offset",
        g = "position",
        m = function () {
      function a(e, n) {
        var i = this;
        this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + d.NAV_LINKS + "," + this._config.target + " " + d.LIST_ITEMS + "," + this._config.target + " " + d.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(c.SCROLL, function (t) {
          return i._process(t);
        }), this.refresh(), this._process();
      }

      var m = a.prototype;
      return m.refresh = function () {
        var e = this,
            n = this._scrollElement !== this._scrollElement.window ? g : _,
            i = "auto" === this._config.method ? n : this._config.method,
            s = i === g ? this._getScrollTop() : 0;
        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight();
        t.makeArray(t(this._selector)).map(function (e) {
          var n,
              r = o.getSelectorFromElement(e);

          if (r && (n = t(r)[0]), n) {
            var a = n.getBoundingClientRect();
            if (a.width || a.height) return [t(n)[i]().top + s, r];
          }

          return null;
        }).filter(function (t) {
          return t;
        }).sort(function (t, e) {
          return t[0] - e[0];
        }).forEach(function (t) {
          e._offsets.push(t[0]), e._targets.push(t[1]);
        });
      }, m.dispose = function () {
        t.removeData(this._element, n), t(this._scrollElement).off(i), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
      }, m._getConfig = function (n) {
        if ("string" != typeof (n = r({}, l, n)).target) {
          var i = t(n.target).attr("id");
          i || (i = o.getUID(e), t(n.target).attr("id", i)), n.target = "#" + i;
        }

        return o.typeCheckConfig(e, n, h), n;
      }, m._getScrollTop = function () {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      }, m._getScrollHeight = function () {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }, m._getOffsetHeight = function () {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      }, m._process = function () {
        var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            n = this._config.offset + e - this._getOffsetHeight();

        if (this._scrollHeight !== e && this.refresh(), t >= n) {
          var i = this._targets[this._targets.length - 1];
          this._activeTarget !== i && this._activate(i);
        } else {
          if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();

          for (var s = this._offsets.length; s--;) {
            this._activeTarget !== this._targets[s] && t >= this._offsets[s] && ("undefined" == typeof this._offsets[s + 1] || t < this._offsets[s + 1]) && this._activate(this._targets[s]);
          }
        }
      }, m._activate = function (e) {
        this._activeTarget = e, this._clear();

        var n = this._selector.split(",");

        n = n.map(function (t) {
          return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
        });
        var i = t(n.join(","));
        i.hasClass(u) ? (i.closest(d.DROPDOWN).find(d.DROPDOWN_TOGGLE).addClass(f), i.addClass(f)) : (i.addClass(f), i.parents(d.NAV_LIST_GROUP).prev(d.NAV_LINKS + ", " + d.LIST_ITEMS).addClass(f), i.parents(d.NAV_LIST_GROUP).prev(d.NAV_ITEMS).children(d.NAV_LINKS).addClass(f)), t(this._scrollElement).trigger(c.ACTIVATE, {
          relatedTarget: e
        });
      }, m._clear = function () {
        t(this._selector).filter(d.ACTIVE).removeClass(f);
      }, a._jQueryInterface = function (e) {
        return this.each(function () {
          var i = t(this).data(n);

          if (i || (i = new a(this, "object" == _typeof(e) && e), t(this).data(n, i)), "string" == typeof e) {
            if ("undefined" == typeof i[e]) throw new Error('No method named "' + e + '"');
            i[e]();
          }
        });
      }, s(a, null, [{
        key: "VERSION",
        get: function get() {
          return "4.0.0-beta.3";
        }
      }, {
        key: "Default",
        get: function get() {
          return l;
        }
      }]), a;
    }();

    return t(window).on(c.LOAD_DATA_API, function () {
      for (var e = t.makeArray(t(d.DATA_SPY)), n = e.length; n--;) {
        var i = t(e[n]);

        m._jQueryInterface.call(i, i.data());
      }
    }), t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function () {
      return t.fn[e] = a, m._jQueryInterface;
    }, m;
  }(e),
      m = function (t) {
    var e = "bs.tab",
        n = "." + e,
        i = t.fn.tab,
        r = {
      HIDE: "hide" + n,
      HIDDEN: "hidden" + n,
      SHOW: "show" + n,
      SHOWN: "shown" + n,
      CLICK_DATA_API: "click.bs.tab.data-api"
    },
        a = "dropdown-menu",
        l = "active",
        h = "disabled",
        c = "fade",
        u = "show",
        f = ".dropdown",
        d = ".nav, .list-group",
        _ = ".active",
        g = "> li > .active",
        m = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        p = ".dropdown-toggle",
        v = "> .dropdown-menu .active",
        E = function () {
      function n(t) {
        this._element = t;
      }

      var i = n.prototype;
      return i.show = function () {
        var e = this;

        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(l) || t(this._element).hasClass(h))) {
          var n,
              i,
              s = t(this._element).closest(d)[0],
              a = o.getSelectorFromElement(this._element);

          if (s) {
            var c = "UL" === s.nodeName ? g : _;
            i = (i = t.makeArray(t(s).find(c)))[i.length - 1];
          }

          var u = t.Event(r.HIDE, {
            relatedTarget: this._element
          }),
              f = t.Event(r.SHOW, {
            relatedTarget: i
          });

          if (i && t(i).trigger(u), t(this._element).trigger(f), !f.isDefaultPrevented() && !u.isDefaultPrevented()) {
            a && (n = t(a)[0]), this._activate(this._element, s);

            var m = function m() {
              var n = t.Event(r.HIDDEN, {
                relatedTarget: e._element
              }),
                  s = t.Event(r.SHOWN, {
                relatedTarget: i
              });
              t(i).trigger(n), t(e._element).trigger(s);
            };

            n ? this._activate(n, n.parentNode, m) : m();
          }
        }
      }, i.dispose = function () {
        t.removeData(this._element, e), this._element = null;
      }, i._activate = function (e, n, i) {
        var s = this,
            r = ("UL" === n.nodeName ? t(n).find(g) : t(n).children(_))[0],
            a = i && o.supportsTransitionEnd() && r && t(r).hasClass(c),
            l = function l() {
          return s._transitionComplete(e, r, i);
        };

        r && a ? t(r).one(o.TRANSITION_END, l).emulateTransitionEnd(150) : l();
      }, i._transitionComplete = function (e, n, i) {
        if (n) {
          t(n).removeClass(u + " " + l);
          var s = t(n.parentNode).find(v)[0];
          s && t(s).removeClass(l), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1);
        }

        if (t(e).addClass(l), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), o.reflow(e), t(e).addClass(u), e.parentNode && t(e.parentNode).hasClass(a)) {
          var r = t(e).closest(f)[0];
          r && t(r).find(p).addClass(l), e.setAttribute("aria-expanded", !0);
        }

        i && i();
      }, n._jQueryInterface = function (i) {
        return this.each(function () {
          var s = t(this),
              r = s.data(e);

          if (r || (r = new n(this), s.data(e, r)), "string" == typeof i) {
            if ("undefined" == typeof r[i]) throw new Error('No method named "' + i + '"');
            r[i]();
          }
        });
      }, s(n, null, [{
        key: "VERSION",
        get: function get() {
          return "4.0.0-beta.3";
        }
      }]), n;
    }();

    return t(document).on(r.CLICK_DATA_API, m, function (e) {
      e.preventDefault(), E._jQueryInterface.call(t(this), "show");
    }), t.fn.tab = E._jQueryInterface, t.fn.tab.Constructor = E, t.fn.tab.noConflict = function () {
      return t.fn.tab = i, E._jQueryInterface;
    }, E;
  }(e);

  !function (t) {
    if ("undefined" == typeof t) throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  }(e), t.Util = o, t.Alert = a, t.Button = l, t.Carousel = h, t.Collapse = c, t.Dropdown = u, t.Modal = f, t.Popover = _, t.Scrollspy = g, t.Tab = m, t.Tooltip = d, Object.defineProperty(t, "__esModule", {
    value: !0
  });
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*!
 * jQuery Migrate - v3.3.2 - 2020-11-17T23:22Z
 * Copyright OpenJS Foundation and other contributors
 */
(function (factory) {
  "use strict";

  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define(["jquery"], function (jQuery) {
      return factory(jQuery, window);
    });
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    // Node/CommonJS
    // eslint-disable-next-line no-undef
    module.exports = factory(require("jquery"), window);
  } else {
    // Browser globals
    factory(jQuery, window);
  }
})(function (jQuery, window) {
  "use strict";

  jQuery.migrateVersion = "3.3.2"; // Returns 0 if v1 == v2, -1 if v1 < v2, 1 if v1 > v2

  function compareVersions(v1, v2) {
    var i,
        rVersionParts = /^(\d+)\.(\d+)\.(\d+)/,
        v1p = rVersionParts.exec(v1) || [],
        v2p = rVersionParts.exec(v2) || [];

    for (i = 1; i <= 3; i++) {
      if (+v1p[i] > +v2p[i]) {
        return 1;
      }

      if (+v1p[i] < +v2p[i]) {
        return -1;
      }
    }

    return 0;
  }

  function jQueryVersionSince(version) {
    return compareVersions(jQuery.fn.jquery, version) >= 0;
  }

  (function () {
    // Support: IE9 only
    // IE9 only creates console object when dev tools are first opened
    // IE9 console is a host object, callable but doesn't have .apply()
    if (!window.console || !window.console.log) {
      return;
    } // Need jQuery 3.0.0+ and no older Migrate loaded


    if (!jQuery || !jQueryVersionSince("3.0.0")) {
      window.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED");
    }

    if (jQuery.migrateWarnings) {
      window.console.log("JQMIGRATE: Migrate plugin loaded multiple times");
    } // Show a message on the console so devs know we're active


    window.console.log("JQMIGRATE: Migrate is installed" + (jQuery.migrateMute ? "" : " with logging active") + ", version " + jQuery.migrateVersion);
  })();

  var warnedAbout = {}; // By default each warning is only reported once.

  jQuery.migrateDeduplicateWarnings = true; // List of warnings already given; public read only

  jQuery.migrateWarnings = []; // Set to false to disable traces that appear with warnings

  if (jQuery.migrateTrace === undefined) {
    jQuery.migrateTrace = true;
  } // Forget any warnings we've already given; public


  jQuery.migrateReset = function () {
    warnedAbout = {};
    jQuery.migrateWarnings.length = 0;
  };

  function migrateWarn(msg) {
    var console = window.console;

    if (!jQuery.migrateDeduplicateWarnings || !warnedAbout[msg]) {
      warnedAbout[msg] = true;
      jQuery.migrateWarnings.push(msg);

      if (console && console.warn && !jQuery.migrateMute) {
        console.warn("JQMIGRATE: " + msg);

        if (jQuery.migrateTrace && console.trace) {
          console.trace();
        }
      }
    }
  }

  function migrateWarnProp(obj, prop, value, msg) {
    Object.defineProperty(obj, prop, {
      configurable: true,
      enumerable: true,
      get: function get() {
        migrateWarn(msg);
        return value;
      },
      set: function set(newValue) {
        migrateWarn(msg);
        value = newValue;
      }
    });
  }

  function migrateWarnFunc(obj, prop, newFunc, msg) {
    obj[prop] = function () {
      migrateWarn(msg);
      return newFunc.apply(this, arguments);
    };
  }

  if (window.document.compatMode === "BackCompat") {
    // JQuery has never supported or tested Quirks Mode
    migrateWarn("jQuery is not compatible with Quirks Mode");
  }

  var findProp,
      class2type = {},
      oldInit = jQuery.fn.init,
      oldFind = jQuery.find,
      rattrHashTest = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
      rattrHashGlob = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
      // Support: Android <=4.0 only
  // Make sure we trim BOM and NBSP
  rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

  jQuery.fn.init = function (arg1) {
    var args = Array.prototype.slice.call(arguments);

    if (typeof arg1 === "string" && arg1 === "#") {
      // JQuery( "#" ) is a bogus ID selector, but it returned an empty set before jQuery 3.0
      migrateWarn("jQuery( '#' ) is not a valid selector");
      args[0] = [];
    }

    return oldInit.apply(this, args);
  };

  jQuery.fn.init.prototype = jQuery.fn;

  jQuery.find = function (selector) {
    var args = Array.prototype.slice.call(arguments); // Support: PhantomJS 1.x
    // String#match fails to match when used with a //g RegExp, only on some strings

    if (typeof selector === "string" && rattrHashTest.test(selector)) {
      // The nonstandard and undocumented unquoted-hash was removed in jQuery 1.12.0
      // First see if qS thinks it's a valid selector, if so avoid a false positive
      try {
        window.document.querySelector(selector);
      } catch (err1) {
        // Didn't *look* valid to qSA, warn and try quoting what we think is the value
        selector = selector.replace(rattrHashGlob, function (_, attr, op, value) {
          return "[" + attr + op + "\"" + value + "\"]";
        }); // If the regexp *may* have created an invalid selector, don't update it
        // Note that there may be false alarms if selector uses jQuery extensions

        try {
          window.document.querySelector(selector);
          migrateWarn("Attribute selector with '#' must be quoted: " + args[0]);
          args[0] = selector;
        } catch (err2) {
          migrateWarn("Attribute selector with '#' was not fixed: " + args[0]);
        }
      }
    }

    return oldFind.apply(this, args);
  }; // Copy properties attached to original jQuery.find method (e.g. .attr, .isXML)


  for (findProp in oldFind) {
    if (Object.prototype.hasOwnProperty.call(oldFind, findProp)) {
      jQuery.find[findProp] = oldFind[findProp];
    }
  } // The number of elements contained in the matched element set


  migrateWarnFunc(jQuery.fn, "size", function () {
    return this.length;
  }, "jQuery.fn.size() is deprecated and removed; use the .length property");
  migrateWarnFunc(jQuery, "parseJSON", function () {
    return JSON.parse.apply(null, arguments);
  }, "jQuery.parseJSON is deprecated; use JSON.parse");
  migrateWarnFunc(jQuery, "holdReady", jQuery.holdReady, "jQuery.holdReady is deprecated");
  migrateWarnFunc(jQuery, "unique", jQuery.uniqueSort, "jQuery.unique is deprecated; use jQuery.uniqueSort"); // Now jQuery.expr.pseudos is the standard incantation

  migrateWarnProp(jQuery.expr, "filters", jQuery.expr.pseudos, "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos");
  migrateWarnProp(jQuery.expr, ":", jQuery.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"); // Prior to jQuery 3.1.1 there were internal refs so we don't warn there

  if (jQueryVersionSince("3.1.1")) {
    migrateWarnFunc(jQuery, "trim", function (text) {
      return text == null ? "" : (text + "").replace(rtrim, "");
    }, "jQuery.trim is deprecated; use String.prototype.trim");
  } // Prior to jQuery 3.2 there were internal refs so we don't warn there


  if (jQueryVersionSince("3.2.0")) {
    migrateWarnFunc(jQuery, "nodeName", function (elem, name) {
      return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    }, "jQuery.nodeName is deprecated");
    migrateWarnFunc(jQuery, "isArray", Array.isArray, "jQuery.isArray is deprecated; use Array.isArray");
  }

  if (jQueryVersionSince("3.3.0")) {
    migrateWarnFunc(jQuery, "isNumeric", function (obj) {
      // As of jQuery 3.0, isNumeric is limited to
      // strings and numbers (primitives or objects)
      // that can be coerced to finite numbers (gh-2662)
      var type = _typeof(obj);

      return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
      // ...but misinterprets leading-number strings, e.g. hex literals ("0x...")
      // subtraction forces infinities to NaN
      !isNaN(obj - parseFloat(obj));
    }, "jQuery.isNumeric() is deprecated"); // Populate the class2type map

    jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (_, name) {
      class2type["[object " + name + "]"] = name.toLowerCase();
    });
    migrateWarnFunc(jQuery, "type", function (obj) {
      if (obj == null) {
        return obj + "";
      } // Support: Android <=2.3 only (functionish RegExp)


      return _typeof(obj) === "object" || typeof obj === "function" ? class2type[Object.prototype.toString.call(obj)] || "object" : _typeof(obj);
    }, "jQuery.type is deprecated");
    migrateWarnFunc(jQuery, "isFunction", function (obj) {
      return typeof obj === "function";
    }, "jQuery.isFunction() is deprecated");
    migrateWarnFunc(jQuery, "isWindow", function (obj) {
      return obj != null && obj === obj.window;
    }, "jQuery.isWindow() is deprecated");
  } // Support jQuery slim which excludes the ajax module


  if (jQuery.ajax) {
    var oldAjax = jQuery.ajax,
        rjsonp = /(=)\?(?=&|$)|\?\?/;

    jQuery.ajax = function () {
      var jQXHR = oldAjax.apply(this, arguments); // Be sure we got a jQXHR (e.g., not sync)

      if (jQXHR.promise) {
        migrateWarnFunc(jQXHR, "success", jQXHR.done, "jQXHR.success is deprecated and removed");
        migrateWarnFunc(jQXHR, "error", jQXHR.fail, "jQXHR.error is deprecated and removed");
        migrateWarnFunc(jQXHR, "complete", jQXHR.always, "jQXHR.complete is deprecated and removed");
      }

      return jQXHR;
    }; // Only trigger the logic in jQuery <4 as the JSON-to-JSONP auto-promotion
    // behavior is gone in jQuery 4.0 and as it has security implications, we don't
    // want to restore the legacy behavior.


    if (!jQueryVersionSince("4.0.0")) {
      // Register this prefilter before the jQuery one. Otherwise, a promoted
      // request is transformed into one with the script dataType and we can't
      // catch it anymore.
      jQuery.ajaxPrefilter("+json", function (s) {
        // Warn if JSON-to-JSONP auto-promotion happens.
        if (s.jsonp !== false && (rjsonp.test(s.url) || typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data))) {
          migrateWarn("JSON-to-JSONP auto-promotion is deprecated");
        }
      });
    }
  }

  var oldRemoveAttr = jQuery.fn.removeAttr,
      oldToggleClass = jQuery.fn.toggleClass,
      rmatchNonSpace = /\S+/g;

  jQuery.fn.removeAttr = function (name) {
    var self = this;
    jQuery.each(name.match(rmatchNonSpace), function (_i, attr) {
      if (jQuery.expr.match.bool.test(attr)) {
        migrateWarn("jQuery.fn.removeAttr no longer sets boolean properties: " + attr);
        self.prop(attr, false);
      }
    });
    return oldRemoveAttr.apply(this, arguments);
  };

  jQuery.fn.toggleClass = function (state) {
    // Only deprecating no-args or single boolean arg
    if (state !== undefined && typeof state !== "boolean") {
      return oldToggleClass.apply(this, arguments);
    }

    migrateWarn("jQuery.fn.toggleClass( boolean ) is deprecated"); // Toggle entire class name of each element

    return this.each(function () {
      var className = this.getAttribute && this.getAttribute("class") || "";

      if (className) {
        jQuery.data(this, "__className__", className);
      } // If the element has a class name or if we're passed `false`,
      // then remove the whole classname (if there was one, the above saved it).
      // Otherwise bring back whatever was previously saved (if anything),
      // falling back to the empty string if nothing was stored.


      if (this.setAttribute) {
        this.setAttribute("class", className || state === false ? "" : jQuery.data(this, "__className__") || "");
      }
    });
  };

  function camelCase(string) {
    return string.replace(/-([a-z])/g, function (_, letter) {
      return letter.toUpperCase();
    });
  }

  var oldFnCss,
      internalSwapCall = false,
      ralphaStart = /^[a-z]/,
      // The regex visualized:
  //
  //                         /----------\
  //                        |            |    /-------\
  //                        |  / Top  \  |   |         |
  //         /--- Border ---+-| Right  |-+---+- Width -+---\
  //        |                 | Bottom |                    |
  //        |                  \ Left /                     |
  //        |                                               |
  //        |                              /----------\     |
  //        |          /-------------\    |            |    |- END
  //        |         |               |   |  / Top  \  |    |
  //        |         |  / Margin  \  |   | | Right  | |    |
  //        |---------+-|           |-+---+-| Bottom |-+----|
  //        |            \ Padding /         \ Left /       |
  // BEGIN -|                                               |
  //        |                /---------\                    |
  //        |               |           |                   |
  //        |               |  / Min \  |    / Width  \     |
  //         \--------------+-|       |-+---|          |---/
  //                           \ Max /       \ Height /
  rautoPx = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/; // If this version of jQuery has .swap(), don't false-alarm on internal uses

  if (jQuery.swap) {
    jQuery.each(["height", "width", "reliableMarginRight"], function (_, name) {
      var oldHook = jQuery.cssHooks[name] && jQuery.cssHooks[name].get;

      if (oldHook) {
        jQuery.cssHooks[name].get = function () {
          var ret;
          internalSwapCall = true;
          ret = oldHook.apply(this, arguments);
          internalSwapCall = false;
          return ret;
        };
      }
    });
  }

  jQuery.swap = function (elem, options, callback, args) {
    var ret,
        name,
        old = {};

    if (!internalSwapCall) {
      migrateWarn("jQuery.swap() is undocumented and deprecated");
    } // Remember the old values, and insert the new ones


    for (name in options) {
      old[name] = elem.style[name];
      elem.style[name] = options[name];
    }

    ret = callback.apply(elem, args || []); // Revert the old values

    for (name in options) {
      elem.style[name] = old[name];
    }

    return ret;
  };

  if (jQueryVersionSince("3.4.0") && typeof Proxy !== "undefined") {
    jQuery.cssProps = new Proxy(jQuery.cssProps || {}, {
      set: function set() {
        migrateWarn("JQMIGRATE: jQuery.cssProps is deprecated");
        return Reflect.set.apply(this, arguments);
      }
    });
  } // Create a dummy jQuery.cssNumber if missing. It won't be used by jQuery but
  // it will prevent code adding new keys to it unconditionally from crashing.


  if (!jQuery.cssNumber) {
    jQuery.cssNumber = {};
  }

  function isAutoPx(prop) {
    // The first test is used to ensure that:
    // 1. The prop starts with a lowercase letter (as we uppercase it for the second regex).
    // 2. The prop is not empty.
    return ralphaStart.test(prop) && rautoPx.test(prop[0].toUpperCase() + prop.slice(1));
  }

  oldFnCss = jQuery.fn.css;

  jQuery.fn.css = function (name, value) {
    var camelName,
        origThis = this;

    if (name && _typeof(name) === "object" && !Array.isArray(name)) {
      jQuery.each(name, function (n, v) {
        jQuery.fn.css.call(origThis, n, v);
      });
      return this;
    }

    if (typeof value === "number") {
      camelName = camelCase(name);

      if (!isAutoPx(camelName) && !jQuery.cssNumber[camelName]) {
        migrateWarn("Number-typed values are deprecated for jQuery.fn.css( \"" + name + "\", value )");
      }
    }

    return oldFnCss.apply(this, arguments);
  };

  var oldData = jQuery.data;

  jQuery.data = function (elem, name, value) {
    var curData, sameKeys, key; // Name can be an object, and each entry in the object is meant to be set as data

    if (name && _typeof(name) === "object" && arguments.length === 2) {
      curData = jQuery.hasData(elem) && oldData.call(this, elem);
      sameKeys = {};

      for (key in name) {
        if (key !== camelCase(key)) {
          migrateWarn("jQuery.data() always sets/gets camelCased names: " + key);
          curData[key] = name[key];
        } else {
          sameKeys[key] = name[key];
        }
      }

      oldData.call(this, elem, sameKeys);
      return name;
    } // If the name is transformed, look for the un-transformed name in the data object


    if (name && typeof name === "string" && name !== camelCase(name)) {
      curData = jQuery.hasData(elem) && oldData.call(this, elem);

      if (curData && name in curData) {
        migrateWarn("jQuery.data() always sets/gets camelCased names: " + name);

        if (arguments.length > 2) {
          curData[name] = value;
        }

        return curData[name];
      }
    }

    return oldData.apply(this, arguments);
  }; // Support jQuery slim which excludes the effects module


  if (jQuery.fx) {
    var intervalValue,
        intervalMsg,
        oldTweenRun = jQuery.Tween.prototype.run,
        linearEasing = function linearEasing(pct) {
      return pct;
    };

    jQuery.Tween.prototype.run = function () {
      if (jQuery.easing[this.easing].length > 1) {
        migrateWarn("'jQuery.easing." + this.easing.toString() + "' should use only one argument");
        jQuery.easing[this.easing] = linearEasing;
      }

      oldTweenRun.apply(this, arguments);
    };

    intervalValue = jQuery.fx.interval || 13;
    intervalMsg = "jQuery.fx.interval is deprecated"; // Support: IE9, Android <=4.4
    // Avoid false positives on browsers that lack rAF
    // Don't warn if document is hidden, jQuery uses setTimeout (#292)

    if (window.requestAnimationFrame) {
      Object.defineProperty(jQuery.fx, "interval", {
        configurable: true,
        enumerable: true,
        get: function get() {
          if (!window.document.hidden) {
            migrateWarn(intervalMsg);
          }

          return intervalValue;
        },
        set: function set(newValue) {
          migrateWarn(intervalMsg);
          intervalValue = newValue;
        }
      });
    }
  }

  var oldLoad = jQuery.fn.load,
      oldEventAdd = jQuery.event.add,
      originalFix = jQuery.event.fix;
  jQuery.event.props = [];
  jQuery.event.fixHooks = {};
  migrateWarnProp(jQuery.event.props, "concat", jQuery.event.props.concat, "jQuery.event.props.concat() is deprecated and removed");

  jQuery.event.fix = function (originalEvent) {
    var event,
        type = originalEvent.type,
        fixHook = this.fixHooks[type],
        props = jQuery.event.props;

    if (props.length) {
      migrateWarn("jQuery.event.props are deprecated and removed: " + props.join());

      while (props.length) {
        jQuery.event.addProp(props.pop());
      }
    }

    if (fixHook && !fixHook._migrated_) {
      fixHook._migrated_ = true;
      migrateWarn("jQuery.event.fixHooks are deprecated and removed: " + type);

      if ((props = fixHook.props) && props.length) {
        while (props.length) {
          jQuery.event.addProp(props.pop());
        }
      }
    }

    event = originalFix.call(this, originalEvent);
    return fixHook && fixHook.filter ? fixHook.filter(event, originalEvent) : event;
  };

  jQuery.event.add = function (elem, types) {
    // This misses the multiple-types case but that seems awfully rare
    if (elem === window && types === "load" && window.document.readyState === "complete") {
      migrateWarn("jQuery(window).on('load'...) called after load event occurred");
    }

    return oldEventAdd.apply(this, arguments);
  };

  jQuery.each(["load", "unload", "error"], function (_, name) {
    jQuery.fn[name] = function () {
      var args = Array.prototype.slice.call(arguments, 0); // If this is an ajax load() the first arg should be the string URL;
      // technically this could also be the "Anything" arg of the event .load()
      // which just goes to show why this dumb signature has been deprecated!
      // jQuery custom builds that exclude the Ajax module justifiably die here.

      if (name === "load" && typeof args[0] === "string") {
        return oldLoad.apply(this, args);
      }

      migrateWarn("jQuery.fn." + name + "() is deprecated");
      args.splice(0, 0, name);

      if (arguments.length) {
        return this.on.apply(this, args);
      } // Use .triggerHandler here because:
      // - load and unload events don't need to bubble, only applied to window or image
      // - error event should not bubble to window, although it does pre-1.7
      // See http://bugs.jquery.com/ticket/11820


      this.triggerHandler.apply(this, args);
      return this;
    };
  });
  jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function (_i, name) {
    // Handle event binding
    jQuery.fn[name] = function (data, fn) {
      migrateWarn("jQuery.fn." + name + "() event shorthand is deprecated");
      return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
    };
  }); // Trigger "ready" event only once, on document ready

  jQuery(function () {
    jQuery(window.document).triggerHandler("ready");
  });
  jQuery.event.special.ready = {
    setup: function setup() {
      if (this === window.document) {
        migrateWarn("'ready' event is deprecated");
      }
    }
  };
  jQuery.fn.extend({
    bind: function bind(types, data, fn) {
      migrateWarn("jQuery.fn.bind() is deprecated");
      return this.on(types, null, data, fn);
    },
    unbind: function unbind(types, fn) {
      migrateWarn("jQuery.fn.unbind() is deprecated");
      return this.off(types, null, fn);
    },
    delegate: function delegate(selector, types, data, fn) {
      migrateWarn("jQuery.fn.delegate() is deprecated");
      return this.on(types, selector, data, fn);
    },
    undelegate: function undelegate(selector, types, fn) {
      migrateWarn("jQuery.fn.undelegate() is deprecated");
      return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
    },
    hover: function hover(fnOver, fnOut) {
      migrateWarn("jQuery.fn.hover() is deprecated");
      return this.on("mouseenter", fnOver).on("mouseleave", fnOut || fnOver);
    }
  });

  var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      origHtmlPrefilter = jQuery.htmlPrefilter,
      makeMarkup = function makeMarkup(html) {
    var doc = window.document.implementation.createHTMLDocument("");
    doc.body.innerHTML = html;
    return doc.body && doc.body.innerHTML;
  },
      warnIfChanged = function warnIfChanged(html) {
    var changed = html.replace(rxhtmlTag, "<$1></$2>");

    if (changed !== html && makeMarkup(html) !== makeMarkup(changed)) {
      migrateWarn("HTML tags must be properly nested and closed: " + html);
    }
  };

  jQuery.UNSAFE_restoreLegacyHtmlPrefilter = function () {
    jQuery.htmlPrefilter = function (html) {
      warnIfChanged(html);
      return html.replace(rxhtmlTag, "<$1></$2>");
    };
  };

  jQuery.htmlPrefilter = function (html) {
    warnIfChanged(html);
    return origHtmlPrefilter(html);
  };

  var oldOffset = jQuery.fn.offset;

  jQuery.fn.offset = function () {
    var elem = this[0];

    if (elem && (!elem.nodeType || !elem.getBoundingClientRect)) {
      migrateWarn("jQuery.fn.offset() requires a valid DOM element");
      return arguments.length ? this : undefined;
    }

    return oldOffset.apply(this, arguments);
  }; // Support jQuery slim which excludes the ajax module
  // The jQuery.param patch is about respecting `jQuery.ajaxSettings.traditional`
  // so it doesn't make sense for the slim build.


  if (jQuery.ajax) {
    var oldParam = jQuery.param;

    jQuery.param = function (data, traditional) {
      var ajaxTraditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;

      if (traditional === undefined && ajaxTraditional) {
        migrateWarn("jQuery.param() no longer uses jQuery.ajaxSettings.traditional");
        traditional = ajaxTraditional;
      }

      return oldParam.call(this, data, traditional);
    };
  }

  var oldSelf = jQuery.fn.andSelf || jQuery.fn.addBack;

  jQuery.fn.andSelf = function () {
    migrateWarn("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()");
    return oldSelf.apply(this, arguments);
  }; // Support jQuery slim which excludes the deferred module in jQuery 4.0+


  if (jQuery.Deferred) {
    var oldDeferred = jQuery.Deferred,
        tuples = [// Action, add listener, callbacks, .then handlers, final state
    ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory")]];

    jQuery.Deferred = function (func) {
      var deferred = oldDeferred(),
          promise = deferred.promise();

      deferred.pipe = promise.pipe = function
        /* fnDone, fnFail, fnProgress */
      () {
        var fns = arguments;
        migrateWarn("deferred.pipe() is deprecated");
        return jQuery.Deferred(function (newDefer) {
          jQuery.each(tuples, function (i, tuple) {
            var fn = typeof fns[i] === "function" && fns[i]; // Deferred.done(function() { bind to newDefer or newDefer.resolve })
            // deferred.fail(function() { bind to newDefer or newDefer.reject })
            // deferred.progress(function() { bind to newDefer or newDefer.notify })

            deferred[tuple[1]](function () {
              var returned = fn && fn.apply(this, arguments);

              if (returned && typeof returned.promise === "function") {
                returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);
              } else {
                newDefer[tuple[0] + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments);
              }
            });
          });
          fns = null;
        }).promise();
      };

      if (func) {
        func.call(deferred, deferred);
      }

      return deferred;
    }; // Preserve handler of uncaught exceptions in promise chains


    jQuery.Deferred.exceptionHook = oldDeferred.exceptionHook;
  }

  return jQuery;
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*
 Copyright (C) Federico Zivolo 2019
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */
(function (e, t) {
  'object' == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t();
})(void 0, function () {
  'use strict';

  function e(e) {
    return e && '[object Function]' === {}.toString.call(e);
  }

  function t(e, t) {
    if (1 !== e.nodeType) return [];
    var o = e.ownerDocument.defaultView,
        n = o.getComputedStyle(e, null);
    return t ? n[t] : n;
  }

  function o(e) {
    return 'HTML' === e.nodeName ? e : e.parentNode || e.host;
  }

  function n(e) {
    if (!e) return document.body;

    switch (e.nodeName) {
      case 'HTML':
      case 'BODY':
        return e.ownerDocument.body;

      case '#document':
        return e.body;
    }

    var i = t(e),
        r = i.overflow,
        p = i.overflowX,
        s = i.overflowY;
    return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e));
  }

  function i(e) {
    return e && e.referenceNode ? e.referenceNode : e;
  }

  function r(e) {
    return 11 === e ? re : 10 === e ? pe : re || pe;
  }

  function p(e) {
    if (!e) return document.documentElement;

    for (var o = r(10) ? document.body : null, n = e.offsetParent || null; n === o && e.nextElementSibling;) {
      n = (e = e.nextElementSibling).offsetParent;
    }

    var i = n && n.nodeName;
    return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n, 'position') ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement;
  }

  function s(e) {
    var t = e.nodeName;
    return 'BODY' !== t && ('HTML' === t || p(e.firstElementChild) === e);
  }

  function d(e) {
    return null === e.parentNode ? e : d(e.parentNode);
  }

  function a(e, t) {
    if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
    var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        n = o ? e : t,
        i = o ? t : e,
        r = document.createRange();
    r.setStart(n, 0), r.setEnd(i, 0);
    var l = r.commonAncestorContainer;
    if (e !== l && t !== l || n.contains(i)) return s(l) ? l : p(l);
    var f = d(e);
    return f.host ? a(f.host, t) : a(e, d(t).host);
  }

  function l(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
        o = 'top' === t ? 'scrollTop' : 'scrollLeft',
        n = e.nodeName;

    if ('BODY' === n || 'HTML' === n) {
      var i = e.ownerDocument.documentElement,
          r = e.ownerDocument.scrollingElement || i;
      return r[o];
    }

    return e[o];
  }

  function f(e, t) {
    var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        n = l(t, 'top'),
        i = l(t, 'left'),
        r = o ? -1 : 1;
    return e.top += n * r, e.bottom += n * r, e.left += i * r, e.right += i * r, e;
  }

  function m(e, t) {
    var o = 'x' === t ? 'Left' : 'Top',
        n = 'Left' == o ? 'Right' : 'Bottom';
    return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + n + 'Width'], 10);
  }

  function h(e, t, o, n) {
    return ee(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], r(10) ? parseInt(o['offset' + e]) + parseInt(n['margin' + ('Height' === e ? 'Top' : 'Left')]) + parseInt(n['margin' + ('Height' === e ? 'Bottom' : 'Right')]) : 0);
  }

  function c(e) {
    var t = e.body,
        o = e.documentElement,
        n = r(10) && getComputedStyle(o);
    return {
      height: h('Height', t, o, n),
      width: h('Width', t, o, n)
    };
  }

  function g(e) {
    return le({}, e, {
      right: e.left + e.width,
      bottom: e.top + e.height
    });
  }

  function u(e) {
    var o = {};

    try {
      if (r(10)) {
        o = e.getBoundingClientRect();
        var n = l(e, 'top'),
            i = l(e, 'left');
        o.top += n, o.left += i, o.bottom += n, o.right += i;
      } else o = e.getBoundingClientRect();
    } catch (t) {}

    var p = {
      left: o.left,
      top: o.top,
      width: o.right - o.left,
      height: o.bottom - o.top
    },
        s = 'HTML' === e.nodeName ? c(e.ownerDocument) : {},
        d = s.width || e.clientWidth || p.width,
        a = s.height || e.clientHeight || p.height,
        f = e.offsetWidth - d,
        h = e.offsetHeight - a;

    if (f || h) {
      var u = t(e);
      f -= m(u, 'x'), h -= m(u, 'y'), p.width -= f, p.height -= h;
    }

    return g(p);
  }

  function b(e, o) {
    var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        p = r(10),
        s = 'HTML' === o.nodeName,
        d = u(e),
        a = u(o),
        l = n(e),
        m = t(o),
        h = parseFloat(m.borderTopWidth, 10),
        c = parseFloat(m.borderLeftWidth, 10);
    i && s && (a.top = ee(a.top, 0), a.left = ee(a.left, 0));
    var b = g({
      top: d.top - a.top - h,
      left: d.left - a.left - c,
      width: d.width,
      height: d.height
    });

    if (b.marginTop = 0, b.marginLeft = 0, !p && s) {
      var w = parseFloat(m.marginTop, 10),
          y = parseFloat(m.marginLeft, 10);
      b.top -= h - w, b.bottom -= h - w, b.left -= c - y, b.right -= c - y, b.marginTop = w, b.marginLeft = y;
    }

    return (p && !i ? o.contains(l) : o === l && 'BODY' !== l.nodeName) && (b = f(b, o)), b;
  }

  function w(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        o = e.ownerDocument.documentElement,
        n = b(e, o),
        i = ee(o.clientWidth, window.innerWidth || 0),
        r = ee(o.clientHeight, window.innerHeight || 0),
        p = t ? 0 : l(o),
        s = t ? 0 : l(o, 'left'),
        d = {
      top: p - n.top + n.marginTop,
      left: s - n.left + n.marginLeft,
      width: i,
      height: r
    };
    return g(d);
  }

  function y(e) {
    var n = e.nodeName;
    if ('BODY' === n || 'HTML' === n) return !1;
    if ('fixed' === t(e, 'position')) return !0;
    var i = o(e);
    return !!i && y(i);
  }

  function E(e) {
    if (!e || !e.parentElement || r()) return document.documentElement;

    for (var o = e.parentElement; o && 'none' === t(o, 'transform');) {
      o = o.parentElement;
    }

    return o || document.documentElement;
  }

  function v(e, t, r, p) {
    var s = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
        d = {
      top: 0,
      left: 0
    },
        l = s ? E(e) : a(e, i(t));
    if ('viewport' === p) d = w(l, s);else {
      var f;
      'scrollParent' === p ? (f = n(o(t)), 'BODY' === f.nodeName && (f = e.ownerDocument.documentElement)) : 'window' === p ? f = e.ownerDocument.documentElement : f = p;
      var m = b(f, l, s);

      if ('HTML' === f.nodeName && !y(l)) {
        var h = c(e.ownerDocument),
            g = h.height,
            u = h.width;
        d.top += m.top - m.marginTop, d.bottom = g + m.top, d.left += m.left - m.marginLeft, d.right = u + m.left;
      } else d = m;
    }
    r = r || 0;
    var v = 'number' == typeof r;
    return d.left += v ? r : r.left || 0, d.top += v ? r : r.top || 0, d.right -= v ? r : r.right || 0, d.bottom -= v ? r : r.bottom || 0, d;
  }

  function x(e) {
    var t = e.width,
        o = e.height;
    return t * o;
  }

  function O(e, t, o, n, i) {
    var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === e.indexOf('auto')) return e;
    var p = v(o, n, r, i),
        s = {
      top: {
        width: p.width,
        height: t.top - p.top
      },
      right: {
        width: p.right - t.right,
        height: p.height
      },
      bottom: {
        width: p.width,
        height: p.bottom - t.bottom
      },
      left: {
        width: t.left - p.left,
        height: p.height
      }
    },
        d = Object.keys(s).map(function (e) {
      return le({
        key: e
      }, s[e], {
        area: x(s[e])
      });
    }).sort(function (e, t) {
      return t.area - e.area;
    }),
        a = d.filter(function (e) {
      var t = e.width,
          n = e.height;
      return t >= o.clientWidth && n >= o.clientHeight;
    }),
        l = 0 < a.length ? a[0].key : d[0].key,
        f = e.split('-')[1];
    return l + (f ? '-' + f : '');
  }

  function L(e, t, o) {
    var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
        r = n ? E(t) : a(t, i(o));
    return b(o, r, n);
  }

  function S(e) {
    var t = e.ownerDocument.defaultView,
        o = t.getComputedStyle(e),
        n = parseFloat(o.marginTop || 0) + parseFloat(o.marginBottom || 0),
        i = parseFloat(o.marginLeft || 0) + parseFloat(o.marginRight || 0),
        r = {
      width: e.offsetWidth + i,
      height: e.offsetHeight + n
    };
    return r;
  }

  function T(e) {
    var t = {
      left: 'right',
      right: 'left',
      bottom: 'top',
      top: 'bottom'
    };
    return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }

  function C(e, t, o) {
    o = o.split('-')[0];
    var n = S(e),
        i = {
      width: n.width,
      height: n.height
    },
        r = -1 !== ['right', 'left'].indexOf(o),
        p = r ? 'top' : 'left',
        s = r ? 'left' : 'top',
        d = r ? 'height' : 'width',
        a = r ? 'width' : 'height';
    return i[p] = t[p] + t[d] / 2 - n[d] / 2, i[s] = o === s ? t[s] - n[a] : t[T(s)], i;
  }

  function D(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }

  function N(e, t, o) {
    if (Array.prototype.findIndex) return e.findIndex(function (e) {
      return e[t] === o;
    });
    var n = D(e, function (e) {
      return e[t] === o;
    });
    return e.indexOf(n);
  }

  function P(t, o, n) {
    var i = void 0 === n ? t : t.slice(0, N(t, 'name', n));
    return i.forEach(function (t) {
      t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
      var n = t['function'] || t.fn;
      t.enabled && e(n) && (o.offsets.popper = g(o.offsets.popper), o.offsets.reference = g(o.offsets.reference), o = n(o, t));
    }), o;
  }

  function k() {
    if (!this.state.isDestroyed) {
      var e = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: !1,
        offsets: {}
      };
      e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = C(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute', e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
    }
  }

  function W(e, t) {
    return e.some(function (e) {
      var o = e.name,
          n = e.enabled;
      return n && o === t;
    });
  }

  function B(e) {
    for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
      var i = t[n],
          r = i ? '' + i + o : e;
      if ('undefined' != typeof document.body.style[r]) return r;
    }

    return null;
  }

  function H() {
    return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right = '', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[B('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
  }

  function A(e) {
    var t = e.ownerDocument;
    return t ? t.defaultView : window;
  }

  function M(e, t, o, i) {
    var r = 'BODY' === e.nodeName,
        p = r ? e.ownerDocument.defaultView : e;
    p.addEventListener(t, o, {
      passive: !0
    }), r || M(n(p.parentNode), t, o, i), i.push(p);
  }

  function F(e, t, o, i) {
    o.updateBound = i, A(e).addEventListener('resize', o.updateBound, {
      passive: !0
    });
    var r = n(e);
    return M(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o;
  }

  function I() {
    this.state.eventsEnabled || (this.state = F(this.reference, this.options, this.state, this.scheduleUpdate));
  }

  function R(e, t) {
    return A(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function (e) {
      e.removeEventListener('scroll', t.updateBound);
    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t;
  }

  function U() {
    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = R(this.reference, this.state));
  }

  function Y(e) {
    return '' !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }

  function V(e, t) {
    Object.keys(t).forEach(function (o) {
      var n = '';
      -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && Y(t[o]) && (n = 'px'), e.style[o] = t[o] + n;
    });
  }

  function j(e, t) {
    Object.keys(t).forEach(function (o) {
      var n = t[o];
      !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
    });
  }

  function q(e, t) {
    var o = e.offsets,
        n = o.popper,
        i = o.reference,
        r = $,
        p = function p(e) {
      return e;
    },
        s = r(i.width),
        d = r(n.width),
        a = -1 !== ['left', 'right'].indexOf(e.placement),
        l = -1 !== e.placement.indexOf('-'),
        f = t ? a || l || s % 2 == d % 2 ? r : Z : p,
        m = t ? r : p;

    return {
      left: f(1 == s % 2 && 1 == d % 2 && !l && t ? n.left - 1 : n.left),
      top: m(n.top),
      bottom: m(n.bottom),
      right: f(n.right)
    };
  }

  function K(e, t, o) {
    var n = D(e, function (e) {
      var o = e.name;
      return o === t;
    }),
        i = !!n && e.some(function (e) {
      return e.name === o && e.enabled && e.order < n.order;
    });

    if (!i) {
      var r = '`' + t + '`';
      console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!');
    }

    return i;
  }

  function z(e) {
    return 'end' === e ? 'start' : 'start' === e ? 'end' : e;
  }

  function G(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        o = he.indexOf(e),
        n = he.slice(o + 1).concat(he.slice(0, o));
    return t ? n.reverse() : n;
  }

  function _(e, t, o, n) {
    var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
        r = +i[1],
        p = i[2];
    if (!r) return e;

    if (0 === p.indexOf('%')) {
      var s;

      switch (p) {
        case '%p':
          s = o;
          break;

        case '%':
        case '%r':
        default:
          s = n;
      }

      var d = g(s);
      return d[t] / 100 * r;
    }

    if ('vh' === p || 'vw' === p) {
      var a;
      return a = 'vh' === p ? ee(document.documentElement.clientHeight, window.innerHeight || 0) : ee(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r;
    }

    return r;
  }

  function X(e, t, o, n) {
    var i = [0, 0],
        r = -1 !== ['right', 'left'].indexOf(n),
        p = e.split(/(\+|\-)/).map(function (e) {
      return e.trim();
    }),
        s = p.indexOf(D(p, function (e) {
      return -1 !== e.search(/,|\s/);
    }));
    p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    var d = /\s*,\s*|\s+/,
        a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
    return a = a.map(function (e, n) {
      var i = (1 === n ? !r : r) ? 'height' : 'width',
          p = !1;
      return e.reduce(function (e, t) {
        return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t);
      }, []).map(function (e) {
        return _(e, i, t, o);
      });
    }), a.forEach(function (e, t) {
      e.forEach(function (o, n) {
        Y(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1));
      });
    }), i;
  }

  function J(e, t) {
    var o,
        n = t.offset,
        i = e.placement,
        r = e.offsets,
        p = r.popper,
        s = r.reference,
        d = i.split('-')[0];
    return o = Y(+n) ? [+n, 0] : X(n, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e;
  }

  var Q = Math.min,
      Z = Math.floor,
      $ = Math.round,
      ee = Math.max,
      te = 'undefined' != typeof window && 'undefined' != typeof document && 'undefined' != typeof navigator,
      oe = function () {
    for (var e = ['Edge', 'Trident', 'Firefox'], t = 0; t < e.length; t += 1) {
      if (te && 0 <= navigator.userAgent.indexOf(e[t])) return 1;
    }

    return 0;
  }(),
      ne = te && window.Promise,
      ie = ne ? function (e) {
    var t = !1;
    return function () {
      t || (t = !0, window.Promise.resolve().then(function () {
        t = !1, e();
      }));
    };
  } : function (e) {
    var t = !1;
    return function () {
      t || (t = !0, setTimeout(function () {
        t = !1, e();
      }, oe));
    };
  },
      re = te && !!(window.MSInputMethodContext && document.documentMode),
      pe = te && /MSIE 10/.test(navigator.userAgent),
      se = function se(e, t) {
    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
  },
      de = function () {
    function e(e, t) {
      for (var o, n = 0; n < t.length; n++) {
        o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }

    return function (t, o, n) {
      return o && e(t.prototype, o), n && e(t, n), t;
    };
  }(),
      ae = function ae(e, t, o) {
    return t in e ? Object.defineProperty(e, t, {
      value: o,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = o, e;
  },
      le = Object.assign || function (e) {
    for (var t, o = 1; o < arguments.length; o++) {
      for (var n in t = arguments[o], t) {
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      }
    }

    return e;
  },
      fe = te && /Firefox/i.test(navigator.userAgent),
      me = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
      he = me.slice(3),
      ce = {
    FLIP: 'flip',
    CLOCKWISE: 'clockwise',
    COUNTERCLOCKWISE: 'counterclockwise'
  },
      ge = function () {
    function t(o, n) {
      var i = this,
          r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
      se(this, t), this.scheduleUpdate = function () {
        return requestAnimationFrame(i.update);
      }, this.update = ie(this.update.bind(this)), this.options = le({}, t.Defaults, r), this.state = {
        isDestroyed: !1,
        isCreated: !1,
        scrollParents: []
      }, this.reference = o && o.jquery ? o[0] : o, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(le({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
        i.options.modifiers[e] = le({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {});
      }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
        return le({
          name: e
        }, i.options.modifiers[e]);
      }).sort(function (e, t) {
        return e.order - t.order;
      }), this.modifiers.forEach(function (t) {
        t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state);
      }), this.update();
      var p = this.options.eventsEnabled;
      p && this.enableEventListeners(), this.state.eventsEnabled = p;
    }

    return de(t, [{
      key: 'update',
      value: function value() {
        return k.call(this);
      }
    }, {
      key: 'destroy',
      value: function value() {
        return H.call(this);
      }
    }, {
      key: 'enableEventListeners',
      value: function value() {
        return I.call(this);
      }
    }, {
      key: 'disableEventListeners',
      value: function value() {
        return U.call(this);
      }
    }]), t;
  }();

  return ge.Utils = ('undefined' == typeof window ? global : window).PopperUtils, ge.placements = me, ge.Defaults = {
    placement: 'bottom',
    positionFixed: !1,
    eventsEnabled: !0,
    removeOnDestroy: !1,
    onCreate: function onCreate() {},
    onUpdate: function onUpdate() {},
    modifiers: {
      shift: {
        order: 100,
        enabled: !0,
        fn: function fn(e) {
          var t = e.placement,
              o = t.split('-')[0],
              n = t.split('-')[1];

          if (n) {
            var i = e.offsets,
                r = i.reference,
                p = i.popper,
                s = -1 !== ['bottom', 'top'].indexOf(o),
                d = s ? 'left' : 'top',
                a = s ? 'width' : 'height',
                l = {
              start: ae({}, d, r[d]),
              end: ae({}, d, r[d] + r[a] - p[a])
            };
            e.offsets.popper = le({}, p, l[n]);
          }

          return e;
        }
      },
      offset: {
        order: 200,
        enabled: !0,
        fn: J,
        offset: 0
      },
      preventOverflow: {
        order: 300,
        enabled: !0,
        fn: function fn(e, t) {
          var o = t.boundariesElement || p(e.instance.popper);
          e.instance.reference === o && (o = p(o));
          var n = B('transform'),
              i = e.instance.popper.style,
              r = i.top,
              s = i.left,
              d = i[n];
          i.top = '', i.left = '', i[n] = '';
          var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);
          i.top = r, i.left = s, i[n] = d, t.boundaries = a;
          var l = t.priority,
              f = e.offsets.popper,
              m = {
            primary: function primary(e) {
              var o = f[e];
              return f[e] < a[e] && !t.escapeWithReference && (o = ee(f[e], a[e])), ae({}, e, o);
            },
            secondary: function secondary(e) {
              var o = 'right' === e ? 'left' : 'top',
                  n = f[o];
              return f[e] > a[e] && !t.escapeWithReference && (n = Q(f[o], a[e] - ('right' === e ? f.width : f.height))), ae({}, o, n);
            }
          };
          return l.forEach(function (e) {
            var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
            f = le({}, f, m[t](e));
          }), e.offsets.popper = f, e;
        },
        priority: ['left', 'right', 'top', 'bottom'],
        padding: 5,
        boundariesElement: 'scrollParent'
      },
      keepTogether: {
        order: 400,
        enabled: !0,
        fn: function fn(e) {
          var t = e.offsets,
              o = t.popper,
              n = t.reference,
              i = e.placement.split('-')[0],
              r = Z,
              p = -1 !== ['top', 'bottom'].indexOf(i),
              s = p ? 'right' : 'bottom',
              d = p ? 'left' : 'top',
              a = p ? 'width' : 'height';
          return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]), o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])), e;
        }
      },
      arrow: {
        order: 500,
        enabled: !0,
        fn: function fn(e, o) {
          var n;
          if (!K(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
          var i = o.element;

          if ('string' == typeof i) {
            if (i = e.instance.popper.querySelector(i), !i) return e;
          } else if (!e.instance.popper.contains(i)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;

          var r = e.placement.split('-')[0],
              p = e.offsets,
              s = p.popper,
              d = p.reference,
              a = -1 !== ['left', 'right'].indexOf(r),
              l = a ? 'height' : 'width',
              f = a ? 'Top' : 'Left',
              m = f.toLowerCase(),
              h = a ? 'left' : 'top',
              c = a ? 'bottom' : 'right',
              u = S(i)[l];
          d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)), d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]), e.offsets.popper = g(e.offsets.popper);
          var b = d[m] + d[l] / 2 - u / 2,
              w = t(e.instance.popper),
              y = parseFloat(w['margin' + f], 10),
              E = parseFloat(w['border' + f + 'Width'], 10),
              v = b - e.offsets.popper[m] - y - E;
          return v = ee(Q(s[l] - u, v), 0), e.arrowElement = i, e.offsets.arrow = (n = {}, ae(n, m, $(v)), ae(n, h, ''), n), e;
        },
        element: '[x-arrow]'
      },
      flip: {
        order: 600,
        enabled: !0,
        fn: function fn(e, t) {
          if (W(e.instance.modifiers, 'inner')) return e;
          if (e.flipped && e.placement === e.originalPlacement) return e;
          var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
              n = e.placement.split('-')[0],
              i = T(n),
              r = e.placement.split('-')[1] || '',
              p = [];

          switch (t.behavior) {
            case ce.FLIP:
              p = [n, i];
              break;

            case ce.CLOCKWISE:
              p = G(n);
              break;

            case ce.COUNTERCLOCKWISE:
              p = G(n, !0);
              break;

            default:
              p = t.behavior;
          }

          return p.forEach(function (s, d) {
            if (n !== s || p.length === d + 1) return e;
            n = e.placement.split('-')[0], i = T(n);
            var a = e.offsets.popper,
                l = e.offsets.reference,
                f = Z,
                m = 'left' === n && f(a.right) > f(l.left) || 'right' === n && f(a.left) < f(l.right) || 'top' === n && f(a.bottom) > f(l.top) || 'bottom' === n && f(a.top) < f(l.bottom),
                h = f(a.left) < f(o.left),
                c = f(a.right) > f(o.right),
                g = f(a.top) < f(o.top),
                u = f(a.bottom) > f(o.bottom),
                b = 'left' === n && h || 'right' === n && c || 'top' === n && g || 'bottom' === n && u,
                w = -1 !== ['top', 'bottom'].indexOf(n),
                y = !!t.flipVariations && (w && 'start' === r && h || w && 'end' === r && c || !w && 'start' === r && g || !w && 'end' === r && u),
                E = !!t.flipVariationsByContent && (w && 'start' === r && c || w && 'end' === r && h || !w && 'start' === r && u || !w && 'end' === r && g),
                v = y || E;
            (m || b || v) && (e.flipped = !0, (m || b) && (n = p[d + 1]), v && (r = z(r)), e.placement = n + (r ? '-' + r : ''), e.offsets.popper = le({}, e.offsets.popper, C(e.instance.popper, e.offsets.reference, e.placement)), e = P(e.instance.modifiers, e, 'flip'));
          }), e;
        },
        behavior: 'flip',
        padding: 5,
        boundariesElement: 'viewport',
        flipVariations: !1,
        flipVariationsByContent: !1
      },
      inner: {
        order: 700,
        enabled: !1,
        fn: function fn(e) {
          var t = e.placement,
              o = t.split('-')[0],
              n = e.offsets,
              i = n.popper,
              r = n.reference,
              p = -1 !== ['left', 'right'].indexOf(o),
              s = -1 === ['top', 'left'].indexOf(o);
          return i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0), e.placement = T(t), e.offsets.popper = g(i), e;
        }
      },
      hide: {
        order: 800,
        enabled: !0,
        fn: function fn(e) {
          if (!K(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
          var t = e.offsets.reference,
              o = D(e.instance.modifiers, function (e) {
            return 'preventOverflow' === e.name;
          }).boundaries;

          if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
            if (!0 === e.hide) return e;
            e.hide = !0, e.attributes['x-out-of-boundaries'] = '';
          } else {
            if (!1 === e.hide) return e;
            e.hide = !1, e.attributes['x-out-of-boundaries'] = !1;
          }

          return e;
        }
      },
      computeStyle: {
        order: 850,
        enabled: !0,
        fn: function fn(e, t) {
          var o = t.x,
              n = t.y,
              i = e.offsets.popper,
              r = D(e.instance.modifiers, function (e) {
            return 'applyStyle' === e.name;
          }).gpuAcceleration;
          void 0 !== r && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
          var s,
              d,
              a = void 0 === r ? t.gpuAcceleration : r,
              l = p(e.instance.popper),
              f = u(l),
              m = {
            position: i.position
          },
              h = q(e, 2 > window.devicePixelRatio || !fe),
              c = 'bottom' === o ? 'top' : 'bottom',
              g = 'right' === n ? 'left' : 'right',
              b = B('transform');
          if (d = 'bottom' == c ? 'HTML' === l.nodeName ? -l.clientHeight + h.bottom : -f.height + h.bottom : h.top, s = 'right' == g ? 'HTML' === l.nodeName ? -l.clientWidth + h.right : -f.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[g] = 0, m.willChange = 'transform';else {
            var w = 'bottom' == c ? -1 : 1,
                y = 'right' == g ? -1 : 1;
            m[c] = d * w, m[g] = s * y, m.willChange = c + ', ' + g;
          }
          var E = {
            "x-placement": e.placement
          };
          return e.attributes = le({}, E, e.attributes), e.styles = le({}, m, e.styles), e.arrowStyles = le({}, e.offsets.arrow, e.arrowStyles), e;
        },
        gpuAcceleration: !0,
        x: 'bottom',
        y: 'right'
      },
      applyStyle: {
        order: 900,
        enabled: !0,
        fn: function fn(e) {
          return V(e.instance.popper, e.styles), j(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && V(e.arrowElement, e.arrowStyles), e;
        },
        onLoad: function onLoad(e, t, o, n, i) {
          var r = L(i, t, e, o.positionFixed),
              p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
          return t.setAttribute('x-placement', p), V(t, {
            position: o.positionFixed ? 'fixed' : 'absolute'
          }), o;
        },
        gpuAcceleration: void 0
      }
    }
  }, ge;
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function (a) {
  "use strict";

  "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery);
}(function (a) {
  "use strict";

  var b = window.Slick || {};
  b = function () {
    function c(c, d) {
      var f,
          e = this;
      e.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: a(c),
        appendDots: a(c),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function customPaging(b, c) {
          return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }, e.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.focussed = !1, e.interrupted = !1, e.hidden = "hidden", e.paused = !0, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, d, f), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0);
    }

    var b = 0;
    return c;
  }(), b.prototype.activateADA = function () {
    var a = this;
    a.$slideTrack.find(".slick-active").attr({
      "aria-hidden": "false"
    }).find("a, input, button, select").attr({
      tabindex: "0"
    });
  }, b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
    var e = this;
    if ("boolean" == typeof c) d = c, c = null;else if (0 > c || c >= e.slideCount) return !1;
    e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function (b, c) {
      a(c).attr("data-slick-index", b);
    }), e.$slidesCache = e.$slides, e.reinit();
  }, b.prototype.animateHeight = function () {
    var a = this;

    if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
      var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
      a.$list.animate({
        height: b
      }, a.options.speed);
    }
  }, b.prototype.animateSlide = function (b, c) {
    var d = {},
        e = this;
    e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
      left: b
    }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
      top: b
    }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
      animStart: e.currentLeft
    }).animate({
      animStart: b
    }, {
      duration: e.options.speed,
      easing: e.options.easing,
      step: function step(a) {
        a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d));
      },
      complete: function complete() {
        c && c.call();
      }
    })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function () {
      e.disableTransition(), c.call();
    }, e.options.speed));
  }, b.prototype.getNavTarget = function () {
    var b = this,
        c = b.options.asNavFor;
    return c && null !== c && (c = a(c).not(b.$slider)), c;
  }, b.prototype.asNavFor = function (b) {
    var c = this,
        d = c.getNavTarget();
    null !== d && "object" == _typeof(d) && d.each(function () {
      var c = a(this).slick("getSlick");
      c.unslicked || c.slideHandler(b, !0);
    });
  }, b.prototype.applyTransition = function (a) {
    var b = this,
        c = {};
    b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
  }, b.prototype.autoPlay = function () {
    var a = this;
    a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed));
  }, b.prototype.autoPlayClear = function () {
    var a = this;
    a.autoPlayTimer && clearInterval(a.autoPlayTimer);
  }, b.prototype.autoPlayIterator = function () {
    var a = this,
        b = a.currentSlide + a.options.slidesToScroll;
    a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b));
  }, b.prototype.buildArrows = function () {
    var b = this;
    b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
      "aria-disabled": "true",
      tabindex: "-1"
    }));
  }, b.prototype.buildDots = function () {
    var c,
        d,
        b = this;

    if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
      for (b.$slider.addClass("slick-dotted"), d = a("<ul />").addClass(b.options.dotsClass), c = 0; c <= b.getDotCount(); c += 1) {
        d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
      }

      b.$dots = d.appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false");
    }
  }, b.prototype.buildOut = function () {
    var b = this;
    b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function (b, c) {
      a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "");
    }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable");
  }, b.prototype.buildRows = function () {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        a = this;

    if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
      for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
        var i = document.createElement("div");

        for (c = 0; c < a.options.rows; c++) {
          var j = document.createElement("div");

          for (d = 0; d < a.options.slidesPerRow; d++) {
            var k = b * h + (c * a.options.slidesPerRow + d);
            g.get(k) && j.appendChild(g.get(k));
          }

          i.appendChild(j);
        }

        e.appendChild(i);
      }

      a.$slider.empty().append(e), a.$slider.children().children().children().css({
        width: 100 / a.options.slidesPerRow + "%",
        display: "inline-block"
      });
    }
  }, b.prototype.checkResponsive = function (b, c) {
    var e,
        f,
        g,
        d = this,
        h = !1,
        i = d.$slider.width(),
        j = window.innerWidth || a(window).width();

    if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
      f = null;

      for (e in d.breakpoints) {
        d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
      }

      null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h]);
    }
  }, b.prototype.changeSlide = function (b, c) {
    var f,
        g,
        h,
        d = this,
        e = a(b.currentTarget);

    switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
      case "previous":
        g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
        break;

      case "next":
        g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
        break;

      case "index":
        var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
        d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
        break;

      default:
        return;
    }
  }, b.prototype.checkNavigable = function (a) {
    var c,
        d,
        b = this;
    if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];else for (var e in c) {
      if (a < c[e]) {
        a = d;
        break;
      }

      d = c[e];
    }
    return a;
  }, b.prototype.cleanUpEvents = function () {
    var b = this;
    b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition);
  }, b.prototype.cleanUpSlideEvents = function () {
    var b = this;
    b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1));
  }, b.prototype.cleanUpRows = function () {
    var b,
        a = this;
    a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.empty().append(b));
  }, b.prototype.clickHandler = function (a) {
    var b = this;
    b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault());
  }, b.prototype.destroy = function (b) {
    var c = this;
    c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
      a(this).attr("style", a(this).data("originalStyling"));
    }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c]);
  }, b.prototype.disableTransition = function (a) {
    var b = this,
        c = {};
    c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
  }, b.prototype.fadeSlide = function (a, b) {
    var c = this;
    c.cssTransitions === !1 ? (c.$slides.eq(a).css({
      zIndex: c.options.zIndex
    }), c.$slides.eq(a).animate({
      opacity: 1
    }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
      opacity: 1,
      zIndex: c.options.zIndex
    }), b && setTimeout(function () {
      c.disableTransition(a), b.call();
    }, c.options.speed));
  }, b.prototype.fadeSlideOut = function (a) {
    var b = this;
    b.cssTransitions === !1 ? b.$slides.eq(a).animate({
      opacity: 0,
      zIndex: b.options.zIndex - 2
    }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
      opacity: 0,
      zIndex: b.options.zIndex - 2
    }));
  }, b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
    var b = this;
    null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit());
  }, b.prototype.focusHandler = function () {
    var b = this;
    b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (c) {
      c.stopImmediatePropagation();
      var d = a(this);
      setTimeout(function () {
        b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay());
      }, 0);
    });
  }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
    var a = this;
    return a.currentSlide;
  }, b.prototype.getDotCount = function () {
    var a = this,
        b = 0,
        c = 0,
        d = 0;
    if (a.options.infinite === !0) for (; b < a.slideCount;) {
      ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    } else if (a.options.centerMode === !0) d = a.slideCount;else if (a.options.asNavFor) for (; b < a.slideCount;) {
      ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    } else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
    return d - 1;
  }, b.prototype.getLeft = function (a) {
    var c,
        d,
        f,
        b = this,
        e = 0;
    return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c;
  }, b.prototype.getOption = b.prototype.slickGetOption = function (a) {
    var b = this;
    return b.options[a];
  }, b.prototype.getNavigableIndexes = function () {
    var e,
        a = this,
        b = 0,
        c = 0,
        d = [];

    for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) {
      d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    }

    return d;
  }, b.prototype.getSlick = function () {
    return this;
  }, b.prototype.getSlideCount = function () {
    var c,
        d,
        e,
        b = this;
    return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
      return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0;
    }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll;
  }, b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
    var c = this;
    c.changeSlide({
      data: {
        message: "index",
        index: parseInt(a)
      }
    }, b);
  }, b.prototype.init = function (b) {
    var c = this;
    a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay());
  }, b.prototype.initADA = function () {
    var b = this;
    b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({
      tabindex: "-1"
    }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
      a(this).attr({
        role: "option",
        "aria-describedby": "slick-slide" + b.instanceUid + c
      });
    }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function (c) {
      a(this).attr({
        role: "presentation",
        "aria-selected": "false",
        "aria-controls": "navigation" + b.instanceUid + c,
        id: "slick-slide" + b.instanceUid + c
      });
    }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA();
  }, b.prototype.initArrowEvents = function () {
    var a = this;
    a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", {
      message: "previous"
    }, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", {
      message: "next"
    }, a.changeSlide));
  }, b.prototype.initDotEvents = function () {
    var b = this;
    b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
      message: "index"
    }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1));
  }, b.prototype.initSlideEvents = function () {
    var b = this;
    b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)));
  }, b.prototype.initializeEvents = function () {
    var b = this;
    b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", {
      action: "start"
    }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
      action: "move"
    }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
      action: "end"
    }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
      action: "end"
    }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition);
  }, b.prototype.initUI = function () {
    var a = this;
    a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show();
  }, b.prototype.keyHandler = function (a) {
    var b = this;
    a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
      data: {
        message: b.options.rtl === !0 ? "next" : "previous"
      }
    }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
      data: {
        message: b.options.rtl === !0 ? "previous" : "next"
      }
    }));
  }, b.prototype.lazyLoad = function () {
    function g(c) {
      a("img[data-lazy]", c).each(function () {
        var c = a(this),
            d = a(this).attr("data-lazy"),
            e = document.createElement("img");
        e.onload = function () {
          c.animate({
            opacity: 0
          }, 100, function () {
            c.attr("src", d).animate({
              opacity: 1
            }, 200, function () {
              c.removeAttr("data-lazy").removeClass("slick-loading");
            }), b.$slider.trigger("lazyLoaded", [b, c, d]);
          });
        }, e.onerror = function () {
          c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), b.$slider.trigger("lazyLoadError", [b, c, d]);
        }, e.src = d;
      });
    }

    var c,
        d,
        e,
        f,
        b = this;
    b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = Math.ceil(e + b.options.slidesToShow), b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d));
  }, b.prototype.loadSlider = function () {
    var a = this;
    a.setPosition(), a.$slideTrack.css({
      opacity: 1
    }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad();
  }, b.prototype.next = b.prototype.slickNext = function () {
    var a = this;
    a.changeSlide({
      data: {
        message: "next"
      }
    });
  }, b.prototype.orientationChange = function () {
    var a = this;
    a.checkResponsive(), a.setPosition();
  }, b.prototype.pause = b.prototype.slickPause = function () {
    var a = this;
    a.autoPlayClear(), a.paused = !0;
  }, b.prototype.play = b.prototype.slickPlay = function () {
    var a = this;
    a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1;
  }, b.prototype.postSlide = function (a) {
    var b = this;
    b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA());
  }, b.prototype.prev = b.prototype.slickPrev = function () {
    var a = this;
    a.changeSlide({
      data: {
        message: "previous"
      }
    });
  }, b.prototype.preventDefault = function (a) {
    a.preventDefault();
  }, b.prototype.progressiveLazyLoad = function (b) {
    b = b || 1;
    var e,
        f,
        g,
        c = this,
        d = a("img[data-lazy]", c.$slider);
    d.length ? (e = d.first(), f = e.attr("data-lazy"), g = document.createElement("img"), g.onload = function () {
      e.attr("src", f).removeAttr("data-lazy").removeClass("slick-loading"), c.options.adaptiveHeight === !0 && c.setPosition(), c.$slider.trigger("lazyLoaded", [c, e, f]), c.progressiveLazyLoad();
    }, g.onerror = function () {
      3 > b ? setTimeout(function () {
        c.progressiveLazyLoad(b + 1);
      }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), c.$slider.trigger("lazyLoadError", [c, e, f]), c.progressiveLazyLoad());
    }, g.src = f) : c.$slider.trigger("allImagesLoaded", [c]);
  }, b.prototype.refresh = function (b) {
    var d,
        e,
        c = this;
    e = c.slideCount - c.options.slidesToShow, !c.options.infinite && c.currentSlide > e && (c.currentSlide = e), c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, {
      currentSlide: d
    }), c.init(), b || c.changeSlide({
      data: {
        message: "index",
        index: d
      }
    }, !1);
  }, b.prototype.registerBreakpoints = function () {
    var c,
        d,
        e,
        b = this,
        f = b.options.responsive || null;

    if ("array" === a.type(f) && f.length) {
      b.respondTo = b.options.respondTo || "window";

      for (c in f) {
        if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
          for (; e >= 0;) {
            b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
          }

          b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings;
        }
      }

      b.breakpoints.sort(function (a, c) {
        return b.options.mobileFirst ? a - c : c - a;
      });
    }
  }, b.prototype.reinit = function () {
    var b = this;
    b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b]);
  }, b.prototype.resize = function () {
    var b = this;
    a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function () {
      b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition();
    }, 50));
  }, b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
    var d = this;
    return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit());
  }, b.prototype.setCSS = function (a) {
    var d,
        e,
        b = this,
        c = {};
    b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)));
  }, b.prototype.setDimensions = function () {
    var a = this;
    a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
      padding: "0px " + a.options.centerPadding
    }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
      padding: a.options.centerPadding + " 0px"
    })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
    var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
    a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b);
  }, b.prototype.setFade = function () {
    var c,
        b = this;
    b.$slides.each(function (d, e) {
      c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({
        position: "relative",
        right: c,
        top: 0,
        zIndex: b.options.zIndex - 2,
        opacity: 0
      }) : a(e).css({
        position: "relative",
        left: c,
        top: 0,
        zIndex: b.options.zIndex - 2,
        opacity: 0
      });
    }), b.$slides.eq(b.currentSlide).css({
      zIndex: b.options.zIndex - 1,
      opacity: 1
    });
  }, b.prototype.setHeight = function () {
    var a = this;

    if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
      var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
      a.$list.css("height", b);
    }
  }, b.prototype.setOption = b.prototype.slickSetOption = function () {
    var c,
        d,
        e,
        f,
        h,
        b = this,
        g = !1;
    if ("object" === a.type(arguments[0]) ? (e = arguments[0], g = arguments[1], h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0], f = arguments[1], g = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")), "single" === h) b.options[e] = f;else if ("multiple" === h) a.each(e, function (a, c) {
      b.options[a] = c;
    });else if ("responsive" === h) for (d in f) {
      if ("array" !== a.type(b.options.responsive)) b.options.responsive = [f[d]];else {
        for (c = b.options.responsive.length - 1; c >= 0;) {
          b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1), c--;
        }

        b.options.responsive.push(f[d]);
      }
    }
    g && (b.unload(), b.reinit());
  }, b.prototype.setPosition = function () {
    var a = this;
    a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a]);
  }, b.prototype.setProps = function () {
    var a = this,
        b = document.body.style;
    a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1;
  }, b.prototype.setSlideClasses = function (a) {
    var c,
        d,
        e,
        f,
        b = this;
    d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad();
  }, b.prototype.setupInfinite = function () {
    var c,
        d,
        e,
        b = this;

    if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
      for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) {
        d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
      }

      for (c = 0; e > c; c += 1) {
        d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
      }

      b.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        a(this).attr("id", "");
      });
    }
  }, b.prototype.interrupt = function (a) {
    var b = this;
    a || b.autoPlay(), b.interrupted = a;
  }, b.prototype.selectHandler = function (b) {
    var c = this,
        d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
        e = parseInt(d.attr("data-slick-index"));
    return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e);
  }, b.prototype.slideHandler = function (a, b, c) {
    var d,
        e,
        f,
        g,
        j,
        h = null,
        i = this;
    return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
      i.postSlide(d);
    }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
      i.postSlide(d);
    }) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.options.asNavFor && (j = i.getNavTarget(), j = j.slick("getSlick"), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function () {
      i.postSlide(e);
    })) : i.postSlide(e), void i.animateHeight()) : void (c !== !0 ? i.animateSlide(h, function () {
      i.postSlide(e);
    }) : i.postSlide(e))));
  }, b.prototype.startLoad = function () {
    var a = this;
    a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading");
  }, b.prototype.swipeDirection = function () {
    var a,
        b,
        c,
        d,
        e = this;
    return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical";
  }, b.prototype.swipeEnd = function (a) {
    var c,
        d,
        b = this;
    if (b.dragging = !1, b.interrupted = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;

    if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) {
      switch (d = b.swipeDirection()) {
        case "left":
        case "down":
          c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.currentDirection = 0;
          break;

        case "right":
        case "up":
          c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.currentDirection = 1;
      }

      "vertical" != d && (b.slideHandler(c), b.touchObject = {}, b.$slider.trigger("swipe", [b, d]));
    } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {});
  }, b.prototype.swipeHandler = function (a) {
    var b = this;
    if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
      case "start":
        b.swipeStart(a);
        break;

      case "move":
        b.swipeMove(a);
        break;

      case "end":
        b.swipeEnd(a);
    }
  }, b.prototype.swipeMove = function (a) {
    var d,
        e,
        f,
        g,
        h,
        b = this;
    return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0);
  }, b.prototype.swipeStart = function (a) {
    var c,
        b = this;
    return b.interrupted = !0, 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void (b.dragging = !0));
  }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
    var a = this;
    null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit());
  }, b.prototype.unload = function () {
    var b = this;
    a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
  }, b.prototype.unslick = function (a) {
    var b = this;
    b.$slider.trigger("unslick", [b, a]), b.destroy();
  }, b.prototype.updateArrows = function () {
    var b,
        a = this;
    b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
  }, b.prototype.updateDots = function () {
    var a = this;
    null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"));
  }, b.prototype.visibility = function () {
    var a = this;
    a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1);
  }, a.fn.slick = function () {
    var f,
        g,
        a = this,
        c = arguments[0],
        d = Array.prototype.slice.call(arguments, 1),
        e = a.length;

    for (f = 0; e > f; f++) {
      if ("object" == _typeof(c) || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
    }

    return a;
  };
});