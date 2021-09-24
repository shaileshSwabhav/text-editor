import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-cke',
  templateUrl: './cke.component.html',
  styleUrls: ['./cke.component.css']
})
export class CkeComponent implements OnInit {

  editor:any
	ckeConfig: any

  constructor() {
		this.editor = ClassicEditor
		
		this.ckeConfig = {
			// plugins: [ ImageInsert ],
			toolbar: {
				items: [
					'heading', '|', 'bold', 'italic', '|', 'bulletedList', 
        'numberedList', '|', 'undo', 'redo', 'insertImage',
        ' classicEditor', 'blockQuote', 'list', 'mediaEmbed', 'pasteFromOffice',
        'fontFamily', 'todoList'
				]
			}
		}
	}

  ngOnInit(): void {
  }

}
