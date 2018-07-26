Component({
    properties: {
        classic: {
            type: Object,
            observer: function(t) {
                if (t) var e = {
                    100: "电影",
                    200: "音乐",
                    300: "句子"
                }[t.type];
                this.setData({
                    typeText: e
                });
            }
        }
    },
    data: {
        typeText: String
    },
    methods: {
        onTap: function(t) {
            this.triggerEvent("tap", {
                cid: this.properties.classic.id,
                type: this.properties.classic.type
            }, {});
        }
    }
});