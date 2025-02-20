// fileReader.js

function getLineByNumber(file, lineNumber, callback) {
    const reader = new FileReader();

    reader.onload = function(e) {
        const content = e.target.result; // Get the file content as a string
        const lines = content.split(/\r?\n/); // Split the content into lines
        const line = lines[lineNumber - 1] || ''; // Get the requested line (1-based index)
        callback(line); // Return the line via the callback function
    };

    reader.readAsText(file); // Read the file as text
}
