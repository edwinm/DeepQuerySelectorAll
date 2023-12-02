# DeepQuerySelectorAll

> deepQuerySelectorAll is like querySelectorAll but also finds elements inside web components and slots 

With the standard `querySelector` and `querySelectorAll` function, you can't find elements inside
web components. Those elements are hidden inside the _Shadow DOM_.

With `deepQuerySelectorAll` you can find those elements.
It will find elements that are part of the web page, elements that are part of
web components and elements that are inserted using _slots_.

This can be useful when using web components from third parties and there is
no API available to make desired changes to those web components.

> [!WARNING]
> Don't use this with web components you own or you can control. If you want to make a
  change or read data inside a web component, add this functionality to the web component API and use that functionality.
  If you still use `deepQuerySelectorAll` on your own web components because it's quick and easy,
  you'll lose all claims to call yourself a respectable developer.

## Installation

```bash
npm install --save-dev deep-query-selector-all
```

## API

### `deepQuerySelectorAll(query [, rootElement])`

#### Parameters

| Name    | Type                   | Description                                  |
|---------|------------------------|----------------------------------------------|
| query   | string                 | Query to use, similar to `querySelectorAll`  |
| rootElement | Element (optional)     | Root element to query, `document` by default |

## Example

Find all `div`'s with classname `product`, even when inside webcomponents.

```javascript
import {deepQuerySelectorAll} from "deep-query-selector-all";

const productElements = deepQuerySelectorAll("div.product");
```

## Demo

In the repository, you can find a `demo` directory with a webpage that
demonstrates the use of `deepQuerySelectorAll`.

## License

Copyright 2023 [Edwin Martin](https://bitstorm.org/) and released under the MIT license.