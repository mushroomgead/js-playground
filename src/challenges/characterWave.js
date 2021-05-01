/**
 * @param  {string} str
 * @returns {Array} 
 * 
 * @example
 * characterWave('hello')
 * should return : ['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO']
 */
export default function characterWave(str) {
    let result = []
    let temp = ''
    for (let i=0; i<str.length; i++) {
        temp = str.substring(0, i) + str[i].toUpperCase() + str.substring(i + 1, str.length)
        result.push(temp)
    }
    console.log('result: ', result)
    return result
}
