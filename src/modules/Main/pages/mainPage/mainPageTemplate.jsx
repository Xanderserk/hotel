import React from 'react';

const mainPageTemplate = (context) => {
    return (
        <div>
            {
                console.log({ state: context.state })
            }
        </div>
    )
}

export { mainPageTemplate };