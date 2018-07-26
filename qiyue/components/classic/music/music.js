var i = require("../classic-beh.js"), t = wx.getBackgroundAudioManager();

Component({
    behaviors: [ i.classicBehavior ],
    properties: {
        src: String,
        title: String
    },
    data: {
        playing: !1,
        waittingUrl: "images/player@waitting.png",
        playingUrl: "images/player@playing.png"
    },
    attached: function() {
        this._recoverPlaying(), this._monitorSwitch();
    },
    detached: function() {},
    methods: {
        onPlay: function(i) {
            this.data.playing ? (this.setData({
                playing: !1
            }), t.pause()) : (this.setData({
                playing: !0
            }), t.src == this.properties.src ? t.play() : t.src = this.properties.src, t.title = this.properties.title);
        },
        _recoverPlaying: function() {
            t.paused ? this.setData({
                playing: !1
            }) : t.src == this.properties.src && (t.paused || this.setData({
                playing: !0
            }));
        },
        _monitorSwitch: function() {
            var i = this;
            t.onPlay(function() {
                i._recoverPlaying();
            }), t.onPause(function() {
                i._recoverPlaying();
            }), t.onStop(function() {
                i._recoverPlaying();
            }), t.onEnded(function() {
                i._recoverPlaying();
            });
        }
    }
});