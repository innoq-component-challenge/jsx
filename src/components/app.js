import { h } from 'preact';
import Badge from './badge';
import Button from './button';
import Card from './card';
import List from './list';
import MagicHeaders from './magic_headers';

const App = () => (
	<div id="app" class="container">

		<h1>Badges</h1>
		<div>
			This is a <Badge type="danger" caption="Badge"></Badge>
		</div>

		<h1>Buttons</h1>
		<Button>Simple Button</Button>
		<hr />
		<Button type="cta" additionalClasses="text-uppercase">CTA Button with uppercase</Button>
		<hr />
		<Button data-foo="bar" aria-live="polite">Button with additional attributes</Button>

		<h1>Cards</h1>
		<Card headingLevel="2"
			heading={<Fragment><span lang="de">Großartige</span> Card</Fragment>}
		>
			Welcome to the <strong>best card</strong>
		</Card>

		<Card headingLevel="2"
			heading="Another Card with a Link as Header"
			href="#foo"
		>
			<List items={{ 'Type': 'Car', 'Color': 'Red' }}></List>
		</Card>

		<h1>MagicHeaders</h1>

		<MagicHeaders.Section>
			<article>
				<header>
				  <MagicHeaders.Heading>Some h1</MagicHeaders.Heading>
				  <p class="tagline">
					Content
				  </p>
				</header>
				<MagicHeaders.Section>
					<section>
						<MagicHeaders.Heading>Some h2</MagicHeaders.Heading>
					</section>
					<p>Some more content</p>
					<MagicHeaders.Section>
						<div class="foo bar">
							<MagicHeaders.Heading>Some h3</MagicHeaders.Heading>
						</div>
						<p>Some more content</p>
					</MagicHeaders.Section>
				</MagicHeaders.Section>
				<MagicHeaders.Section>
					<section>
						<MagicHeaders.Heading>Again some h2</MagicHeaders.Heading>
					</section>
					<p>Some more content</p>
				</MagicHeaders.Section>
			</article>
		</MagicHeaders.Section>

	</div>
)

export default App;
