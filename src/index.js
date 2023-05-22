import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'
// import { Perf } from 'r3f-perf'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
        camera={ {
            fov: 50,
            near: 0.1,
            far: 2000,
            position: [ -0.1, 1, 3.8 ]
        } }
    >
        {/* <Perf /> */}
        <Experience />
    </Canvas>
)
