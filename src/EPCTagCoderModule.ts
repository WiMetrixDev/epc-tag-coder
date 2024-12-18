import { NativeModule, requireNativeModule } from "expo";

declare class EPCTagCoder extends NativeModule {
	convertEPCToUPC: (epc: string) => string;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<EPCTagCoder>("EPCTagCoder");
