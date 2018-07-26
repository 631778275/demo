Component({
    properties: {
        like: Boolean,
        count: Number,
        readOnly: Boolean
    },
    data: {
        yes_url: "images/like.png",
        no_url: "images/like@dis.png"
    },
    methods: {
        onLike: function(e) {
            if (!this.properties.readOnly) {
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
    }
});