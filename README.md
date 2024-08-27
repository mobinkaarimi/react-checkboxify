# react-checkboxify

Single Checkbox and group Checkboxes UI component for React <br />
with incredible options for access to full customize with easy usage.

---

[![dumi][dumi-image]][dumi-url]

[npm-url]: https://npmjs.org/package/react-checkboxify
[download-url]: https://npmjs.org/package/react-checkboxify
[dumi-url]: https://github.com/umijs/dumi
[dumi-image]: https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square

## Install

[![rc-checkbox](https://nodei.co/npm/react-checkboxify.png)](https://npmjs.org/package/react-checkboxify)

## Usage

```js
import Checkbox from 'react-checkboxify';
import GroupCheckbox from 'react-checkboxify';
export <GroupCheckbox />;
export default () => <checkbox />;
```

## Compatibility

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Electron |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE10, Edge                                                                                                                                                                                                     | last 2.25 versions                                                                                                                                                                                               | last 2.25 versions                                                                                                                                                                                           | last 2.25 versions                                                                                                                                                                                           | last 2.25 versions                                                                                                                                                                                                   |

# API

## Checkbox

<table class="table table-bordered table-striped">
  <thead>
  <tr>
    <th style="width: 100px;">name</th>
    <th style="width: 50px;">type</th>
    <th style="width: 50px;">default</th>
    <th>description</th>
  </tr>
  </thead>
  <tbody>
    <tr>
      <td>name</td>
      <td>string</td>
    </tr>
     <tr>
      <td>label</td>
      <td>string</td>
      <td>null</td>
      <td>label of input for show to client</td>
    </tr>
    <tr>
      <td>parentClassName</td>
      <td>String</td>
      <td>""</td>
      <td>additional class name of parent div element</td>
    </tr>
     <tr>
      <td>labelClassName</td>
      <td>String</td>
      <td>""</td>
      <td>additional class name of label element</td>
    </tr>
     <tr>
      <td>inputClassName</td>
      <td>String</td>
      <td>""</td>
      <td>additional class name of root node</td>
    </tr>
    <tr>
      <td>onChange</td>
      <td>Function(e:Event, checked:Number)</td>
      <td></td>
      <td>called when checkbox is changed. e is native event, checked is original checked state.</td>
    </tr>
    <tr>
      <td>checked</td>
      <td>Boolean: true, false</td>
      <td>false</td>
      <td>same with native input checkbox</td>
      </tr>
      <tr>
      <td>disabled</td>
      <td>Boolean: true, false</td>
      <td>false</td>
      <td>use if for disable some checkbox in specific situation</td>
      </tr>
      <tr>
      <td>customIcon</td>
      <td>Obj {checked?: "iconPath", unChecked?: "iconPath",<br /> size : number }</td>
      <td>null</td>
      <td>with checked and unchecked key you can use any icon for your checkbox, also you can change size it with size key and number value</td>
      </tr>
  </tbody>
</table>

## GroupCheckbox

<table class="table table-bordered table-striped">
  <thead>
  <tr>
    <th style="width: 100px;">name</th>
    <th style="width: 50px;">type</th>
    <th style="width: 50px;">default</th>
    <th>description</th>
  </tr>
  </thead>
  <tbody>
    <tr>
      <td>list</td>
      <td>Array</td>
      <td>[]</td>
      <td>use it for send list of items to render item with checkbox icon</td>
    </tr>
    <tr>
      <td>setSelectedItems</td>
      <td>React.SetState</td>
      <td>null</td>
      <td>add set state in props for gave all items checking = true, I set all Object into Array with checked:true value.</td>
    </tr>
     <tr>
      <td>selectType</td>
      <td>String: "single" | "multiple"</td>
      <td>"single"</td>
      <td>you can set use can select only one item or more.</td>
    </tr>
    <tr>
      <td>hasSearch</td>
      <td>Boolean</td>
      <td>false</td>
      <td>add search bar for use easier than of huge list</td>
    </tr>
    <tr>
      <td>searchOption</td>
      <td>Object</td>
      <td>{label: "", className: "", disabled: false }</td>
      <td>customize everything you need to change it in search component like default label, className and disabled option.</td>
    </tr>
    <tr>
      <td>parentClassName</td>
      <td>String</td>
      <td>""</td>
      <td>additional class name of parent div element</td>
    </tr>
     <tr>
      <td>checkboxClassName</td>
      <td>String</td>
      <td>""</td>
      <td>additional class name of label element</td>
    </tr>
     <tr>
      <td>checkboxFilledClassName</td>
      <td>String</td>
      <td>""</td>
      <td>additional class name of root node</td>
    </tr>
    <tr>
      <td>labelClassName</td>
      <td>String</td>
      <td>""</td>
      <td>additional class name of root node</td>
    </tr>
      <tr>
      <td>customIcon</td>
      <td>Obj {checked?: "iconPath", unChecked?: "iconPath",<br /> size : number }</td>
      <td>null</td>
      <td>with checked and unchecked key you can use any icon for your checkbox, also you can change size it with size key and number value</td>
      </tr>
  </tbody>
</table>

Online demo: https://mobinkaarimi.github.io/react-checkboxify/

## License

react-checkboxify is released under the MIT license.
