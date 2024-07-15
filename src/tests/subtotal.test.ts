import { findSubtotal } from "../find-subtotal";
import { BasketItem } from "../interfaces";

describe("findSubtotal", () => {
	it("returns 0 when provided an empty basket", () => {
		expect(findSubtotal([])).toBe(0);
	});
	it("returns the subtotal when basket contains one type of a standard priced item", () => {
		const input: BasketItem[] = [{ code: "D", quantity: 4 }];
		expect(findSubtotal(input)).toBe(48);
	});
	it("returns the subtotal when the basket contains one type of special offer item which falls below offer threshold number of units for the offer", () => {
		const input: BasketItem[] = [{ code: "A", quantity: 2 }];
		expect(findSubtotal(input)).toBe(100);
	});
	it("returns the subtotal when the basket contains one type of special offer item which falls on the number of units for the offer", () => {
		const input1: BasketItem[] = [{ code: "A", quantity: 3 }];
		const input2: BasketItem[] = [{ code: "A", quantity: 6 }];
		expect(findSubtotal(input1)).toBe(140);
		expect(findSubtotal(input2)).toBe(280);
	});
	it("returns the subtotal when the basket contains one type of special offer item which fall in between offer quantities", () => {
		const input1: BasketItem[] = [{ code: "A", quantity: 5 }];
		const input2: BasketItem[] = [{ code: "A", quantity: 8 }];
		expect(findSubtotal(input1)).toBe(240);
		expect(findSubtotal(input2)).toBe(380);
	});
	it("returns the subtotal when the basket contains more then one type of standard priced items", () => {
		const input: BasketItem[] = [
			{ code: "C", quantity: 2 },
			{ code: "D", quantity: 4 },
		];
		expect(findSubtotal(input)).toBe(98);
	});
	it("returns the subtotal when the basket contains more then one type of special offer item", () => {
		const input: BasketItem[] = [
			{ code: "A", quantity: 2 },
			{ code: "B", quantity: 4 },
		];
		expect(findSubtotal(input)).toBe(220);
	});
	it("returns the subtotal when the basket contains a mix of standard and special priced items", () => {
		const input: BasketItem[] = [
			{ code: "A", quantity: 2 },
			{ code: "B", quantity: 4 },
			{code: "C", quantity: 1 },
			{ code: "D", quantity: 3 },
		];
		expect(findSubtotal(input)).toBe(281);
	});
});