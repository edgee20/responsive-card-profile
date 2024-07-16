fetch('https://reqres.in/api/users')
.then(response => response.json())
.then(json => {
    //Merging the data since the api only contains 6 people
    const sampleData = [
        {
          id: 7,
          email: "michael.lawson@reqres.in",
          first_name: "Michael",
          last_name: "Lawson",
          avatar: "https://reqres.in/img/faces/7-image.jpg",
        },
        {
          id: 8,
          email: "lindsay.ferguson@reqres.in",
          first_name: "Lindsay",
          last_name: "Ferguson",
          avatar: "https://reqres.in/img/faces/8-image.jpg",
        },
        {
          id: 9,
          email: "tobias.funke@reqres.in",
          first_name: "Tobias",
          last_name: "Funke",
          avatar: "https://reqres.in/img/faces/9-image.jpg",
        },
        {
          id: 10,
          email: "byron.fields@reqres.in",
          first_name: "Byron",
          last_name: "Fields",
          avatar: "https://reqres.in/img/faces/10-image.jpg",
        },
        {
          id: 11,
          email: "george.edwards@reqres.in",
          first_name: "George",
          last_name: "Edwards",
          avatar: "https://reqres.in/img/faces/11-image.jpg",
        },
        {
          id: 12,
          email: "rachel.howell@reqres.in",
          first_name: "Rachel",
          last_name: "Howell",
          avatar: "https://reqres.in/img/faces/12-image.jpg",
        },
      ];
    const mergedData = json.data.concat(sampleData);
    const loadMoreButton = document.getElementById("button");
    let loadMoreStatus = 0;
    
    showCards(mergedData, 3, 0, '1')
    
    loadMoreButton.addEventListener("click", ()=>{
      loadMoreStatus++;
      if(loadMoreStatus==1){
        showCards(mergedData, 6, 3, '2');
      }
      else if(loadMoreStatus==2){
        showCards(mergedData, 9, 6, '3')
      }
      else{
        showCards(mergedData, 12, 9, '4')
      }

      if(loadMoreStatus==3){
        loadMoreButton.innerHTML = "No data";
        loadMoreButton.disabled = true;
        loadMoreButton.classList.add("no-data");
      }
    });
})

function showCards(data, displayNumber, startingNumber, containerNumber){
    const showCards = data.slice(startingNumber, displayNumber).map(el => {
        return `
            <div class="card-container">
                <article class="card-article">
                      <div class="img-container">\
                          <img src="${el.avatar}" alt="A picture of ${el.last_name}, ${el.first_name}" class="images">
                      </div>
                    <div class="info-container">
                        <p class="id">#${el.id}</p>
                        <div class="name-container">
                          <span class="first-name">${el.last_name},</span>
                          <span class="last-name">${el.first_name}</span>
                        </div>
                        <p><a href="mailto:${el.email}" class="email">${el.email}</a></p>
                    </div>
                </article>
            </div>`
    }).join(''); //to join the arrays w/o commas

    document.querySelector(`.container-${containerNumber}`).innerHTML = showCards;
  }