const vscode = require('vscode');

function activate(context) {
    let enable = vscode.commands.registerCommand('haxe-priori.enableHighlight', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) { return; }
        vscode.languages.setTextDocumentLanguage(editor.document, 'priori-haxe');
        vscode.commands.executeCommand('setContext', 'haxePrioriHighlightEnabled', true);
    });

    let disable = vscode.commands.registerCommand('haxe-priori.disableHighlight', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) { return; }
        vscode.languages.setTextDocumentLanguage(editor.document, 'haxe');
        vscode.commands.executeCommand('setContext', 'haxePrioriHighlightEnabled', false);
    });

    context.subscriptions.push(enable, disable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
