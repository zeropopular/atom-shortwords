module.exports = {
  activate: function() {
    atom.workspaceView.command('shortwords:replace', this.replace);
  },

  replace: function() {
      alert(editor.getWordUnderCursor());
   }
 };

