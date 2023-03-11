import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Appearance } from 'react-native'
import * as eva from '@eva-design/eva'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'

import { default as theme } from './src/app/theme.json'
import SplashScreen from './src/screens/SplashScreen'
import { store, persistor } from './src/store'
import RootNavigation from './src/navigation/RootNavigation'

const App = () => {
  let evaTheme = eva.light
  const dMode = Appearance.getColorScheme()
  if(dMode == 'dark'){
    evaTheme = eva.dark
  }
  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack}/>
      <PersistGate 
        persistor={persistor}
        loading={<SplashScreen />}
      >
        <ApplicationProvider {...eva} theme={{ ...evaTheme, ...theme }}>
          <RootNavigation />
        </ApplicationProvider>
      </PersistGate>
    </Provider>
  )
}

export default App;
