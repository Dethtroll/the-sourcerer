import { GlobalStyle } from './styles/GlobalStyle'
import './styles/global.css';

import { Greetings } from './components/Greetings'

export function App() {
	return (
		<>
			<GlobalStyle />
			<Greetings />
		</>
	)
}