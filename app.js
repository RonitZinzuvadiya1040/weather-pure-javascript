
var myFormData = [];


document.getElementById("senddata").addEventListener("click", function () {
  const cityname = document.getElementById("cname").value;

  const date = document.getElementById("date").value;

  const time = document.getElementById("time").value;

  const temprature = document.getElementById("temprature").value;

  const tempratureunit = document.getElementById("tempratureunit").value;

  const forcasting = document.getElementById("forcasting").value;

  const formdata = {
    city: cityname,
    date: date,
    time: time,
    temprature: temprature,
    tempratureunit: tempratureunit,
    forcasting: forcasting,
  };

  myFormData.push(formdata);
  // console.log(data);
  // console.log(formdata);
  console.log(myFormData);
  console.log(`Cityname: ${cityname}`)
  console.log(`Date: ${date}`)
  console.log(`time: ${time}`)
  console.log(`temprature: ${temprature}`)
  console.log(`tempratureunit: ${tempratureunit}`)
  console.log(`forcasting: ${forcasting}`)
  

  let nHTML = "";
  myFormData.forEach(function (item) {
    nHTML +=
      "<li> Cityname: " +
      item.city +
      "<li> Date: " +   
      item.date +
      "<li> Time: " +
      item.time +
      "<li> Temprature: " +
      item.temprature +
      "<li> Temprature Unit: " +
      item.tempratureunit +
      "<li> Forcasting: " +
      item.forcasting;
  });

  document.getElementById("showdata").innerHTML = "<ul>" + nHTML + "</ul>";
 
});

// document.getElementById("getdata").addEventListener("click", function () {
//   const cityname = document.getElementById("cname").value;

//   const date = document.getElementById("date").value;

//   const time = document.getElementById("time").value;

//   const temprature = document.getElementById("temprature").value;

//   const tempratureunit = document.getElementById("tempratureunit").value;

//   const forcasting = document.getElementById("forcasting").value;

//   const formdata = {
//     city: cityname,
//     date: date,
//     time: time,
//     temprature: temprature,
//     tempratureunit: tempratureunit,
//     forcasting: forcasting,
//   };

//   myFormData.pop(formdata);
//   // console.log(data);
//   // console.log(formdata);
//   console.log(myFormData);

//   let nHTML = "";
//   myFormData.forEach(function (item) {
//     nHTML +=
//       "<li> Cityname: " +
//       item.city +
//       "<li> Date: " +
//       item.date +
//       "<li> Time: " +
//       item.time +
//       "<li> Temprature: " +
//       item.temprature +
//       "<li> Temprature Unit: " +
//       item.tempratureunit +
//       "<li> Forcasting: " +
//       item.forcasting;
//   });

//   document.getElementById("showdata").innerHTML = "<ul>" + nHTML + "</ul>";
 
// });
