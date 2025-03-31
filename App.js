import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {id: 1, name: "Interestelar"},
        {id: 2, name: "O Show de Truman"},
        {id: 3, name: "Clube da Luta"},
        {id: 4, name: "Até o Último Homem"},
        {id: 5, name: "Harry Potter e o Cálice de Fogo"},
        {id: 6, name: "Cidade de Deus"},
        {id: 7, name: "10 Coisas que Odeio em VocÊ"},
        {id: 8, name: "Diário de uma Paixão"},
        {id: 9, name: "Jogos Vorazes"},
        {id: 10, name: "American Pie"},
        {id: 11, name: "As Branquelas"},
        {id: 12, name: "Superbad - É Hoje"},
      ]
    }
  }

    render(){
        return(
            <View style={styles.container}>
                
                <FlatList
                data={this.state.movies}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => 
                <View style={styles.containerMovies}>
                  <Text style={styles.title}>{item.name}</Text>
                </View>}
                />
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerMovies: {
      backgroundColor: 'lightblue',
      height: 80,
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    title: {
      color: 'black',
    }
})