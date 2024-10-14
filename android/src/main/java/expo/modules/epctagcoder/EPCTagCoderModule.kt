package expo.modules.epctagcoder

import android.util.Log
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import org.epctagcoder.parse.SGTIN.ParseSGTIN

class EPCTagCoderModule : Module() {
    companion object {
        private const val TAG = "EPCTagCoderModule"
    }

    fun convertEPCToUPC(epc: String): String {
        Log.d(TAG, "Converting EPC to UPC: $epc")
        val parseSGTIN1 =
            ParseSGTIN
                .Builder()
                .withRFIDTag(epc)
                .build()
        return parseSGTIN1.getSGTIN().let { sgtin ->
            "${sgtin.companyPrefix}${sgtin.itemReference}${sgtin.checkDigit}"
        }
    }

    override fun definition() =
        ModuleDefinition {
            Name("EPCTagCoder")

            Function("convertEPCToUPC") { epc: String ->
                convertEPCToUPC(epc)
            }
        }
}
