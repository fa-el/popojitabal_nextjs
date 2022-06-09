import { forwardRef, useRef } from "react/cjs/react.development"

export default forwardRef(function DefaultPrint({...props}, ref) {

  const printRef = useRef(ref);
  return (
    <table>
      <thead>
        <th>column 1</th>
        <th>column 2</th>
        <th>column 3</th>
      </thead>
      <tbody>
        <tr>
          <td>data 1</td>
          <td>data 2</td>
          <td>data 3</td>
        </tr>
        <tr>
          <td>data 1</td>
          <td>data 2</td>
          <td>data 3</td>
        </tr>
        <tr>
          <td>data 1</td>
          <td>data 2</td>
          <td>data 3</td>
        </tr>
      </tbody>
    </table>
  )
})