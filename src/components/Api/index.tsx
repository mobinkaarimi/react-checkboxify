export default function Api() {
  return (
    <section className="flex flex-col items-start space-y-4 w-full " id="api">
      <h2 className="text-3xl text-primary-orange" id="install-section">
        API
      </h2>
      <div className="flex flex-col space-y-10 w-full">
        <div className="flex flex-col w-full space-y-3">
          <h3 className="text-xl font-medium">Checkbox</h3>
          <table className="table table-bordered border-collapse w-full border rounded-xl overflow-hidden">
            <thead className="border-b rounded-lg">
              <tr>
                <th className="w-1/6 font-bold text-xl border-b py-4 text-left px-3">
                  name
                </th>
                <th className="w-1/6 font-bold text-xl border-b py-4 text-left px-3">
                  type
                </th>
                <th className="w-1/6 font-bold text-xl border-b py-4 text-left px-3">
                  default
                </th>
                <th className="w-3/6 font-bold text-xl border-b py-4 text-left px-3">
                  description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-3 py-2">name</td>
                <td className="px-3 py-2">string</td>
              </tr>
              <tr className="border-b">
                <td className="px-3 py-2">label</td>
                <td className="px-3 py-2">string</td>
                <td className="px-3 py-2">null</td>
                <td className="px-3 py-2">Label of input for display to client</td>
              </tr>
              <tr className="border-b">
                <td className="px-3 py-2">parentClassName</td>
                <td className="px-3 py-2">String</td>
                <td className="px-3 py-2">""</td>
                <td className="px-3 py-2">
                  additional class name of the parent div element
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-3 py-2">labelClassName</td>
                <td className="px-3 py-2">String</td>
                <td className="px-3 py-2">""</td>
                <td className="px-3 py-2">
                  additional class name of the label element
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-3 py-2">inputClassName</td>
                <td className="px-3 py-2">String</td>
                <td className="px-3 py-2">""</td>
                <td className="px-3 py-2">
                  additional class name of the root node
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-3 py-2">onChange</td>
                <td className="px-3 py-2">Function(e:Event, checked:Number)</td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2">
                called upon the modification of the checkbox. e is a native event, and checked is the initial checked state.
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-3 py-2">checked</td>
                <td className="px-3 py-2">Boolean: true, false</td>
                <td className="px-3 py-2">false</td>
                <td className="px-3 py-2">same with native input checkbox</td>
              </tr>
              <tr className="border-b">
                <td className="px-3 py-2">disabled</td>
                <td className="px-3 py-2">Boolean: true, false</td>
                <td className="px-3 py-2">false</td>
                <td className="px-3 py-2">
                  use if for disable some checkbox in specific situation
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-3 py-2">customIcon</td>
                <td className="px-3 py-2">
                  Obj checked?: "iconPath", unChecked?: "iconPath",
                  <br /> size : number{" "}
                </td>
                <td className="px-3 py-2">null</td>
                <td className="px-3 py-2">
                You have the ability to use any icon for your checkbox by using the checked and unchecked keys.
                 Additionally, you can adjust the size of the checkbox by using the size key and a number value.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-col w-full space-y-3">
          <h3 className="text-xl font-medium">Group Checkbox</h3>
          <table className="table table-bordered border-collapse w-full border rounded-xl overflow-hidden">
            <thead className="border-b rounded-lg">
              <tr className="border-b">
                <th className="w-1/6 font-bold text-xl border-b py-4 text-left px-3">
                  name
                </th>
                <th className="w-1/6 font-bold text-xl border-b py-4 text-left px-3">
                  type
                </th>
                <th className="w-1/6 font-bold text-xl border-b py-4 text-left px-3">
                  default
                </th>
                <th className="w-3/6 font-bold text-xl border-b py-4 text-left px-3">
                  description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-3 py-2">list</td>
                <td className="px-3 py-2">Array</td>
                <td className="px-3 py-2">[]</td>
                <td className="px-3 py-2">
                Utilize it to transmit a list of items and display each item with a checkbox icon.
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-3 py-2">setSelectedItems</td>
                <td className="px-3 py-2">React.SetState</td>
                <td className="px-3 py-2">null</td>
                <td className="px-3 py-2">
                Set the state in the props for all items with a checking value of true. I then assign all objects to an array with a verified value of true.
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-3 py-2">selectType</td>
                <td className="px-3 py-2">String: "single" | "multiple"</td>
                <td className="px-3 py-2">"single"</td>
                <td className="px-3 py-2">
                You have the option to select either a single item or multiple.
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-3 py-2">hasSearch</td>
                <td className="px-3 py-2">Boolean</td>
                <td className="px-3 py-2">false</td>
                <td className="px-3 py-2">
                Incorporate a search bar to facilitate more efficient use than a lengthy list.
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-3 py-2">searchOption</td>
                <td className="px-3 py-2">Object</td>
                <td className="px-3 py-2">
                  {'label: "", className: "", disabled: false'}
                </td>

                <td className="px-3 py-2">
                Customize the search component by modifying the default label, className, and disabled option.
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-3 py-2">parentClassName</td>
                <td className="px-3 py-2">String</td>
                <td className="px-3 py-2">""</td>
                <td className="px-3 py-2">
                  additional class name of the parent div element
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-3 py-2">checkboxClassName</td>
                <td className="px-3 py-2">String</td>
                <td className="px-3 py-2">""</td>
                <td className="px-3 py-2">
                  additional class name of the label element
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-3 py-2">checkboxFilledClassName</td>
                <td className="px-3 py-2">String</td>
                <td className="px-3 py-2">""</td>
                <td className="px-3 py-2">
                  additional class name of the root node
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-3 py-2">labelClassName</td>
                <td className="px-3 py-2">String</td>
                <td className="px-3 py-2">""</td>
                <td className="px-3 py-2">
                  additional class name of root node
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-3 py-2">customIcon</td>
                <td className="px-3 py-2">
                  Obj 'checked?: "iconPath", unChecked?: "iconPath",
                  <br /> size : number'
                </td>
                <td className="px-3 py-2">null</td>
                <td className="px-3 py-2">
                You have the ability to use any icon for your checkbox by using the checked and unchecked keys.
                 Additionally, you can adjust the size of the checkbox by using the size key and a number value.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
