export type UnitCode = "A" | "B" | "C" | "D" ;

export interface BasketItem {
	code: UnitCode;
	quantity: number;
}

export interface UnitPriceStructure {
	unitPrice: number;
	bundleSize?: number;
	bundlePrice?: number;
}

export interface PriceStructure {
	A: UnitPriceStructure;
	B: UnitPriceStructure;
	C: UnitPriceStructure;
	D: UnitPriceStructure;
}