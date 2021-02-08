import { useState } from "react"


const MouseTracker = ({ render }) => {
	const [state, setState] = useState({ x: 0, y: 0 })
	const handleMouseMove = (event) => {
		setState({ x: event.clientX, y: event.clientY })
	}
	return <div onMouseMove={handleMouseMove} style={{ height: '100vh' }}>
		{render(state)}
	</div>
}


export { MouseTracker }