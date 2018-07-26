var o = require("../../models/classic.js"), 
t = require("../../models/book.js"), 
e = new o.ClassicModel(), 
s = new t.BookModel();

Page({
    data: {
        hasUserInfo: !0,
        userInfo: null,
        classics: [],
        myBooksCount: 0
    },
    onShow: function(o) {
        this.getMyFavor(), this.hasGottenUserInfo(), this.getMyBookCount();
    },
    getMyBookCount: function() {
        var o = this;
        s.getMyBookCount(function(t) {
            o.setData({
                myBooksCount: t.count
            });
        });
    },
    hasGottenUserInfo: function() {
        var o = this;
        wx.getSetting({
            success: function(t) {
                t.authSetting["scope.userInfo"] ? wx.getUserInfo({
                    success: function(t) {
                        o.setData({
                            hasUserInfo: !0,
                            userInfo: t.userInfo
                        });
                    }
                }) : o.setData({
                    hasUserInfo: !1
                });
            }
        });
    },
    onGetUserInfo: function(o) {
        var t = o.detail.userInfo;
        t && this.setData({
            hasUserInfo: !0,
            userInfo: t
        });
    },
    getMyFavor: function() {
        var o = this;
        e.getMyFavor(function(t) {
            o.setData({
                classics: t
            });
        });
    },
    onPreviewTap: function(o) {
        wx.navigateTo({
            url: "/pages/classic-detail/index?cid=" + o.detail.cid + "&type=" + o.detail.type
        });
    },
    onJumpToAbout: function(o) {
        wx.navigateTo({
            url: "/pages/about/about"
        });
    },
    onStudy: function(o) {
        wx.navigateTo({
            url: "/pages/course/course"
        });
    },
    onShareAppMessage: function() {}
});