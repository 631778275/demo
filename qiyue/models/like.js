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
}), exports.LikeModel = void 0;

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
}(), n = require("../utils/http.js"), i = function(i) {
    function u() {
        return e(this, u), t(this, (u.__proto__ || Object.getPrototypeOf(u)).call(this));
    }
    return o(u, n.HTTP), r(u, [ {
        key: "getClassicLikeStatus",
        value: function(e, t, o) {
            var r = {
                url: "classic/" + t + "/" + e + "/favor",
                success: o
            };
            this.request(r);
        }
    }, {
        key: "getBookLikeStatus",
        value: function(e, t, o) {
            var r = {
                url: "book/" + t + "/" + e + "/favor",
                success: o
            };
            this.request(r);
        }
    }, {
        key: "like",
        value: function(e, t, o) {
            var r = "cancel" === e ? "like/cancel" : "like";
            this.request({
                url: r,
                method: "POST",
                data: {
                    art_id: t,
                    type: o
                },
                success: function(e) {
                    console.log(e);
                }
            });
        }
    } ]), u;
}();

exports.LikeModel = i;