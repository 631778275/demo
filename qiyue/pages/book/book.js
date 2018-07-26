var t = require("../../models/book.js"), 
e = require("../../utils/util.js"), 
o = new t.BookModel();

Page({
    data: {
        searchPanel: !1,
        books: Object,
        more: !1
    },
    onReachBottom: function(t) {
        this.setData({
            more: (0, e.random)(16)
        });
    },
    onLoad: function(t) {
        var e = this;
        o.getHotList(function(t) {
            e.setData({
                books: t
            });
        });
    },
    onActivateSearch: function(t) {
        this.setData({
            searchPanel: !0
        });
    },
    onCancel: function(t) {
        this.setData({
            searchPanel: !1
        });
    },
    onShareAppMessage: function() {}
});