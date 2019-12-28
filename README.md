Projeto em react-native - App com busca de dados climáticos

Link para configuração do ambiente, necessário para rodar o aplicativo -> https://facebook.github.io/react-native/docs/getting-started

Bibliotecas utilizadas para o projeto:
-react
-react-native
-react-navigation
-axios
-react-native-gesture-handler
-react-navigation
-react-navigation-stack
-@react-native-community/geolocation

O Clima Builder utiliza a API da OpenWeatherMap, essa API retorna os dados do clima. Segue o link com a documentação completa da API:  http://api.openweathermap.org/.
O App faz uma busca da localização atual que retorno a longitude e latitude (é usada o @react-native-community/geolocation para a busca), esses são os parâmetros passados
para a requisição na OpenWeatherMap.
