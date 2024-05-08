import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Cake from "./Cake";
import axios from "axios";
import { Row } from "antd";
import Loader from "./Loader";


export default function Search() {
    var cakes = [];
    var [query, setQuery] = useSearchParams()
    var [cakes, setCakes] = useState([]);
    var text = query.get("q");

    function searchCakes() {
        axios({
            url: "http://apibyauw.eu-4.evennode.com/api/searchcakes/?q=" + text,
            method: "get"
        }).then((response) => {
            cakes = response.data.data
            setCakes(cakes);
        }, (error) => { console.log(error); })
    }

    useEffect(() => {
        searchCakes();
    }, [])

    if(cakes.length ==0){
        return (<Loader/>)
    }
    return (
        <>
            <h1>Search Results for {text}</h1>
            <Row>
                {
                    cakes.map((each, index) => {
                        return <Cake data={each} key={index} />
                    })
                }
            </Row>
        </>
    )
}