import React from 'react';
import style from './ViewRecipe.module.css';
import { formatDate } from '../Utils/CommentList';

// takes in comments and prints them out in a listed form
export default function CommentList({ comments }) {
    if (comments.length === 0) {
        return <p>Inga kommentarer än, bli den första!!</p>
    }

    return (
        <ul className={`${style['scroll-list']} ${style.comments}`}>
            {comments.map((comment, index) => (
                <li key={index}>
                    <div>
                        <strong>{comment.name}</strong>: {comment.comment}
                    </div>
                    <div className={`${style['comment-item']}`}>
                        {formatDate(comment.createdAt)}
                    </div>
                </li>
            ))}
        </ul>
    )
}
