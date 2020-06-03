import { Util } from '../../model/util';
import { Base64 } from 'js-base64';
import md5 from 'md5';

Page({
    data: {
        name: 'my name',
        base64: 'base64',
        md5: 'md5'
    },

    changeName: function changeName(){
        this.setData({
            base64:  Base64.encode(Util.Now()),
            name: Util.Now(),
            md5: md5(Util.Now())
        });
    },

    onLoad: function onLoad(option: any){
        console.log('launch now ', option);
    }
});