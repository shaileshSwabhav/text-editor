import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import * as QuillNamespace from 'quill';
let Quill: any = QuillNamespace;
import ImageResize from 'quill-image-resize-module';
Quill.register('modules/imageResize', ImageResize);

@Component({
  selector: 'app-quill',
  templateUrl: './quill.component.html',
  styleUrls: ['./quill.component.css']
})
export class QuillComponent implements OnInit {

  title = 'text-editor';
  
  blured = false
  focused = false

  // quill editor
  quillModuleConfig: any
  quillEditorStyle: any
  quillCommentEditorStyle: any

  quillImageHandler: any
  modalRef: any
  imageURLForm: FormGroup

  htmlString: string

  @ViewChild('imageURLModal') imageURLModal: any
  @ViewChild('editor') editor;
  quillEditorRef: any;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
  ) {
    this.htmlString = ""
    this.quillEditorConfiguration()
    // this.quill.register('quillModuleConfig/imageHandler', ImageHandler);
  }
  
  ngOnInit(): void {
  }
  
  quillEditorConfiguration(): void {
    // Quill config.
    this.quillModuleConfig = {
      toolbar: {
        container: [
          ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          [{ 'align': [] }],
          ['clean'],                                 // remove formatting button
          ['image']
        ],
        handlers: {
          'image': this.imageHandler()
        }
      },
      imageResize: true,
    }

    this.quillEditorStyle = {
      height: '300px',
      fontSize: 'large',
      backgroundColor: '#ffffff',
      visibility: true
    }
  }

  onContentChanged = (event) => {
    this.htmlString = event.html;
  }

  imageHandler() {
    var that = this
    return function (this: any) {
      // that.createImageURLForm()
      // that.openModal(that.imageURLModal).result.then(() => {
      //   console.log("success");
      // }, (err) => {
      //   console.error(err)
      //   return
      // })
      console.log("inside custom imageHandler", this);
      console.log("inside custom imageHandler", that);
      console.log("inside custom imageHandler", that.imageURLModal);

      let imageURL = prompt("Enter your url link")
      console.log("link", imageURL);
      const range = this.quill.getSelection(true);
      if (imageURL) {
        this.quill.insertEmbed(range.index, 'image', imageURL, 'user');
      }
    }
  }

  // imageHandler(this: any) {

  //   console.log("inside custom imageHandler");
  //   // console.log("handler", handler);
  
  //   // let value = prompt("Enter your url link")
  //   this.createImageURLForm()
  //   this.openModal()
  //   this.quillImageHandler = this
  
    // console.log("link", value);
    // const range = handler.quill.getSelection(true);
    // if (value) {
    //   handler.quill.insertEmbed(range.index, 'image', value, 'user');
    // }
  
    // const tooltip = this.quill.theme.tooltip;
    // const originalSave = tooltip.save;
    // const originalHide = tooltip.hide;
    
    // tooltip.save = function(this: any) {
    //   console.log("save called");
    //   const range = this.quill.getSelection(true);
    //   const value = this.textbox.value;
    //   if (value) {
    //     if (value.includes(".")) {
    //       const tempValue = value.split(".")
    //       const IMAGE_EXTENSIONS = ["png", "jpeg", "bmp", "gif"]
    //       console.log(IMAGE_EXTENSIONS);
    //       if (IMAGE_EXTENSIONS.includes(tempValue[tempValue.length-1])) {
    //         this.quill.insertEmbed(range.index, 'image', value, 'user');
    //       } else {
    //         alert("Invalid file type")
    //       }
    //     } else {
    //       alert("Please enter a valid image-url.")
    //     }
    //   }
    // }
  
    // // Called on hide and save.
    // tooltip.hide = function (this: any) {
    //   tooltip.save = originalSave;
    //   tooltip.hide = originalHide;
    //   tooltip.hide();
    // }
  
    // tooltip.edit('image');
    // tooltip.textbox.placeholder = "Enter URL link";
  // }
  
  createImageURLForm(): void {
    this.imageURLForm = this.formBuilder.group({
      URL: new FormControl(null, [Validators.required]),
    })
    console.log("imageURLForm successfully created");
    
  }

  onImageURLSubmit(): void {
    if (this.imageURLForm.invalid) {
      this.imageURLForm.markAllAsTouched()
      return
    }

    if (this.imageURLForm.get("URL").value) {
      let value = this.imageURLForm.get("URL").value
      console.log("link", value);
      const range = this.quillImageHandler.quill.getSelection(true);
      if (value) {
        this.quillImageHandler.quill.insertEmbed(range.index, 'image', value, 'user');
      }
    }
    this.modalRef.close()
    this.imageURLForm.reset()
  }

  openModal(modalContent: any): NgbModalRef {
    let options: NgbModalOptions = {
      ariaLabelledBy: 'modal-basic-title', keyboard: false,
      backdrop: 'static', size: "md", centered: true, 
    }
    this.modalRef = this.modalService.open(modalContent, options)
    console.log("modal successfully opened");
    return this.modalRef
  }

  onSelectionChanged = (event) => {
    console.log("onSelectionChanged -> ", event);
    
    // if (event.oldRange == null) {
    //   this.onFocus(event);
    // }
    // if (event.range == null) {
    //   this.onBlur(event);
    // }
  }

  onFocus(event) {
    event.editor.theme.modules.toolbar.container.style.visibility = "visible";
  }

  onBlur(event) {
    event.editor.theme.modules.toolbar.container.style.visibility = "hidden";
  }

}
