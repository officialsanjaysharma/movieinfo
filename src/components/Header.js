import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';
import '../../src/styles/styles.scss';
var k, i, count = 0;
let dataArray = [];
let click=1;
function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div>
      <AppBar position="static">
        <Toolbar className="navbar">
          {/* <IconButton  color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton> */}
          <Typography className="logo" variant="title" color="inherit">
            Movie
          </Typography>
          {/* <Button className="navbarButton" color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
      <div className="searchBar">
        <TextField className="searchField" id="search" placeholder="Search Movie" onClick={function () { deleteflexDiv() }} />
        <Search className="searchButton" onClick={function () { searchFunction() }} />
      </div>
    </div>
  );
}
function searchFunction() {
  if(click>=1){
    return;
  }
  click+=1;
  var x = document.getElementById("search").value;
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=4031d1078118f20540dcd52b761e2713&language=en-US&query=String&page=1&include_adult=false`)
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      k = myJson.total_pages;
      comparefunction(x.toLowerCase());
    })
}
function comparefunction(x) {
  // var count = 0;

  if (x.length == 0) {
    return alert("No value entered")
  }

  x = x.toLowerCase();

  // console.log(x)
  for (i = 1; i <= k; i++) {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=4031d1078118f20540dcd52b761e2713&language=en-US&query=${x}&page=${i}&include_adult=false`)
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {


        myJson.results.forEach(element => {
          var flexDiv = document.getElementById('popularMoviesflex');

          var y = element.title.toLowerCase()
          if (y == x) {
            count++;
            var item = document.createElement('DIV');
            var refinedData=`<img class='imageStyle' src=https://image.tmdb.org/t/p/original/${element.poster_path}><br> Movie:${element.title},<br> Popularity: ${element.popularity},<br>Release Date: ${element.release_date}`
            console.log(refinedData)
            item.innerHTML = refinedData;
            flexDiv.appendChild(item);

          }
        });
      })
      .then(function (myJson) {
        if ((count == 0) && (i == (k - 1))) {
          alert("The movie is not in database")
        }
      })
  }
}
function deleteflexDiv() {
  click-=1;
  var elementID = "popularMoviesflex";
  document.getElementById(elementID).innerHTML = "";
  document.getElementById("search").value = "";
}


ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (ButtonAppBar);
