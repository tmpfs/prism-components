import React, {Component} from 'react'

import ScrollPane from '../../src/ScrollPane'
import List from '../../src/List'
import Panel from '../../src/Panel'

class ScreenRenderer extends Component {
  render() {
    const {list} = this
    return (
      <ScrollPane padding={20}>
        <List space={20}>
        {
          list.map((item, i) => {
            return (
              <Panel
                key={i}
                label={item.label}>
                {item.component}
              </Panel>
            )
          })
        }
        </List>
      </ScrollPane>
    )
  }
}

export default ScreenRenderer
