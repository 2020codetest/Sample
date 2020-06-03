import { Util } from "../../model/util"
import { Base64} from 'js-base64'
const md5 = require("md5")

Page({
    data: {
        name: "my name",
        base64: "base64",
        md5: "md5"
    },
    changeName: function(){
        console.log("change name 1")
        this.setData({
            base64:  Base64.encode(Util.Now()),
            name: Util.Now(),
            md5: md5(Util.Now())})
    },

    onLoad: function(option: any) {
        console.log("launch now ", option)
    }
})