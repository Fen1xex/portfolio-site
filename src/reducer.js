const reducer = (state, action) => {
  if (action.type === 'OPEN_SIDEBAR') {
    return { ...state, isSidebarOpen: true }
  }
  if (action.type === 'CLOSE_SIDEBAR') {
    return { ...state, isSidebarOpen: false }
  }
  throw Error(`there is no matching "${action.type}"`)
}

export default reducer
