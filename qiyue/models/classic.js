function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function t(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function r(e, t) {
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
}), exports.ClassicModel = void 0;

var s = function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var s = t[r];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), 
            Object.defineProperty(e, s.key, s);
        }
    }
    return function(t, r, s) {
        return r && e(t.prototype, r), s && e(t, s), t;
    };
}(), 
n = require("../utils/http.js"), 
i = (require("../models/classic-storage.js"), 
function(i) {
    function u() {
        e(this, u);
        var r = t(this, (u.__proto__ || Object.getPrototypeOf(u)).call(this));
        return r.prefix = "classic", r;
    }
    return r(u, n.HTTP), s(u, [ {
        key: "getLatest",
        value: function(e) {
            var t = this;
            this.request({
                url: "classic/latest",
                success: function(r) {
                    var s = t._fullKey(r.index);
                    wx.setStorageSync(s, r), t._setLatestIndex(r.index), e(r);
                }
            });
        }
    }, {
        key: "getPrevious",
        value: function(e, t) {
            this._getClassic(e, "previous", t);
        }
    }, {
        key: "getNext",
        value: function(e, t) {
            this._getClassic(e, "next", t);
        }
    }, {
        key: "getById",
        value: function(e, t, r) {
            var s = {
                url: "classic/" + t + "/" + e,
                success: r
            };
            this.request(s);
        }
    }, {
        key: "isLatest",
        value: function(e) {
            var t = this._fullKey("latest-" + e), r = wx.getStorageSync(t);
            return !!r && (e == r || void 0);
        }
    }, {
        key: "isFirst",
        value: function(e) {
            return 1 == e;
        }
    }, {
        key: "getMyFavor",
        value: function(e) {
            var t = {
                url: "classic/favor",
                success: e
            };
            this.request(t);
        }
    }, {
        key: "_getClassic",
        value: function(e, t, r) {
            var s = this, n = "next" == t ? this._fullKey(e + 1) : this._fullKey(e - 1), i = wx.getStorageSync(n);
            if (i) r(i); else {
                var u = {
                    url: "classic/" + e + "/" + t,
                    success: function(e) {
                        var t = s._fullKey(e.index);
                        wx.setStorageSync(t, e), r(e);
                    }
                };
                this.request(u);
            }
        }
    }, {
        key: "_setLatestIndex",
        value: function(e) {
            var t = this._fullKey("latest-" + e);
            wx.setStorageSync(t, e);
        }
    }, {
        key: "_getLatestEpsoide",
        value: function(e) {
            var t = this._fullKey(e);
            return wx.getStorageSync(t);
        }
    }, {
        key: "_fullKey",
        value: function(e) {
            return this.prefix + "-" + e;
        }
    } ]), u;
}());

exports.ClassicModel = i;