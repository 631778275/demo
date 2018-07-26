function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    };
}(), n = function() {
    function n() {
        e(this, n), this.key = "q";
    }
    return t(n, [ {
        key: "all",
        value: function() {
            return wx.getStorageSync(this.key);
        }
    }, {
        key: "add",
        value: function(e) {
            var t = this.all();
            t ? (-1 == t.indexOf(e) && (t = t.push(e)), wx.setStorageSync(this.key, t)) : (t = [ e ], 
            wx.setStorageSync(this.key, t));
        }
    } ]), n;
}();

exports.KeywordStorage = n;