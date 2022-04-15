import React from 'react';

function Image({src,width=300,height=200}){
    return (
        <div className="Image"
        style={{
            width:`${width}px`,
            height:`${height}px`,
            backgroundImage:`url(${src})`,
            backgroundSize:`cover`,
            backgroundPosition:`center`, 
            borderRadius:`8px`
        }}>
        </div>
    )
}
export default Image