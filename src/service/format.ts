export function formatNumber(num:number) {
    // Convert to string to check if it contains a decimal point
    if (Number.isInteger(num)) {
        // If the number is an integer, add ".0"
        return num.toFixed(1);
    } else {
        // If the number already has decimals, return it as is
        return num.toString();
    }
}

export function capitalizeFirstLetter(str: string) {
    if (str.length === 0) return str
    return str.charAt(0).toUpperCase() + str.slice(1)
  }