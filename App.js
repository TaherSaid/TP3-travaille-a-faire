import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import movies from './json/film.json';
import FilmCard from './component/filmComponent';

export default function App() {
  return (
    
      movies.map((movie)=>
      <FilmCard imageUri={movie.posterUrl} titreFilm={movie.title} descriptionFilm={movie.plot} filmvote={movie.vote}/>
      )
    
  );
}

const styles = StyleSheet.create({
  container: {
   },
});


