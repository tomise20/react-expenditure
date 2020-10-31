import * as React from 'react';

type MyCompProps = {
    name: 'tomi' | 'Betti',
    isMarried: boolean,
    kids: 0 | 2,
    livedIn?: ['HU', 'EN']
};

const MyComp = (props: MyCompProps) => {
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}

export default MyComp;