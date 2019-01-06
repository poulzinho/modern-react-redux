import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                author="Sam"
                timeAgo="Today at 4:45PM"
                comment="hey hey"
                avatar={faker.image.avatar}
            />
            <CommentDetail author="Alex" timeAgo="Today at 2:00PM" comment="Hallo" avatar={faker.image.avatar}/>
            <CommentDetail author="Jane" timeAgo="Today at 5:45PM" comment="Nice Blog!" avatar={faker.image.avatar}/>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));

