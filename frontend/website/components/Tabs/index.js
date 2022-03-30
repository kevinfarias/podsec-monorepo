import styles from './Tabs.module.scss';
import React from 'react';

export default function Tabs({ style, tabs }) {
    const [tabActive, setTabActive] = React.useState(!tabs.length || tabs[0].link);

    return (
        <>
            <ul className={"nav nav-tabs " + styles.tabs} style={{ ...style, display: tabs.length > 1 ? '' : 'none' }}>
                {tabs.map((tab, i) => (
                    <li className={"nav-item " + (i === 0 ? 'leftBorder' : (i === tabs.length-1 ? 'rightBorder' : ''))} style={{ width: `${100/tabs.length}%` }}>
                        <a className={"nav-link " + (tab.link === tabActive ? 'active' : '')} aria-current="page" href="#" onClick={() => setTabActive(tab.link)}>{tab.label}</a>
                    </li>
                ))}
            </ul>
            <div style={{ minHeight: '60vh', background: '#fff' }}>
                {tabs.map((tab) => tab.link !== tabActive || (tab.component)())}
            </div>
        </>
    );
}