import React, {Component} from 'react'

import ScrollPane from '../../src/ScrollPane'
import List from '../../src/List'
import Panel from '../../src/Panel'

// NOTE: we add 40 to the padding to fix a bug
// NOTE: on android where it collapses the margin/padding
// NOTE: this may result in too much space on iOS

class ScreenRenderer extends Component {
  render() {
    const {list} = this
    return (
      <ScrollPane padding={20}>
        <List space={20} padding={{bottom: 40}}>
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
