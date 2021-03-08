import classNames from 'classnames';

let TYPES = {
	default: 'btn-secondary',
	cta: 'btn-primary'
};

export default ({children, type = 'default', additionalClasses='', ...customAttributes}) => {
	let cls = classNames('btn', TYPES[type], additionalClasses);
	return <button class={cls} {...customAttributes}>{children}</button>;
}
