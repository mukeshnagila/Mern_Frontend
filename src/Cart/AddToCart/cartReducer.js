
import { ADD_TO_CART, DECREASE_QUANTITY, PLACE_ORDER, REMOVE_FROM_CART, ADD_PURCHASED_COURSES } from "./cartActions";

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const itemToAdd = action.payload;
      const existingItemIndex = state.items.findIndex((item) => item.id === itemToAdd.id);

      if (existingItemIndex !== -1) {
        // If the item already exists in the cart, increase its quantity
        state.items[existingItemIndex].quantity++;
        return {
          ...state,
          items: [...state.items],
        };
      } else {
        // If the item is not in the cart, add it with quantity 1
        return {
          ...state,
          items: [...state.items, { ...itemToAdd, quantity: 1 }],
        };
      }

      case DECREASE_QUANTITY:
        const productId = action.payload;
        const itemToDecreaseIndex = state.items.findIndex((item) => item.id === productId);

          if (itemToDecreaseIndex !== -1) {
              const updatedItems = [...state.items];
              
              if (updatedItems[itemToDecreaseIndex].quantity > 1) {
                updatedItems[itemToDecreaseIndex].quantity--;
              } else {
                updatedItems.splice(itemToDecreaseIndex, 1);
              }

              return {
                ...state,
                items: updatedItems,
              };
          }

        return state;

      ////for Remove the Item if Quantity is 0
    case REMOVE_FROM_CART:
      const removedProductId = action.payload;
      return {
        ...state,
        items: state.items.filter((item) => item.id !== removedProductId),
      };

      case PLACE_ORDER:
            // Handle placing the order, e.g., reset the cart items
            return {
                ...state,
                items: [],
            };


            
    case ADD_PURCHASED_COURSES:
            return {
                ...state,
                purchasedCourses: action.payload,
            };       

    default:
      return state;
      
  }
};

export default cartReducer;
