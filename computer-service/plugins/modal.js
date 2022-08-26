function _createModalWindow(title, closable, content, width ) {
    const modal = document.createElement('div');
    const defaultWidth = '400px';
    modal.classList.add('vmodal');
    modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay" data-close="true">
            <div class="modal-window" style="${width || defaultWidth}">
                <div class="modal-header">
                    <h3 class="modal-title">${title || 'WindowAlert'}</h3>
                    ${closable ? `<span class="modal-close" data-close="true">&times;</span>` : ''}
                </div>
                <div class="modal-body">
                    ${content || ''}
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
options = {
    title: 'ModalWindow',
    closable: true,
    content: `
    <h4>Modal content<h4>
    <p>TestTestTeSTtEST</p?`,
    width: '400px',
}
const $modal = _createModalWindow(options.title, options.closable, options.content, options.width);
$.modal = function (options) {
    const animationTime = 600;
    let closing = false;
    const modal = {
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
    };
    $modal.addEventListener('click', EO => {
        EO = EO || window.event;
        console.log(EO.target.dataset.close)
        if (EO.target.dataset.close) {
            modal.close();
        }
    });
    return modal;
}
