import React from "react";
import { Divider } from "@material-ui/core";
let dataArray=[];
let data = () => {
        fetch('https://api.themoviedb.org/3/search/movie?api_key=4031d1078118f20540dcd52b761e2713&language=en-US&query=String&page=1&include_adult=false')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        dataArray=myJson;
        console.log(myJson);
})
}
render(){
    return(
        <div>
            {dataArray}
        </div>
    )
};
export default data;
