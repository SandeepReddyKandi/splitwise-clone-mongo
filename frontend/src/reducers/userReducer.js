const initState = {
  user: {
    name: '',
    currency: '',
    email: '',
    id: '',
    imageURL: '',
    language: '',
    phone: '',
    timezone: '',
    token: '',
  },
  activeGroups : [],
  invitedGroups : []
};

const userReducer = (state = initState, action)=> {
  switch (action.type) {
    case 'ADD_USER_DATA' : {
      return {
        ...state,
        user: {
          ...action.payload,
          id: action.payload._id,
        }
      }
    }

    case 'ADD_ACTIVE_GROUPS':{
      return {
        ...state,
        activeGroups : [
          ...state.activeGroups,
          ...action.payload
        ]
      }
    }

    case 'ADD_INVITES': {
      return {
        ...state,
        invitedGroups : [
          ...state.invitedGroups,
          ...action.payload
        ]
      }
    }

    case 'ACCEPT_GROUP_INVITE': {
      return {
        ...state,
        activeGroups: [
            ...state.activeGroups,
            ...action.payload,
        ],
        invitedGroups : state.invitedGroups.filter(group => group.id !== action.payload.id)
      }
    }

    case 'REMOVE_ACTIVE_GROUPS':{
      return {
        ...state,
        activeGroups : state.activeGroups.filter(group => group.id !== action.payload.id)
      }
    }

    case 'REMOVE_INVITES': {
      return {
        ...state,
        invitedGroups : state.invitedGroups.filter(group => group.id !== action.payload.id)
      }
    }

    case 'LOG_OUT': {
      localStorage.clear();
      return {
        ...initState,
      };
    }

    default: {
      return {
        ...state,
      }
    }
  }
}

export default userReducer;
