import React, { useState } from 'react';
import data from '../utils/api/projectList'
import ProjectItem from './ProjectItem';
import { ProjectBox } from '../styled/Style'

const Project = () => {
    const [ items, setItems ] = useState( data )

    return (
        <div>
            <div className="titleBox">
                <h2 className="title">Projects</h2>
                <h3 className="subTitle">모든 포트폴리오는 비상업적이며, 취업지원의 용도로만 사용됩니다.</h3>
            </div>
            
            <ProjectBox>
                { items.map( proItem => <ProjectItem key={proItem.id} proItem={proItem} />)}
            </ProjectBox>
        </div>
    );
};

export default Project;