# EPC Tag Coder

This is a simple wrapper around [EPCTagCoder](https://github.com/jlcout/epctagcoder)
library to be used in Expo projects.

## Installation

To install run:

```bash
pnpm add epc-tag-coder
```

or

```bash
npm install epc-tag-coder
```

or

```bash
yarn add epc-tag-coder
```

## Usage

### `convertEPCToUPC`

```typescript
import EPCTagCoder from "./modules/epc-tag-coder";

const upc = EPCTagCoder.convertEPCToUPC("30340C04543AECD74877C4B8");
// upc = '196885603396'
```
