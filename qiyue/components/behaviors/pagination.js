Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.paginationBev = void 0;

require("../../utils/http.js");

var t = Behavior({
    properties: {},
    data: {
        start: 0,
        count: 20,
        dataArray: [],
        empty: !1,
        ending: !1
    },
    methods: {
        setMoreData: function(t) {
            0 == t && (this.data.ending = !0, 0 == this.data.dataArray && this.setData({
                empty: !0
            }));
            var a = this.data.dataArray.concat(t);
            return this.data.start += this.data.count, this.setData({
                dataArray: a
            }), !0;
        },
        hasMore: function() {
            return !this.data.ending;
        },
        getCurrentStart: function() {
            return this.data.start;
        },
        initPagination: function() {
            this.data.ending = !1, this.data.start = 0, this.data.dataArray = [], this.setData({
                dataArray: []
            });
        }
    }
});

exports.paginationBev = t;