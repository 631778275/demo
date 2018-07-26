function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function t(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function o(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.KeywordModel = void 0;

var r = function() {
    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var r = t[o];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, o, r) {
        return o && e(t.prototype, o), r && e(t, r), t;
    };
}(), n = require("../../utils/http.js"), i = function(i) {
    function u() {
        e(this, u);
        var o = t(this, (u.__proto__ || Object.getPrototypeOf(u)).call(this));
        return o.key = "q", o.max = 10, o;
    }
    return o(u, n.HTTP), r(u, [ {
        key: "getHistory",
        value: function() {
            return wx.getStorageSync(this.key);
        }
    }, {
        key: "getHot",
        value: function(e) {
            this.request({
                url: "/book/hot_keyword",
                success: e
            });
        }
    }, {
        key: "addToHistory",
        value: function(e) {
            var t = this.getHistory();
            t ? (-1 == t.indexOf(e) && (t.length >= this.max && t.pop(e), t.unshift(e)), wx.setStorageSync(this.key, t)) : (t = [ e ], 
            wx.setStorageSync(this.key, t));
        }
    } ]), u;
}();

exports.KeywordModel = i;