import classNames from 'classnames';

let STYLES = {
	default: 'btn-secondary',
	cta: 'btn-primary'
};

export default ({children, style = 'default', additionalClasses='', ...customAttributes}) => {
	let cls = classNames('btn', STYLES[style] || STYLES.default, additionalClasses);
	return <button class={cls} {...customAttributes}>{children}</button>;
}
