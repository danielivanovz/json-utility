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
		if (this.isValidJSON(input)) return (this.json = this.stringyMingy(input as string));
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
}

export default new JSONStore();