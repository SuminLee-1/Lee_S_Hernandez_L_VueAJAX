const app = Vue.createApp({
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
            error: '',
            isLoading: true // Add a loading indicator
        };
    },
    created() {
        this.fetchCocktails();
    },
    methods: {
        fetchCocktails() {
            fetch('http://localhost:8888/Lee_S_Hernandez_L_VueAJAX/drinks-api/public/cocktails')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch cocktails');
                    }
                    return response.json();
                })
                .then(data => {
                    this.cocktailsData = data;
                    this.isLoading = false; // Set loading indicator to false after data is fetched
                })
                .catch(error => {
                    console.error(error);
                    this.error = 'Failed to fetch cocktails. Please try again later.';
                    this.isLoading = false; // Set loading indicator to false if an error occurs
                });
        },
        getCocktail(cocktailName) {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch cocktail details');
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.drinks && data.drinks.length > 0) {
                        const details = data.drinks[0]; // Assuming you're interested in the first result
                        this.cocktail = {
                            name: details.strDrink || 'Not available',
                            strDrinkThumb: details.strDrinkThumb || 'Not available',
                            time: details.strCategory || 'Not available',
                            ingredients: details.ingredients || 'Not available',
                            instructions: details.instructions || 'Not available',
                            glassType: details.strGlass || 'Not available'
                        };
                        this.error = '';
                    } else {
                        this.error = 'No Cocktail found. Try Again!';
                    }
                })
                .catch(error => {
                    console.error(error);
                    this.error = 'Failed to fetch cocktail details. Please try again later.';
                });
        }
    }
});

app.mount('#app');
