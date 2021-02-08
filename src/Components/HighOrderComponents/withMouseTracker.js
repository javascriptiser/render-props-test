import { MouseTracker } from '../RenderPropsComponents/MouseTracker'

export const withMouseTracker = (Component) => {
	return <MouseTracker render={state => <Component coordinats={state} />} />
}