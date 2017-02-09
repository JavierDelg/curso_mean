var PDFDocument = require("pdfkit");


doc = new PDFDocument;

let fs = require("fs");
let streamLectura = fs.createReadStream("fichero.txt");
streamLectura.on("data", alLeerDelStream);

function alLeerDelStream(chunkBuffer) {
    doc.pipe(fs.createWriteStream('output.pdf'));

    doc.text(chunkBuffer.toString(), 100, 100)

    doc.end()
}