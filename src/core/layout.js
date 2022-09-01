import React from 'react';
function Layout({title='Title',descriptions='Descritions',children,className}){
    return (
        <>
         <div className="jumbotron">
            <h2>{title}</h2>
            <p className='lead'>{descriptions}</p>
         </div>
         <div className={className}>{children}</div>
        </>
    )
}
export default Layout