export const displayTimesOfDay = () => {
    const d = new Date()
    const hour = d.getHours()
    if (hour > 5 && hour <= 12) {
        return `Good morning.`
    } else if (hour > 12 && hour <= 17) {
        return `Good afternoon.`
    } else {
        return `Good evening.`
    }
}