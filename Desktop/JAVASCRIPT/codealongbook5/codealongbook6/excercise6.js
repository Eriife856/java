  function saveNote() {
            const note = document.getElementById('textInput').value;
            const savedAt = new Date().toLocaleString();

            localStorage.setItem('note', note);
            localStorage.setItem('savedAt', savedAt);

            document.getElementById('savedInfo').textContent = `Note saved at: ${savedAt}`;
        }

        function loadNote() {
            const savedNote = localStorage.getItem('note') || '';
            const savedAt = localStorage.getItem('savedAt');

            document.getElementById('textInput').value = savedNote;

            if (savedAt) {
                document.getElementById('savedInfo').textContent = `Last saved at: ${savedAt}`;
            } else {
                document.getElementById('savedInfo').textContent = 'No saved note found.';
            }
        }