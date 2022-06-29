import React from 'react';
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/106352061?v=4'
const urlToMyGithub = 'https://github.com/Willian-Tomimatsu';

const App = () => {
    const handlePressGoToGithub = async () => {
        console.log('Verificando link');
        const res = await Linking.canOpenURL(urlToMyGithub);
        console.log('Link aprovado');
        console.log('Abrindo link');
        if (res) {
            await Linking.openURL(urlToMyGithub);
        }
    };
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
            <View style={style.content}>
                <Image 
                    accessibilityLabel='Willian em fundo branco' 
                    style={style.avatar} 
                    source={{uri: imageProfileGithub}} 
                />
                <Text 
                    accessibilityLabel='Nome: willian tomimatsu' 
                    style={[style.defaultText, style.name]}>
                    Willian Tomimatsu
                </Text>
                <Text 
                    accessibilityLabel='Nickname: nome de usuário' 
                    style={[style.defaultText, style.nickname]}>
                    "Nome de usuário"
                </Text>
                <Text 
                    accessibilityLabel='Descrição: bio' 
                    style={[style.defaultText, style.description]}>
                    "Bio"
                </Text>
                <Pressable onPress={handlePressGoToGithub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textButton]}>Open in GitHub</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        // Column (default -> flexDirection)
        backgroundColor: colorGithub,
        flex: 1,  // Expandir para a tela inteira
        justifyContent: 'center',
        alignItems: 'center',
        // flexDirection: 'row',
    },
    content: {
        alignItems: 'center',
        padding: 20,

    },
    defaultText: {
        color: colorFontGithub,
    },
    text: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white',
    },
    name: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
    },
    nickname: {
        fontSize: 18,
        color: colorDarkFontGithub,
    },
    description: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    button: {
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});