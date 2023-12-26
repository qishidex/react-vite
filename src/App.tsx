import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@progress/kendo-theme-default/dist/all.css';
import {UserGridList} from './pages/index'
import {IntlProvider,LocalizationProvider} from '@progress/kendo-react-intl';



function App() {
  // const [count, setCount] = useState(0)
  return (
    <LocalizationProvider language={'en'}>
      <IntlProvider locale={'en'}>
        <UserGridList/>
      </IntlProvider>
    </LocalizationProvider>
  )
}

export default App
