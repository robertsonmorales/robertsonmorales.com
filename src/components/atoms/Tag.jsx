import React from 'react';

function Tag({ name }) {
    return (
        <li className="badge">{ '#' + name }</li>
    )
}
export default Tag;