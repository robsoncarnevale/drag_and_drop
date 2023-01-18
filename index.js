
    let dragSrcEl = null;
    function handleDragStart(e) {
        this.style.opacity = '0.4';
        dragSrcEl = this;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
    }

    function handleDragOver(elemento) {
        if (elemento.preventDefault) {
            elemento.preventDefault(); 
        }
        elemento.dataTransfer.dropEffect = 'move'; 
        return false;
    }

    function handleDragEnter(elemento) {
        this.classList.add('over');
    }

    function handleDragLeave(Soltando_elemento) {
        this.classList.remove('over'); 
    }

    function handleDrop(e) {
        if (e.stopPropagation) {
            e.stopPropagation(); 
        }

        if (dragSrcEl != this) {
            dragSrcEl.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
        }
        return false;
    }

    function handleDragEnd(e) {
        [].forEach.call(cols, function(col) {
            col.classList.remove('over');
        });
    }

    let conteudo = document.querySelectorAll('#columns .column');

    [].forEach.call(conteudo, function(elemento) {
        elemento.addEventListener('dragstart', handleDragStart, false);
        elemento.addEventListener('dragenter', handleDragEnter, false);
        elemento.addEventListener('dragover', handleDragOver, false);
        elemento.addEventListener('dragleave', handleDragLeave, false);
        elemento.addEventListener('drop', handleDrop, false);
        elemento.addEventListener('dragend', handleDragEnd, false);
    });
