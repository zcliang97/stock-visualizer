import React from 'react';

export default class App extends React.Component {
    render() {
        return (
            <PageHeader>
                <div className='header-contents'>
                    <Hello name="Frank"/>
                </div>
            </PageHeader>
        );
    }
}