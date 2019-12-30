import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;
export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid ${props => (props.empty ? '#FF0000' : '#eee')};
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background-color: #0e0b16;
  margin-left: 10px;
  opacity: ${props => (props.loading ? 0.7 : 1.0)};
`;

export const TextButtonAdd = styled.Text`
  color: #fff;
  font-size: 14px;
  padding: 10px 15px;
`;

export const LoadingButton = styled.ActivityIndicator`
  font-size: 14px;
  padding: 6px 15px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
  height: 64px;
  width: 64px;
  border-radius: 32px;
  background-color: #eee;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 13px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;

export const ProfileButton = styled(RectButton)`
  margin-top: 10px;
  align-self: stretch;
  border-radius: 4px;
  background: #0e0b16;
  justify-content: center;
  align-items: center;
  height: 36px;
`;

export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;

export const RequestsInfos = styled.View`
  flex: 1;
  padding: 40px;
`;

export const Success = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const MessageSuccess = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 40px;
  text-align: center;
`;

export const NameSuccess = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
  text-align: center;
`;

export const AvatarSuccess = styled.Image`
  height: 140px;
  width: 140px;
  border-radius: 70px;
  background: #eee;
`;

export const LoadingRequest = styled.ActivityIndicator`
  margin-top: 16px;
  color: #333;
`;

export const Error = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const MessageError = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;

export const AvatarError = styled.Image`
  height: 140px;
  width: 140px;
  border-radius: 40px;
  background: #eee;
`;

export const ButtonReturnPageInitial = styled(RectButton)`
  margin-top: 20px;
  align-self: stretch;
  border-radius: 4px;
  background: #0e0b16;
  justify-content: center;
  align-items: center;
  height: 36px;
`;

export const ButtonReturnPageInitialText = styled.Text`
  color: #eee;
  font-size: 14px;
  font-weight: bold;
`;
