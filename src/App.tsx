import { FC } from 'react'
import reactlogo from './assets/images/react.svg'
import './assets/styles/app.css'
import './assets/styles/app.scss'

const App: FC = () => {
  // const [fullname, setFullname] = useState('Dư Thanh Được')
  // console.log(fullname)
  return (
    <div>
      <img src={reactlogo} alt='React Logo' width={100} height={100} />
      <h1>{'Nguyen Quoc Sy'}</h1>
      <h2>Bài viết được viết tại {process.env.HOST}</h2>
    </div>
  )
}

export default App
