
const menu = document.querySelector('.menu')
const button = document.querySelector('.burger')

button.addEventListener('click', () => {
    menu.classList.toggle('menu-active')
    button.classList.toggle('burger-active')
})




setTimeout(() => {
  console.log('fdsfds')
}, 5000);





const wrapTag = document.querySelector('.project__tabs');
const wrapItem = document.querySelector('.project__wrap')

const myPortfolio = {
  tags: ['Все', 'белый', 'серый', 'рыжий'],
  items: [
    {
      img: {
        url: "https://cdnn1.img.sputnik-georgia.com/img/07e4/0a/06/249632794_407:0:2456:2048_1920x0_80_0_0_7faeaa48045c47e46fb77272e35f784c.jpg",
        alt: "кот"
      },
      tag: 'серый',
    },

    {
      img: {
        url: "https://cdnn1.img.sputnik-georgia.com/img/07e4/0a/06/249632794_407:0:2456:2048_1920x0_80_0_0_7faeaa48045c47e46fb77272e35f784c.jpg",
        alt: "кот"
      },
      tag: 'серый'
    },
    {
      img: {
        url: "https://cdnn1.img.sputnik-georgia.com/img/07e4/0a/06/249632794_407:0:2456:2048_1920x0_80_0_0_7faeaa48045c47e46fb77272e35f784c.jpg",
        alt: "кот"
      },
      tag: 'белый'
    },
    {
      img: {
        url: "https://cdnn1.img.sputnik-georgia.com/img/07e4/0a/06/249632794_407:0:2456:2048_1920x0_80_0_0_7faeaa48045c47e46fb77272e35f784c.jpg",
        alt: "кот"
      },
      tag: 'белый'
    },
    {
      img: {
        url: "https://cdnn1.img.sputnik-georgia.com/img/07e4/0a/06/249632794_407:0:2456:2048_1920x0_80_0_0_7faeaa48045c47e46fb77272e35f784c.jpg",
        alt: "кот"
      },
      tag: 'белый'
    }
  ]
}

function drovingTag() {
  myPortfolio.tags.forEach((item, index) => {
    const li = document.createElement('li');

    li.classList.add('project__tabs-item');
    li.textContent = item;

    if(index == 0){
      li.classList.add('project__tabs-item_active');
    }

    wrapTag.appendChild(li);
  });
  
  activated()
}


function activated() {
  const tags = wrapTag.querySelectorAll('li')

  tags.forEach(item => {
    item.addEventListener('click', () => {

      tags.forEach(tag => { 
        tag.classList.remove('project__tabs-item_active')
      })

      item.classList.add('project__tabs-item_active')

      renderItems(item.innerText) 
    })
  })
}


function renderItems(tag) {
  wrapItem.innerHTML = '';

  myPortfolio.items.forEach(item => {
    if(tag === 'Все' || item.tag === tag) {
      const cardHTML = `
        <div class="project__wrap-item">
          <img src="${item.img.url}" alt="${item.img.alt}">
        </div>
      `;
      
      wrapItem.insertAdjacentHTML('beforeend', cardHTML);
    }
  });
}

renderItems('Все')
drovingTag()




var flkty = new Flickity('.main-carousel', {

  cellAlign: 'center',
  contain: true,
  wrapAround: true, 
  prevNextButtons: true, 
  pageDots: false

});

// const arr = [
//   {
//     url: 'gfdgfdgfd',
//     img: 'gfdgfdgfd',
//     title: 'gfdgfdgdgd'
//   },
//   {
//     url: 'gfdgfdgfd',
//     img: 'gfdgfdgfd',
//     title: 'gfdgfdggggggggggggggggdgd'
//   },
//   {
//     url: 'gfdgfdgfd',
//     img: 'gfdgfdgfd',
//     title: 'gfdgdsdddddddddddfdgdgd'
//   },
//   {
//     url: 'gfdgfdgfd',
//     img: 'gfdgfdgfd',
//     title: 'gfdgdsdddddddddddfdgdgd'
//   },
//   {
//     url: 'gfdgfdgfd',
//     img: 'gfdgfdgfd',
//     title: 'gfdgdsdddddddddddfdgdgd'
//   }
// ]

// function getRandomInt(max, i) {
//   return Math.floor(Math.random() * max);
// }

// const bloc = document.querySelector('.hhh')
// const rand = getRandomInt(arr.length)

// const item = `
//   <div>
//     ${arr[rand].title}
//     <img src='${arr[rand].img}'>
//   </div>
// `

// bloc.innerHTML = item
