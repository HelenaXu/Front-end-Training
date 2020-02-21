const frogs = [{
	name: 'bobTheFrog',
	age: 2,
	gender: 'male',
	favoriteFood: 'fly',
	weight: 5,
	}, {
		name: 'lisaTheFrog',
		age: 3,
		gender: 'female',
		favoriteFood: 'fly',
		weight: 1,
	}, {
		name: 'sallyTheFrog',
		age: 10,
		gender: 'female',
		favoriteFood: 'caterpillar',
		weight: 20,
	}, {
		name: 'mikeTheFrog',
		age: 1,
		gender: 'male',
		favoriteFood: 'worm',
		weight: 7,
	}, {
		name: 'georgeTheFrog',
		age: 7,
		gender: 'male',
		favoriteFood: 'fly',
		weight: 28,
	}, {
		name: 'kellyTheFrog',
		age: 3,
		gender: 'female',
		favoriteFood: 'ladybug',
		weight: 3,
	}]


var createFilterers = function () {
	const _filters = {
		ids: [],
		fns: {},
	}

	return {
		addFilter(name, fn) {
			_filters.ids.push(name)
			_filters.fns[name] = fn
		},
		removeFilter(name) {
			/* Complete code here */

			// find the index of item want to delete
			let i = _filters.ids.indexOf(name);
			// delete the item in ids and fns
			if (i >= 0){
				_filters.ids.splice(i, 1);
				delete _filters.fns[name];
			}

		},
		filter(arr) {
			// Start filtering main processing
			return arr.reduce((acc, item) => {
				for (let index in _filters.ids) {
					const id     = _filters.ids[index];
					const filter = _filters.fns[id];
					if (!filter(item)) {
						return acc;
					}
				}
				return acc.concat(item);
			}, [])
		},
	}
}

const filterer = createFilterers()

filterer.addFilter('fat-frogs', frog => {
	return frog.weight >= 8
})

filterer.addFilter('male-frogs', frog => {
	return frog.gender === 'male'
})

const filteredFrogs = filterer.filter(frogs)
 console.log(filteredFrogs)

