const bookStore = Vue.createApp({
   created() {
      // ideal to get your initial data here
      console.log("created lifecycle hook called");
      fetch('http://localhost:8888/Lee_S_Hernandez_L_VueAJAX/drinks-api/public/cocktails')
      .then(res => res.json())
      .then(data => {
         console.log(data);
         this.cocktailData = data;
      })
      .catch(error => {
         console.log(error);
         // add code here to inform user there was an error
      })
   },
   data() {
      return {
         cocktailData: [],
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
         let convertedName = name.split(' ').join('+');
         console.log(convertedName);

         fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${convertedName}`)
         .then(res => res.json())
         .then(data => {
            console.log(data);
            if(data.docs.length > 0) {
               console.log(data.docs[0]);
               const cocktail = data.docs[0];
               this.error = false;
               // condition ? TrueExpression : FalseExpression
               this.strDrinkThumb = cocktail.strDrinkThumb ? cocktail.strDrinkThumb[0] : 'Not available';
               this.strCategory = cocktail.strCategory ? cocktail.strCategory.toFixed(2) : 'Not available';
               
            } else {
               this.error = 'No Cocktail founded. Try Again!'
            }
         })
         .catch(error => {
            console.error("There was an error fetching the cocktails:", error);
            this.error = "Failed to fetch cocktail data. Please try again later.";
        })
        
      }
   }

});

bookStore.mount("#app");