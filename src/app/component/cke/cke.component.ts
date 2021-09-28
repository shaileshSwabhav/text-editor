import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cke',
  templateUrl: './cke.component.html',
  styleUrls: ['./cke.component.css']
})
export class CkeComponent implements OnInit {

	ckConfig: any

  @ViewChild("ckeditor") ckeditor: any;

  constructor() {
	  // this.editor = Editor
		// this.editorConfig5()
		this.editorConfig4()
	}

	editorConfig4(): void {
		this.ckConfig = {
			extraPlugins: 'codeTag',
			// stylesSet: 'new_styles',
			toolbar: [
				{ name: 'styles', items: [ 'Styles', 'Format' ] },
				{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], 
					items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', 'RemoveFormat', 'Code' ] },
				{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], 
					items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote' ] },
				{ name: 'links', items: [ 'Link', 'Unlink' ] }, //, 'Anchor'
				{ name: 'insert', items: [ 'Image' ] }, //, 'Table', 'HorizontalRule'
				{ name: 'document', groups: [ 'mode', 'document', 'doctools' ], items: [ 'Source' ] },
				// { name: 'clipboard', groups: [ 'clipboard', 'undo' ], items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ] },
				// { name: 'editing', groups: [ 'find', 'selection', 'spellchecker' ], items: [ 'Scayt' ] },
				// { name: 'tools', items: [ 'Maximize' ] },
				// { name: 'others', items: [ '-' ] },
				// { name: 'about', items: [ 'About' ] }
			],
			toolbarGroups: [
				{ name: 'styles' },
				{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
				{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
				{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
				{ name: 'links' },
				{ name: 'insert' },
				// '/',
				// { name: 'colors' },
				// { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
				// { name: 'editing', groups: [ 'find', 'selection', 'spellchecker' ] },
				// { name: 'forms' },
				// { name: 'tools' },
				// { name: 'others' },
			],
			removeButtons: "",
			language: 'en',
			forcePasteAsPlainText: false,
			ckfinder: {
				// Upload the images to the server using the CKFinder QuickUpload command.
				uploadUrl: '/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json'
			},
			// Configure your file manager integration. This example uses CKFinder 3 for PHP.
			filebrowserBrowseUrl:
				'https://ckeditor.com/apps/ckfinder/3.4.5/ckfinder.html',
			filebrowserImageBrowseUrl:
				'https://ckeditor.com/apps/ckfinder/3.4.5/ckfinder.html?type=Images',
			filebrowserUploadUrl:
				'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files',
			filebrowserImageUploadUrl:
				'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Images',
		}
	}

  ngOnInit(): void {
  }

}
