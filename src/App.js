import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import theme from './theme'
import Hirez from './modules/Hirez'
import TopPanel from './components/MUI/TopPanel'
import InfoBox from './components/MUI/InfoBox'
import reducers from './combinedReducers'
import './App.css'

const App = () => (
  <Provider
    /* eslint-disable no-underscore-dangle */
    store={createStore(
      reducers,
      {},
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
    /* eslint-enable */
  >
    <MuiThemeProvider theme={theme}>
      <TopPanel>Hi</TopPanel>
      <InfoBox />
      <Hirez />
    </MuiThemeProvider>
  </Provider>
)

export default App