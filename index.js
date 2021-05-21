let celebrities = [
  {
    first_name: "Oprah",
    last_name: "Winfrey",
    industry: "Media",
    nationality: "American",
    image_url:
      "https://variety.com/wp-content/uploads/2015/12/oprah-variety-power-of-women-charity.jpg?w=1000",
  },
  {
    first_name: "Ayo",
    last_name: "Balogun",
    industry: "Media",
    nationality: "Nigerian",
    image_url:
      "https://i0.wp.com/media.premiumtimesng.com/wp-content/files/2020/07/Wizkid.png?resize=599%2C384&ssl=1",
  },
  {
    first_name: "Mason",
    last_name: "Greenwood",
    industry: "Sport",
    nationality: "British",
    image_url:
      "https://images.daznservices.com/di/library/GOAL/95/5a/mason-greenwood-manchester-united-2019-20_b32uzxtuu6pp10ksaoue0tvhv.jpg?t=1664782883&quality=100",
  },
  {
    first_name: "Marcus",
    last_name: "Rashford",
    industry: "Sport",
    nationality: "British",
    image_url:
      "https://d2x51gyc4ptf2q.cloudfront.net/content/uploads/2020/10/23143315/Marcus-Rashford-Man-Utd-F365-1.jpg",
  },
  {
    first_name: "Bruno",
    last_name: "Fernandes",
    industry: "Sport",
    nationality: "Portuguese",
    image_url:
      "https://cdn.forzaitalianfootball.com/wp-content/uploads/2020/03/bruno-fernandes-manchester-united--800x504.jpg",
  },
  {
    first_name: "Rihanna",
    last_name: "Fenty",
    industry: "Entertainment",
    nationality: "Barbados",
    image_url:
      "https://static.highsnobiety.com/thumbor/YwXmBKVaNZbxn3lsQzSXLXSsRns=/1600x1067/static.highsnobiety.com/wp-content/uploads/2019/01/31152905/rihanna-r9-new-album-release-date-info-01.jpg",
  },
];

let profileCard;

let createCelebrityCard = (celebrity) => {
  let card = document.createElement("div");
  card.className = "card ";
  card.style.width='30%';
  card.style.margin='10px auto';
  card.style.boxShadow='1px 1px 2px 2px rgba(0,0,0,0.8)';


  let image_url = document.createElement("img");
  image_url.src = celebrity.image_url;
  image_url.className = "card-img-top image_url";


  let cardBody = document.createElement("div");
  cardBody.className = "card-body";
  cardBody.style.backgroundColor = 'black';


  let first_name = document.createElement("p");
  let full_name_text = document.createTextNode('Name: ' + celebrity.first_name + " " + celebrity.last_name);
  first_name.appendChild(full_name_text);
  first_name.className = "card-title first_name";
  first_name.style.color ='white';


  let industry = document.createElement("p");
  let industry_text = document.createTextNode('Industry: ' + celebrity.industry);
  industry.appendChild(industry_text);
  industry.className = "card-text industry";
   industry.style.color = "white";

  let nationality = document.createElement("p");
  let nationality_text = document.createTextNode('Nationality: ' + celebrity.nationality);
  nationality.appendChild(nationality_text);
  nationality.className = "card-text nationality";
   nationality.style.color = "white";



  cardBody.appendChild(first_name);
  cardBody.appendChild(industry);
  cardBody.appendChild(nationality);
  card.appendChild(image_url);
  card.appendChild(cardBody);
  profileCard.appendChild(card);

  console.log(profileCard);
};

let initListOfCelebrities = () => {
  if (profileCard) {
    document.getElementById("profile-card_container").replaceWith(profileCard);
    return;
  }

  profileCard = document.getElementById("profile-card_container");
  celebrities.forEach((celebrity) => {
    createCelebrityCard(celebrity);
  });
};

initListOfCelebrities();

//celebrities.forEach((celebrity)=>console.log(celebrity.industry,celebrity.nationality));

//for(let celebrity of celebrities){
//  console.log(celebrity.industry,celebrity.nationality)
//}
