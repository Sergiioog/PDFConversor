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

        //Texto Normal
        'Hola soy Sergio Sergiete',

        //Texto en grande
        { text: 'Hola soy Sergio Sergiete', fontSize:20},

        //Texto con propiedades del styles
        { text: 'Esto es el header', style: 'header' },

        //Texto con propiedades del styles
        { text: 'Texto con margen', margin:50 }, 

        //{ text: 'Texto alineado', alignment: 'center' },

        
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
    

    ],
    
    //FUERA DE LA VARIABLE PORQUE LE VAMOS A DAR ESTILOS
        styles: {
          header: {
            fontSize: 40,
            bold: true,
            // color:'red'
          }
        }
    }

   

    pdfMake.createPdf(docDefinition).open();
  }



}
