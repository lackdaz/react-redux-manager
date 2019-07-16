import React, { Component} from 'react'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {View, Text} from 'react-native'
import reducers from './reducers'
import firebase from 'firebase'
import LoginForm from './components/LoginForm'
import {Header} from './components/common'

class App extends Component {
  componentWillMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyDQVqCoT_LShpQpVTvclPwYzjCghXUPfFY",
      authDomain: "udemy-manager-3a0fa.firebaseapp.com",
      databaseURL: "https://udemy-manager-3a0fa.firebaseio.com",
      projectId: "udemy-manager-3a0fa",
      storageBucket: "",
      messagingSenderId: "423771447321",
      appId: "1:423771447321:web:a282c5766d403e5f"
    };
    firebase.initializeApp(firebaseConfig);


  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header>
            Login
          </Header>
          <LoginForm/>
        </View>
      </Provider>
    )
  }
}

export default App