//------------------------ ПУНКТ № 1 вывод  запроса GET 

const xhr = new XMLHttpRequest()
xhr.open('GET','https://jsonplaceholder.typicode.com/posts') // методом Get, получаем URL -в формате JSON
xhr.addEventListener('load',()=>{
    console.log(xhr.responseText)// load нам дает разрешение на получение JSON выше ,поэтому мы вешаем событие на него для получения данных от сервера по запросу, а open( ) это лишь настройка этого запроса
}) //  и если вызвать console.log(xhr.responseText) вне этого обоработчика собития он не сработает 

xhr.send()//Вышеприведённая конфигурация запроса XHR фактически не будет выполняться до тех пор, пока мы не вызовем метод send(). 

xhr.addEventListener('error',()=>{
    console.log('error') // при этом если мы url ввели с ошибкой то выведется баг с NAME, все верно но маршут не допустим,  не posts a post то тогда error
})








//------------------------ ПУНКТ № 2 визуализация и вывод двух запросов GET , POST


 const  btnXhr = document.querySelector('button')
 const btnGet = document.querySelector('.btn-get-post')
 const btnAdd = document.querySelector('.btn-add-posts')
 const container = document.querySelector('.container')


function getRespons (cb){ // то есть с помошью колбэк функции мы создаем шаблон этого запроса 
    const xhr = new XMLHttpRequest()
    xhr.open('Get','https://jsonplaceholder.typicode.com/posts') // здесь можно просто менять URL
    xhr.addEventListener('load',()=>{
        const response = JSON.parse(xhr.responseText)
        cb(response)
    }) 
    xhr.addEventListener('error',()=>{
        console.log('error') 
    })
    xhr.send()
    }

   
   
    btnXhr.addEventListener('click', (e)=>{
     getRespons(response=>{
        console.log(response) //вызвали колбэк функцию в консоль
        })   
    })


    function createPost(body,cb){
        const xhr = new XMLHttpRequest()
        xhr.open('POST','https://jsonplaceholder.typicode.com/posts') 
        xhr.addEventListener('load',()=>{
            const response = JSON.parse(xhr.responseText)
            cb(response)
        }) 
        xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
        xhr.addEventListener('error',()=>{
            console.log('error') 
        })
        xhr.send(JSON.stringify(body))
    }

    function cardTemplate(post){
        const card = document.createElement('div') // создаем див с карточкой  
        card.classList.add('card') //класс для карточки
        const cardBody = document.createElement('div') // создаем бади дл всех карточек
        cardBody.classList.add('card-body') // класс для карточки 
        const title = document.createElement('h5') // создаем внутри карточки титульный шрифт
        title.classList.add('card-title') // создали класс для шрифта
        const article = document.createElement('p')// для основоного текста создали параграф
        article.classList.add('card-text')// создали класс для р
        cardBody.appendChild(title) // с помошью appendChild который делает дочерним элементом и помешает переменную title внутрь cardBody
        cardBody.appendChild(article)
        title.textContent = post.title
        article.textContent = post.body // body title из бутсрап класс
        card.appendChild(cardBody)
        return card
    }

    function renderPosts(response){
        const fragment = document.createDocumentFragment()
        response.forEach(post => {
           const card = cardTemplate(post)
            fragment.appendChild(card) // фрагмент уходит в дочерний кард
        })
            container.appendChild(fragment)
    }

    btnGet.addEventListener('click', e =>{
        getRespons(renderPosts)
    })

    btnAdd.addEventListener('click', e =>{
        const newPost = {
            title: 'foo',
            body: 'bar',
            userId: 1,
        }
        createPost(newPost,response =>{
            console.log(response)
        const card = cardTemplate(response)
        container.appendChild(card)
        })
    })







