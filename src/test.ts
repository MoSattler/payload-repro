import payload from "payload"
import Users from "./collections/Users"

const test = async () => {
  const user = await payload.create({
    // Type 'string' is not assignable to type '"users"'.
    collection: Users.slug,
    data: {

    }
  })
}