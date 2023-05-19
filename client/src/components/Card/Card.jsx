import Style from '../Card/Card.module.css';


const Card = (props) => {
    return(
        <div className={Style.container}>
            <p>Name:{props.name}</p>
            <p>Username:{props.username}</p>
            <p>Email:{props.email}</p>
        </div>
    )
}

export default Card;