//--------------------- ПУНКТ № 3 обработка ошибок 

    function myHttpRequest({method, url} = {}, cb){
        try {
           const xhr = new XMLHttpRequest()
        xhr.open(method,url) // здесь можно просто менять URL
        xhr.addEventListener('load',()=>{
            if (Math.floor(xhr.status/100)!== 2){
                cb(`Error . status code: ${xhr.status}`, xhr)
                return
            }
            const response = JSON.parse(xhr.responseText)
            cb(null,response)
        }) 
        xhr.addEventListener('error',()=>{
            cb(`Error . status code: ${xhr.status}`, xhr)
        })
        xhr.send() 
        } catch (error) {
            cb(error)
        }
        
    }

    myHttpRequest({ 
        method:'GET',
        url: 'https://jsonplaceholder.typicode.com/posts' //error в случае если 
    }, 
     (err,res) =>{ 
       if(err){
        console.log(err)
        return
       }                                                      //адрес не верный      
        console.log(err,res)                                 //если  же проводник то 404
    })


     function http() {
        return {
            // Метод для выполнения GET-запроса
            get(url, cb) {
                try {
                    const xhr = new XMLHttpRequest()  // Создаем объект XMLHttpRequest
                    xhr.open('GET', url);  // Открываем соединение с указанным URL для GET-запроса
                    xhr.addEventListener('load', () => {  // Устанавливаем обработчик события 'load', который срабатывает при успешном завершении запроса
                        if (Math.floor(xhr.status / 100) !== 2) {  // Проверяем успешность запроса по статусу
                            cb(`Error. Status code: ошибка проводника ${xhr.status}`, xhr)  // Если неуспешно, вызываем колбэк с ошибкой
                            return;
                        }
                        const response = JSON.parse(xhr.responseText)  // Если успешно, парсим JSON-ответ
                        cb(null, response);  // Вызываем колбэк с результатами запроса
                    })
                    
                    xhr.addEventListener('error', () => {  // Устанавливаем обработчик события 'error', который срабатывает при ошибке запроса
                        cb(`Error. Status code: 404 страница не найдена ${xhr.status}`, xhr)  // Вызываем колбэк с ошибкой
                    })
                    xhr.send()  // Отправляем GET-запрос
                } catch (error) {
                    cb(error);  // Если произошла ошибка в блоке try, вызываем колбэк с этой ошибкой
                }
            },
    
            // Метод для выполнения POST-запроса
            post(url, body, headers, cb) {
                try {
                    const xhr = new XMLHttpRequest()  // Создаем объект XMLHttpRequest
                    xhr.open('POST', url)  // Открываем соединение с указанным URL для POST-запроса
                    xhr.addEventListener('load', () => {  // Устанавливаем обработчик события 'load', который срабатывает при успешном завершении запроса
                        if (Math.floor(xhr.status / 100) !== 2) {  // Проверяем успешность запроса по статусу
                            cb(`Error. Status code: ошибка проводника ${xhr.status}`, xhr) // Если неуспешно, вызываем колбэк с ошибкой
                            return;
                        }
                        const response = JSON.parse(xhr.responseText)  // Если успешно, парсим JSON-ответ
                        cb(null, response)  // Вызываем колбэк с результатами запроса
                    })
                        
                        xhr.addEventListener('error', () => {  // Устанавливаем обработчик события 'error', который срабатывает при ошибке запроса
                        cb(`Error. Status code: 404 страница не найдена  ${xhr.status}`, xhr)  // Вызываем колбэк с ошибкой
                    })
    
                    
                    if (headers) {
                        Object.entries(headers).forEach(([key, value]) => {// Устанавливаем заголовки 
                            xhr.setRequestHeader(key, value)//запроса, если они предоставлены
                        })
                    }
    
                    xhr.send(JSON.stringify(body))  // Отправляем POST-запрос с указанным телом запроса
                } catch (error) {
                    cb(error)  // Если произошла ошибка в блоке try, вызываем колбэк с этой ошибкой
                }
            },
        };
    }
    
        const myHttp = http()
        myHttp.post(
            'https://jsonplaceholder.typicode.com/posts',
            {
            title: 'р',
            body: 'bar',
            userId: 1,
            },
            {'Content-type': 'application/json', 
             'x-auth': 'post'
            },
            (err,res)=>{
                console.log(err,res)
            }
            )







//------------------------ ПУНКТ № 4 вывод двух запросов GET , POST через fetch

// --------------fetсh GET

        const requesUrl= 'https://jsonplaceholder.typicode.com/posts'

        function httpReq(method, url, body = null){
            return fetch(url).then(respons =>{
                return respons.json()
            })
    }
        

    httpReq('GET', requesUrl)


        .then(data => console.log(data))
        .catch(err=> console.log(err))


    //------fetсh POST


    const requesUrl = 'https://jsonplaceholder.typicode.com/posts'
        
    function httpReq(method, url, body = null){
        const headers = {
            'content-Type': 'application/json'
        }
        return fetch(url,{
            method: method,
            body: JSON.stringify(body),
            headers: headers
        }).then(respons =>{
            return respons.json()
        })
}


    httpReq('POST',requesUrl, body = {
        
            name: 'Timur',
            age: 33,
            Dev: true
        })


        .then(data => console.log(data))
        .catch(err=> console.log(err))







//------------------------ ПУНКТ № 5-б  цепочка обращений через Promise к разным адресам


function getPost(id){
    return new Promise((resolve, reject) =>{
        myHttp.get(`https://jsonplaceholder.typicode.com/posts/${id}`, (err,res)=>{
            if(err){
                reject(err)
            } 
            resolve(res)
        })
            
    })
}

function getPostComments(post){
    const {id} = post
    return new Promise((resolve, reject) =>{
        myHttp.get(`https://jsonplaceholder.typicode.com/comments?postsId=${id}`, (err,res)=>{
            if(err){
                reject(err)
            } 
            resolve({post,comments: res})
        })
            
    })
}

function getUserCreatedPost(data){
    
    const {post: {userId}}= data
    return new Promise((resolve, reject) =>{
        myHttp.get(`https://jsonplaceholder.typicode.com/users/${userId}`, (err,res)=>{
            if(err){
                reject(err)
            } 
            resolve({...data,user: res})
        })
            
    })
}

getPost(50)
.then(post => getPostComments(post))
.then(data=>getUserCreatedPost(data))
.then(fullData=>console.log(fullData))
.catch(err => console.log(err))








   