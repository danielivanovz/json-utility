/* eslint-disable @typescript-eslint/no-unused-expressions */
import { action, computed, makeAutoObservable } from 'mobx';

export interface IJSON {
	input: string | undefined;
	isCopied: boolean;
	isJSON: boolean;
	json: string;
}

class JSONStore implements IJSON {
	input: string | undefined;
	isCopied: boolean;
	isJSON: boolean;
	json: string;

	constructor() {
		makeAutoObservable(this);
		this.input = '';
		this.isCopied = false;
		this.isJSON = false;
		this.json = '';
	}

	@computed
	isValidJSON(input: unknown): boolean {
		try {
			JSON.parse(input as string);
			this.isJSON = true;
			return true;
		} catch (error) {
			this.isJSON = false;
			return false;
		}
	}

	@action
	stringyMingy(input: string) {
		return JSON.stringify(JSON.stringify(JSON.parse(input)));
	}

	@action
	storeJSON(input: string | undefined) {
		this.isValidJSON(input) && (this.json = this.stringyMingy(input!))
	}

	@action
	setCopy(state: boolean) {
		this.isCopied = state;
	}

	@action
	setInput(input: string | undefined) {
		this.isValidJSON(input) ? (this.input = this.stringyMingy(input!)) : (this.input = input);
		this.isCopied = false;
	}

	@action
	reverse(input: string){
		try {
			const tmp: string | object = JSON.parse(input)
		typeof tmp === 'object' ? '' :  this.input = JSON.parse(input)
		} catch (error) {
			console.log("Already!")
		}
	}
}

export default new JSONStore();
