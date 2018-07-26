var t = require("../../models/classic.js"), s = require("../../models/like.js"), i = new t.ClassicModel(), e = new s.LikeModel();

Component({
    properties: {},
    data: {
        classic: null,
        latest: !0,
        first: !1,
        like: !1,
        count: 0
    },
    methods: {
        onLoad: function(t) {
            var s = this, e = t.cid, a = t.type;
            i.getById(e, a, function(t) {
                s._getLikeStatus(t.id, t.type), s.setData({
                    classic: t
                });
            });
        },
        onPrevious: function(t) {
            var s = this, e = this.data.classic.index;
            i.getPrevious(e, function(t) {
                t ? (s._getLikeStatus(t.id, t.type), s.setData({
                    classic: t,
                    latest: i.isLatest(t.index),
                    first: i.isFirst(t.index)
                })) : console.log("not more classic");
            });
        },
        onNext: function(t) {
            var s = this, e = this.data.classic.index;
            i.getNext(e, function(t) {
                t ? (s._getLikeStatus(t.id, t.type), s.setData({
                    classic: t,
                    latest: i.isLatest(t.index),
                    first: i.isFirst(t.index)
                })) : console.log("not more classic");
            });
        },
        onLike: function(t) {
            var s = t.detail.behavior;
            e.like(s, this.data.classic.id, this.data.classic.type);
        },
        _getLikeStatus: function(t, s) {
            var i = this;
            e.getClassicLikeStatus(t, s, function(t) {
                i.setData({
                    like: t.like_status,
                    count: t.fav_nums
                });
            });
        },
        onShareAppMessage: function() {}
    }
});