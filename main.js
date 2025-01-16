// const btn = document.getElementById("btn")
// const form = document.getElementById("form")
// const name = document.getElementById("name")
// const price = document.getElementById("price")
// const description = document.getElementById("description")

// function validate() {
  

//   return true;
// }

// function createCard(phone) {
//   return `
//      <div class="card">
//       <h3>${phone.name}</h3>
//       <h3>${phone.price}</h3>
//       <p>${phone.description}</p>

//       <button data-id= '${phone.id}'>delete</button>
//       </div>
//       `;
// }

//  form && form.addEventListener('submit', function(event){
//   event.preventDefault()

//   const isValid = validate()
//   if (!isValid) {
//     return;
//   }
//   btn.setAttribute('disabled', true)
//   name.setAttribute('readonly',true)
//   price.setAttribute("readonly", true);
//   description.setAttribute("readonly", true);
//   const product = {
//     name: name.value,
//     description: description.value,
//     status: "active",
//     category_id: 2,
//     price: price.value,
//   };
//   fetch("https://auth-rg69.onrender.com/api/products/",{
//     method: "POST",

//      headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify(product)
// })
//   .then(response => {
//     if (response.status == 200) {
//       return response.json();
//     }
//   })
//   .then((data) => {
//   let card = createCard(data)
//   container.innerHTML += card
//   form.reset()
//   })

//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(()=>{
//     btn.removeAttribute('disabled')
//     name.removeAttribute("readonly",)
//     price.removeAttribute("readonly",);
//     description.removeAttribute("readonly",);
//   })
// })

// document.addEventListener("DOMContentLoaded", function(){
//   fetch("https://auth-rg69.onrender.com/api/products/all")
//     .then((response) => {
//       if (response.status === 200) {
//         return response.json();
//       }
//     })
//     .then((data) => {
//       if (Array.isArray(data)) {
//         container.innerHTML = "";
//         data.forEach((phone) => {
//           let card = createCard(phone);
//           container.innerHTML += card;
//         })

//         let deleteButtons = document.querySelectorAll('.card button')
//         if (deleteButtons.length > 0 ) {
//           deleteButtons.forEach(deleteButton =>{
//             deleteButton && deleteButton.addEventListener('click', function(){
//               let confirmDelete = confirm('Rostdan ham uchirmoqchimisz')
//               let elementId = this.getAttribute('data-id')
//               if (confirmDelete && elementId) {
//                 fetch(`https://auth-rg69.onrender.com/api/products/${elementId}`,{
//                   method: 'DELETE'
//                 })
//                 .then(response =>{
//                   if (response.status == 200) {
//                     return response.json()
//                   }
//                 })
//                 .then(data =>{
//                   console.log(data);
//                   if (data.message == "Mahsulot muvaffaqiyatli o'chirildi") {
//                     this.parentNode.remove(); 
//                   }
//                 })
//                 .catch(error =>{
//                   console.log(error);
//                 })

//               }
              
//             })
//           })
//         }
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// })




// 1. Rangni tanlash va matn rangini o‘zgartirish
// Vazifa:
// Bir nechta ranglardan iborat <div> bloklarni yarating (masalan, qizil, yashil, ko‘k).
// Har bir rang blokiga bosilganda, ekrandagi <p> matnining rangi o‘sha blok rangiga o‘zgarishi kerak.
// Rang bloklarini dinamik ravishda JavaScript yordamida yarating.
// Qo‘shimcha talablar:
// Matnning hozirgi rangini <p> elementi ostida ko‘rsatib turing (masalan, "Hozirgi rang: yashil").


document.addEventListener("DOMContentLoaded", function () {
  const colors = ["red", "green", "blue"];

  const colorBlocksContainer = document.getElementById("block");
  const currentColorText = document.getElementById("color");

  colors.forEach((color) => {
    const colorBlock = document.createElement("div");
    colorBlock.classList.add("block");
    colorBlock.style.backgroundColor = color;
    colorBlock.addEventListener("click", () => changeTextColor(color));
    colorBlocksContainer.appendChild(colorBlock);
  });

  function changeTextColor(color) {
    currentColorText.textContent = `Hozirgi rang: ${color}`;
    currentColorText.style.color = color;
  }
});



// // 2. Vaqtni hisoblash o‘yini
// // Vazifa:
// // Bir tugma (Start) va bir <p> elementi yarating.
// // Tugmani bosganda, vaqtni hisoblash boshlanadi va <p> elementda ketayotgan soniyalar ko‘rinib turadi (1, 2, 3...).
// // Boshqa tugma (Stop) yordamida vaqtni to‘xtatish mumkin bo‘lsin.
// // Yana bir tugma (Reset) vaqtni qayta boshlash uchun mo‘ljallangan bo‘lsin.
// // Qo‘shimcha talablar:
// // "Start" tugmasi faqat hisoblash to‘xtatilgan yoki yangidan boshlash kerak bo‘lgan holatda ishlasin.
// // CSS yordamida tugmalar va vaqt displeyini chiroyli qilish.




document.addEventListener("DOMContentLoaded", () => {
  let time = 0;
  let timer;
  let isRunning = false;

  const timee = document.getElementById("timefrem");
  const startBtn = document.getElementById("start-btn");
  const stopBtn = document.getElementById("stop-btn");
  const resetBtn = document.getElementById("reset-btn");


  const buttons = [startBtn, stopBtn, resetBtn];
  buttons.forEach((button) => {
   button && button.addEventListener("click", click);
  });

  
  function click(event) {
    const buttonId = event.target.id; 
    if (validate()) {
      if (buttonId === "start-btn") {
        if (isRunning) {
          stopTimer();
        } else {
          startTimer();
        }
      } else if (buttonId === "stop-btn") {
        stopTimer();
      } else if (buttonId === "reset-btn") {
        resetTimer();
      }
    }
  }

function validate() {
  startBtn.disabled = isRunning;

  stopBtn.disabled = isRunning;

  resetBtn.disabled = !isRunning || time == 0;

  return true;
}

  
  function startTimer() {
     isRunning = true;
    timer = setInterval(() => {
      time++;
      timee.textContent = time;
      startBtn.textContent = "Pauza"
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timer);
    isRunning = false;
    startBtn.textContent = "Start";
  }

  function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    time = 0;
    timee.textContent = time;
    startBtn.textContent = "Start";
  }
});