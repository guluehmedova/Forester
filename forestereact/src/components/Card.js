export default function Card(props) {
    return (
        <div className="card--section">
            <div className="container">
                <div className="card">
                    <img src={props.item.imageUrl} className="card--img" alt="" />
                    <h3>{props.item.title}</h3>
                    <p>{props.item.description}</p>
                    <a href="#">Read More</a>
                </div>
            </div>
        </div>
    )
}