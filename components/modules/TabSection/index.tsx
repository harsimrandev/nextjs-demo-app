import React from 'react';

const tabs = ['Details', 'Delivery', 'Fit', 'Share'];

function TabSection() {
    return (
        <div className='flex'>
            {tabs.map(t => (
                <span key={t}>{t}</span>
            ))}
        </div>
    )
}