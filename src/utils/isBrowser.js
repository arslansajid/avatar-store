//const isBrowser = () => typeof window !== "undefined"
const isBrowser = () => process.browser

export default isBrowser
