import Header from "./Header"
import {withRouter} from 'react-router-dom'
import {useState,useEffect} from 'react'
function UpdateProduct(props) {
    const [data,setData]=useState([])
    console.warn("props",props.match.params.id)
    useEffect(async ()=>{
        let result = await fetch("http://127.0.0.1:8000/api/product/"+props.match.params.id);
        result = await result.json();
        setData(result)
    })
    return (
        <div>
            <Header />
            <h1>UpdateProduct Page</h1>
            <input type="text" defaultValue={data.name} /> <br/><br/>
            <input type="text" defaultValue={data.price} /> <br/><br/>

            <input type="text" defaultValue={data.description} /> <br/><br/>
            <input type="file" defaultValue={data.file_path} /> <br/><br/>
             <img style={{width:150}} src={"http://127.0.0.1:8000/"+data.file_path}/><br/><br/>
            <button>Update Product</button>
        </div>

    )

}

export default withRouter(UpdateProduct)