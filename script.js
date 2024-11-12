// Predefined responses for each question
const responses = {
    "Qu'est-ce que le génie mécanique et électrique ? Et quels sont les sujets qui intègrent ces deux domaines ?":
        "Le génie mécanique et électrique est un domaine de l'ingénierie qui combine la conception et l'analyse des systèmes mécaniques et électriques. Cette spécialité inclut des sujets tels que le contrôle automatique, les systèmes d'énergie, l'analyse thermique, l'électronique, la mécanique des machines, et la science des matériaux, et elle est utilisée pour développer des produits comme les robots, les voitures, et les systèmes d'énergie renouvelable.",
  
    "En quoi le génie mécanique et électrique est-il différent des autres spécialités d'ingénierie ?":
        "Ce domaine allie des compétences et des connaissances en mécanique et en électricité, alors que d'autres spécialités se concentrent généralement sur un aspect unique, comme le génie civil ou le génie chimique. Ce domaine permet aux ingénieurs de concevoir des systèmes intégrés alliant la mécanique et l'électricité.",
  
    "Quelles sont les matières principales que j'étudierai dans cette spécialité ?":
        "Les matières principales incluent les mathématiques avancées, la physique, la mécanique, la thermodynamique, l'électronique, l'ingénierie de contrôle, les systèmes d'énergie, la programmation, la conception de machines, et la science des matériaux.",
  
    "Quelles sont les compétences techniques que je dois acquérir dans ce domaine ?":
        "Vous aurez besoin de compétences en analyse mathématique, en programmation, en conception assistée par ordinateur (comme AutoCAD et SolidWorks), en circuits électriques et électroniques, ainsi que des compétences analytiques et de résolution de problèmes.",
  
    "Est-ce que j'aurai besoin d'apprendre la programmation ou de maîtriser certains logiciels spécifiques ?":
        "Oui, il est important d'apprendre la programmation dans un langage comme Python ou MATLAB, et de maîtriser des logiciels de conception comme AutoCAD ou SolidWorks, ainsi que des logiciels de simulation et d'analyse comme Simulink et Ansys.",
  
    "Quels sont les défis académiques auxquels font face les étudiants de cette spécialité ?":
        "Les étudiants rencontrent des défis dans la combinaison des connaissances théoriques et des applications pratiques, en plus de la complexité de certaines matières comme la thermodynamique, l'analyse électrique, et la conception de systèmes.",
  
    "Quelles sont les applications pratiques sur lesquelles je pourrais travailler en tant qu'étudiant ?":
        "Vous pouvez travailler sur des projets tels que la conception de robots, la création de modèles de systèmes d'énergie renouvelable, le développement de systèmes de contrôle automatique, et la conception de systèmes d'énergie pour les véhicules électriques.",
  
    "Aurai-je l'opportunité de travailler sur des projets réels pendant mes études ?":
        "Oui, de nombreuses universités offrent des projets de fin d'études ou des projets de recherche en collaboration avec des entreprises, ce qui permet aux étudiants de travailler sur des applications pratiques réelles.",
  
    "Comment les connaissances acquises dans cette spécialité sont-elles appliquées dans le monde professionnel ?":
        "Les connaissances acquises sont appliquées dans la conception, la fabrication et l'exploitation de systèmes mécaniques et électriques, le contrôle des machines et l'automatisation, ainsi que la conception d'équipements industriels et de systèmes d'énergie.",
  
    "Quels types d'emplois puis-je obtenir après l'obtention de mon diplôme ?":
        "Les emplois disponibles incluent ingénieur systèmes, ingénieur en contrôle, ingénieur en énergie, concepteur mécanique, ingénieur en maintenance, et ingénieur en développement de produits.",
  
    "Quels sont les secteurs ou domaines qui nécessitent cette spécialité ?":
        "Cette spécialité est nécessaire dans des secteurs comme l'automobile, l'aéronautique, l'énergie, la technologie médicale, la robotique et la fabrication.",
  
    "Existe-t-il des opportunités d'emploi dans mon pays ou à l'étranger pour cette spécialité ?":
        "Cela dépend des besoins du marché du travail dans chaque pays, mais il y a une demande mondiale pour cette spécialité, surtout dans les pays industrialisés et développés.",
  
    "Y a-t-il des programmes de stage d'été ou des opportunités de formation pratique dans cette spécialité ?":
        "Oui, la plupart des universités et des entreprises offrent des stages d'été ou des stages pratiques pour les étudiants, et il est également possible de trouver des stages en ligne avec des entreprises internationales.",
  
    "Devrais-je participer à des formations supplémentaires ou à des ateliers pendant mes études ?":
        "Oui, il est recommandé de participer à des ateliers et formations supplémentaires pour acquérir des compétences techniques et pratiques qui augmenteront votre expérience et vos chances d'emploi.",
  
    "Comment puis-je me préparer au marché du travail dans ce domaine ?":
        "Vous pouvez vous préparer en acquérant une expérience pratique, en améliorant vos compétences en programmation et en conception, en obtenant des stages dans des entreprises, et en construisant un réseau professionnel.",
  
    "Y a-t-il des possibilités de recherche ou d'innovation dans cette spécialité ?":
        "Oui, il existe de nombreuses possibilités de recherche et d'innovation, comme le développement de technologies d'énergie propre, l'amélioration de l'efficacité des machines, et les systèmes de contrôle intelligents.",
  
    "Comment puis-je m'impliquer dans la recherche ou les projets de développement dans mon domaine ?":
        "Vous pouvez vous impliquer en rejoignant des groupes de recherche dans votre université, en travaillant sur des projets étudiants, ou en recherchant un stage dans des laboratoires de recherche.",
  
    "Quelles sont les nouvelles tendances dans le génie mécanique et électrique dont je devrais être informé ?":
        "Les tendances actuelles incluent l'intelligence artificielle en robotique, les énergies renouvelables, l'impression 3D, et les systèmes intelligents.",
  
    "Existe-t-il des certifications professionnelles ou des formations spécialisées qui augmentent les chances d'emploi ?":
        "Oui, des certifications telles que LEED, les certifications en automatisation comme Siemens PLC, et la certification d'ingénieur professionnel (PE) augmentent les chances d'emploi.",
  
    "Quels sont les cours ou les sous-domaines dans lesquels je peux me spécialiser après mon diplôme ?":
        "Vous pouvez vous spécialiser dans des domaines tels que la conception de systèmes thermiques, les énergies renouvelables, l'automatisation et le contrôle, et la conception de robots."
  };
    
    // Function to display user question and initiate bot response
    function askQuestion(question) {
      const chatbotMessages = document.getElementById('chatbotMessages');
  
      // Create user message container with icon
      const userContainer = document.createElement('div');
      userContainer.className = 'message-container user-container';
      
      // Create user icon
      const userIcon = document.createElement('div');
      userIcon.className = 'user-icon';
      userIcon.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
          </svg>
      `;
      
      // Create user message
      const userMessage = document.createElement('div');
      userMessage.className = 'message user';
      userMessage.textContent = question;
      
      // Assemble user message container
      userContainer.appendChild(userMessage);
      userContainer.appendChild(userIcon);
      chatbotMessages.appendChild(userContainer);
  
      // Create and show typing indicator with bot icon
      const typingContainer = document.createElement('div');
      typingContainer.className = 'message-container bot-container';
      
      const botIconTyping = document.createElement('div');
      botIconTyping.className = 'bot-icon';
      botIconTyping.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
          </svg>
      `;
      
      const typingMessage = document.createElement('div');
      typingMessage.className = 'message bot typing';
      typingMessage.textContent = 'Typing';
      
      typingContainer.appendChild(botIconTyping);
      typingContainer.appendChild(typingMessage);
      chatbotMessages.appendChild(typingContainer);
  
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  
      setTimeout(() => {
          chatbotMessages.removeChild(typingContainer);
  
          // Create bot message container with icon
          const botContainer = document.createElement('div');
          botContainer.className = 'message-container bot-container';
          
          const botIcon = document.createElement('div');
          botIcon.className = 'bot-icon';
          botIcon.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
          `;
          
          const botMessage = document.createElement('div');
          botMessage.className = 'message bot';
          
          botContainer.appendChild(botIcon);
          botContainer.appendChild(botMessage);
          chatbotMessages.appendChild(botContainer);
  
          typeText(botMessage, responses[question]);
          chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
      }, 1000);
  }
  
  function typeText(element, text) {
      let index = 0;
      function type() {
          if (index < text.length) {
              element.textContent += text.charAt(index);
              index++;
              setTimeout(type, 50);
          }
      }
      type();
  }