import React from 'react';

function Tag({ name }) {
    return (
        <li class="badge">{ '#' + name }</li>
    )
}
export default Tag;