function e(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}

var n = function() {
    function e(e, n) {
        for (var t = 0; t < n.length; t++) {
            var r = n[t];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(n, t, r) {
        return t && e(n.prototype, t), r && e(n, r), n;
    };
}();

((function() {
    function t(n) {
        e(this, t), this.key = t.prefix + "-" + n;
    }
    return n(t, [ {
        key: "get",
        value: function(e) {
            return wx.getStorageSync(this.key);
        }
    }, {
        key: "set",
        value: function(e, n) {
            wx.setStorageSync(this.key, n);
        }
    } ]), t;
})()).prefix = "classic";