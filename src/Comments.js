import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import uniqid from 'uniqid'
import SingleComment from './SingleComment'
import { commentCreate, commentsLoad } from './redux/action'
// import { commentReducer } from './redux/commentReducer'


function Comments() {
    const [textComment, setTextComment] = useState('')
    const comments = useSelector(state => {
        const { commentReducer } = state;
        return commentReducer.comments
    })

    const dispatch = useDispatch()

    const handleInput = (e) => {
        setTextComment(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submit >>>>>', textComment);
        const id = uniqid()
        dispatch(commentCreate(textComment, id))
    }

    useEffect(() => {
       dispatch(commentsLoad());
    }, []);


    return (
        <div className="card-comments">
            <form onSubmit={handleSubmit} className="comments-item-create">
                <input type="text" value={textComment} onChange={handleInput} />
                <input type="submit" hidden />
            </form>
            {!!comments.length && comments.map(res => {
                return <SingleComment key={res.id} data={res}/>
            })}

        </div>
    )
}

export default Comments

