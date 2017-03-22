import './popup.css';
class Popup {
        constructor(type = "tip",
            popupContent = '操作成功',
            popupClassName = 'popup-box',
            innerPopupClassName = 'inner-popup-box',
            popupContentClassName = 'popup-box-bd',
            btnClassName = 'pop-btn',
            btnContent = '确定') {
            this.type = type;
            //toast
            if (type == "toast") {
                this.popup = document.createElement('div');
                this.popup.className = "popup-box empty-box";
                this.popToast = document.createElement('div');
                this.popToast.className = 'pop-toast';
                this.popToast.innerHTML = popupContent;
                this.popup.appendChild(this.popToast);
            }
            //loading
            else if (type == "load") {
                this.popup = document.createElement('div');
                this.popup.className = "popup-box empty-box";
                this.loading = document.createElement('div');
                this.loading.className = 'load-sta';
                this.icon = document.createElement('i');
                this.icon.className="load-icon";
                this.info = document.createElement('p');
                this.info.innerHTML = popupContent;
                this.loading.appendChild(this.icon);
                this.loading.appendChild(this.info);
                this.popup.appendChild(this.loading);

            } else if (type == "tip") {
                this.popup = document.createElement('div');
                this.popup.className = popupClassName;
                this.popupWrap = document.createElement('div');
                this.popupWrap.className = innerPopupClassName;
                this.conetent = document.createElement('p');
                this.conetent.innerHTML = popupContent;
                this.conetent.className = popupContentClassName;
                this.confirmButton = document.createElement('button');
                this.confirmButton.innerHTML = btnContent;
                this.confirmButton.className = btnClassName;
                this.popupWrap.appendChild(this.conetent);
                this.popupWrap.appendChild(this.confirmButton);
                this.popup.appendChild(this.popupWrap);
                this.bindEvent();
            }
        }

        bindEvent() {
            this.confirmButton.addEventListener('click', () => {
                this.hide();
            })
        }

        show(time,callback) {
            document.querySelector('body').appendChild(this.popup);
            this.popup.style.display = "-webkit-box";
            if (this.type == "toast") {
                setTimeout(() => {
                    this.popup.outerHTML = "";
                    callback && callback();
                }, time);
            }
        }
        hide() {
            this.popup.outerHTML = ""
        }
    }
    export default Popup



