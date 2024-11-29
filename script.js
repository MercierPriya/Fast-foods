      const fastFoods = [
              {
                  nom: "McDonald's",
                  logo: "mcDo.png",
                  prixMoyen: 8,
                  dateCreation: "1940",
                  revenus: 23.2,
                  employes: 200000,
                  horaires: "06:00 - 23:00"
              },
              {
                  nom: "Burger King",
                  logo: "BurgerKing.png",
                  prixMoyen: 7.5,
                  dateCreation: "1954",
                  revenus: 10.3,
                  employes: 34000,
                  horaires: "10:00 - 22:00"
              },
              {
                  nom: "KFC",
                  logo: "KFC.png",
                  prixMoyen: 7,
                  dateCreation: "1930",
                  revenus: 27.9,
                  employes: 25000,
                  horaires: "11:00 - 23:00"
              },
              {
                  nom: "Subway",
                  logo: "subway.png",
                  prixMoyen: 6.5,
                  dateCreation: "1965",
                  revenus: 16.1,
                  employes: 410000,
                  horaires: "08:00 - 21:00"
              }
          ];

          const restaurantList=document.getElementById('restaurant-list');

          fastFoods.forEach((restaurant)=>{

            const restaurantDiv = document.createElement("div");
            restaurantDiv.className = "restaurant";

             // Ajouter le logo
    const logoImg = document.createElement("img");
    logoImg.src = restaurant.logo;
    logoImg.alt = `${restaurant.name} Logo`;
    restaurantDiv.appendChild(logoImg);

    // Ajouter les informations
    const infoDiv = document.createElement("div");
    infoDiv.className = "restaurant-info";

    const nameElement = document.createElement("h3");
    nameElement.textContent = restaurant.nom;
    infoDiv.appendChild(nameElement);

    const prixElement = document.createElement("p");
    prixElement.textContent = `Prix Moyen : ${restaurant.prixMoyen}`;
    infoDiv.appendChild(prixElement);

    const revenuesElement = document.createElement("p");
    revenuesElement.textContent = `Revenu : ${restaurant.revenus}`;
    infoDiv.appendChild(revenuesElement);

    const employeesElement = document.createElement("p");
    employeesElement.textContent = `Employés : ${restaurant.employes}`;
    infoDiv.appendChild(employeesElement);

    const dateElement = document.createElement("p");
    dateElement.textContent = `Date Creation: ${restaurant.dateCreation}`;
    infoDiv.appendChild(dateElement);

    const horairesElement = document.createElement("p");
    dateElement.textContent = `Horaires : ${restaurant.horaires}`;
    infoDiv.appendChild(horairesElement);


    // Ajouter les informations au conteneur principal
    restaurantDiv.appendChild(infoDiv);

    // Ajouter le conteneur principal à la liste
    restaurantList.appendChild(restaurantDiv);
});
