import EPCTagCoderModule from "./EPCTagCoderModule";

export function convertEPCToUPC(epc: string): string {
	return EPCTagCoderModule.convertEPCToUPC(epc);
}
