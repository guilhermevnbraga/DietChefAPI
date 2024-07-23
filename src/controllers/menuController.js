import menus from "../data/dailyMenus.json" assert { type: "json" };
const week = menus.week;

const getDailyMenu = (day) => {
    try {
        const menu = week.filter((menu) => {
            return menu.day.toLowerCase() === day.toLowerCase();
        });

        if (menu.length === 0) {
            return { error: "Menu not found." };
        }

        return menu[0];
    } catch (e) {
        return { error: e.message };
    }
};

const getMostCalorieDays = () => {
    try {
        const mostCalorieDays = week.filter((day) => {
            const calories = week.map((day) => {
                return (
                    day.meals.breakfast.calories +
                    day.meals.lunch.calories +
                    day.meals.dinner.calories
                );
            });
            return (
                day.meals.breakfast.calories +
                    day.meals.lunch.calories +
                    day.meals.dinner.calories ===
                Math.max(...calories)
            );
        });
        return mostCalorieDays;
    } catch (e) {
        return { error: e.message };
    }
};

const getLessCalorieDays = () => {
    try {
        const lessCalorieDays = week.filter((day) => {
            const calories = week.map((day) => {
                return (
                    day.meals.breakfast.calories +
                    day.meals.lunch.calories +
                    day.meals.dinner.calories
                );
            });
            return (
                day.meals.breakfast.calories +
                    day.meals.lunch.calories +
                    day.meals.dinner.calories ===
                Math.min(...calories)
            );
        });
        return lessCalorieDays;
    } catch (e) {
        return { error: e.message };
    }
};

export { getDailyMenu, getMostCalorieDays, getLessCalorieDays };
