export default ({ heading, headingLevel, children }) => {
	let Heading = `h${headingLevel}`;
	return <section class="card">
		<div class="card-body">
			<Heading class="card-title">{heading}</Heading>
		<p class="card-text">{children}</p>
		</div>
	</section>;
}
