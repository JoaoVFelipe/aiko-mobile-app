import {  View } from 'react-native';
import InputToolBar from '../components/InputToolBar';
import MessageContainer from '../components/MessageContainer';


export default function HomePage(props) {
  return (
    <View>
      <MessageContainer></MessageContainer>
      <InputToolBar></InputToolBar>
    </View>
  );
}


