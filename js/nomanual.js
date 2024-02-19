// Запрос на Yandex gpt
// Асинхронный запрос в yandex cloud
async function sendreq(){
    const manualText = `
    Предметная область психология, психология, психика.
    НИЧЕГО НЕ ПИСАТЬ ЕСЛИ НЕ СВЯЗАННО С ОБЛАСТЬЮ ПСИХОЛОГИИ
    `;

    const request = document.querySelector("#request");
    const requestText = request.value;
    request.value = "";

    const res = await fetch('https://functions.yandexcloud.net/d4e3ol9dq47gl9rd5alb?integration=raw', {
    method: "POST",
    body: JSON.stringify({
      "httpMethod": "POST",
      "headers": {
          "Accept": "*/*",
          "Content-Length": "13",
          "Content-Type": "application/x-www-form-urlencoded",
          "Content-Type": "application/json",
          "User-Agent": "curl/7.58.0",
          "X-Real-Remote-Address": "[88.99.0.24]:37310",
          "X-Request-Id": "cd0d12cd-c5f1-4348-9dff-c50a78f1eb79",
          "X-Trace-Id": "92c5ad34-54f7-41df-a368-d4361bf376eb"
      },
      "path": "",
      "multiValueHeaders": {
          "Accept": [
              "*/*"
          ],
          "Content-Length": [
              "13"
          ],
          "Content-Type": [
              "application/json",
              "application/x-www-form-urlencoded; charset=UTF-8"
          ],
          "User-Agent": [
              "curl/7.58.0"
          ],
          "X-Real-Remote-Address": [
              "[88.99.0.24]:37310"
          ],
          "X-Request-Id": [
              "cd0d12cd-c5f1-4348-9dff-c50a78f1eb79"
          ],
          "X-Trace-Id": [
              "92c5ad34-54f7-41df-a368-d4361bf376eb"
          ]
      },
      "queryStringParameters": {
          "a": "2",
          "b": "1"
      },
      "multiValueQueryStringParameters": {
          "a": [
              "1",
              "2"
          ],
          "b": [
              "1"
          ]
      },
      "requestContext": {
          "identity": {
              "sourceIp": "88.99.0.24",
              "userAgent": "curl/7.58.0"
          },
          "httpMethod": "POST",
          "requestId": "cd0d12cd-c5f1-4348-9dff-c50a78f1eb79",
          "requestTime": "26/Dec/2019:14:22:07 +0000",
          "requestTimeEpoch": 1577370127
      },
      "body": [manualText, requestText],
      "isBase64Encoded": true
    })
    });
    const answer = await res.json()
    const messages = answer['result']['alternatives']

    addChat(requestText, messages[0]['message']['text']);
}

function addChat(input, product) {

    const messagesContainer = document.getElementById("messages");
  
    let userDiv = document.createElement("div");

    userDiv.className = "user response";
    userDiv.innerHTML = `<img src="user.png" class="avatar"><span>${input}</span>`;

    messagesContainer.append(userDiv);
  
    let botDiv = document.createElement("div");
    let botText = document.createElement("span");
  
    botDiv.className = "bot response";
    botText.innerText = "Typing...";
  
    botDiv.append(botText);
    messagesContainer.append(botDiv);
  
    botText.innerText = `${product}`;
}