const sourceContainer = document.getElementById('source-container');
        const targetContainer = document.getElementById('target-container');

        sourceContainer.addEventListener('dragstart', dragStart);
        targetContainer.addEventListener('dragover', dragOver);
        targetContainer.addEventListener('drop', drop);

        function dragStart(event) {
            event.dataTransfer.setData('text/plain', event.target.id);
            event.target.classList.add('dragging');
        }

        function dragOver(event) {
            event.preventDefault();
        }

        function drop(event) {
            event.preventDefault();
            const itemId = event.dataTransfer.getData('text/plain');
            const item = document.getElementById(itemId);
            if (item) {
                item.classList.remove('dragging');
                targetContainer.appendChild(item);
                showMessage('Item dropped!');
            }
        }

        function reset() {
            targetContainer.innerHTML = '';
            sourceContainer.querySelectorAll('.item').forEach(item => {
                item.classList.remove('dragging');
                sourceContainer.appendChild(item);
            });
        }

        function showMessage(message) {
            const messageElement = document.createElement('p');
            messageElement.textContent = message;
            targetContainer.appendChild(messageElement);
        }