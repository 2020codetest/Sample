var Alert = function (data) {
    if (!data) {
        return;
    }

    this.content = data.content
    this.panel = document.createElement('div')
    this.contentNode = document.createElement('p')
    this.confirmBtn = document.createElement('span')
    this.closeBtn = document.createElement('b')
    this.panel.className = 'alert'
    this.closeBtn.className = 'a-close'
    this.confirmBtn.className = 'a-confirm'
}

Alert.prototype = {
    init: function() {
        this.panel.appendChild(this.closeBtn)
        this.panel.appendChild(this.contentNode)
        this.panel.appendChild(this.confirmBtn)
        document.body.appendChild(this.panel)
        this.bindEvent()
        this.show()
    },
    bindEvent: function(){
        var me = this
        this.closeBtn.onclick = function() {
            me.fail()
            me.hide()
        }

        this.confirmBtn.onclick = function() {
            me.success()
            me.hide()
        }
    },
    hide: function() {
        this.panel.style.display = 'none'
    },
    show: function() {
        this.panel.style.display = 'block'
    }
}

var RightAlert = function(data) {
    Alert.call(this, data)
    this.confirmBtn.className = this.confirmBtn.className + ' right'
}