// the amount of tracks you need
const limit = 10

// this example user has no tracks in the first request.
const firstRequest = await user.tracks("space-laces", { limit })

// there will be 10 or more tracks in `out.collection`
const out = await util.ensureMin(firstRequest, limit)
