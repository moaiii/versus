
// export function networkStateReducer(type, state, action) {
//   switch (action.type) {
//     case `${type}__SUBMIT`:
//       return {
//         ...state,
//         error   : null,
//         value   : state.defaultValue,
//         pending : !!action.payload,
//         resolved: false,
//         rejected: false
//       };
//     case `${type}__RESOLVED`:
//       return {
//         ...state,
//         value   : action.payload,
//         error   : null,
//         pending : false,
//         resolved: true,
//         rejected: false
//       };
//     case `${type}__REJECTED`:
//       return {
//         ...state,
//         value   : state.defaultValue,
//         error   : action.payload,
//         pending : false,
//         resolved: false,
//         rejected: true
//       };
//     default:
//       return state;
//   }
// }

// export default function networkReducer( reducer ) {

//   const initialNetworkState = {
//     value: reducer,
//     pending: false,
//     success: false, 
//     error: false,
//     errorMessage: ''
//   }

//   return function(state = initialNetworkState, action) {
//     switch(action.type = '') {
//       case `${action}__SUBMIT`: {
//         return Object.assign({}, initialNetworkState, {
//           pending: true
//         })
//       }
//       break;
//       case `${action}__RESOLVED`: {
//         return Object.assign({}, initialNetworkState, {
//           value: action.payload,
//           pending: false,
//           success: true
//         })
//       }
//       break;
//       case `${action}__ERROR`: {
//         return Object.assign({}, initialNetworkState, {
//           pending: false,
//           success: false,
//           error: true,
//           errorMessage: action.payload
//         })
//       }
//       break;
      
//       default: 
//         return state;
//     }
//   }
// }
