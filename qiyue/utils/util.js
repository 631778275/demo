var r = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];

module.exports = {
    random: function(t) {
        for (var a = "", n = 0; n < t; n++) {
            var o = Math.ceil(35 * Math.random());
            a += r[o];
        }
        return a;
    },
    breakSection: function(r) {}
};