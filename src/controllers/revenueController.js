import revenues from "../data/revenues.json" assert { type: "json" };
const recipes = revenues.recipes;

const getRevenueByName = (name) => {
    try {
        const recipe = recipes.filter((revenue) => {
            return revenue.name.toLowerCase() === name.toLowerCase();
        });

        if (recipe.length === 0) {
            return { error: "Revenue not found." };
        }

        return recipe[0];
    } catch (e) {
        return { error: e.message };
    }
};

const getRevenueCount = () => {
    try {
        return recipes.length;
    } catch (e) {
        return { error: e.message };
    }
};

const getLowerCalorieRevenues = () => {
    try {
        const lowerCalorieRevenues = recipes.filter((revenue) => {
            const calories = recipes.map((revenue) => revenue.calories);
            return revenue.calories === Math.min(...calories);
        });
        return lowerCalorieRevenues;
    } catch (e) {
        return { error: e.message };
    }
};

const getHigherCalorieRevenues = () => {
    try {
        const higherCalorieRevenues = recipes.filter((revenue) => {
            const calories = recipes.map((revenue) => revenue.calories);
            return revenue.calories === Math.max(...calories);
        });
        return higherCalorieRevenues;
    } catch (e) {
        return { error: e.message };
    }
};

const getEasiestRevenues = () => {
    try {
        const easiestRevenues = recipes.filter((revenue) => {
            const instructions = recipes.map(
                (revenue) => revenue.instructions.length
            );
            return revenue.instructions.length === Math.min(...instructions);
        });
        return easiestRevenues;
    } catch (e) {
        return { error: e.message };
    }
};

const getCheapiestRevenues = () => {
    try {
        const cheapiestRevenues = recipes.filter((revenue) => {
            const ingredients = recipes.map(
                (revenue) => revenue.ingredients.length
            );
            return revenue.ingredients.length === Math.min(...ingredients);
        });
        return cheapiestRevenues;
    } catch (e) {
        return { error: e.message };
    }
};

export {
    getRevenueByName,
    getRevenueCount,
    getLowerCalorieRevenues,
    getHigherCalorieRevenues,
    getEasiestRevenues,
    getCheapiestRevenues,
};
