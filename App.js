import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { ScrollView, SectionList } from "react-native-web";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        { id: 1, name: "Interestelar" },
        { id: 2, name: "O Show de Truman" },
        { id: 3, name: "Clube da Luta" },
        { id: 4, name: "Até o Último Homem" },
        { id: 5, name: "Harry Potter e o Cálice de Fogo" },
        { id: 6, name: "Cidade de Deus" },
        { id: 7, name: "10 Coisas que Odeio em VocÊ" },
        { id: 8, name: "Diário de uma Paixão" },
        { id: 9, name: "Jogos Vorazes" },
        { id: 10, name: "American Pie" },
        { id: 11, name: "As Branquelas" },
        { id: 12, name: "Superbad - É Hoje" },
      ],

      genres: [
        { id: 1, title: "Drama", data: ["Interestelar", "O Show de Truman", "Clube da Luta", "Até o Último Homem"] },
        { id: 2, title: "Ação", data: ["Harry Potter e o Cálice de Fogo", "Cidade de Deus"] },
        { id: 3, title: "Romance", data: ["10 Coisas que Odeio em Você", "Diário de uma Paixão"] },
      ]
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.title1}>Movies</Text>
          <FlatList
            data={this.state.movies}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) =>
              <View style={styles.containerMovies}>
                <Text style={styles.title}>{item.name}</Text>
              </View>}
          />

          <Text style={styles.title1}>Gêneros</Text>
          <SectionList
            sections={this.state.genres}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.itemText}>{item}</Text>
              </View>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.header}>{title}</Text>
            )}
          />
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  title1: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 20,
    color: 'black',
    fontWeight: 'bold',
  },
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
    fontSize: 20,
  },
  header: {
    fontSize: 24,
    backgroundColor: '#f7f7f7',
    fontWeight: 'bold',
  },
  item: {borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  itemText: {
    fontSize: 20,
  }
})