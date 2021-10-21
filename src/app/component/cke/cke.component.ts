import { Component, OnInit, ViewChild } from '@angular/core';
import { CKEditor4 } from 'ckeditor4-angular/ckeditor';

@Component({
  selector: 'app-cke',
  templateUrl: './cke.component.html',
  styleUrls: ['./cke.component.css']
})
	

export class CkeComponent implements OnInit {
	
	ckConfig1: any
	ckConfig2: any
	ckString: string
	showToolbar: boolean
	
  @ViewChild("ckeditor") ckeditor: any;


  constructor() {
	  // this.editor = Editor
		// this.editorConfig5()
		this.editorConfig4()
		this.editor02()
		this.ckString = ""
		this.showToolbar = false
	}

	editorConfig4(): void {
		this.ckConfig1 = {
			extraPlugins: 'codeTag',
			removePlugins: "exportpdf",
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
			resize_enabled: false,
			language: 'en',
			width:"100%",
			height: "80%",
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

	onNamespaceLoaded(event: CKEditor4.EventInfo): void {
		console.log(event);
	}

  ngOnInit(): void {
  }


	editor02(): void {
		this.ckConfig2 = {
			extraPlugins: 'codeTag',
			removePlugins: "exportpdf",
			toolbar: [
				{ name: 'styles', items: [ 'Styles', 'Format' ] },
				{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], 
					items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', 'RemoveFormat', 'Code' ] },
				{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], 
					items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote' ] },
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
			width:"100%",
			height: "80%",
			forcePasteAsPlainText: false,
		}
	}

}
