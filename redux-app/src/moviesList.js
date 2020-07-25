import React from 'react';
import { connect } from 'react-redux';
import { addMovie } from './actions';
import Movie from './movie.js';

class MovieList extends React.Component {

     state = {
         newMovie: ''
     };

    addMovie = e => {
        e.preventDefault();
        this.props.addMovie(this.state.newMovie);
    };


    handleChanges = e => this.setState({newMovie: e.target.value})

    render (){
     return (
        <>
        <h3>User: {this.props.user.name}</h3>
        <p>Money To Make: {this.props.moneyToMake}</p>
        <input onChange = {this.handleChanges} value = {this.state.newMovie} />
        <button onClick = {this.addMovie} >
            ADD MOVIE
        </button>
        {this.props.movies.map(movie => <Movie movie = {movie} />)}
        </>
     )
  }}



  const mapStateToProps = state => {
      return {
          movies: state.movies,
          moneyToMake: state.moneyToMake,
          user: state.user
      }
  }
export default connect(mapStateToProps, { addMovie }) (MovieList);