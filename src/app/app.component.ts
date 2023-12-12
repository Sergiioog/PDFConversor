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
      content: ['This is a Simple PDF']
    }

    pdfMake.createPdf(docDefinition).open();
  }



}
