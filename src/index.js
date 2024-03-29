import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'
import { Leva } from 'leva'

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      {/* <a href="https://wassuh.com/" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
        wassuh.com
      </a> */}
      {/* <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>😄 —</div> */}
      {/* <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>30/10/2022</div> */}
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Overlay />
    <Leva collapsed />
  </>
)
