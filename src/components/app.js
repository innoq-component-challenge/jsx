import { h } from 'preact';
import Badge from './badge';
import Button from './button';
import Card from './card'

const App = () => (
	<div id="app" class="container">

		<h1>Badges</h1>
		<div>
		  This is a <Badge type="danger" caption="Badge"></Badge>
		</div>  
	
		<h1>Buttons</h1>
		<Button>Simple Button</Button>
		<br/>
		<Button type="cta" additionalClasses="text-uppercase">CTA Button with uppercase</Button>
		<br/>
		<Button data-foo="bar" aria-live="polite">Button with additional attributes</Button>

		<h1>Cards</h1>
		<Card headingLevel="2"
			heading={<fragment><span lang="de">Großartige</span> Card</fragment>}
			>
			Welcome to the <strong>best card</strong>
		</Card>
	</div>
)

export default App;
