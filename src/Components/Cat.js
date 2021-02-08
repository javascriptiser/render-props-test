import { useEffect, useRef, useState } from 'react'
import cat from '../Assets/cat.png'


const Cat = ({ coordinats }) => {
	const imgRef = useRef()
	const [state, setState] = useState(coordinats)
	useEffect(() => {
		setState({ x: imgRef.current.height / 2, y: imgRef.current.width / 2 })
	}, [coordinats])

	return <img
		src={cat}
		style={{ position: 'absolute', left: coordinats.x - state.x, top: coordinats.y - state.y }}
		ref={imgRef}
	/>
}


export { Cat }