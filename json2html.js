// json2html.js
export default function json2html(data) {
    // Extract all unique keys from data to create the table headers
    const headers = [...new Set(data.flatMap(Object.keys))];

    // Begin table HTML with the data-user attribute
    let html = `<table data-user="viswass810@gmail.com">\n`;
    html += `  <thead>\n    <tr>`;
    // Add table headers
    headers.forEach(header => {
        html += `<th>${header}</th>`;
    });
    html += `</tr>\n  </thead>\n  <tbody>\n`;

    // Add table rows for each object in the data array
    data.forEach(row => {
        html += `    <tr>`;
        headers.forEach(header => {
            html += `<td>${row[header] || ""}</td>`;
        });
        html += `</tr>\n`;
    });

    html += `  </tbody>\n</table>`;
    return html;
}
