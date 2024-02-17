function generateSearchLink() {
  var query = document.getElementById("searchInput").value;
  var url = "https://www.google.com/search?q=" + encodeURIComponent(query);
  var animationUrl = "animation.html?q=" + encodeURIComponent(query);
  
  // Remove o link anterior, se houver
  while (linkContainer.firstChild) {
    linkContainer.removeChild(linkContainer.firstChild);
  }
  
  // Cria um elemento 'a' para simular o link
  var link = document.createElement('a');
  link.href = animationUrl;
  link.innerText = animationUrl;
  
  // Adiciona o link ao container
  linkContainer.appendChild(link);
  
  // Cria um botão para copiar a URL
  var copyButton = document.createElement('button');
  copyButton.innerText = "Copiar URL";
  copyButton.id = "copyBotao";
  copyButton.onclick = function() {
    copyToClipboard(window.location.origin + '/' + animationUrl);
  };
  linkContainer.appendChild(copyButton);
}

function copyToClipboard(text) {
  var textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);

  // Mostra a mensagem de link copiado
  var message = document.createElement('div');
  message.innerText = "Link copiado!";
  message.className = "copied-message";
  linkContainer.appendChild(message);

  // Remove a mensagem após alguns segundos
  setTimeout(function() {
    linkContainer.removeChild(message);
  }, 2000);
}



// Atualiza o ano no rodapé
function updateYear() {
  var currentYear = new Date().getFullYear();
  document.getElementById("current-year").textContent = currentYear;
}

// função uma vez para definir o ano inicial
updateYear();

//intervalo para atualizar o ano a cada virada de ano
setInterval(updateYear, 1000 * 60 * 60 * 24); // Atualiza a cada 24 horas (para lidar com alterações de fuso horário)







      // Função para simular digitação
      function typeWriter(text, i, speed) {
        if (i < text.length) {
          document.getElementById("typing-text").textContent += text.charAt(i);
          i++;
          setTimeout(function() {
            typeWriter(text, i, speed);
          },  200);
        } else {
          // Após a digitação, redireciona para a pesquisa no Google
          var url = "https://www.google.com/search?q=" + encodeURIComponent(text);
          setTimeout(function() {
            window.location.href = url;
          }, 1000); // Tempo de espera após a animação (1 segundo)
        }
      }
  
      // Obtém o parâmetro 'q' da URL
      var queryParam = new URLSearchParams(window.location.search).get("q");
  
      // Inicia a animação de digitação
      typeWriter(queryParam, 0, 50);