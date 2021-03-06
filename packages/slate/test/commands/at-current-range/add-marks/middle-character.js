/** @jsx h */

import h from '../../../helpers/h'

export default function(editor) {
  editor.addMarks(['bold', 'italic'])
}

export const input = (
  <value>
    <document>
      <paragraph>
        w<anchor />o<focus />rd
      </paragraph>
    </document>
  </value>
)

export const output = (
  <value>
    <document>
      <paragraph>
        w
        <i>
          <b>
            <anchor />o
          </b>
        </i>
        <focus />rd
      </paragraph>
    </document>
  </value>
)
