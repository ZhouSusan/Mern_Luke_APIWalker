import { useHistory } from "react-router-dom";
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Search = (props) => {

    let [categories, setCategories] = useState([])
    let [category, setCategory] = useState("people")
    let [id, setId] = useState(1)
    
    let history = useHistory();

    useEffect(() => {
        axios.get("https://swapi.dev/api/")
            .then(res=> {
                console.log("response from search", res);
                //the categories in response data are keys in response.data (res.data)
                setCategories(Object.keys(res.data))
            })
            .catch(err=> {
                console.log("Error from categories", err)
            })
    }, []);


    const submitForm = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        history.push(`/${category}/${id}`);
    }

    return (
        <div>
            <form onSubmit = {(e) => submitForm(e)}>
                <div>
                    <label>Search For:</label>
                        <select onChange = {(e)=>{setCategory(e.target.value)}}>
                        {
                            categories.map((category,i)=>{
                                return(
                                    <option key = {i} value={category}>{category}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div>
                    <label>ID</label>
                    <input onChange = {(e)=>{setId(e.target.value)}} type="number"/>
                </div>
                <button type="submit" style={{marginTop: 10, backgroundColor: "blue", color: "white", width: 70, height: 50}}>Search</button>
            </form>
        </div>
    )

}

export default Search;