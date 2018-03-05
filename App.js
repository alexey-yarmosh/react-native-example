import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [{value: 'a', key: 0}, {value: 'b', key: 1}], input: '' };
  }
  
  onAddPress = () => {
    this.setState(prevState => {
      return {
        todos: [...prevState.todos, {value: this.state.input, key: prevState.todos.length}],
        input: ''
      }
    });
  }

  onInputTextChange = text => {
    this.setState({ input: text });
  }

  onTodoPress = (key) => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.filter(todo => {
          return todo.key !== key;
        })
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} value={this.state.input} onChangeText={this.onInputTextChange} />
        <Button
          onPress={this.onAddPress}
          title="Add task"
        />
        <FlatList
          data={this.state.todos}
          renderItem={({item}) => <Text onPress={() => { this.onTodoPress(item.key) }}>{item.value}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  }
});
