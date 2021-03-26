import { h } from 'preact';
import Badge from './badge';
import Button from './button';
import Card from './card';
import List from './list';
import MagicHeaders from './magic_headers';
import FieldGroup from './form-group';

const App = () => (
	<div id="app" class="container">

		<h1>Badges</h1>
		<div>
			This is a <Badge type="danger" caption="Badge"></Badge>
		</div>

		<h1 class="mt-5">Buttons</h1>
		<Button>Simple Button</Button>
		<hr />
		<Button style="cta" additionalClasses="text-uppercase">CTA Button with uppercase</Button>
		<hr />
		<Button data-foo="bar" aria-live="polite">Button with additional attributes</Button>
		<hr />
		<Button type="button" name="action" value="delete">Button with name and value</Button>

		<h1 class="mt-5">Cards</h1>
		<Card headingLevel="2"
			heading={<Fragment><span lang="de">Großartige</span> Card</Fragment>}
			footer={<Fragment>This is the footer!</Fragment>}
		>
			Welcome to the <strong>best card</strong>
		</Card>

		<hr />

		<Card headingLevel="2"
			heading="Another Card with a Link as Header"
			href="#foo"
		>
			Content baby!
		</Card>

		<h1 class="mt-5">List</h1>

		<List items={{ 'Type': 'Car', 'Color': <Fragment><span lang="de">Etwas</span> text</Fragment> }}></List>

		<h1 class="mt-5">MagicHeaders</h1>

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

		<h1 class="mt-5">Form Group</h1>

		<FieldGroup.Simple type="email" id="my-email"
			label="eMail"
			name="users_email" value="BOOM"
			error="'BOOM' is not a valid eMail addreess" />
			
		<FieldGroup.Model type="email"
			field="email"
			object={{ email: 'BOOM' }}
			errors={{ email: 'invalid' }}
			I18n={(field, {context}) => ({ 'email': 'E-Mail' }[field])}
			ErrorI18n={(field, error, {context}) => ({ 'email': {'invalid': 'Ungültige E-Mail Adresse'},  }[field][error])}
		/>
	</div>
)

export default App;
