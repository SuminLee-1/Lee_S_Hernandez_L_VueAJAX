const { createApp } = Vue;

createApp({
    created() {
        // Fetch cocktails data during the created phase
        fetch('http://localhost:8888/Lee_S_Hernandez_L_VueAJAX/drinks-api/public/cocktails')
            .then(res => res.json())
            .then(data => {
                this.cocktailsData = data;
            })
            .catch(error => {
                console.error(error);
                this.error = "Failed to fetch cocktails data. Please try again later.";
            });
    },

    data() {
        return {
            cocktailsData: [],
            cocktail: {
                name: '',
                strDrinkThumb: '',
                time: '',
                ingredients: '',
                instructions: '',
                glassType: ''
            },
            error: ''
        };
    },

    methods: {
        getCocktail(whichCocktail) {
            // Reset cocktail details and error message
            this.cocktail = {
                name: '',
                strDrinkThumb: '',
                time: '',
                ingredients: '',
                instructions: '',
                glassType: ''
            };
            this.error = '';

            // Fetch details for the selected cocktail
            let name = whichCocktail;
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
                .then(res => res.json())
                .then(data => {
                    if (data.drinks && data.drinks.length > 0) {
                        const details = data.drinks[0];
                        this.cocktail = {
                            name: details.strDrink || 'Not available',
                            strDrinkThumb: details.strDrinkThumb || '',
                            time: details.time || 'Not available',
                            ingredients: details.ingredients || 'Not available',
                            instructions: details.instructions || 'Not available',
                            glassType: details.glassType || 'Not available'
                        };
                    } else {
                        this.error = 'No cocktail found with the given name';
                    }
                })
                .catch(error => {
                    console.error(error);
                    this.error = "Failed to fetch cocktail details. Please try again later.";
                });
        }
    }
}).mount('#app');
