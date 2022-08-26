function _createModalWindow(options) {
    const modal = document.createElement('div');
    const defaultWidth = '400px';
    modal.classList.add('vmodal');
    modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay">
            <div class="modal-window" style="width: ${options.width || defaultWidth}">
                <div class="modal-header">
                    <h3 class="modal-title">${options.title || 'Window'}</h3>
                    <span>&times;</span>
                </div>
                <div class="modal-body">
                    ${options.content || ''}
                </div>
                <div class="modal-footer">
                    <button>OK</button>
                    <button>Close</button>
                </div>
            </div>
        </div>
    `   
    );
    document.body.appendChild(modal);
    return modal;
}

const $modal = _createModalWindow();

$.modal = function (options) {
    const animationTime = 600;
    let closing = false;
    return {
        open() {
            !closing && $modal.classList.add('open');
        },
        close() {
            closing = true;
            $modal.classList.remove('open');
            $modal.classList.add('hide');
            setTimeout(() => {
                $modal.classList.remove('hide');
                closing = false;
            }, animationTime);
        },
        destroy() {
            console.log("ggg")
        }
    }
}
