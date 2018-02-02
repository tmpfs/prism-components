import React, {Component} from 'react'

import ScrollPane from '../../src/ScrollPane'
import Panel from '../../src/Panel'

class ScreenRenderer extends Component {
  render() {
    const {list} = this
    return (
      <ScrollPane padding={20}>
        {
          list.map((item, i) => {
            return (
              <Panel
                key={i}
                space={30}
                label={item.label}
                labelProps={{
                  transform: 'upper'
                }}>
                {item.component}
              </Panel>
            )
          })
        }
      </ScrollPane>
    )
  }
}

export default ScreenRenderer
