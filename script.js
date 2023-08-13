let list = document.querySelectorAll(".list");
list.forEach((e) => {
  e.addEventListener("click", () => {
    for (let j = 0; j < list.length; j++) {
      list[j].className = "list";
    }
    e.className = "list active";
  });
});


const menuIcon = document.querySelector('.menuIcons');
const navCloseBtn = document.getElementById('navCloseBtn');
const sideMenu = document.querySelector('aside');


menuIcon.addEventListener('click',()=>{
  sideMenu.style.left = "0rem"
})

navCloseBtn.addEventListener('click',()=>{
  sideMenu.style.left= "-15rem"
})





let themeSwitcher = document.querySelector('.switch-theme')

themeSwitcher.addEventListener("click", ()=>{
  document.body.classList.toggle('darkThemeColors')


  themeSwitcher.querySelector('span:nth-child(1)').classList.toggle('active');
  themeSwitcher.querySelector('span:nth-child(2)').classList.toggle('active');
})


// Income Chart

const ctxOne = document.getElementById("myChartOne");
new Chart(ctxOne, {
  type: "line",
  data: {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    datasets: [
      {
        label: "Income",
        data: [12, 19, 100, 50, 22, 36, 17, 46, 72],
        backgroundColor: "transparent",
        borderColor: "#FFC15E",
        tension: 0.4,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

// Outcome Chart

const ctxTwo = document.getElementById("myChartTwo");
new Chart(ctxTwo, {
  type: "line",
  data: {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    datasets: [
      {
        label: "Outcome",
        data: [21, 39, 30, 25, 42, 50, 65, 76, 62],
        backgroundColor: "transparent",
        borderColor: "#8158fc",
        tension: 0.4,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

// week chart

const ctxThree = document.getElementById("myChartThree");
var mychart = new Chart(ctxThree, {
  type: "bar",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "This Week",
        data: [91, 39, 65, 25, 42, 50, 36],
        backgroundColor: "#8158fc",
        borderRadius: 20,
        barPercentage: 0.6,
        categoryPercentage: 0.5,
      },
      {
        label: "Last Week",
        data: [81, 45, 58, 47, 38, 59, 46],
        backgroundColor: "#FFC15E",
        borderRadius: 20,
        barPercentage: 0.6,
        categoryPercentage: 0.5,
      },
    ],
  },

  options: {
    layout: {
      padding: {
        top: 30,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

function toggleData(value) {
  const visiblityData = mychart.isDatasetVisible(value);
  if (visiblityData) {
    mychart.hide(value);
  }
  if (!visiblityData) {
    mychart.show(value);
  }
}

// Half Doughnut chart js

const ctxFour = document.getElementById("myChartFour");

new Chart(ctxFour, {
  type: "doughnut",
  data: {
    labels: ["Monthly", "Groceries", "Subscribing", "Tax", "Other"],
    datasets: [
      {
        label: "Percentage",
        data: [15, 14, 36, 17, 18],
        borderWidth: 1,
        circumference: 180,
        rotation: 270,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    aspectRatio:1,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});



// swipper js 

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  navigation:{
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev"
  },
  loop:true,
});