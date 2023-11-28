/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [numericInput, setNumericInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [userNameInput, setUserNameInput] = useState('');
  const [emailError, setEmailError] = useState('');
  const [mobileError, setMobileError] = useState('');

  const handleNumericInputChange = (inputValue) => {
    // Remove non-numeric characters using a regular expression
    const numericValue = inputValue.replace(/[^0-9]/g, '');

    // Limit the input to 10 digits
    const trimmedValue = numericValue.slice(0, 10);
    if (trimmedValue.length < 10) {
      setMobileError("Please Enter Valid Mobile No");
    } else {
      setMobileError("");
    }
    setNumericInput(trimmedValue);
  };

  const handleEmailInputChange = (inputValue) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(inputValue) === false) {
      setEmailError("Wrong Email");
    }
    else {
      setEmailError("");
    }
    setEmailInput(inputValue);
  }
  const handleUserNameInputChange = (inputValue) => {
    setUserNameInput(inputValue);
  }

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  function handleTextChange(mobile, email, userName){
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if(mobile.length <10){
      return false;
    }else if(email.length ==0){
      return false;
    }else if(reg.test(email) === false) {
      return false;
    }else if(userName.length ==0) {
      return false;
    }
    console.log("your mobile no = "+mobile+", email = "+email+", user name = "+userName);
    return true;

  }

  return (
    <View style={styles.container}>
      <View style={{ width: "100%", height: 50, backgroundColor: "#f5f5f5" }}>
        <TextInput
          style={{ fontSize: 16, width: "100%", paddingLeft: 20, borderRadius: 5, borderBottomWidth: 2, borderColor: mobileError == "" ? "#c6c6c6" : "#ff0000" }}
          autoCapitalize='none'
          autoCorrect={false}
          placeholder='Mobile no.'
          keyboardType="numeric"
          value={numericInput}
          onChangeText={handleNumericInputChange}
        ></TextInput>
      </View>
      <Text style={{ color: "#FF0000", fontSize: 11 }}>{mobileError}</Text>

      <View style={{ width: "100%", height: 50, backgroundColor: "#f5f5f5" }}>
        <TextInput
          style={{ fontSize: 16, width: "100%", paddingLeft: 20, borderRadius: 5, borderBottomWidth: 2, borderColor: emailError == "" ? "#c6c6c6" : "#ff0000" }}
          autoCapitalize='none'
          autoCorrect={false}
          value={emailInput}
          placeholder='Email'
          onChangeText={handleEmailInputChange}
        ></TextInput>
      </View>
      <Text style={{ color: "#FF0000", fontSize: 11 }}>{emailError}</Text>
      <View style={{ width: "100%", height: 50, marginVertical: 10, backgroundColor: "#f5f5f5" }}>
        <TextInput
          style={{ fontSize: 16, width: "100%", paddingLeft: 20, borderRadius: 5, borderBottomWidth: 2, borderColor: "#c6c6c6" }}
          autoCapitalize='none'
          autoCorrect={false}
          placeholder='Full Name'
          value={userNameInput}
          onChangeText={handleUserNameInputChange}
        ></TextInput>
      </View>

      <TouchableOpacity onPress={() => {
       const result = handleTextChange(numericInput,emailInput,userNameInput);
       console.log("result = "+result);
        //  navigation.navigate('home', {name: 'Jane'});
      }}
        style={{
          width: "100%",
          height: 40,
          marginVertical: 20,
          backgroundColor: "#dadada",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Text style={{
          color: "#737373",
          fontWeight: "400",
          fontSize: 15
        }}>Next</Text>
      </TouchableOpacity>
    </View>
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar
    //     barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    //     backgroundColor={backgroundStyle.backgroundColor}
    //   />
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     style={backgroundStyle}>
    //     <Header />
    //     <View
    //       style={{
    //         backgroundColor: isDarkMode ? Colors.black : Colors.white,
    //       }}>
    //       <Section title="Step One">
    //         Edit <Text style={styles.highlight}>App.tsx</Text> to change this
    //         screen and then come back to see your edits.
    //       </Section>
    //       <Section title="See Your Changes">
    //         <ReloadInstructions />
    //       </Section>
    //       <Section title="Debug">
    //         <DebugInstructions />
    //       </Section>
    //       <Section title="Learn More">
    //         Read the docs to discover what to do next:
    //       </Section>
    //       <LearnMoreLinks />
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white"
  },
  textStyle: { fontSize: 24, color: '#000000', fontWeight: '600' },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  tinyLogo: {
    width: 60,
    height: 60,

  },
  bottom: {
    flexDirection: 'row',
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0,
  },
  bottomtwo: {
    flexDirection: 'row',
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },

  input: {
    flexDirection: "row",
    alignItems: 'center',
    marginTop: 25,
    borderColor: "#9a73ef",
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 4,
    fontFamily: 'Avenir-Medium',
    fontSize: 16,
  }
});
export default App;
