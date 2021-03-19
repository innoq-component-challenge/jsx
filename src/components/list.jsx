export default ({items, ratio = '1/3'}) => {
    const c1 = 'col-md-3',
        c2 = 'col-md-9'; // TODO!
    return <dl class="row">
        {Object.entries(items).map(([key, value], i) => {
            let even = i % 2 === 0;
            return <Fragment>
                <dt class={c1 + " " + (even ? "bg-primary" : "bg-secondary")}>{key}</dt>
                <dd class={c2 + " " + (even ? "bg-primary" : "bg-secondary")}>{value}</dd>
            </Fragment>
        })}
    </dl>
}
