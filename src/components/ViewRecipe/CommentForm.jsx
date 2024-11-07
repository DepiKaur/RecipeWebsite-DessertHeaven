import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { submitComment, resetFormFields } from '../Utils/CommentForm';

import style from './CommentForm.module.css';

export default function CommentForm() {
    const [message, setMessage] = useState('')
    const [firstName, setFirstName] = useState('')
    const [anonymous, setAnonymous] = useState(false)
    const [comment, setComment] = useState('')

    const params = useParams();

    async function handleSubmit(event) {
        event.preventDefault();

        const displayName = anonymous ? 'Anonymous' : firstName
        console.log(`name ${displayName}, comment ${comment}`)

        // här ska funktion finnas för att spara i databasen i swagger 
        const commentData = {
            name: displayName,
            comment: comment
        }

        const result = await submitComment(params.recipeId, commentData);
        setMessage(result.message);

        // to restore the inputs after saving successfully
        if (result.success) {
            resetFormFields(setFirstName, setComment, setAnonymous);
        }
    }

    useEffect(() => {
        // Clear the message after 3 seconds
        if (message) {
            const timer = setTimeout(() => {
                setMessage('');
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [message])

    return (
        <div className={style['comment-main']}>
            <div className={style.container}>
                <form onSubmit={handleSubmit} className={style.form}>
                    <h2>Kommentera</h2>
                    <div className={style['name-div']}>
                        <label htmlFor="name"></label>
                        <input type="text"
                            id="name"
                            placeholder='ange namn'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            disabled={anonymous}
                            required={!anonymous} /> <br />

                        <label htmlFor="anonymous" className={style['anonymous-label']}>förbli anonym?</label>
                        <input type="checkbox"
                            id="anonymous"
                            checked={anonymous}
                            onChange={(e) => setAnonymous(e.target.checked)} />
                    </div>

                    <div className={style['comment-div']}>
                        <label htmlFor="comment"></label>
                        <textarea id="comment"
                            placeholder='din kommentar'
                            cols={20} rows={5}
                            value={comment}
                            onChange={(e) => setComment(e.target.value)} required />
                    </div>

                    <div className={style['button-container']}>
                        <button type="submit">Ange kommentar</button>
                        <button type='submit'>
                            <Link to=".." relative="path" className={style['no-underline']}>
                                Tillbaka
                            </Link>
                        </button>
                    </div>

                </form>
                <br />
                <div className={style.message}>
                    {message && <p>{message}</p>}
                </div>
            </div>
        </div>
    )
}
