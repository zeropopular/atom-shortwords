module.exports = {
  activate: function() {
    atom.workspaceView.command(
      'ascii-art-js:convert', this.convert);
  },

  convert: function() {
    var editor = atom.workspace.activePaneItem;
    var selection = editor.getSelection();
    var text = selection.getText();

    alert(selection);
   }
 };
