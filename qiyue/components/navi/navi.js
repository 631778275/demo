Component({
    properties: {
        title: {
            type: String,
            value: "..."
        },
        latest: {
            type: Boolean,
            value: !1,
            observer: function() {}
        },
        first: {
            type: Boolean,
            value: !1,
            observer: function() {}
        }
    },
    data: {
        disLeftSrc: "images/triangle.dis@left.png",
        highLeftSrc: "images/triangle@left.png"
    },
    methods: {
        onLeft: function() {
            this.properties.latest || this.triggerEvent("left", {}, {});
        },
        onRight: function() {
            this.properties.first || this.triggerEvent("right", {}, {});
        }
    }
});