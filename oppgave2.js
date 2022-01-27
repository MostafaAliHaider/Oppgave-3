
// TODO: Hent HTML #id med getElementById
const userUl = document.getElementById("users");
const searchInput = document.getElementById("name");
const filterInput = document.getElementById("age");
const filterButton = document.getElementById("filter");

//Under finner vi listen som innholder data som skal skrive ut ulike data.
const users = [
  {id:  0, name: "Simen", age: 77},
  {id: 1, name: "Trude", age: 20},
  {id: 2, name: "Lars", age: 99},
  {id: 3, name: "Mostafa", age:21},
  {id: 4, name: "Yahye", age: 26},
  {id: 5, name: "Jørgen", age: 46},
  {id: 6, name: "Ferat", age: 10},
  {id: 7, name: "Marius", age: 31}
];

//Under har vi en funksjonen som skriver ut listen og hvilke type data den skal hente fra arrayen "users". 
const createTableUI = (users) => {
  userUl.innerHTML = null;
  userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
  for (const user of users) {
    userUl.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
  }
};

//Under er det en funksjon som skal skrive ut resultat avhengig av navn søket vi tar. 
const handleSearch = () => {
  // TODO: Hent ut verdien fra søke input feltet
  const searchName = searchInput.value;
  // TODO: Sjekk om searchName ekisterer
  if (searchName) {
    /* console.log(searchName); */
    // TODO: Bruk .find for å finne navnet til den brukeren som matcher søkeordet
    const newUser = users.find((user)=>{
      console.log(searchName);
      //her er det brukt "toLowerCase" for at brukeren skal kunne søke med både store og små bokstaver.
      if(searchName.toLowerCase() === user.name.toLowerCase()){
        console.log(user);
        userUl.innerHTML = `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
      }
    });
  } else {
    // TODO: Hvis ingen søkeord vis default liste med brukere via createTableUI
    createTableUI(users);
  }
};

//Denne funksjonen derimot skal skrive ut informasjonen ut ifra filter inputen.
const handleFilter = () => {
  // TODO: Hent ut verdien fra filter input feltet
  const filterValue = filterInput.value;
  // TODO: Sjekk om filterVerdien ekisterer og er et tall
  if (filterValue) {
    /* console.log(filterValue); */
    // TODO: Bruk .filter for å hente ut de brukeren  som har en alder høyere en filterverdien
    const filterResult = users.filter((user)=>{
      return user.age >= filterValue;
      
    }) ;
    //Under lagde jeg en ny const som skal ha en tom array og inneholde den samme listen som tidligere.
    if(filterResult){
      const mapArray = filterResult.map((user)=>{
        return `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
      }); 
      userUl.innerHTML = mapArray;
      filterInput.value = '';
    }
 
  }
};




const main = () => {
  createTableUI(users);
};

//kjør funksjoner
main();

// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
searchInput.addEventListener('keyup', handleSearch);
// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)handleFilter()
filterButton.addEventListener('click', handleFilter);
