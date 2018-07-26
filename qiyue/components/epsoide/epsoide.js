Component({
    properties: {
        index: {
            type: Number,
            observer: function(t, e, n) {
                t < 10 && this.setData({
                    _index: "0" + t
                });
            }
        }
    },
    data: {
        months: [ "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月" ],
        year: Number,
        month: String,
        _index: String
    },
    ready: function() {
        var t = new Date(), e = t.getMonth(), n = t.getFullYear();
        this.setData({
            month: this.data.months[e],
            year: n
        });
    },
    methods: {}
});