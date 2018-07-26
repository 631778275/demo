Component({
    properties: {
        book: Object,
        showLike: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        title: String,
        author: String,
        img: String
    },
    methods: {
        onTap: function(t) {
            this.triggerEvent("booktap", {
                bid: this.properties.book.id
            }, {}), wx.navigateTo({
                url: "../../pages/detail/detail?bid=" + this.properties.book.id
            });
        }
    }
});