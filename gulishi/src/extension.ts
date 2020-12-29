// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { Encourager } from './encourager';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
let encourager: Encourager|null = null
export async function activate(context: vscode.ExtensionContext) {
	let showEncourage = vscode.commands.registerCommand("encourager.call", () => {
		if (!encourager) {
			encourager = new Encourager(context)
		}

		encourager!.show()
	})

	context.subscriptions.push(showEncourage)
}

export function deactivate() {
	return
}