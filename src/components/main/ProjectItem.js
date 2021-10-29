import React from 'react';


const ProjectItem = ({ proItem }) => {
    const { title, explain, viewURL, githubURL, bgColor } = proItem

    const notPreventView = (e) => {
        if ( proItem.viewURL === '#') {
            e.preventDefault()
        } else {
            return null
        }
    }

    const notPreventGit = (e) => {
        if ( proItem.githubURL === '#' ) {
            e.preventDefault()
        } else {
            return null
        }
    }

    return (
        <li>
                <div className="proTitle" style={{backgroundColor:bgColor}} ><h3>{title}</h3></div>
                <div className="proBottom">
                    <span>{ explain }</span>
                    <div className="btns">
                        <a onClick={notPreventView} className="viewBtn" href={ viewURL } target="_blank">View</a>
                        <a onClick={notPreventGit} className="ghBtn" href={ githubURL } target="_blank">Github</a>
                    </div>
                </div>
        </li>
    );
};

export default ProjectItem;