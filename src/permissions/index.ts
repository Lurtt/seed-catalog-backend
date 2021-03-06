import { shield, and } from 'graphql-shield'

import { isAuthenticatedUser, isAdmin } from './rules'

const permissions = shield({
  Query: {
    users: and(isAuthenticatedUser, isAdmin),
  },
  Mutation: {
    signout: isAuthenticatedUser,

    createDonor: and(isAuthenticatedUser, isAdmin),
    updateDonor: and(isAuthenticatedUser, isAdmin),
    deleteDonor: and(isAuthenticatedUser, isAdmin),

    createPlant: and(isAuthenticatedUser, isAdmin),
    updatePlant: and(isAuthenticatedUser, isAdmin),
    deletePlant: and(isAuthenticatedUser, isAdmin),

    createOffer: and(isAuthenticatedUser, isAdmin),
    updateOffer: and(isAuthenticatedUser, isAdmin),
    deleteOffer: and(isAuthenticatedUser, isAdmin),

    createOfferItem: and(isAuthenticatedUser, isAdmin),
    deleteOfferItem: and(isAuthenticatedUser, isAdmin),
  },
})

export { permissions }
