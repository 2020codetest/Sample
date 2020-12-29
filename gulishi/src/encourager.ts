import * as vscode from 'vscode';

export class Encourager {
    private panel: vscode.WebviewPanel|null = null
    private context: vscode.ExtensionContext
    constructor(context: vscode.ExtensionContext) {
        this.context = context
    }
    show() {
        if (this.panel) {
            return;
        }

        this.panel = vscode.window.createWebviewPanel(
            "webView",
            "程序员鼓励师江江",
            vscode.ViewColumn.Two,
            {
                enableScripts: true,
                localResourceRoots: [vscode.Uri.joinPath(this.context.extensionUri, 'media')]
            }
        )

        this.panel.webview.html = this.render(this.panel.webview)
        this.panel.onDidDispose(() => {
            this.panel = null
        })
    }

    private render(webview: vscode.Webview): string{
		const scriptPathOnDisk = vscode.Uri.joinPath(this.context.extensionUri, 'media', 'slide.js');
		const scriptUri = webview.asWebviewUri(scriptPathOnDisk);
		const css1PathOnDisk = vscode.Uri.joinPath(this.context.extensionUri, 'media', 'slide.css');
		const css1Uri = webview.asWebviewUri(css1PathOnDisk);
        return `
        <html><head><meta charset="UTF-8"/><title>程序员鼓励师</title><meta name="viewport" content="initial-scale=1;"/><link href="${css1Uri}" rel="stylesheet"></head><body><div id="root"></div><script src="${scriptUri}"></script></body></html>
        `
    }
}