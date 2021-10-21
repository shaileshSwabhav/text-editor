CKEDITOR.plugins.add( 'codeTag', {
  icons: 'code',
  onLoad: function() {
    CKEDITOR.addCss(
      'code {' +
        'background-color: #ffeaee;' +
        'color: #fa002a;' +
      '}'
    )
  },
  init: function( editor ) {
    // editor.addContentsCss( this.path + 'styles.css' );
    editor.addCommand( 'wrapCode', {
      exec: function( editor ) {
        editor.insertHtml( '<code>' + editor.getSelection().getSelectedText() + '</code>' );
      }
    });
    // editor.htmlParser.cssStyle("style-code")
    // editor.ui.applyStyle( { element: 'code', attributes: { 'class': 'code-style' } } );
    editor.ui.addButton( 'Code', {
      label: 'Wrap code',
      command: 'wrapCode',
      toolbar: 'insert'
    });
  }
});