import React from 'react';
import './ParagraphWIthImage.css';
function ParagraphWIthImageComponent(props) {
    const data = props.componentData ? props.componentData : {};
    let imageUrl = Object.keys(data).length > 0 && data.image && data.image.source ? data.image.source : '';
    let paragraphText = Object.keys(data).length > 0 && data.image && data.image.source ? data.paragraph.map(el => (
        <p className="justify-content">
            {el.text}
        </p>
    )) : [];
    return (
        <div className="container">
            <img src={`images/${imageUrl}`} class="parishCls" />
            {paragraphText}  
        </div>
    )
}

export default ParagraphWIthImageComponent;
