import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Keyboard } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  TextButtonAdd,
  LoadingButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
  RequestsInfos,
  Success,
  AvatarSuccess,
  NameSuccess,
  MessageSuccess,
  ButtonReturnPageInitial,
  ButtonReturnPageInitialText,
  Error,
  AvatarError,
  MessageError,
} from './styles';
import api from '../../services/api';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUsers: '',
      stateRequest: false,
      successOrErrorRequest: '',
      newRequestUser: {},
      emptyNewUsers: false,
      users: [],
      loading: false,
    };
  }

  static navigationOptions = {
    title: 'Usuário',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  async componentDidMount() {
    const users = await AsyncStorage.getItem('users');

    if (users) {
      this.setState({
        users: JSON.parse(users),
      });
    }
  }

  async componentDidUpdate(_, prevState) {
    const { users } = this.state;

    if (prevState.users !== users) {
      await AsyncStorage.setItem('users', JSON.stringify(users));
    }
  }

  handleAddUser = async () => {
    const { users, newUsers } = this.state;

    if (newUsers !== '') {
      this.setState({ loading: true, emptyNewUsers: false });

      Keyboard.dismiss();

      try {
        users.forEach(user => {
          if (user.login === newUsers) {
            stop;
          }
        });

        const response = await api.get(`users/${newUsers}`);

        const data = {
          name: response.data.name,
          login: response.data.login,
          bio: response.data.bio,
          avatar: response.data.avatar_url,
        };

        this.setState({
          stateRequest: true,
          successOrErrorRequest: 'success',
          newRequestUser: data,
          users: [...users, data],
          loading: false,
        });
      } catch (err) {
        this.setState({
          stateRequest: true,
          successOrErrorRequest: 'error',
          loading: false,
        });
        return false;
      }

      return newUsers;
    }

    this.setState({
      emptyNewUsers: true,
      loading: false,
    });

    return newUsers;
  };

  handleNavigation = user => {
    const { navigation } = this.props;

    navigation.navigate('User', { user });
  };

  handlePageInitial = () => {
    const { navigation } = this.props;

    this.setState({
      stateRequest: false,
      successOrErrorRequest: '',
      newUsers: '',
      loading: false,
    });

    navigation.navigate('Main');
  };

  render() {
    const {
      users,
      newUsers,
      newRequestUser,
      stateRequest,
      successOrErrorRequest,
      emptyNewUsers,
      loading,
    } = this.state;

    return (
      <>
        {stateRequest ? (
          <RequestsInfos>
            {successOrErrorRequest === 'success' ? (
              <Success>
                <MessageSuccess>Novo Usuário Adicionado</MessageSuccess>
                <AvatarSuccess
                  source={{
                    uri: newRequestUser.avatar,
                  }}
                />
                <NameSuccess>
                  {newRequestUser.name !== null
                    ? newRequestUser.name
                    : newRequestUser.login}
                </NameSuccess>
                <ButtonReturnPageInitial
                  onPress={() => this.handlePageInitial()}
                >
                  <ButtonReturnPageInitialText>
                    Voltar ao Início
                  </ButtonReturnPageInitialText>
                </ButtonReturnPageInitial>
              </Success>
            ) : (
              <Error>
                <AvatarError
                  source={{
                    uri:
                      'http://prints.ultracoloringpages.com/b578eaaba33e534fcfce3e67aa362b7e.png',
                  }}
                />
                <MessageError>
                  Usuário já cadastrado ou Não Existe!
                </MessageError>
                <ButtonReturnPageInitial
                  onPress={() => this.handlePageInitial()}
                >
                  <ButtonReturnPageInitialText>
                    Voltar ao Início
                  </ButtonReturnPageInitialText>
                </ButtonReturnPageInitial>
              </Error>
            )}
          </RequestsInfos>
        ) : (
          <Container>
            <Form>
              <Input
                autoCapitalize="none"
                autoCorrect={false}
                placeholder={
                  emptyNewUsers
                    ? `Ops! você não digitou nada!`
                    : `Adicionar Usuário`
                }
                returnKeyType="send"
                onSubmitEditing={this.handleAddUser}
                value={newUsers}
                onChangeText={text => this.setState({ newUsers: text })}
                empty={emptyNewUsers}
              />
              <SubmitButton
                loading={loading}
                onPress={() => this.handleAddUser()}
              >
                {loading ? (
                  <LoadingButton color="#fff" />
                ) : (
                  <TextButtonAdd>+</TextButtonAdd>
                )}
              </SubmitButton>
            </Form>

            <List
              data={users}
              keyExtractor={user => user.login}
              renderItem={({ item }) => (
                <User>
                  <Avatar source={{ uri: item.avatar }} />
                  <Name>{item.name !== null ? item.name : item.login}</Name>
                  <Bio>{item.bio}</Bio>

                  <ProfileButton onPress={() => this.handleNavigation(item)}>
                    <ProfileButtonText>VER PERFIL</ProfileButtonText>
                  </ProfileButton>
                </User>
              )}
            />
          </Container>
        )}
      </>
    );
  }
}

export default Main;
