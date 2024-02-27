import React from "react";
import css from "./newsList.module.css"
// import NewPost from "./new/NewPost";

const NewsList = (props) => {
    let ref = React.createRef()
    let createNew = () => {
        let refNew = ref.current.value
        alert(refNew)
    }

    // let NewsList = props.NewsListData.map(() => {return (<NewPost />)})

    return (
    <div className={css.newsList}>
        {NewsList}
        <textarea ref={ref}></textarea>
        <button onClick={createNew}>Add New</button>
    </div>
    )
}

export default NewsList