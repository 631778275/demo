Component({
    options: {
        multipleSlots: !0
    },
    properties: {
        openType: {
            type: String
        },
        imageSrc: {
            type: String
        },
        bindgetuserinfo: {
            type: String
        }
    },
    data: {},
    methods: {
        onGetUserInfo: function(t) {
            this.triggerEvent("getuserinfo", t.detail, {});
        }
    }
});