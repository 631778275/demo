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
}), exports.CommentModel = void 0;

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
}(), n = require("../utils/http.js"), u = function(u) {
    function i() {
        return e(this, i), t(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
    }
    return o(i, n.HTTP), r(i, [ {
        key: "getComment",
        value: function(e, t) {
            var o = {
                url: "book/" + e + "/short_comment",
                success: t
            };
            this.request(o);
        }
    }, {
        key: "post",
        value: function(e, t, o) {
            var r = {
                url: "book/add/short_comment",
                success: o,
                method: "POST",
                data: {
                    book_id: e,
                    content: t
                },
                error: function(e) {
                    wx.showToast({
                        title: "评论失败"
                    });
                }
            };
            this.request(r);
        }
    } ]), i;
}();

exports.CommentModel = u;