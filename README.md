# 🎮 Desenvolvedores - JokenPô 

👦🏽  Gabriel Rosa

🧔  Felipe Filgueiras

👦🏻  Felipe Tavares

👦🏻  Felipe Seda

👩🏻  Giovanna Amaral

# 🌐 Objetivo do projeto

pages: https://fseda.github.io/JokenPo_Online/
No geral, o projeto envolve o uso de visão computacional para criar um jogo Jokempo (pedra, papel, tesoura) com o qual os jogadores podem interagir por meio de gestos detectados por uma webcam.

- Desenvolver um jogo interativo de Jokempo (pedra, papel, tesoura) utilizando visão computacional e gestos manuais capturados por uma webcam.

- Criar uma experiência envolvente e divertida para os jogadores, permitindo-lhes interagir com o jogo por meio de gestos detectados pela câmera.

- Integrar tecnologias web, como HTML, CSS e JavaScript, com TensorFlow.js e modelos de gestos para detecção e reconhecimento de gestos.

- Promover a acessibilidade do jogo ao utilizar uma webcam comum como principal dispositivo de entrada, eliminando a necessidade de hardware adicional.

# ⚙️ Desenvolvimento do projeto

Foi utilizado tecnologias web (HTML, CSS, JS, TensorFlow e Handpose) para o desenvolvimento da aplicação.
Tecnologias essa que permite a criação de uma interface de usuário intuitiva, atraente e de fácil navegação, tornando a experiência mais agradável e convidativa.

- HTML: Para estruturar os elementos da página, incluindo vídeo da webcam, botões e elementos informativos.
- CSS: Para estilizar a interface do usuário e melhorar a experiência visual do jogo.
- JavaScript: Para desenvolver a lógica do jogo, incluindo configuração da câmera, detecção de gestos, seleção aleatória dos movimentos do computador e controle do fluxo do jogo.
- TensorFlow.js: Framework de aprendizado de máquina JavaScript que foi utilizado para carregar e executar o modelo handpose, responsável pela detecção de gestos das mãos na webcam.
- Handpose Model: Um modelo pré-treinado fornecido pelo TensorFlow.js, especializado em detectar as poses e pontos de referência das mãos em uma imagem ou vídeo.

# 💻 Software utilizado: 

Foi utilizado o software [TensorFlow.js](https://github.com/tensorflow/tfjs) juntamente com o  [HandPose](https://cdn.jsdelivr.net/npm/@tensorflow-models/handpose), que estão disponíveis aqui no GitHub.

# 🛠️ Esforços realizados para adaptação

Integração TensorFlow.js: Na página HTML, integramos a biblioteca TensorFlow.js. Isso pode ser conseguido incorporando uma tag <script> que faz referência ao arquivo JavaScript TensorFlow.js, seja de um CDN ou por meio de instalação local no diretório do projeto.

Ao incorporar o modelo Handpose em sua aplicação, você deve iniciar o processo de carregamento. O carregamento de modelos Handpose pré-treinados de forma assíncrona pode ser feito por meio de APIs TensorFlow.js. Normalmente, isso envolve chamar a função tf.loadGraphModel() ou tf.loadLayersModel().

A integração de uma funcionalidade de captura de vídeo ou imagem é necessária na página HTML para que o modelo Handpose reconheça a pose da mão. Isso pode ser feito por meio da API do navegador para acesso à câmera, como a API MediaDevices.

Detecção da postura das mãos: O modelo Handpose pode ser aplicado ao vídeo ou imagem capturada, permitindo assim a identificação da posição das mãos pertencentes a um usuário.

Análise da pose da mão: o modelo Handpose fornece informações que exigem a leitura da postura da mão do usuário, uma tarefa frequentemente associada à inferência do gesto que representa pedra, papel ou tesoura com base no que a mão exibe.

Demonstração do resultado na página HTML: Depois de processar o gesto do usuário, apresente o resultado do jogo na página HTML; isso pode envolver a apresentação de uma mensagem que transmita se o usuário saiu vitorioso, enfrentou a derrota ou empatou.

Aprimorando com CSS: Além disso, considere aproveitar o CSS para aprimorar a apresentação visual e a interatividade da página HTML. Isso abrange vários elementos estilísticos, como design de layout, esquemas de cores, estilos de fonte e possíveis animações que podem ser incorporadas para apelo visual e envolvimento do usuário.

Portanto, o único esforço de desenvolvimento para adaptar o software padrão utilizado foi a integração, carregamento de modelos, captura de entrada, detecção e interpretação de gestos, exibição de resultados e estilização da página.

# 👨🏻‍💻 Stakeholders

🕹️ Jogadores interessados em uma versão interativa e moderna do jogo Jokempo.


✍🏻 Entusiastas de tecnologia que desejam experimentar e aprender sobre visão computacional aplicada a jogos.
Desenvolvedores web interessados em explorar a integração de tecnologias emergentes, como TensorFlow.js, em projetos interativos.
Pessoas de todas as idades em busca de uma experiência divertida e acessível de jogo.


---------------------------------------------------------------------------------------------------------------------

# Resumo:

No geral, o projeto envolve o uso de visão computacional para criar um jogo Jokempo (pedra, papel, tesoura) com o qual os jogadores podem interagir por meio de gestos detectados por uma webcam. O projeto usa uma combinação de HTML, CSS e JavaScript para criar a interface do usuário e a lógica do jogo, e usa a biblioteca TensorFlow.js e o modelo de gestos para detecção de gestos.

No código HTML são definidos elementos da página, incluindo o vídeo da webcam, uma tela para desenhar no vídeo, botões para iniciar o jogo e exibir os resultados e elementos para exibir informações como contagem regressiva, computadores dos jogadores e da equipe. e os resultados do jogo.


No script JavaScript, várias tarefas são executadas, incluindo configuração da câmera, carregamento de modelos de gestos, detecção de gestos, desenho de pontos de referência manuais na tela, reconhecimento de gestos do jogador, seleção aleatória dos movimentos do computador, determinação do vencedor do jogo e controle do fluxo. Um jogo com contagem regressiva.

Resumindo, o projeto combina tecnologia web com visão computacional para criar uma experiência Jokempo interativa e divertida, onde os jogadores podem jogar o jogo clássico usando gestos manuais capturados pela webcam.
