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
            isLoading: true
        };
    },
    created() {
        this.fetchCocktails();
    },
    methods: {
        fetchCocktails() {
            this.isLoading = true;
            fetch('http://localhost/Lee_S_Hernandez_L_VueAJAX/lumen/public/cocktails')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch cocktails from the local API');
                    }
                    return response.json();
                })
                .then(data => {
                    this.cocktailsData = data;
                    this.isLoading = false;
                })
                .catch(error => {
                    console.error(error);
                    this.error = 'Failed to fetch cocktails from local API. Please try again later.';
                    this.isLoading = false;
                });

            fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch cocktails from the public API');
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.drinks && data.drinks.length > 0) {
                        this.cocktailsData.push(...data.drinks.map(drink => ({
                            id: drink.idDrink,
                            name: drink.strDrink,
                            strDrinkThumb: drink.strDrinkThumb,
                            time: 'Not available',
                            ingredients: 'Not available',
                            instructions: 'Not available',
                            glassType: 'Not available'
                        })));
                        this.isLoading = false;
                    }
                })
                .catch(error => {
                    console.error(error);
                    this.error = 'Failed to fetch cocktails from public API. Please try again later.';
                    this.isLoading = false;
                });
        },
        getCocktail(cocktailName) {
            this.isLoading = true;
            fetch(`http://localhost/Lee_S_Hernandez_L_VueAJAX/lumen/public/cocktails/${encodeURIComponent(cocktailName)}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch cocktail details from local API');
                    }
                    return response.json();
                })
                .then(data => {
                    if (data) {
                        this.cocktail = data;
                        this.error = '';
                    } else {
                        this.error = 'No Cocktail found. Try Again!';
                    }
                    this.isLoading = false;
                })
                .catch(error => {
                    console.error(error);
                    this.error = 'Failed to fetch cocktail details from local API. Please try again later.';
                    this.isLoading = false;
                });
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch cocktail details from public API');
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.drinks && data.drinks.length > 0) {
                        const details = data.drinks[0];
                        this.cocktail = {
                            name: details.strDrink || 'Not available',
                            strDrinkThumb: details.strDrinkThumb || 'Not available',
                            time: '',
                            ingredients: '',
                            instructions: '',
                            glassType: details.strGlass || 'Not available'
                        };
                        fetch('http://localhost/Lee_S_Hernandez_L_VueAJAX/lumen/public/cocktails')
                            .then(response => {
                                if (!response.ok) {
                                    throw new Error('Failed to fetch additional cocktail details from local API');
                                }
                                return response.json();
                            })
                            .then(localData => {
                                this.cocktail.time = localData.time || 'Not available';
                                this.cocktail.ingredients = localData.ingredients || 'Not available';
                                this.cocktail.instructions = localData.instructions || 'Not available';
                                this.error = '';
                            })
                            .catch(error => {
                                console.error(error);
                                this.error = 'Failed to fetch additional cocktail details from local API';
                            });
                    } else {
                        this.error = 'No Cocktail found. Try Again!';
                    }
                })
                .catch(error => {
                    console.error(error);
                    this.error = 'Failed to fetch cocktail details from public API. Please try again later.';
                });

        }
    }
});

app.mount('#app');
