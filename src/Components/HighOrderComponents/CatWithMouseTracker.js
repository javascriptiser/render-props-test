import { Cat } from '../RenderPropsComponents/Cat'
import { withMouseTracker } from './withMouseTracker'


const CatWithMouseTracker = () => {
	return <div>
		<h1>HOC</h1>
		{withMouseTracker(Cat)}
	</div>
}

export { CatWithMouseTracker }


