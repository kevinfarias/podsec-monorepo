import React from 'react';
import FallbackMessage from './components/FallbackMessage';
import styles from './ContentList.module.scss';

export default function ContentList({ title, totalLength, itensPerPage = 3, fallbackMessage = 'Não há registros', data = [], children = (<></>) }) {
    const [activeBullet, setActiveBullet] = React.useState(0);
    const [dataActive, setDataActive] = React.useState([]);
    const [ellipsis, setEllipsis] = React.useState([]);

    React.useEffect(() => {
        setDataActive(data.slice(activeBullet * itensPerPage, (activeBullet * itensPerPage) + itensPerPage));
        setEllipsis(Array.from(Array(Math.ceil(totalLength / itensPerPage)).keys()));
    }, [activeBullet, itensPerPage, totalLength, data.length]);

    if (!data.length) {
        return (
            <div className={styles.container}>
                <h3 className={'title'}>{title}</h3> 
                <div className="row">
                    <FallbackMessage message={fallbackMessage} />
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <h3 className={'title'}>{title}</h3> 
            {'  '}
            <hr className="separator" /> <a href="javascript: void(0)">VER TUDO</a>
            <div class='row contentList'>
                <div className="col-12">
                    {dataActive.map(item => React.cloneElement(children, { data: item }))}
                </div>
            </div>
            <div className="bulletList">
                {ellipsis.map((bulletIndex) => <div className={"ellipsis " + (bulletIndex !== activeBullet || 'active')} onClick={() => setActiveBullet(bulletIndex)}></div>)}
            </div>
        </div>
    );
};