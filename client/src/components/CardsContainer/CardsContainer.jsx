import Card from "../Card/Card";
import Style from '../CardsContainer/CardsContainer.Module.css';
import { useSelector } from "react-redux"


const CardsContainer = () => {
   
const users = useSelector(state => state.users)

return (
        <div className={Style.container}>
            {users.map(user =>{
                return <Card
                id = {user.id}
                name = {user.name}
                username = {user.username}
                email = {user.email}

                />
            })}
        </div>
    )
}


export default CardsContainer;