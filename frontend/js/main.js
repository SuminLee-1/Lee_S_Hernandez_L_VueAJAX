const cocktail = Vue.createApp({
   created() {
      // ideal to get your initial data here
      console.log("created lifecycle hook called");
      fetch('http://localhost:8888/Lee_S_Hernandez_L_VueAJAX/drinks-api/public/cocktails')
      .then(res => res.json())
      .then(data => {
         console.log(data);
         this.cocktailsData = data;
      })
      .catch(error => {
         console.log(error);
         // add code here to inform user there was an error
      })
   },
   data() {
      return {
         cocktailsData: [],
         cocktail: {},
         strDrinkThumb: '',
         strCategory: '',
         time: "",
         ingredients: "",
         instructions: "",
         glassType: "",
         error: ""
     }     
   },
   methods: {
      getCocktail(whichCocktail) {
         console.log(whichCocktail);
         let name = whichCocktail;

         fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
         .then(res => res.json())
         .then(data => {
            if(data.drinks && data.drinks.length > 0) {
              const details = data.drinks[0]; // Assuming you're interested in the first result
              this.cocktail = { // Populate the cocktail object
                strDrinkThumb: details.strDrinkThumb || 'Not available',
                strCategory: details.strCategory || 'Not available',
                // Populate other properties as needed
              };
              this.error = "";
            } else {
              this.error = 'No Cocktail found. Try Again!';
            }
          })
          
         .catch(error => {
            console.error("There was an error fetching the cocktails:", error);
            this.error = "Failed to fetch cocktail data. Please try again later.";
        })
        
      }
   }

});

cocktail.mount("#app");