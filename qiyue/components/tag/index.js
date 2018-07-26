Component({
    options: {
        multipleSlots: !0
    },
    externalClasses: [ "tag-class" ],
    properties: {
        text: String
    },
    data: {},
    methods: {
        onTap: function(t) {
            this.triggerEvent("tapping", {
                text: this.properties.text
            });
        }
    }
});