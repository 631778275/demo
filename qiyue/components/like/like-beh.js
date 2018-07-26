Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.likeBehavior = void 0;

require("../../utils/http.js");

var e = Behavior({
    properties: {
        like: Boolean,
        count: Number
    },
    data: {
        yes_url: "../images/like.png",
        no_url: "../images/like@dis.png"
    },
    attached: function() {},
    methods: {
        onLike: function(e) {
            var i = this.properties.count;
            i = this.properties.like ? i - 1 : i + 1, this.setData({
                count: i,
                like: !this.properties.like
            });
            var t = this.properties.like ? "like" : "cancel";
            this.triggerEvent("like", {
                behavior: t
            }, {});
        }
    }
});

exports.likeBehavior = e;