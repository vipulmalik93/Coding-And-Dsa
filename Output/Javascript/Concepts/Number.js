Number("5")        // → 5       ✅ valid number string
Number(" 10 ")     // → 10      ✅ whitespace trimmed
Number("N/A")      // → NaN     ❌ not a number
Number("abc")      // → NaN     ❌ not a number
Number("")         // → 0       ⚠️ empty string becomes 0
Number(" ")        // → 0       ⚠️ whitespace becomes 0
Number(null)       // → 0       ⚠️ null becomes 0
Number(undefined)  // → NaN     ❌
Number(true)       // → 1
Number(false)      // → 0
