import React from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash';

const Breadcrumb = (props) => {
    const items = [];
    if (props.location !== undefined) {
        let fullPath = "";
        const paths = _.split(props.location.pathname, '/');
        const lastPath = paths.pop();
        paths.forEach(path=>{
            fullPath = fullPath + path + '/';
            if (fullPath === '/') {path = 'Dashboard'}
            items.push(<li className="breadcrumb-item" key={fullPath}><Link to={fullPath}>{_.startCase(path)}</Link></li>);
        });
        fullPath = fullPath + '/' + lastPath;
        items.push(<li className="breadcrumb-item active" key={fullPath}>{_.startCase(lastPath)}</li>);
    }
    return (
        <div className="container">
            <ol className="breadcrumb">
                {items}
            </ol>
        </div>
    );
};

export default Breadcrumb;