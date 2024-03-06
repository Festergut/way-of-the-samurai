export const required = value => (value ? undefined : 'Required field')
export const maxValue = max => value => {
    debugger
    if (value && value.length > max) {
        debugger
        return `field cant have more than ${max} figures`
    }
    return undefined
}
