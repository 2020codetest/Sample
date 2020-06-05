import { Base64 } from 'js-base64';
import md5 from 'md5';

Page({
    data: {
        name: 'name',
        base64: 'base64',
        md5: 'md5'
    },
    onLoad: function (option: any){
        console.log('onLoad', option);
    },
    changeName: function (){
        const name = new Date().toString();
        const encodedBase64 = Base64.encode(name);
        const encodedMd5 = md5(name);
        this.setData({ name: name, base64: encodedBase64, md5: encodedMd5 });
    }
});