import React from 'react';

function Tag({ name }) {
    return (
        <div className="built-with-using">
            <div className="badge p-2">#{name}</div>
        </div>
    )
}

export default Tag;