import classNames from 'classnames';

let TYPES = {
	danger: "bg-danger"
};

export default ({ type, caption }) => {
	let cls = classNames("badge", TYPES[type]);
	return <span class={cls}>{caption}</span>;
}
