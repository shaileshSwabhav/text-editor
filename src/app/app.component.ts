import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'text-editor';
  
  blured = false
  focused = false

  // quill editor
  quillModuleConfig: any
  quillEditorStyle: any
  quillCommentEditorStyle: any

  quillImageHandler: any

  IMAGE_EXTENSIONS: string[]

  modalRef: any

  imageURLForm: FormGroup

  @ViewChild('imageURL') imageURL: any

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
  ) {
    this.IMAGE_EXTENSIONS = ["png", "jpeg", "bmp", "gif"]
    this.quillEditorConfiguration()
    // this.quill.register('quillModuleConfig/imageHandler', ImageHandler);
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
        // placeholder: "Enter your answer here",
        handlers: {
          'image': this.imageHandler
        },
      }
    }

    this.quillEditorStyle = {
      height: '150px',
      fontSize: 'large',
      backgroundColor: '#ffffff',
      visibility: true
    }
  }

  imageHandler(this: any) {

    console.log("inside custom imageHandler");
    // console.log("handler", handler);
  
    // let value = prompt("Enter your url link")
    this.createImageURLForm()
    this.openModal()
    this.quillImageHandler = this
  
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
  }
  
  createImageURLForm(): void {
    this.imageURLForm = this.formBuilder.group({
      URL: new FormControl(null, [Validators.required]),
    })
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

  openModal(): void {
    let options: NgbModalOptions = {
      ariaLabelledBy: 'modal-basic-title', keyboard: false,
      backdrop: 'static', size: "md", centered: true
    }
    this.modalRef = this.modalService.open(this.imageURL, options)
  }

  onSelectionChanged = (event) => {
    if (event.oldRange == null) {
      this.onFocus(event);
    }
    if (event.range == null) {
      this.onBlur(event);
    }
  }

  onFocus(event) {
    event.editor.theme.modules.toolbar.container.style.visibility = "visible";
  }

  onBlur(event) {
    event.editor.theme.modules.toolbar.container.style.visibility = "hidden";
  }
}
