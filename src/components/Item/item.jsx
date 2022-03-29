import './item.css'
const Item = (props) => {
    return(
        <div>
            <p className="title">{props.title}</p>
            <button value='true'>True</button>
            <button value='false'>False</button>
        </div>
    )
}

export default Item