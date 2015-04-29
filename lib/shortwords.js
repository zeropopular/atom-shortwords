module.exports = {
  activate: function() {
    atom.workspaceView.command('shortwords:replace', this.replace);
  },

  replace: function() {
      atom.workspaceView.eachEditorView(function(editor) {
          alert(editor.getWordUnderCursor());
          return true;
     });

   }
 };
