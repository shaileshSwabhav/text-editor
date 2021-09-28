import { Component, OnInit } from '@angular/core';
import * as customEditor from './ckeditor';

@Component({
  selector: 'app-online-cke',
  templateUrl: './online-cke.component.html',
  styleUrls: ['./online-cke.component.css']
})
export class OnlineCkeComponent implements OnInit {
  public Editor = customEditor;

  config: any
  charactersLength: any
  notification: any

  constructor() {
    this.config = {
      toolbar: {
        items: [
          'heading',
          '|',
          'fontSize',
          'fontFamily',
          '|',
          'bold',
          'italic',
          'underline',
          'strikethrough',
          'highlight',
          '|',
          'alignment',
          '|',
          'numberedList',
          'bulletedList',
          '|',
          'indent',
          'outdent',
          '|',
          'todoList',
          'link',
          'blockQuote',
          'imageUpload',
          'insertTable',
          '|',
          'undo',
          'redo'
        ]
      },
      language: 'en',
      image: {
        toolbar: [
          'imageTextAlternative',
          'imageStyle:full',
          'imageStyle:side'
        ]
      },
      table: {
        contentToolbar: [
          'tableColumn',
          'tableRow',
          'mergeTableCells'
        ]
      },
      licenseKey: '',
      wordCount: {
        onUpdate: stats => {
          this.charactersLength = stats.characters
        }
      }
    }
  }

  ngOnInit(): void {
  }

  onReady(event: any) {
    console.log(event);
  }

}
