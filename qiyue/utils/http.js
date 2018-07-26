function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.HTTP = void 0;

var t = function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
    };
}(), 
r = require("../config.js"), 
n = function() {
    function n() {
        e(this, n), this.baseRestUrl = r.config.api_blink_url;
    }
    return t(n, [ {
        key: "request",
        value: function(e) {
            var t = this.baseRestUrl + e.url;
            e.method || (e.method = "GET"), wx.request({
                url: t,
                data: e.data,
                method: e.method,
                header: {
                    "content-type": "application/json",
                    appkey: r.config.appkey
                },
                success: function(t) {
                    "2" == t.statusCode.toString().charAt(0) ? e.success && e.success(t.data) : e.error && e.error(t);
                },
                fail: function(t) {
                    e.fail && e.fail(t);
                }
            });
        }
    } ]), n;
}();

exports.HTTP = n;