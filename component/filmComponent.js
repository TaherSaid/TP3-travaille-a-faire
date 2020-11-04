import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';
import { card } from 'react-native';
const FilmCard=(props)=> {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{margin:8 , width: '96% ', height: 250, backgroundColor: 'powderblue'}} >
        <View style={{flex: 2, flexDirection: 'row'}}>
            <View style={{margin:8 , width: "35%", height: 240}}>
              <Image source={{uri: props.imageUri}} style={styles.image}/>
            </View>
            <View style={{margin:8 , width: '50% ', height: 160}}>
                <View style={{flex: 2, flexDirection: 'row'}}>
                    <View style={{margin:5 , width: '80% ', height: 100}}>
                        <Text style={styles.Text}>{props.titreFilm}</Text>
                    </View>
                    <View style={{margin:8 , width: "35%" , height: 20}}>
                        <Text style={styles.Text}>{props.filmvote}</Text>
                    </View>  
                </View>
              <Text>{props.descriptionFilm}</Text>
            </View>
        </View>
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
   
  },
  image :{
    width:'100%',
    height:'100%'
  },
  Text:{
    fontSize:20
  }

});

export default FilmCard;