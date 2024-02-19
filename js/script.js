// Запрос на Yandex gpt api внутри сервера
/*
(async () => {
  const res = await fetch('https://llm.api.cloud.yandex.net/foundationModels/v1/completion', {
      method: 'POST',
      body: JSON.stringify({
          "modelUri": "gpt://b1gu0br2ila8ku5h161k/yandexgpt-lite",
          "completionOptions": {
              "stream": false,
              "temperature": 0.1,
              "maxTokens": "2000"
          },
          "messages": [
            {
              "role": "system",
              "text": "Пересказ сказки рыбак и рыбка"
            },
            {
              "role": "user",
              "text": "Мораль, ценности всей сказки"
            }
          ]
      }),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization': 'Api-Key AQVNxwzOG7XI6xSDg00jpcL4NbXu9FTZ2gg_1KPd',
      }
      
  })
  const answer = await res.json()
  console.log(answer)
})();
*/

// Асинхронный запрос в yandex cloud
async function sendreq(request, manual){
    console.log("manual", manual);
    console.log("request", request);

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
      "body": [manual, request],
      "isBase64Encoded": true
    })
    });
  const answer = await res.json()
  const messages = answer['result']['alternatives']

  console.log(messages[0]['message']['text'])
  console.log(inputCol)

  addChat(manual+" "+ request, messages[0]['message']['text']);
}
// Асинхронный запрос в yandex cloud
async function sendreq(){
    const manual = document.querySelector("#manual");
    const manualText = manual.value;
    manual.value = "";

    const request = document.querySelector("#request");
    const requestText = request.value;
    request.value = "";

    console.log("manual", manual.value);
    console.log("request", request.value);

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
    console.log(messages[0]['message']['text'])

    addChat(manualText + " " +requestText, messages[0]['message']['text']);
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
  
//    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
    botText.innerText = `${product}`;
}