// Tüm Elementleri Secme

const form = document.querySelector("#todo-form"); //s18
const todoInput = document.querySelector("#todo"); //s21
const todoList = document.querySelector(".list-group"); //s41
const firstCardBody = document.querySelectorAll(".card-body")[0]; //s17 //card'i secip, ALERT ekleyecegiz..
const secondCardBody = document.querySelectorAll(".card-body")[1]; //s31
const filter = document.querySelector("#filter"); //s36
const clearButton = document.querySelector("#clear-todos"); //53


//Todo ekleyecegimiz icin form'a SUBMIT kazandirmak lazim

eventListeners();

function eventListeners(){ //tüm event listenerleri burda ekleyecegiz
    form.addEventListener("submit",addTodo); //submit yapinca addTodo func calissin
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI); //123_Todo'lari sayfaya ekleme
    secondCardBody.addEventListener("click", deleteTodo); //124_Todo'lari Arayüzden Silme
    filter.addEventListener("keyup",filterTodos);//126_Todolari Filtreleme
    clearButton.addEventListener("click",clearAllTodos); //127_Tüm Tasklari Temizleyin
}

//127_Tüm Tasklari Temizleyin
function clearAllTodos(e){ //"e objesinin kullanmadigim icin yazmadim, ama ne olur olmaz diye yazin!"
    if(confirm("Are you sure you want to delete all Tasks?")){
        //Arayüzden Todolari Temizleme
        // todoList.innerHTML = ""; //removeChild'a göre yavas olan yöntem, büyük projelerde

        // todoList.removeChild(todoList.firstElementChild);
        // todoList.removeChild(todoList.firstElementChild);
        // todoList.removeChild(todoList.firstElementChild);
        // todoList.removeChild(todoList.firstElementChild);
        // // todoList.removeChild(todoList.firstElementChild);
        // console.log(todoList.firstElementChild); //4 tane olmak zorunda, sonunda "NULL" döndü

        //ayni islemi WHILE döngüsü ile yapalim
        while(todoList.firstElementChild != null){
            todoList.removeChild(todoList.firstElementChild);
        }
        localStorage.removeItem("todos"); //KEY silinince, bütün VALUE'lar da silinir..
    }
    //else durumunu kontrol etmeye gerek yok, cancel derse zaten buraya hic gelmez, sayfa normal kalir

}

//126_Todolari Filtreleme -- display inputa girdigimiz deger icinde geciyorsa "block" gösterecek, gecmiyorsa "none" silinecek
function filterTodos(e){ //e bazen kullaniliyor, tam bilmiyorum ne zaman
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item"); //li leri sectik

    listItems.forEach(function(listItem){ //listItem li'ye esit olacak
        const text = listItem.textContent.toLowerCase(); //textContente ne varsa onu alacagiz
        if (text.indexOf(filterValue) === -1){ //-1 ise degeri bulamadi demektir...
            
            listItem.setAttribute("style","display : none !important"); //CSS özelligi ekliyoruz, display
            //bulamdi ve display'de/ekran'da gösterme dedik
            //"!important" ile default olarak gelen degerlerin, istegimizi ezmesini engelliyoruz...
        }
        else {
            listItem.setAttribute("style","display : block"); //göster dedik
        }

    });

}

//124_Todo'lari Arayüzden Silme
function deleteTodo(e){
    if(e.target.className === "fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent); //X'e basildiginda, Todo1 buraya gelmis oldu
        showAlert("success","Todo Successfully Deleted...");
    }
}

//125_Todolari Storage'dan Silme
function deleteTodoFromStorage(deletetodo){ //icerik li elementinin textcontenti
    let todos = getTodosFromStorage();

    todos.forEach(function(todo,index){ //forEach ile elemani ve index i bulabiliyoruz
        if (todo === deletetodo){
            todos.splice(index,1); //ARRAY'den deger silme
        }
    });
    //kalici olarak silmek icin, yoksa sadece arayüzden siliniyor
    localStorage.setItem("todos",JSON.stringify(todos));
}
//123_Sayfa Yüklendiğinde Todoları Ekleme
function loadAllTodosToUI(){
    let todos = getTodosFromStorage(); //ARRAY halinde aldik

    todos.forEach(function(todo){ //ARRAY üzerinde gezindik, card'a yazdirdik
        addTodoToUI(todo);
        
    })
}



function addTodo(e){
    const newTodo = todoInput.value.trim(); //yazi daki bosluklari silme

    //inputa bir sey yazmasak da, ekleme yapiyor, ALERT olusturacagiz
    if (newTodo === ""){
       //bootstrap4'te ALERT nasil yapilir, ona bakilir
        // uyari mesaji
        //  <div class="alert alert-danger" role="alert"> 
        //      This is a danger alert—check it out!
        //  </div>   
        

        showAlert("danger","Please Enter A Todo..."); // type,message
    }

    else {
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success", "Todo Successfully Added...")
    }
    

    
    e.preventDefault(); //sayfa kendisini hemen yenilemesin diye
}
//122_Todo'lari Storage'a Ekleme
//bu addtodos islemini baska yerlerde de kullanabilmek icin ayri bir fonksiyon yazacagiz

function getTodosFromStorage(){ //storage'dan Todolari alir
    let todos;
        if(localStorage.getItem("todos") === null){
            todos = [];
        }
        else{
            todos = JSON.parse(localStorage.getItem("todos")); //string yazildi, ARRAY'e cevirmek icin "JSON.parse"
        }
        return todos; //fonksiyon catisinda yazinca, baska yerlerde de kullanacagiz
}

function addTodoToStorage(newTodo){ //ayni isimde Todo yoksa, önce olusturacagiz, varsa üzerine yazacagiz
    let todos = getTodosFromStorage();

    todos.push(newTodo); //todo.yu aldik, ekledik, güncelleme gerek

    localStorage.setItem("todos",JSON.stringify(todos));


}

//121_Bilgilendirme Mesaji
function showAlert(type, message){
    const alert = document.createElement("div")
    alert.className = `alert alert-${type}`; //type'a göre isim alacak
    alert.textContent = message;
    firstCardBody.appendChild(alert);
    // alert.remove(); //aninda siliniyor-- setTimeout metodu ile belli milisaniye sonra siliniyor
    //set Timeout
    setTimeout(function(){
        alert.remove();
    },2000);

}

function addTodoToUI(newTodo){ //isleri fonksiyonlara bölmek, degisiklikleri yapmak icin kolay
//aldigi string degerini LIST ITEM olarak UI'arayuz'e ekleyecek
    // <li class="list-group-item d-flex justify-content-between">
    //     Todo 1
    //     <a href = "#" class ="delete-item">
    //         <i class = "fa fa-remove"></i> // innerHTML ile yaziliyor...
    //     </a>
    // </li>

    //List Item olusturma
    const listItem = document.createElement("li");

    //Link olusturma
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delet-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";

    listItem.className = "list-group-item d-flex justify-content-between";

    //Text Note Ekleme -- cocugu oldugu icin ona göre islem yapiyoruz
    listItem.appendChild(document.createTextNode(newTodo)); //js.22 deki input
    listItem.appendChild(link); //js.44 deki linki atadik buraya
    
    //todoList'e listItem'i ekleme
    todoList.appendChild(listItem);
    todoInput.value = ""; //placeholder eski haline geliyor..

}