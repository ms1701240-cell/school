const rows = document.getElementById("rowsbody");
const btns = document.querySelectorAll(".nav-link");
const loader = document.getElementById("loader");
const animation=document.getElementById('anim');
let r;
function myload() {
  loader.classList.add("d-none");
}
const images8=[{
      price:"  1.5EGPالوحده(13EGPالعشره ب )   ",
      name:"جلاد بني فاتح )",
      img:"img/cover/صورة واتساب بتاريخ 2025-09-30 في 19.36.39_60a3db61.jpg"
},
{
 price:"  1.5EGPالوحده(13EGPالعشره ب )",
      name:"جلاد احمر",
      img:"img/cover/صورة واتساب بتاريخ 2025-09-30 في 19.36.40_0e3f6942.jpg"
},
{
 price:"  1.5EGPالوحده(13EGPالعشره ب )   ",
      name:"جلاد ازرق",
      img:"img/cover/صورة واتساب بتاريخ 2025-09-30 في 19.36.40_bf9ba835.jpg"
},
{
 price:" 1.5EGPالوحده(13EGPالعشره ب )   ",
      name:"جلاد اخضر",
      img:"img/cover/صورة واتساب بتاريخ 2025-09-30 في 19.36.41_19f248f2.jpg"
},
{
    price:" 1.5EGPالوحده(13EGPالعشره ب )   ",
    name:"جلاد ابيض",
    img:"img/cover/صورة واتساب بتاريخ 2025-09-30 في 19.36.41_d9368211.jpg"
}
]
const images7 = [
  {
    price: "30EGP",
    name: "سكيتش 200ورقه",
    img: "img/skitch/صورة واتساب بتاريخ 2025-10-01 في 07.14.27_bb6f38fc.jpg",
  },
  {
    price: "13EGP",
    name: "سكيتش 80 ورقه ",
    img: "img/skitch/صورة واتساب بتاريخ 2025-10-01 في 07.14.28_3b01269c.jpg",
  },
  {
    price: "20EGP",
    name: "سكيتش 140 ورقه",
    img: "img/skitch/صورة واتساب بتاريخ 2025-10-01 في 07.14.28_5a496af8.jpg",
  },
  {
    price: "18EGP",
    name: "سكيتش صغير 140 ورقه",
    img: "img/skitch/صورة واتساب بتاريخ 2025-10-01 في 07.14.28_30ff15fb.jpg",
  },
  {
    price: "15EGP",
    name: "سكيتش 100 ورقه",
    img: "img/skitch/صورة واتساب بتاريخ 2025-10-01 في 07.21.35_545f98cf.jpg",
  },
];
const images2 = [
  {
    price: "2EGP",
    name: "Pronto 0.7mm",
    img: "img/اقلام/صورة واتساب بتاريخ 2025-09-30 في 14.44.15_f47a11d3.jpg",
  },
  {
    price: "2.5EGP",
    name: "Roto 1.0mm",
    img: "img/اقلام/صورة واتساب بتاريخ 2025-09-30 في 14.44.15_f53e6eca.jpg",
  },
];

const images3 = [
  {
    price: "7.5EGP",
    name: "الوان خشب",
    img: "img/penscolor/IMG-20250928-WA0005.jpg",
  },
  {
    price: "15EGP",
    name: "PRIMA FLASH MED",
    img: "img/penscolor/IMG-20250928-WA0011.jpg",
  },
];

const images4 = [
  {
    price: "10EGP بالعلبه",
    name: "prima color الوان فلوماستر",
    img: "img/marker/IMG-20250928-WA0004.jpg",
  },
  {
    price: "8EGP",
    name: "UNIK قلم صبوره",
    img: "img/marker/صورة واتساب بتاريخ 2025-09-30 في 14.44.15_31621b0f.jpg",
  },
];

const images5 = [
  {
    price: "20EGP",
    name: "لانش بوكس",
    img: "img/صورة واتساب بتاريخ 2025-09-30 في 17.03.26_f4671c76.jpg",
  },
];

const images6 = [
  {
    price: "3EGP",
    name: "برايه ",
    img: "img/pencil scharpener/sharpener.jpg",
  },
  {
    price: "7.5EGP",
    name: "برايه حديد",
    img: "img/pencil scharpener/IMG-20250928-WA0006.jpg",
  },
];

const images = [
  {
    price: "7EGP",
    name: "ورقه 56 مسطر عربي",
    img: "img/كرارسات/IMG-20250928-WA0009.jpg",
  },
  {
    price: "7EGP",
    name: "ورقه 56 مسطر عربي",
    img: "img/كرارسات/IMG-20250928-WA0012.jpg",
  },
  {
    price: "7EGP",
    name: "تسعه اسطر 56 ورقه"
    img: "img/كرارسات/IMG-20250928-WA0013.jpg",
  },
  {
    price: "7EGP",
    name: "ورقه 56 مسطر عربي",
    img: "img/كرارسات/IMG-20250928-WA0014.jpg",
  },
  {
    price: "7EGP",
    name: "ورقه 56 مسطر عربي",
    img: "img/كرارسات/IMG-20250928-WA0015.jpg",
  },
];

const too = [images, images2, images3, images4, images5, images6, images7,images8];
r=too;
function display(tschool) {
  let box = "";
  for (let i = 0; i < tschool.length; i++) {
    box += ` <div class="col-md-4 g-4">
                 <div class="card bg-primary text-white h-100">
  <img src="${tschool[i].img}" class="card-img-top select" alt="" id="show" >
  <div class="card-body ">
    <p class="card-text">${tschool[i].name}</p>
     <p class="card-text">${tschool[i].price}</p>
  </div>
</div>
            </div>
    `;
  }
  rows.innerHTML = box;
  
}

setTimeout(function(){
  myload();
  display(images)
const ani="School Tools";
const a="|"
let i=0;
const pause=200;
const textconst=animation.textContent;
let ismove=true
let current=ani
setInterval(function(){
  animation.innerHTML=textconst+ani.slice(0,i)+a
  if(ismove){
    i++
    if(i>ani.length){
      ismove=false
      i=ani.length
    }
  }else{
    i--
    if(i<0){
      ismove=true
      i=0;
      
    }
    
  }
},200)

},3500)
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function (e) {
    e.preventDefault();
    //let tools=e.target.innerHTML;
    // if(tools === "NoteBook") display(images);
    // else if(tools === "Pens") display(images2);
    // else if(tools === "Pens Color") display(images3);
    // else if(tools === "Markers") display(images4);
    // else if(tools === "Ruler") display(images5);
    // else if(tools === "Pencil Sharpener") display(images6);
    display(too[i]);
    
  });
}





