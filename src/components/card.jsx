export default ({ heading, headingLevel, footer, href, children }) => {
	let Heading = `h${headingLevel}`;

	return <section class="card">
		<div class="card-body">
			<Heading class="card-title">
				{href ? <a href={href}>{heading}</a> : heading}
			</Heading>
			<p class="card-text">{children}</p>
		</div>
		{footer ? <div class="card-footer">{footer}</div> : ''}
	</section>;
}
