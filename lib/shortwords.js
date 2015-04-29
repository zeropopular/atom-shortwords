module.exports = {
  activate: function() {
    atom.workspaceView.command('shortwords:replace', this.replace);
  },

  replace: function() {
      alert(atom.editor.getWordUnderCursor());
   }
 };
