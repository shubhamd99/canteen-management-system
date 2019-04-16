import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
        ingredients: null,
        totalPrice: 0,
        error: false,
        building: false
};

const INGREDIENT_PRICES = {
        burger: 55,
        chineese: 50,
        coke: 22,
        dosa: 45,
        pastry: 20,
        samosa: 10
    }

const addIngredient = (state, action) => {
        const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
        const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
        const updatedState = {
                ingredients: updatedIngredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
                building: true 
        }
        return updateObject( state, updatedState );
}

const removeIngredient = (state, action) => {
        const updatedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 }
        const updatedIngs = updateObject(state.ingredients, updatedIng);
        const updatedSt = {
                ingredients: updatedIngs,
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
                building: true  
        }
        return updateObject( state, updatedSt );
}

const setIngredient = (state, action) => {
        return updateObject(state, {
                ingredients: {
                        burger: action.ingredients.burger,
                        chineese: action.ingredients.chineese,
                        coke: action.ingredients.coke,
                        dosa: action.ingredients.dosa,
                        pastry: action.ingredients.pastry,
                        samosa: action.ingredients.samosa
                },
                error: false,
                totalPrice: 0,
                building: false
              });
}

const fetchIngredientsFailed = (state, action) => {
        return updateObject(state, {error: true} );
}




const reducer = (state = initialState, action) => {
        switch(action.type) {
                case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
                case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
                case actionTypes.SET_INGREDIENTS: return setIngredient(state, action);
                case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state, action);
                default: return state; // initialState
                    
        }

};

export default reducer;