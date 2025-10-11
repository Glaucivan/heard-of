function Item(props){
    const { name, yID, key } = props

    const srcUrl = `https://youtube.com/embed/${yID}`

    return (
        <li className="song-layout" id={key}>
                <iframe src={srcUrl} width={640} height={450}/>
                <div className="">
                    <span>
                        {name}
                    </span>
                    <span>
                    </span>
                </div>
            <span>bla bla bla</span>
        </li>
    )
}

export default Item