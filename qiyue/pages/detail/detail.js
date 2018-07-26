var t = require("../../models/book.js"), o = require("../../models/like.js"), e = require("../../models/comment.js"), n = new t.BookModel(), s = new e.CommentModel(), i = new o.LikeModel();

Page({
    data: {
        book: null,
        comments: [],
        noComment: !0,
        posting: !1,
        like: !1,
        count: 0
    },
    onLoad: function(t) {
        var o = this, e = t.bid;
        n.getDetail(e, function(t) {
            o.setData({
                book: t
            });
        }), s.getComment(e, function(t) {
            o.setData({
                noComment: 0 == t.comments,
                comments: t.comments
            });
        }), n.getLikeStatus(e, function(t) {
            o.setData({
                like: t.like_status,
                count: t.fav_nums
            });
        });
    },
    onFakePost: function() {
        this.setData({
            posting: !0
        });
    },
    onPost: function(t) {
        var o = this, e = t.detail.value || t.detail.text;
        e && (e.length > 12 ? wx.showToast({
            title: "短评最多12个字",
            icon: "none"
        }) : (s.post(this.data.book.id, e, function(t) {
            wx.showToast({
                title: "+ 1",
                icon: "none"
            }), o.data.comments.unshift({
                content: e,
                nums: 1
            }), o.setData({
                comments: o.data.comments,
                noComment: !1
            });
        }), this.setData({
            posting: !1
        })));
    },
    onCancel: function(t) {
        this.setData({
            posting: !1
        });
    },
    onLike: function(t) {
        var o = t.detail.behavior;
        i.like(o, this.data.book.id, 400);
    },
    onShareAppMessage: function() {}
});