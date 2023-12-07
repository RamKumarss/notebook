'use client';
import * as htmlToImage from 'html-to-image';

export const printImage = (divId: string) => {
  let myDiv = document.getElementById(divId);
  
  if (myDiv) {
    htmlToImage
      .toPng(myDiv)
      .then(function (dataUrl) {
        let windowContent = '<!DOCTYPE html>';
        windowContent += '<html>';
        windowContent += '<head><title>List</title></head>';
        windowContent += '<body style={background:black}>';
        windowContent += '<img  src="' + dataUrl + '">';
        windowContent += '</body>';
        windowContent += '</html>';
        let myWindowRef = window.open(
          '',
          'myWindowRef',
          'height=400,width=800'
        );

        if (myWindowRef) {
          myWindowRef.document.write(windowContent);
          myWindowRef.document.close();
          myWindowRef.print();
          myWindowRef.addEventListener('afterprint', function (event) {
            myWindowRef ? myWindowRef.close() : null;
          });
        } else {
          console.error('Could not open the print window.');
        }
      })
      .catch(function (error) {
        console.error('Oops, something went wrong!');
      });
  } else {
    console.error('Could not find the target element to print.');
  }
};
