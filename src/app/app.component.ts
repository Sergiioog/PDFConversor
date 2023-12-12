import * as pdfMake from 'pdfMake/build/pdfmake';
import * as pdfFonts from 'pdfMake/build/vfs_fonts';
import { Component } from '@angular/core';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  generatePDF(){
    let docDefinition = {
      content: [

        { text: 'MI PDF CONVERSOR', style: 'header' },

        //Texto Normal
        'Hola soy Sergio y estoy haciendo un PDF con PDFMake',

        //Texto con propiedades de styles
        { text: 'Me llamo Sergio y este es un texto gigante en negrita y en itálica', style:'titulo_principal'},

        //Texto con margen
        { text: 'Esto es un texto con margen', margin: 30 }, 

        //{ text: 'Texto alineado', alignment: 'center' },

        // {
        //   image: 'assets/pug.jpeg',
        // },
        //Creamos tablas
        {table: {

          headerRows:1, //el encabezado de la tabla se repetirá automáticamente si la tabla se extiende a lo largo de varias páginas. 
                        //headerRows se establece en 1, lo que significa que la primera fila de la tabla se considerará como el encabezado y se repetirá en cada página si es necesario.
          widths: ['*','auto',100,'*'],  //* -> Todo el espacio disponible,  tamaño auto y tamaño fijo de 100 puntos
          body: [
            ['Uno', 'Dos', 'Tres', 'Cuatro'],
            [1,   2,   3,   4   ],
            [{text : 'Valor en bold', bold:true},'Col2','Col3','Col4'],   
          ]
       }
       },

        //QR
        { qr: 'https://sergiioog.github.io/' , margin:30 },

      
    ],
    
    //FUERA DE LA VARIABLE PORQUE LE VAMOS A DAR ESTILOS
      styles: {
        header: {
          fontSize: 40,
          bold: true,
          // color: 'red'
        },
        titulo_principal: {
          fontSize: 20,
          italics: true,
          bold: true
        }
      }
    
    }

   

    pdfMake.createPdf(docDefinition).open();
  }



}
