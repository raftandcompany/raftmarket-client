import React from "react";


const defaultMapping = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    p: 'p',
    title: 'h3',
    subtitle: 'strong',
    emphasis: 'strong',
    body1: 'p',
    body2: 'p',
    body3: 'p',
    span: 'span'
}

function Typography({ variant = 'body1', variantMapping = defaultMapping, children, name, ...props }) {
    const component = variantMapping[variant];
    if (component === undefined) {
        throw Error(`variant ${variant} is not exist`)
    }
    name === undefined ? name = '' : name = ' ' + name;

    return React.createElement(component, {className: 'typo-' + variant + name}, children)
}

export default Typography;
