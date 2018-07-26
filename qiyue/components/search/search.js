var t = require("../../utils/http.js"), e = require("keyword.js"), a = require("../behaviors/pagination.js"), s = new t.HTTP(), i = new e.KeywordModel();

Component({
    behaviors: [ a.paginationBev ],
    properties: {
        more: {
            type: String,
            observer: "_loadMore"
        }
    },
    data: {
        historyKeys: [],
        hotKeys: [],
        finished: !1,
        q: "",
        loading: !1,
        loadingCenter: !1
    },
    attached: function() {
        var t = this;
        this.setData({
            historyKeys: i.getHistory()
        }), i.getHot(function(e) {
            t.setData({
                hotKeys: e.hot
            });
        });
    },
    methods: {
        _loadMore: function() {
            var t = this;
            this.data.q && this.hasMore() && (this.setData({
                loading: !0
            }), s.request({
                url: "book/search?summary=1",
                data: {
                    q: this.data.q,
                    start: this.getCurrentStart()
                },
                success: function(e) {
                    t.setMoreData(e.books), t.setData({
                        loading: !1
                    });
                }
            }));
        },
        onCancel: function(t) {
            this.triggerEvent("cancel", {}, {});
        },
        onDelete: function(t) {
            this.setData({
                finished: !1,
                empty: !1,
                q: ""
            });
        },
        onConfirm: function(t) {
            var e = this;
            this.setData({
                finished: !0,
                loadingCenter: !0
            }), this.initPagination();
            var a = t.detail.value || t.detail.text;
            s.request({
                url: "book/search?summary=1",
                data: {
                    q: a,
                    start: this.getCurrentStart()
                },
                success: function(t) {
                    0 != t.books && i.addToHistory(a), e.setMoreData(t.books), e.setData({
                        q: a,
                        loadingCenter: !1
                    });
                }
            });
        }
    }
});