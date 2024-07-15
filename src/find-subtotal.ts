import priceStructure from "./data/price-structure.json";
import { BasketItem, UnitCode, UnitPriceStructure } from "./interfaces";

export const findSubtotal = (basketData: BasketItem[]) => {
	let subtotal = 0;

	basketData.map((item: BasketItem) => {
		const unitCode: UnitCode = item["code"];
		const numberOfUnits: number = item["quantity"];

		const unitPriceStructure: UnitPriceStructure = priceStructure[unitCode]
		const unitPrice: number = unitPriceStructure["unitPrice"];

		if (unitCode === "A" || unitCode === "B") {
			const bundleSize: number = unitPriceStructure["bundleSize"]!;
			const bundlePrice: number = unitPriceStructure["bundlePrice"]!;

			const numberOfBundles: number = Math.floor(numberOfUnits / bundleSize);
			const standardPricedUnits = numberOfUnits % bundleSize;

			subtotal += (numberOfBundles * bundlePrice) + (standardPricedUnits * unitPrice);
		} else {
			subtotal += unitPrice * numberOfUnits;
		}
	});
	return subtotal;
};
