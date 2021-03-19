export default ({ heading, headingLevel, href, children }) => {
	let Heading = `h${headingLevel}`;

	return <section class="card">
		<div class="card-body">
			<Heading class="card-title">
				{href ? <a href={href}>{heading}</a> : heading}
			</Heading>
			<p class="card-text">{children}</p>
		</div>
	</section>;
}
