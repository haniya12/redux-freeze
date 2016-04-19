import deepFreeze from 'deep-freeze'

/**
 * Middleware that prevents state from being mutated anywhere in the app.
 */
export default function freeze(store) {
  return next => action => {
    deepFreeze(store.getState())
    try {
      return next(action)
    }
    finally {
      deepFreeze(store.getState())
    }
  }
}
