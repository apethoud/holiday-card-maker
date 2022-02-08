import { useParams } from "react-router-dom"

export default function Profile(props) {
    let params = useParams();
    return (
        <div>Profile page for user: {params.userId}</div>
    )
}