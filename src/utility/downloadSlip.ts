import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

export const downloadSlip = (): void => {
const myDiv = document.getElementById('list');

  if (myDiv) {
    html2canvas(myDiv).then((canvas: HTMLCanvasElement) => {
      // Create a new jsPDF instance
      const doc = new jsPDF();
      const imageData = canvas.toDataURL('image/jpeg');
     // Get canvas dimensions
     const width = 390;
     const height = 300;
      // Add the image to the PDF document
      doc.addImage({
        imageData,
        format: 'JPEG',
        x: .1,
        y: .1,
        width, // Use 'auto' for width
        height, // Use 'auto' for height
      });
      // Save the PDF document
      doc.save(`list.pdf`);
    });
  }
};
