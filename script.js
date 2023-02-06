let numbers = ["1", "2", "3", "5"]
let letters = ["a", "b", "c", "d"]

task(numbers, letters, someFn)

function task(firstArray, secondArray, callback) {
	callback(firstArray, secondArray)
}

function someFn(firstArray, secondArray) {
  	let firstCopy = [...firstArray]
  	let permuteArrays = []
  	let count = 0

  	for (let i = secondArray.length; i >= 0; i -= 1) {
    		permuteArrays.push(...permutation(secondArray, i))
  	}

	for (let i = 0; i <= permuteArrays.length; i += 1) {
		firstArray = [...firstCopy]

		if(permuteArrays[i] !== undefined) {
			firstArray.splice(firstArray.length - 1, 0, permuteArrays[i])
		}
		
		if(i != 0) {
			permuteArrays.forEach(array => array.reverse())
		}

		console.log(`№${count + 1}: ${firstArray}`)

		count += 1
	}
	console.log(count)
}

function permutation(array, size = array.length) {
	if (size > array.length) {
		return []
	} else if (size === 1) {
		return array.map((element) => [element])
	}

	return array.flatMap((element) =>
		permutation(
			array.filter((thing) => thing !== element),
			size - 1
		).map((item) => [element, ...item])
	)
}
